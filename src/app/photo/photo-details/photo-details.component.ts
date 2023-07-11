import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IPhotoCategory, photosList } from 'src/app/data/photo.data';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent {
  photoCategory?: IPhotoCategory;

  constructor(private activatedRoute: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url.length > 1) {
      this.photoCategory = photosList.find((p) => p.urlSlug === this.activatedRoute.snapshot.url[1].path);
      if (this.photoCategory) {
        this.titleService.setTitle(this.titleService.getTitle() + ' ' + this.photoCategory.title);
      }
    }
  }
}