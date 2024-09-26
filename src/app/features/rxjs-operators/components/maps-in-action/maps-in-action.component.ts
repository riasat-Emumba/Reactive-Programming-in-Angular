import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-maps-in-action',
  templateUrl: './maps-in-action.component.html',
  styleUrls: ['./maps-in-action.component.scss']
})
export class MapsInActionComponent implements OnInit {
  videos = [
    { title: 'Angular v17 Course Update 📣Important Information (2024)', url: 'https://youtu.be/ID0qWvG115o?feature=shared', thumbnail: 'https://img.youtube.com/vi/ID0qWvG115o/maxresdefault.jpg' },
    { title: 'Template Reference Variable in Angular 16 by ‪@uxtrendz‬ #13 (2023)', url: 'https://youtu.be/TQ3r_Qstch0?feature=shared', thumbnail: 'https://img.youtube.com/vi/TQ3r_Qstch0/maxresdefault.jpg' },
    { title: 'React JS Explained In 10 Minutes', url: 'https://youtu.be/s2skans2dP4?feature=shared', thumbnail: 'https://img.youtube.com/vi/s2skans2dP4/maxresdefault.jpg' },
    { title: 'Update Profile in Angular in Hindi | Angular Authentication Tutorial in hindi (2021) [#16]', url: 'https://youtu.be/tVyOedB57iI?feature=shared', thumbnail: 'https://img.youtube.com/vi/tVyOedB57iI/maxresdefault.jpg' },
    { title: 'JavaScript for the Haters', url: 'https://youtu.be/aXOChLn5ZdQ?feature=shared', thumbnail: 'https://img.youtube.com/vi/aXOChLn5ZdQ/maxresdefault.jpg' },

    { title: 'Learn JavaScript - Full Course for Beginners', url: 'https://youtu.be/PkZNo7MFNFg?feature=shared', thumbnail: 'https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg' },
    { title: '100+ JavaScript Concepts you Need to Know', url: 'https://youtu.be/lkIFF4maKMU?feature=shared', thumbnail: 'https://img.youtube.com/vi/lkIFF4maKMU/maxresdefault.jpg' },
    { title: "Angular for Beginners - Let's build a Tic-Tac-Toe PWA", url: 'https://youtu.be/G0bBLvWXBvc?feature=shared', thumbnail: 'https://img.youtube.com/vi/G0bBLvWXBvc/maxresdefault.jpg' },

    { title: 'What is Angular? | Angular Explained in 2 Minutes For BEGINNERS.', url: 'https://youtu.be/a6E5pzst2YE?feature=shared', thumbnail: 'https://img.youtube.com/vi/a6E5pzst2YE/maxresdefault.jpg' },
    { title: 'Angular for Beginners Course [Full Front End Tutorial with TypeScript]', url: 'https://youtu.be/3qBXWUpoPHo?feature=shared', thumbnail: 'https://img.youtube.com/vi/3qBXWUpoPHo/maxresdefault.jpg' },
  ];


  searchForm!: FormGroup;;
  filteredVideos = this.videos;
  searchVideos =  new  FormControl('');

  ngOnInit(): void {
    this.initForm();
    this.onSearch();
  }

  initForm() {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
  }

  onSearch(): void {
    this.searchVideos.valueChanges.pipe(
      debounceTime(700), distinctUntilChanged()
    ).subscribe( data => {
      console.log(data);
      
    })
}

}

