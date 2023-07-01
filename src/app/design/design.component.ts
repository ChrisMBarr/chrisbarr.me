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

  smokeTest: CustomImageItem[] = [
    new CustomImageItem({
      thumb: 'assets/design/SmokeTest/02 - Desktop Site_Thumb.png',
      src: 'assets/design/SmokeTest/02 - Desktop Site.png',
      alt: 'Smoke Test - Desktop',
      thumbTitle: 'Desktop',
    }),
    new CustomImageItem({
      thumb: 'assets/design/SmokeTest/03 - Desktop Site - opened menu_Thumb.png',
      src: 'assets/design/SmokeTest/03 - Desktop Site - opened menu.png',
      alt: 'Smoke Test - Desktop - Opened Menu',
      thumbTitle: 'Desktop - Menu',
    }),
    new CustomImageItem({
      thumb: 'assets/design/SmokeTest/05 - Mobile Site_Thumb.png',
      src: 'assets/design/SmokeTest/05 - Mobile Site.png',
      alt: 'Smoke Test - Mobile',
      thumbTitle: 'Mobile',
    }),
    new CustomImageItem({
      thumb: 'assets/design/SmokeTest/06 - Mobile Site - Open Menu_Thumb.png',
      src: 'assets/design/SmokeTest/06 - Mobile Site - Open Menu.png',
      alt: 'Smoke Test - Mobile - Sidebar',
      thumbTitle: 'Mobile - Sidebar',
    }),
    new CustomImageItem({
      thumb: 'assets/design/SmokeTest/01 - Style Guide_Thumb.png',
      src: 'assets/design/SmokeTest/01 - Style Guide.png',
      alt: 'Smoke Test - Style Guide',
      thumbTitle: 'Style Guide',
    }),
    new CustomImageItem({
      thumb: 'assets/design/SmokeTest/07 - Settings Content Example_Thumb.png',
      src: 'assets/design/SmokeTest/07 - Settings Content Example.png',
      alt: 'Smoke Test - Settings Content Example',
      thumbTitle: 'Settings Content Example',
    }),
  ];

  missionTogo: CustomImageItem[] = [
    new CustomImageItem({
      thumb: 'assets/design/Mission Togo/Mission Togo About_Thumb.png',
      src: 'assets/design/Mission Togo/Mission Togo About.png',
      alt: 'Mission Togo - About Page',
      thumbTitle: 'About Page',
    }),
    new CustomImageItem({
      thumb: 'assets/design/Mission Togo/Mission Togo Photos_Thumb.png',
      src: 'assets/design/Mission Togo/Mission Togo Photos.png',
      alt: 'Mission Togo - Photos Page',
      thumbTitle: 'Photos Page',
    }),
  ];

  ejm: CustomImageItem[] = [
    new CustomImageItem({
      src: 'assets/design/Eject Media/ejm_admin.png',
      thumb: 'assets/design/Eject Media/ejm_admin_Thumb.png',
      alt: 'Eject Media - Custom CMS/Admin Area',
      thumbTitle: 'Custom CMS',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/amy_web.png',
      thumb: 'assets/design/Eject Media/amy_web_Thumb.png',
      alt: 'Eject Media - Amy Gann - Web',
      thumbTitle: 'Amy Gann - Web',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/awcsite.jpg',
      thumb: 'assets/design/Eject Media/awcsite_Thumb.jpg',
      alt: 'Eject Media - Auto Warehousing Company',
      thumbTitle: 'Auto Warehousing Company',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/bethany_web.jpg',
      thumb: 'assets/design/Eject Media/bethany_web_Thumb.jpg',
      alt: 'Eject Media - Bethany Kirkland - Web',
      thumbTitle: 'Bethany Kirkland - Web',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/hp_wired.jpg',
      thumb: 'assets/design/Eject Media/hp_wired_Thumb.jpg',
      alt: 'Eject Media - HP Wired',
      thumbTitle: 'HP Wired',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/Paradigm Music Group.png',
      thumb: 'assets/design/Eject Media/Paradigm Music Group_Thumb.png',
      alt: 'Eject Media - Paradigm Music Group',
      thumbTitle: 'Paradigm Music Group',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/RedBirdGallerySite.jpg',
      thumb: 'assets/design/Eject Media/RedBirdGallerySite_Thumb.jpg',
      alt: 'Eject Media - Red Bird Gallery',
      thumbTitle: 'Red Bird Gallery',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/tammy_web_happy.png',
      thumb: 'assets/design/Eject Media/tammy_web_happy_Thumb.png',
      alt: 'Eject Media - Tammy Kirkland - Web',
      thumbTitle: 'Tammy Kirkland - Web',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/tammy_web_xmas.jpg',
      thumb: 'assets/design/Eject Media/tammy_web_xmas_Thumb.jpg',
      alt: 'Eject Media - Tammy Kirkland - Web (Christmas)',
      thumbTitle: 'Tammy Kirkland - Web (Christmas)',
    }),

    new CustomImageItem({
      src: 'assets/design/Eject Media/undivided_web.png',
      thumb: 'assets/design/Eject Media/undivided_web_Thumb.png',
      alt: 'Eject Media - Undivided - Web',
      thumbTitle: 'Undivided - Web',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/amy_cd.png',
      thumb: 'assets/design/Eject Media/amy_cd_Thumb.png',
      alt: 'Eject Media - Amy Gann - CD',
      thumbTitle: 'Amy Gann - CD',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/darlene_cd.png',
      thumb: 'assets/design/Eject Media/darlene_cd_Thumb.png',
      alt: 'Eject Media - Darlene Chapman',
      thumbTitle: 'Darlene Chapman',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/tammy_happy.png',
      thumb: 'assets/design/Eject Media/tammy_happy_Thumb.png',
      alt: 'Eject Media - Tammy Kirkland - CD',
      thumbTitle: 'Tammy Kirkland - CD',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/Tammy_christmas.png',
      thumb: 'assets/design/Eject Media/Tammy_christmas_Thumb.png',
      alt: 'Eject Media - Tammy Kirkland - CD (Christmas)',
      thumbTitle: 'Tammy Kirkland - CD (Christmas)',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/Undivided_cd.png',
      thumb: 'assets/design/Eject Media/Undivided_cd_Thumb.png',
      alt: 'Eject Media - Undivided - CD',
      thumbTitle: 'Undivided - CD',
    }),

    new CustomImageItem({
      src: 'assets/design/Eject Media/bethany_card.jpg',
      thumb: 'assets/design/Eject Media/bethany_card_Thumb.jpg',
      alt: 'Eject Media - Bethany Kirkland - Card',
      thumbTitle: 'Bethany Kirkland - Card',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/ejm_card_old.jpg',
      thumb: 'assets/design/Eject Media/ejm_card_old_Thumb.jpg',
      alt: 'Eject Media - Older Business Card',
      thumbTitle: 'Eject Media Old Business Card',
    }),
    new CustomImageItem({
      src: 'assets/design/Eject Media/ejm_card_new.jpg',
      thumb: 'assets/design/Eject Media/ejm_card_new_Thumb.jpg',
      alt: 'Eject Media - Newer Business Card',
      thumbTitle: 'Eject Media New Business Card',
    }),
  ];

  constructor(public gallery: Gallery) {}

  ngAfterViewInit() {
    this.createLightbox('accountChekPrevDesktop', this.accountChekPrevDesktop);
    this.createLightbox('accountChekRedesignDesktop', this.accountChekRedesignDesktop);
    this.createLightbox('accountChekPrevMobile', this.accountChekPrevMobile);
    this.createLightbox('accountChekRedesignMobile', this.accountChekRedesignMobile);
    this.createLightbox('smokeTest', this.smokeTest);
    this.createLightbox('missionTogo', this.missionTogo);
    this.createLightbox('ejm', this.ejm);
  }

  private createLightbox(groupName: string, images: CustomImageItem[]) {
    const lightboxRef = this.gallery.ref(groupName);

    lightboxRef.setConfig({
      counter: false,
      thumbAutosize: true,
      itemTemplate: this.lightboxTemplate,
    });

    lightboxRef.load(images);
  }
}
