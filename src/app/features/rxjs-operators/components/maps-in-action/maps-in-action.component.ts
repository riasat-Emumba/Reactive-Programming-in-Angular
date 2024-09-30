import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { IVideo } from '../../models/ivideo';

@Component({
  selector: 'app-maps-in-action',
  templateUrl: './maps-in-action.component.html',
  styleUrls: ['./maps-in-action.component.scss']
})
export class MapsInActionComponent implements OnInit {

  searchForm!: FormGroup;;
  filteredVideos: IVideo[] = []
  searchVideos = new FormControl('');

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.initForm();
    this.getVideos();
    this.onSearch();
  }

  getVideos() {
    this.apiService.getVideos().subscribe(data => {
      this.filteredVideos = data;
    })
  }

  initForm() {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
  }

  onSearch(): void {
    this.searchVideos.valueChanges.pipe(
      debounceTime(700),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      if (searchTerm) {
        console.log(searchTerm);
        this.apiService.searchVideos(searchTerm).subscribe(videos => {
          console.log(videos);
          this.filteredVideos = videos;
        });
      } else {
        this.getVideos();
      }
    });
  }

}

