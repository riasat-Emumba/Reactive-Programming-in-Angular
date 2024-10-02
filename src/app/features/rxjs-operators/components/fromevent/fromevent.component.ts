import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { IWindowSize } from '../../models/iwindowsize';
import { MessageStorageService } from '../../services/message-storage.service';


@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss']
})
export class FromEventComponent implements AfterViewInit {

  @ViewChild('addBtn') addBtn!: ElementRef;

  public addBtn$!: Observable<Event>;
  public windowSize$: Observable<Event> = fromEvent(window, 'resize');
  public windowSizeObject: IWindowSize = { innerheight: 0, innerwidth: 0 };
  public videosList: string[] = [];

  constructor(private messageStorageService: MessageStorageService) { }

  ngAfterViewInit(): void {
    this.setupWindowResizeListener();
    this.setupButtonClickListener();
  }

  private setupWindowResizeListener(): void {
    this.windowSize$.subscribe({
      next: () => this.updateWindowSize(),
      error: (err) => console.error('Resize error: ', err)
    });
  }

  private setupButtonClickListener(): void {
    let count = 1;
    this.addBtn$ = fromEvent(this.addBtn.nativeElement, 'click');

    this.addBtn$.subscribe({
      next: () => {
        const videoCounter = `Video: ${count++}`;
        this.messageStorageService.addData(videoCounter, this.videosList);
        this.videosList = this.messageStorageService.getData();
        console.log('Videos List: ', this.videosList);

      },
      error: (err) => console.error('Click event error: ', err)
    });
  }

  private updateWindowSize(): void {
    this.windowSizeObject.innerheight = window.innerHeight;
    this.windowSizeObject.innerwidth = window.innerWidth;

  }

}
