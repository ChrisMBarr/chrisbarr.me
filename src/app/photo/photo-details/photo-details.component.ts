import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IPhotoCategory, photosList } from 'src/app/data/photo.data';

@Component({
  selector: 'app-photo-details',
  standalone: false,
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly titleService = inject(Title);

  photoCategory?: IPhotoCategory;

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url.length > 1) {
      this.photoCategory = photosList.find((p) => p.urlSlug === this.activatedRoute.snapshot.url[1].path);
      if (this.photoCategory) {
        this.titleService.setTitle(this.titleService.getTitle() + ' ' + this.photoCategory.title);
      }
    }
  }
}
