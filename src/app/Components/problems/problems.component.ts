import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SplitStringAndIntegersComponent } from './split-string-and-integers/split-string-and-integers.component';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit {

  problems = [
    {
      'problem-statement': "Total three inputs to be take. Take two numbers 'num1' & 'num2' as an input and a string 'str' as third input. String will be in format [a1s1]. It should contain 2 Letters(any) & 2 Numbers(any) as shown in example. Number of letters and number can be any but formate should be same as given. Also store the aplitted data from string in an array 'arr'",
      'example1': "num1: 20 , num2: 35 , str: a10s20 --> Solution: a30s55",
      'example2': "num1: 470 , num2: 88 , str: abc10xs5 --> Solution: abc480xs93",
      'example3': "num1: 40 , num2: 15 , str: xyz20abc90 --> Solution: xyz60abc105",
      'example4': "num1: 665 , num2: 25 , str: x120abcd2 --> Solution: x690abcd27",
      'explanation': "Solution should have {'first char of string''first num + num1''second char of string''second num + num2'}",
      'solution-route': "split-string-and-integers"
    },
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(SplitStringAndIntegersComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
