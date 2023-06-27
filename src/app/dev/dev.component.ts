import { AfterViewInit, Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Gallery, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent implements AfterViewInit {
  @ViewChild('lightboxTemplate') lightboxTemplate!: TemplateRef<ElementRef<HTMLElement>>;

  items: ImageItem[] = [
    new ImageItem({
      src: 'https://github.com/FiniteLooper/LyricConverter/raw/master/lyric-converter-demo.gif?raw=true',
      thumb: 'https://github.com/FiniteLooper/LyricConverter/raw/master/lyric-converter-demo.gif?raw=true',
      alt: 'LyricConverter Screen Recording',
    }),
  ];

  constructor(public gallery: Gallery) {}

  ngAfterViewInit() {
    const lightboxRef = this.gallery.ref();

    lightboxRef.setConfig({
      nav: false,
      thumb: false,
      counter: false,
      itemTemplate: this.lightboxTemplate
    });

    lightboxRef.load(this.items);
  }
}
