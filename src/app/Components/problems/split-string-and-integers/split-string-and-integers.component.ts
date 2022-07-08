import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-string-and-integers',
  templateUrl: './split-string-and-integers.component.html',
  styleUrls: ['./split-string-and-integers.component.scss']
})
export class SplitStringAndIntegersComponent implements OnInit {
  requiredString: any
  requiredArray: any
  errorString:any
  inputString: any
  num1: any
  num1error: any
  num2: any
  num2error: any


  fChar: any
  fCharIndex: any
  fNum: any
  sChar: any
  sCharIndex: any
  sNum: any

  constructor() { }

  ngOnInit(): void { }

  num1Change(e: any) {
    this.num1 = parseInt(e)
    if (this.num1 === '') {
      this.num1error= true
    }
    console.log("Coils:", typeof (this.num1), this.num1)
  }

  num2Change(e: any) {
    if (this.num1 === '') {
      this.num1error= true
    }
    this.num2 = parseInt(e)
    console.log("Joints:", typeof (this.num2), this.num2)
  }

  stringChange(e: any) {

    console.clear()

    this.fChar = ''
    this.fCharIndex = ''
    this.fNum = ''
    this.sChar = ''
    this.sCharIndex = ''
    this.sNum = ''

    this.inputString = e
    console.log("Joint Start:", typeof (this.inputString), this.inputString)

    // if (this.inputString.length >= 4) {

    //   for (let i = 0; i < this.inputString.length; i++) {
    //     let temp = this.inputString[i]

    //     if (i < this.inputString.length / 2) {
    //       if (isNaN(temp)) {
    //         this.fChar += temp
    //         this.fCharIndex = i
    //       }
    //       else if (!isNaN(temp)) {
    //         this.fNum += this.inputString.charAt(i)
    //       }
    //     }
    //     else {
    //       if (isNaN(temp)) {
    //         this.sChar += temp
    //         this.sCharIndex = i
    //       }
    //       else if (!isNaN(temp)) {
    //         this.sNum += this.inputString.charAt(i)
    //       }
    //     }
    //   }

    //   console.log('--------------------------------------------------------')
    //   console.log('fChar :->', this.fChar)
    //   console.log('fCharIndex :->', this.fCharIndex)
    //   console.log('fNum :->', this.fNum)
    //   console.log('sChar :->', this.sChar)
    //   console.log('sCharIndex :->', this.sCharIndex)
    //   console.log('sNum :->', this.sNum)
    //   console.log('--------------------------------------------------------')

    //   console.log(this.fChar, typeof (parseInt(this.fNum)), this.sChar, typeof (parseInt(this.sNum)))

    //   this.requiredString = `${this.fChar}${parseInt(this.fNum) + this.num1}${this.sChar}${parseInt(this.sNum) + this.num2}`
    // } else if (!this.fChar || !this.fNum || !this.sChar || !this.sNum) {
    //   this.requiredString = "Enter a valid Number of Joint Start"
    // }

    this.requiredArray = this.inputString.split(/([0-9]+)/)
    this.requiredArray.pop()
    console.log('Final Array :->', this.requiredArray)

    if (this.requiredArray.length === 4) {
      this.fChar = this.requiredArray[0]
      this.fNum = this.requiredArray[1]
      this.sChar = this.requiredArray[2]
      this.sNum = this.requiredArray[3]

      console.log('------------------------------------------')
      console.log('fChar :->', this.fChar)
      console.log('fNum :->', this.fNum)
      console.log('sChar :->', this.sChar)
      console.log('sNum :->', this.sNum)
      console.log('------------------------------------------')

      this.requiredString = `${this.fChar}${parseInt(this.fNum) + this.num1}${this.sChar}${parseInt(this.sNum) + this.num2}`
      this.errorString= ''
    }
    else {
      this.errorString = "Enter valid inputs for displaying solution"
    }
  }

}
