import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { zip, forkJoin, startWith, take } from 'rxjs';
import { IResult } from '../../models/iresult';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ZipComponent implements OnInit {

  nameSource = ["Ali", "Ahmed", "Kashif"];
  colorSource = ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'purple', 'pink', 'brown', 'gray'];
  nameControl = new FormControl('Ali');
  colorControl = new FormControl('red');
  zipList: IResult[] = [];
  forkJoinList: IResult[] = [];

  ngOnInit(): void {
    this.initializeZipOperator();
    // this.initializeForkJoinOperator();
  }

  executingColorsObserver() {
    const source2$ = this.colorControl.valueChanges.pipe(startWith(this.colorControl.value), take(5));
    source2$.subscribe({
      next: (color) => {
        console.log("color: ", color);
      },
      error: (err) => {
        console.error('Error in forkJoinOperator:', err);
      }, complete: () => {
        console.log("Color Stream Completed");
      }
    })
    return source2$;
  }

  executingNamesObserver() {
    const source1$ = this.nameControl.valueChanges.pipe(startWith(this.nameControl.value), take(2));
    source1$.subscribe({
      next: (name) => {
        console.log("name: ", name);
      },
      error: (err) => {
        console.error('Error in forkJoinOperator:', err);
      }, complete: () => {
        console.log("Name Stream Completed",);
      }
    });
    return source1$;
  }

  private initializeForkJoinOperator(): void {
    const source1$ = this.executingNamesObserver();
    const source2$ = this.executingColorsObserver();

    forkJoin([source1$, source2$]).subscribe({
      next: ([name, color]) => {
        console.log("name: ", name, "color: ", color);
        if (name && color)
          this.forkJoinList.push({ name, color });
      },
      error: (err) => {
        console.error('Error in forkJoinOperator:', err);
      }, complete: () => {
        console.log("Fork Join Completed");

      }
    });
  }

  private initializeZipOperator(): void {
    const source1$ = this.nameControl.valueChanges.pipe(startWith(this.nameControl.value));
    const source2$ = this.colorControl.valueChanges.pipe(startWith(this.colorControl.value));
    zip(source1$, source2$).subscribe({
      next: ([name, color]) => {
        console.log(name, color);
        if (name && color)
          this.zipList.push({ name, color });
      },
      error: (err) => {
        console.error('Error in zipOperator:', err);
      }
    });
  }


}
