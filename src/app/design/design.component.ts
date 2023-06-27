import { Component, ElementRef, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { ImageItemData, Gallery, ImageItem } from 'ng-gallery';

interface ICustomImageItemData extends ImageItemData {
  thumbTitle: string;
}

class CustomImageItem extends ImageItem {
  override readonly data: ImageItemData;
  constructor(data: ICustomImageItemData) {
    super(data);
    this.data = data;
  }
}

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements AfterViewInit {
  @ViewChild('lightboxTemplate') lightboxTemplate!: TemplateRef<ElementRef<HTMLElement>>;

  accountChekPrevDesktop: CustomImageItem[] = [
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-desktop-1-login_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-desktop-1-login.png',
      alt: 'AccountChek - Previous Design - Desktop - Login',
      thumbTitle: 'Login',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-desktop-2-find-accounts_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-desktop-2-find-accounts.png',
      alt: 'AccountChek - Previous Design - Desktop - Find Accounts',
      thumbTitle: 'Find Accounts',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-desktop-3-menu_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-desktop-3-menu.png',
      alt: 'AccountChek - Previous Design - Desktop - Menu',
      thumbTitle: 'Menu',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-desktop-4-search_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-desktop-4-search.png',
      alt: 'AccountChek - Previous Design - Desktop - Search',
      thumbTitle: 'Search',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-desktop-5-bank-login_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-desktop-5-bank-login.png',
      alt: 'AccountChek - Previous Design - Desktop - Bank Login',
      thumbTitle: 'Bank Login',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-desktop-6-accounts_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-desktop-6-accounts.png',
      alt: 'AccountChek - Previous Design - Desktop - Accounts',
      thumbTitle: 'Accounts',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-desktop-7-success_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-desktop-7-success.png',
      alt: 'AccountChek - Previous Design - Desktop - Success',
      thumbTitle: 'Success',
    }),
  ];
  accountChekRedesignDesktop: CustomImageItem[] = [
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-desktop-1-login_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-desktop-1-login.png',
      alt: 'AccountChek - Redesign - Desktop - Login',
      thumbTitle: 'Login',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-desktop-2-find-accounts_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-desktop-2-find-accounts.png',
      alt: 'AccountChek - Redesign - Desktop - Find Accounts',
      thumbTitle: 'Find Accounts',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-desktop-3-search_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-desktop-3-search.png',
      alt: 'AccountChek - Redesign - Desktop - Search',
      thumbTitle: 'Search',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-desktop-4-bank-login_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-desktop-4-bank-login.png',
      alt: 'AccountChek - Redesign - Desktop - Bank Login',
      thumbTitle: 'Bank Login',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-desktop-5-accounts_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-desktop-5-accounts.png',
      alt: 'AccountChek - Redesign - Desktop - Accounts',
      thumbTitle: 'Accounts',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-desktop-6-success_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-desktop-6-success.png',
      alt: 'AccountChek - Redesign - Desktop - Success',
      thumbTitle: 'Success',
    }),
  ];

  accountChekPrevMobile: CustomImageItem[] = [
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-mobile-1-login_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-mobile-1-login.png',
      alt: 'AccountChek - Previous Design - Mobile - Login',
      thumbTitle: 'Login',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-mobile-2-find-accounts_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-mobile-2-find-accounts.png',
      alt: 'AccountChek - Previous Design - Mobile - Find Accounts',
      thumbTitle: 'Find Accounts',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-mobile-3-side-menu_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-mobile-3-side-menu.png',
      alt: 'AccountChek - Previous Design - Mobile - Menu',
      thumbTitle: 'Menu',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-mobile-4-search_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-mobile-4-search.png',
      alt: 'AccountChek - Previous Design - Mobile - Search',
      thumbTitle: 'Search',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-mobile-5-bank-login_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-mobile-5-bank-login.png',
      alt: 'AccountChek - Previous Design - Mobile - Bank Login',
      thumbTitle: 'Bank Login',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-mobile-6-accounts_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-mobile-6-accounts.png',
      alt: 'AccountChek - Previous Design - Mobile - Accounts',
      thumbTitle: 'Accounts',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Previous Design/previous-mobile-7-success_Thumb.png',
      src: 'assets/design/FormFree/Previous Design/previous-mobile-7-success.png',
      alt: 'AccountChek - Previous Design - Mobile - Success',
      thumbTitle: 'Success',
    }),
  ];
  accountChekRedesignMobile: CustomImageItem[] = [
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-mobile-1-login_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-mobile-1-login.png',
      alt: 'AccountChek - Redesign - Mobile - Login',
      thumbTitle: 'Login',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-mobile-2-find-accounts_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-mobile-2-find-accounts.png',
      alt: 'AccountChek - Redesign - Mobile - Find Accounts',
      thumbTitle: 'Find Accounts',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-mobile-3-side-menu_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-mobile-3-side-menu.png',
      alt: 'AccountChek - Redesign - Mobile - Menu',
      thumbTitle: 'Menu',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-mobile-4-search_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-mobile-4-search.png',
      alt: 'AccountChek - Redesign - Mobile - Search',
      thumbTitle: 'Search',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-mobile-5-bank-login_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-mobile-5-bank-login.png',
      alt: 'AccountChek - Redesign - Mobile - Bank Login',
      thumbTitle: 'Bank Login',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-mobile-6-accounts_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-mobile-6-accounts.png',
      alt: 'AccountChek - Redesign - Mobile - Accounts',
      thumbTitle: 'Accounts',
    }),
    new CustomImageItem({
      thumb: 'assets/design/FormFree/Redesign/redesign-mobile-7-success_Thumb.png',
      src: 'assets/design/FormFree/Redesign/redesign-mobile-7-success.png',
      alt: 'AccountChek - Redesign - Mobile - Success',
      thumbTitle: 'Success',
    }),
  ];

  constructor(public gallery: Gallery) {}

  ngAfterViewInit() {
    this.createLightbox('accountChekPrevDesktop', this.accountChekPrevDesktop);
    this.createLightbox('accountChekRedesignDesktop', this.accountChekRedesignDesktop);
    this.createLightbox('accountChekPrevMobile', this.accountChekPrevMobile);
    this.createLightbox('accountChekRedesignMobile', this.accountChekRedesignMobile);
  }

  private createLightbox(groupName: string, images: CustomImageItem[]) {
    const lightboxRef = this.gallery.ref(groupName);

    lightboxRef.setConfig({
      counter: false,
      thumbPosition:'left',
      thumbAutosize: true,
      slidingDirection: 'vertical',
      itemTemplate: this.lightboxTemplate,
    });

    lightboxRef.load(images);
  }
}
