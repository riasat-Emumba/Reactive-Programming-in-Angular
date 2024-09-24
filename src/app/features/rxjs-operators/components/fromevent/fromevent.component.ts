import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Observer } from 'rxjs';
import { ObservabledataService } from '../../services/observabledata.service';
import { IWindowSize } from '../../models/windowsizeinterface';


@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss']
})
export class FromeventComponent implements OnInit, AfterViewInit {

  @ViewChild("addBtn") addBtn!: ElementRef;
  addBtn$!: Observable<string>
  windowResize$!: Observable<Event>
  windowSizeObject: IWindowSize = {
    innerheight: 0,
    innerwidth: 0
  }

  videosList: string[] = [];

  constructor(private observableDataService: ObservabledataService) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onResizeOfWindow();
    this.onBtnClick();
  }

  onResizeOfWindow() {
    this.windowResize$ = fromEvent(window, 'resize');
    this.windowResize$.subscribe(() => {
      this.windowSizeObject.innerheight = window.innerHeight;
      this.windowSizeObject.innerwidth = window.innerWidth;
      // console.log('Window resized:', window.innerWidth, window.innerHeight);
    })
  }

  onBtnClick() {
    let count = 1
    this.addBtn$ = fromEvent(this.addBtn.nativeElement, 'click');
    this.addBtn$.subscribe(() => {
      let videoCounter = "Video : " + count++;
      this.observableDataService.addData(videoCounter, this.videosList)
    });
  }

}
