import { CustomIFrameItem, CustomImageItem, CustomYoutubeItem, IImageGallery, IProjectBase, IVideoGallery } from './data.model';

export interface IDesignProject extends IProjectBase {
  featuredImage: [gallery: number, image: number];
  galleries: IImageGallery[];
  videoGallery?: IVideoGallery;
}

export const designProjectList: IDesignProject[] = [
  {
    title: 'LyricConverter',
    urlSlug: 'lyric-converter',
    featuredImage: [0, 1],
    beginDescription: `<p><strong>LyricConverter</strong> is a project I've built and improved, on and off, for years. It was made to extract song data and lyrics from many popular lyric display software packages and convert them to other formats. Many of these software packages do not have great import/export tools so I wanted to build something to help people keep their song libraries as they migrated to new software.</p>`,
    endDescription:
      '<p>This is the third iteration of this application, which called for a UI refresh and a much more modern design. It now features randomly loaded full-screen background images, and transparent blurred-glass effects for all of the content areas. The design was made possible with a combination of custom CSS along with the Tailwind CSS library.</p><p>If you want to read more about the technical details of this project you can <a href="/dev/lyric-converter" rel="ng">see it in the dev section</a>, see <a href="https://github.com/ChrisMBarr/LyricConverter" target="_blank">the github page</a> for this project, or see the live site at <a href="https://lyricconverter.net" target="_blank">lyricconverter.net</a></p>',
    galleries: [
      {
        id: 'lyricConverter',
        images: [
          new CustomImageItem({
            thumb: 'assets/design/LyricConverter/bg1_Thumb.jpg',
            src: 'assets/design/LyricConverter/bg1.jpg',
            alt: 'LyricConverter - Random Background Image Example 1',
            thumbTitle: 'Background 1',
          }),
          new CustomImageItem({
            thumb: 'assets/design/LyricConverter/bg2_Thumb.jpg',
            src: 'assets/design/LyricConverter/bg2.jpg',
            alt: 'LyricConverter - Random Background Image Example 2',
            thumbTitle: 'Background 2',
          }),
          new CustomImageItem({
            thumb: 'assets/design/LyricConverter/bg3_Thumb.jpg',
            src: 'assets/design/LyricConverter/bg3.jpg',
            alt: 'LyricConverter - Random Background Image Example 3',
            thumbTitle: 'Background 3',
          }),
          new CustomImageItem({
            thumb: 'assets/design/LyricConverter/download_Thumb.jpg',
            src: 'assets/design/LyricConverter/download.jpg',
            alt: 'LyricConverter - Download Converted files',
            thumbTitle: 'Download Files',
          }),
          new CustomImageItem({
            thumb: 'assets/design/LyricConverter/slides_Thumb.jpg',
            src: 'assets/design/LyricConverter/slides.jpg',
            alt: 'LyricConverter - Display Slides',
            thumbTitle: 'Display Slides',
          }),
          new CustomImageItem({
            thumb: 'assets/design/LyricConverter/help_Thumb.jpg',
            src: 'assets/design/LyricConverter/help.jpg',
            alt: 'LyricConverter - Help Page',
            thumbTitle: 'Help Page',
          }),
        ],
      },
    ],
  },
  {
    title: 'Debbie Barr',
    urlSlug: 'debbie-barr',
    featuredImage: [0, 0],
    beginDescription: `<p><strong>Debbie Barr</strong> (who happens to be my mom!) is an accomplished author with 10 published books. She needed a website to showcase her work, read the backstories behind each book, find places to purchase them, and provide a way to get in touch with her.</p>`,
    endDescription: `<p>She had a lot of great ideas, and we worked together to refine the site design to that it looks and works great on both desktop and mobile web browsers. You can view the live site at <a href="https://debbiebarr.com"target="_blank">debbiebarr.com</a></p><p>If you'd like to read about some of the technical details of this site you can <a href="/dev/debbie-barr" rel="ng">see it in the dev section</a>.</p>`,
    galleries: [
      {
        id: 'debbiebarr',
        images: [
          new CustomImageItem({
            thumb: 'assets/design/DebbieBarr/desktop-home_Thumb.png',
            src: 'assets/design/DebbieBarr/desktop-home.png',
            alt: 'DebbieBarr.com - Home Page | Desktop',
            thumbTitle: 'Home | Desktop',
          }),
          new CustomImageItem({
            thumb: 'assets/design/DebbieBarr/desktop-books_Thumb.png',
            src: 'assets/design/DebbieBarr/desktop-books.png',
            alt: 'DebbieBarr.com - Books Page | Desktop',
            thumbTitle: 'Books | Desktop',
          }),
          new CustomImageItem({
            thumb: 'assets/design/DebbieBarr/desktop-book-details_Thumb.png',
            src: 'assets/design/DebbieBarr/desktop-book-details.png',
            alt: 'DebbieBarr.com - Book Details Page | Desktop',
            thumbTitle: 'Book Details | Desktop',
          }),
          new CustomImageItem({
            thumb: 'assets/design/DebbieBarr/mobile-home_Thumb.png',
            src: 'assets/design/DebbieBarr/mobile-home.png',
            alt: 'DebbieBarr.com - Home Page | Mobile',
            thumbTitle: 'Home | Mobile',
          }),
          new CustomImageItem({
            thumb: 'assets/design/DebbieBarr/mobile-menu_Thumb.png',
            src: 'assets/design/DebbieBarr/mobile-menu.png',
            alt: 'DebbieBarr.com - Open Menu | Mobile',
            thumbTitle: 'Menu | Mobile',
          }),
          new CustomImageItem({
            thumb: 'assets/design/DebbieBarr/mobile-books_Thumb.png',
            src: 'assets/design/DebbieBarr/mobile-books.png',
            alt: 'DebbieBarr.com - Books Page | Mobile',
            thumbTitle: 'Books | Mobile',
          }),
          new CustomImageItem({
            thumb: 'assets/design/DebbieBarr/mobile-home_Thumb.png', //same as above image on purpose!
            src: 'assets/design/DebbieBarr/mobile-animation.gif',
            alt: 'DebbieBarr.com - Screen Animation | Mobile',
            thumbTitle: 'Screen Animation | Mobile',
          }),
        ],
      },
    ],
  },
  {
    title: 'Landmark Analytics',
    urlSlug: 'landmark-analytics',
    featuredImage: [0, 0],
    beginDescription: `<p><strong>Landmark Analytics</strong> is a technology company that I worked for building web-based business applications. Landmark also specializes in data analytics, Oracle database management &amp; planning, and converting complex Excel spreadsheets into real business applications.</p>`,
    endDescription: `<p>One project I worked on at Landmark was to come up with a simple website design that was very clear and straightforward. This site is designed to work on both desktop and mobile web browsers, and it was built using the Eleventy framework that allows me to use a simple tempting system to generate flat files to deploy. You can view the live site at <a href="https://landmarkanalytics.com" target="_blank">landmarkanalytics.com</a></p><p>If you'd like to read about some of the technical details of this site you can <a href="/dev/landmark-analytics" rel="ng">see it in the dev section</a>.</p>`,
    galleries: [
      {
        id: 'landmark',
        images: [
          new CustomImageItem({
            thumb: 'assets/design/LandmarkAnalytics/desktop-home_Thumb.png',
            src: 'assets/design/LandmarkAnalytics/desktop-home.png',
            alt: 'Landmark Analytics - Home Page | Desktop',
            thumbTitle: 'Home | Desktop',
          }),
          new CustomImageItem({
            thumb: 'assets/design/LandmarkAnalytics/desktop-contact_Thumb.png',
            src: 'assets/design/LandmarkAnalytics/desktop-contact.png',
            alt: 'Landmark Analytics - Contact Page | Desktop',
            thumbTitle: 'Contact | Desktop',
          }),
          new CustomImageItem({
            thumb: 'assets/design/LandmarkAnalytics/mobile-home_Thumb.png',
            src: 'assets/design/LandmarkAnalytics/mobile-home.png',
            alt: 'Landmark Analytics - Home Page | Mobile',
            thumbTitle: 'Home | Mobile',
          }),
          new CustomImageItem({
            thumb: 'assets/design/LandmarkAnalytics/mobile-menu_Thumb.png',
            src: 'assets/design/LandmarkAnalytics/mobile-menu.png',
            alt: 'Landmark Analytics - Open Menu | Mobile',
            thumbTitle: 'Open Menu | Mobile',
          }),
          new CustomImageItem({
            thumb: 'assets/design/LandmarkAnalytics/mobile-contact_Thumb.png',
            src: 'assets/design/LandmarkAnalytics/mobile-contact.png',
            alt: 'Landmark Analytics - Contact Page | Mobile',
            thumbTitle: 'Contact | Mobile',
          }),
        ],
      },
    ],
  },
  {
    title: 'Logo Design',
    urlSlug: 'logo-design',
    featuredImage: [0, 0],
    beginDescription: `<p>These are a few of the logos I have created for various companies and projects over the years.</p>`,
    endDescription: ``,
    galleries: [
      {
        id: 'logos-graphic',
        title: 'Logos: Graphic Design',
        images: [
          new CustomImageItem({
            thumb: 'assets/design/Logos/landmark_thumb.png',
            src: 'assets/design/Logos/landmark.png',
            alt: 'Landmark Analytics: The logo for a business analytics, consulting, and software company',
            thumbTitle: 'Landmark Analytics',
          }),
          new CustomImageItem({
            thumb: 'assets/design/Logos/lyric-converter_thumb.png',
            src: 'assets/design/Logos/lyric-converter.png',
            alt: 'LyricConverter: The logo for my lyric file format converter project',
            thumbTitle: 'LyricConverter',
          }),
          new CustomImageItem({
            thumb: 'assets/design/Logos/smoke-test_thumb.png',
            src: 'assets/design/Logos/smoke-test.png',
            alt: 'Smoke Test: The logo for a QA testing management software company',
            thumbTitle: 'Smoke Test',
          }),
          new CustomImageItem({
            thumb: 'assets/design/Logos/cawtcha_thumb.png',
            src: 'assets/design/Logos/cawtcha.png',
            alt: 'Cawtcha: The logo for a threat detection software company',
            thumbTitle: 'Cawtcha',
          }),
          new CustomImageItem({
            thumb: 'assets/design/Logos/eject-media_thumb.png',
            src: 'assets/design/Logos/eject-media.png',
            alt: 'Eject Media: Some variations on a logo I created for my old web design company',
            thumbTitle: 'Eject Media',
          }),
          new CustomImageItem({
            thumb: 'assets/design/Logos/burnside_thumb.png',
            src: 'assets/design/Logos/burnside.png',
            alt: 'Burnside Recordings: A logo I created for a small recording studio',
            thumbTitle: 'Burnside Recordings',
          }),
          new CustomImageItem({
            thumb: 'assets/design/Logos/cypher-edge_thumb.png',
            src: 'assets/design/Logos/cypher-edge.png',
            alt: 'Cypher Edge: A logo I created for a small game development studio',
            thumbTitle: 'Cypher Edge',
          }),
          new CustomImageItem({
            thumb: 'assets/design/Logos/paradigm_thumb.png',
            src: 'assets/design/Logos/paradigm.png',
            alt: 'Paradigm Communications Group: A logo I created for a small video production company',
            thumbTitle: 'Paradigm',
          }),
        ],
      },
    ],
    videoGallery: {
      id: 'logos-motion',
      title: 'Logos: Motion Design',
      videos: [
        new CustomYoutubeItem({
          src: 'bnEFhJc9jhw',
          thumbTitle: 'Eject Media Credits',
        }),
        new CustomYoutubeItem({
          src: '1Ovcl3FYL3Y',
          thumbTitle: 'Paradigm',
        }),
        new CustomIFrameItem({
          src: 'https://player.vimeo.com/video/961922',
          thumb: 'https://vumbnail.com/00961922.jpg',
          thumbTitle: 'Highland Park',
        }),
      ],
    },
  },
  {
    title: 'AccountChek',
    urlSlug: 'account-chek',
    featuredImage: [1, 1],
    beginDescription:
      '<p>At <strong>FormFree</strong> I was tasked with redesigning their user-facing <em>AccountChek</em> application. The purpose of <em>AccountChek</em> is to allow a potential home buyer to more easily share their banking details with a mortgage lender than is possible with traditional methods. <em>AccountChek</em> was written in an older version of Angular and had a very plain design. </p>',
    endDescription:
      '<p> I created a more modern design that featured background colors and shapes as an enlarged version of the <em>AccountChek</em> logo. The design process was a long collaboration between me and the stakeholders regarding the appearance, the suitability for present needs, and the capacity to address future components that were in the planning stages. </p><p> With this new design in mind, I rebuilt the application in the latest version of Angular available at that time. I was intentional about ensuring accessibility for users with poor vision, colorblindness, requiring screen readers, or limited to keyboard-only access. I placed strong emphasis on test-driven-design by writing over 540+ unit tests that passed on multiple web browsers checked with BrowserStack. This application has very strict code quality controls enforced by TypeScript build options and code linting. </p><p> In a few months, with only light guidance from others, I successfully redesigned and rebuilt the <em>AccountChek</em> application for <strong>FormFree</strong>.</p><p><strong>Tech Stack</strong>: TypeScript 4, Angular 8, SCSS, Bootstrap 4, ASP.NET MVC, Jasmine</p>',
    galleries: [
      {
        title: 'Previous <em>AccountChek</em> Design - Desktop',
        id: 'prevAccountCheckDesktop',
        images: [
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
        ],
      },
      {
        title: 'My <em>AccountChek</em> Redesign - Desktop',
        id: 'redesignAccountCheckDesktop',
        images: [
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
        ],
      },
      {
        title: 'Previous <em>AccountChek</em> Design - Mobile',
        id: 'prevAccountCheckMobile',
        images: [
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
        ],
      },
      {
        title: 'My <em>AccountChek</em> Redesign - Mobile',
        id: 'redesignAccountCheckMobile',
        images: [
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
        ],
      },
    ],
  },
  {
    title: 'Smoke-Test',
    urlSlug: 'smoke-test',
    featuredImage: [0, 0],
    beginDescription:
      '<p> At <strong>Life After Normal</strong> I helped create <em>Smoke-Test</em>. The philosophy behind <em>Smoke-Test</em> is that no matter how many automated tests are used to assess an application, manual testing by a real person is still necessary to ensure a high-quality application. The purpose of <em>Smoke-Test</em> was to allow QA and software testers to more easily manage information and steps for manually testing complex applications. Test managers could record exactly what a tester would need to do for each unique manual test in an application. Tests could be distributed to multiple people to be run simultaneously and to collect results and feedback in real time. </p>',
    endDescription:
      '<p> I designed the original branding for the logo, website, and emails. I created and implemented the design for <em>Smoke-Test</em>, which was built in Angular on top of an ASP MVC backend. </p><p> Unfortunately, the <em>Smoke-Test</em> project was shut down before customers could be secured. Here are my design mockups and live interaction demos. </p>',
    galleries: [
      {
        id: 'smokeTest',
        images: [
          new CustomImageItem({
            thumb: 'assets/design/SmokeTest/02 - Desktop Site_Thumb.png',
            src: 'assets/design/SmokeTest/02 - Desktop Site.png',
            alt: 'Smoke Test - Desktop',
            thumbTitle: 'Desktop',
          }),
          new CustomImageItem({
            thumb: 'assets/design/SmokeTest/smoke-test-desktop_Thumb.png',
            src: 'assets/design/SmokeTest/smoke-test-desktop.gif',
            alt: 'Smoke Test - Desktop - Screen Recording',
            thumbTitle: 'Desktop - Screen Recording',
          }),
          new CustomImageItem({
            thumb: 'assets/design/SmokeTest/smoke-test-mobile_Thumb.png',
            src: 'assets/design/SmokeTest/smoke-test-mobile.gif',
            alt: 'Smoke Test - Mobile - Screen Recording',
            thumbTitle: 'Mobile - Screen Recording',
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
        ],
      },
    ],
  },
  {
    title: 'Mission Togo',
    urlSlug: 'mission-togo',
    featuredImage: [0, 0],
    beginDescription: `<p>Togo is a small country in western Africa. I created this website to help raise awareness for the needs of and raise funds for a return trip to this country in 2011. The website provided information, photos, videos, and accepted donations via PayPal. It was built in PHP on top of Expression Engine. The photos, and videos featured on the website were all shot by me as well. </p>`,
    endDescription: `<p> In 2010 I was part of a mission team to Gbentchal ("ben-jaal"), a village in the northern area of the country in great need of help. As the team photographer and videographer, my role was to document all aspects of our main project, which was a children's sports camp. Other groups before and after ours assisted with drilling a fresh water well, planting crops, and helping to build a school. </p><p>You can also see some of my photos and a video I made from these trip in the <a href="/photo/africa" rel="ng">photos section</a> of this site.</p>`,
    galleries: [
      {
        id: 'missionTogo',
        images: [
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
        ],
      },
    ],
  },
  {
    title: 'Eject Media - Early Career Projects',
    urlSlug: 'eject-media',
    featuredImage: [0, 2],
    beginDescription:
      '<p> After graduating from college in 2006, I moved to Panama City, Florida to start a small web design company with a friend. Our company, <strong>Eject Media</strong>, had a diverse clientele, ranging from photographers and businesses to church ministries and musicians. We partnered with a local recording studio to not only build websites for their new and featured artists, but to also create their CD covers, posters, and other print materials. </p>',
    endDescription: `<p> We wanted to allow our clients to have control over the content of their own sites, but minus the complexity of the CMS's of the time. To address this, I built a custom CMS, based on PHP and MySQL, which we added onto every site we built. This allowed our clients to control the most basic features, such as adding, editing, and re-ordering posts, and uploading photos. Most of our clients were not "technical" people and they appreciated the simplicity of our custom CMS. </p><p> Most of these sites are no longer online, but these images show a sampling of the work I did for <strong>Eject Media</strong>. </p>`,
    galleries: [
      {
        title: 'Web Design',
        id: 'ejmWeb',
        images: [
          new CustomImageItem({
            src: 'assets/design/Eject Media/ejm_admin.png',
            thumb: 'assets/design/Eject Media/ejm_admin_Thumb.png',
            alt: 'Eject Media - Web Design - Custom CMS/Admin Area',
            thumbTitle: 'Custom CMS',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/amy_web.png',
            thumb: 'assets/design/Eject Media/amy_web_Thumb.png',
            alt: 'Eject Media - Web Design - Amy Gann',
            thumbTitle: 'Amy Gann',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/awcsite.jpg',
            thumb: 'assets/design/Eject Media/awcsite_Thumb.jpg',
            alt: 'Eject Media - Web Design - Auto Warehousing Company',
            thumbTitle: 'Auto Warehousing Company',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/bethany_web.jpg',
            thumb: 'assets/design/Eject Media/bethany_web_Thumb.jpg',
            alt: 'Eject Media - Web Design - Bethany Kirkland',
            thumbTitle: 'Bethany Kirkland',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/hp_wired.jpg',
            thumb: 'assets/design/Eject Media/hp_wired_Thumb.jpg',
            alt: 'Eject Media - Web Design - HP Wired',
            thumbTitle: 'HP Wired',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/Paradigm Music Group.png',
            thumb: 'assets/design/Eject Media/Paradigm Music Group_Thumb.png',
            alt: 'Eject Media - Web Design - Paradigm Music Group',
            thumbTitle: 'Paradigm Music Group',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/RedBirdGallerySite.jpg',
            thumb: 'assets/design/Eject Media/RedBirdGallerySite_Thumb.jpg',
            alt: 'Eject Media - Web Design - Red Bird Gallery',
            thumbTitle: 'Red Bird Gallery',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/tammy_web_happy.png',
            thumb: 'assets/design/Eject Media/tammy_web_happy_Thumb.png',
            alt: 'Eject Media - Web Design - Tammy Kirkland',
            thumbTitle: 'Tammy Kirkland',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/tammy_web_xmas.jpg',
            thumb: 'assets/design/Eject Media/tammy_web_xmas_Thumb.jpg',
            alt: 'Eject Media - Web Design - Tammy Kirkland (Christmas)',
            thumbTitle: 'Tammy Kirkland (Christmas)',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/undivided_web.png',
            thumb: 'assets/design/Eject Media/undivided_web_Thumb.png',
            alt: 'Eject Media - Web Design - Undivided',
            thumbTitle: 'Undivided',
          }),
        ],
      },
      {
        title: 'Graphic & Print Design',
        id: 'ejmGraphic',
        images: [
          new CustomImageItem({
            src: 'assets/design/Eject Media/amy_cd.png',
            thumb: 'assets/design/Eject Media/amy_cd_Thumb.png',
            alt: 'Eject Media - Graphic & Print Design - Amy Gann CD',
            thumbTitle: 'Amy Gann CD',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/darlene_cd.png',
            thumb: 'assets/design/Eject Media/darlene_cd_Thumb.png',
            alt: 'Eject Media - Graphic & Print Design - Darlene Chapman CD',
            thumbTitle: 'Darlene Chapman CD',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/tammy_happy.png',
            thumb: 'assets/design/Eject Media/tammy_happy_Thumb.png',
            alt: 'Eject Media - Graphic & Print Design - Tammy Kirkland CD',
            thumbTitle: 'Tammy Kirkland CD',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/Tammy_christmas.png',
            thumb: 'assets/design/Eject Media/Tammy_christmas_Thumb.png',
            alt: 'Eject Media - Graphic & Print Design - Tammy Kirkland CD (Christmas)',
            thumbTitle: 'Tammy Kirkland - CD (Christmas)',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/Undivided_cd.png',
            thumb: 'assets/design/Eject Media/Undivided_cd_Thumb.png',
            alt: 'Eject Media - Graphic & Print Design - Undivided CD',
            thumbTitle: 'Undivided CD',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/bethany_card.jpg',
            thumb: 'assets/design/Eject Media/bethany_card_Thumb.jpg',
            alt: 'Eject Media - Graphic & Print Design - Bethany Kirkland Card',
            thumbTitle: 'Bethany Kirkland Card',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/ejm_card_old.jpg',
            thumb: 'assets/design/Eject Media/ejm_card_old_Thumb.jpg',
            alt: 'Eject Media - Graphic & Print Design - Business Card v1',
            thumbTitle: 'Eject Media Card v1',
          }),
          new CustomImageItem({
            src: 'assets/design/Eject Media/ejm_card_new.jpg',
            thumb: 'assets/design/Eject Media/ejm_card_new_Thumb.jpg',
            alt: 'Eject Media - Graphic & Print Design - Business Card v2',
            thumbTitle: 'Eject Media Card v2',
          }),
        ],
      },
    ],
  },
];
