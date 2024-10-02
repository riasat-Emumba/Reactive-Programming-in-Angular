import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photocard',
  templateUrl: './photocard.component.html',
  styleUrls: ['./photocard.component.scss']
})
export class PhotocardComponent {
  @Input() photo: any;
}
