import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
  @Input() social = false;
  @Input() icon = '';
  @Input() name = '';

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    if (this.social) {
      (this.elRef.nativeElement as HTMLElement).classList.add('social-icon');
    }
  }
}
