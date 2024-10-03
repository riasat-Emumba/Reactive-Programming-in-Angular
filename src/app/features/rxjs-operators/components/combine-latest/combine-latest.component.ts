import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, startWith, withLatestFrom } from 'rxjs/operators';
import { IResult } from '../../models/iresult';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombineLatestComponent implements OnInit {

  nameSource = ["Ali", "Ahmed", "Kashif", "Nasir", "Noman"];
  colorSource = ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'purple', 'pink', 'brown', 'gray'];
  nameControl = new FormControl('Ali');
  colorControl = new FormControl('red');
  color!: string;
  name!: string;
  combineLatestList: IResult[] = [];
  withLatestFromList: IResult[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setupCombineLatest();
    this.setupWithLatestFrom();
  }

  setupCombineLatest() {
    combineLatest([
      this.nameControl.valueChanges.pipe(startWith(this.nameControl.value)),
      this.colorControl.valueChanges.pipe(startWith(this.colorControl.value))
    ])
      .pipe(
        map(([name, color]) => ({ name, color }))
      )
      .subscribe(result => {
        console.log(result);
        if (result.name && result.color) {
          this.color = result.color;
          this.combineLatestList.push(result as IResult);
        }
      });
  }

  setupWithLatestFrom() {
    this.nameControl.valueChanges
      .pipe(
        withLatestFrom(this.colorControl.valueChanges.pipe(startWith(this.colorControl.value))), // Use current value
        map(([name, color]) => ({ name, color }))
      )
      .subscribe(result => {
        if (result.name && result.color) {
          this.color = result.color;
          this.withLatestFromList.push(result as IResult);
        }
      });
  }

  trackByIndex(index: number): number {
    return index;
  }

  trackByName(index: number, name: string): string {
    console.log("name:", name);

    return name;
  }

  trackByColor(index: number, color: string): string {
    console.log("color:", color);
    return color;
  }
}
