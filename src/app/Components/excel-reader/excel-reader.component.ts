import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-excel-reader',
  templateUrl: './excel-reader.component.html',
  styleUrls: ['./excel-reader.component.scss']
})
export class ExcelReaderComponent implements OnInit {
  uploadedFile!: any
  fileUploaded = false
  fileName!: any
  fileData!: [][]

  constructor() { }

  ngOnInit(): void {
  }

  fileChanged(fileInputEvent: any) {

    this.uploadedFile = fileInputEvent

    if (fileInputEvent.target.files) {
      this.fileUploaded = true
      this.fileName = fileInputEvent.target.files[0].name
    } else {
      this.fileUploaded = false
    }

    console.log(this.uploadedFile)
  }

  readFile() {
    // const file: DataTransfer = <DataTransfer>(fileInputEvent.target.files[0])
    const file: DataTransfer = <DataTransfer>(this.uploadedFile.target)
    if (file.files.length !== 1) throw new Error('Cannot upload multiple files!')
    const reader: FileReader = new FileReader()

    reader.onload = (e: any) => {
      const binaryString: String = e.target.result

      const workBook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'binary' })
      const workSheetName: string = workBook.SheetNames[0]
      const workSheet: XLSX.WorkSheet = workBook.Sheets[workSheetName]
      console.log(workSheet)

      this.fileData = (XLSX.utils.sheet_to_json(workSheet, { header: 1 }))
      console.log(this.fileData)
    }
    reader.readAsBinaryString(file.files[0])
  }
}
