import { CustomImageItem, IGallery, IProjectBase } from './data.model';

export interface IDesignProject extends IProjectBase {
  featuredImage: [gallery: number, image: number];
  galleries: IGallery[];
}

export const designProjectList: IDesignProject[] = [
  {
    title: 'LyricConverter',
    urlSlug: 'lyric-converter',
    featuredImage: [0, 1],
    beginDescription: `<p><strong>LyricConverter</strong> is a project I've built and improved, on and off, for years. It was made to extract song data and lyrics from many popular lyric display software packages and convert them to other formats. Many of these software packages do not have great import/export tools so I wanted to build something to help people keep their song libraries as they migrated to new software.</p>`,
    endDescription:
      '<p>This is the third iteration of this application, which called for a UI refresh and a much more modern design. It now features randomly loaded full-screen background images, and transparent blurred-glass effects for all of the content areas. The design was made possible with a combination of custom CSS along with the Tailwind CSS library.</p><p>If you want to read more about the technical details of this project you can <a href="/dev/lyric-converter" rel="ng">see it in the dev section</a>, see <a href="https://github.com/FiniteLooper/LyricConverter" target="_blank">the github page</a> for this project, or see the live site at <a href="http://lyricconverter.net" target="_blank">lyricconverter.net</a></p>',
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
    title: 'AccountChek',
    urlSlug: 'account-chek',
    featuredImage: [1, 1],
    beginDescription:
      '<p>At <strong>FormFree</strong> I was tasked with redesigning their user-facing <em>AccountChek</em> application. The purpose of <em>AccountChek</em> is to allow a potential home buyer to more easily share their banking details with a mortgage lender than is possible with traditional methods. <em>AccountChek</em> was written in an older version of Angular and had a very plain design. </p><p> I created a more modern design that featured background colors and shapes as an enlarged version of the <em>AccountChek</em> logo. The design process was a long collaboration between me and the stakeholders regarding the appearance, the suitability for present needs, and the capacity to address future components that were in the planning stages. </p>',
    endDescription:
      '<p> With this new design in mind, I rebuilt the application in the latest version of Angular available at that time. I was intentional about ensuring accessibility for users with poor vision, colorblindness, requiring screen readers, or limited to keyboard-only access. I placed strong emphasis on test-driven-design by writing over 540+ unit tests that passed on multiple web browsers checked with BrowserStack. This application has very strict code quality controls enforced by TypeScript build options and code linting. </p><p> In a few months, with only light guidance from others, I successfully redesigned and rebuilt the <em>AccountChek</em> application for <strong>FormFree</strong>.</p><p><strong>Tech Stack</strong>: TypeScript 4, Angular 8, SCSS, Bootstrap 4, ASP.NET MVC, Jasmine</p>',
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
    title: 'Project: Smoke-Test',
    urlSlug: 'smoke-test',
    featuredImage: [0, 1],
    beginDescription:
      '<p> At <strong>Life After Normal</strong> I helped create <em>Smoke-Test</em>. The philosophy behind <em>Smoke-Test</em> is that no matter how many automated tests are used to assess an application, manual testing by a real person is still necessary to ensure a high-quality application. The purpose of <em>Smoke-Test</em> was to allow QA and software testers to more easily manage information and steps for manually testing complex applications. Test managers could record exactly what a tester would need to do for each unique manual test in an application. Tests could be distributed to multiple people to be run simultaneously and to collect results and feedback in real time. </p>',
    endDescription:
      '<p> I designed the original branding for the logo, website, and emails. I created and implemented the design for <em>Smoke-Test</em>, which was built in Angular on top of an ASP MVC backend. </p><p> Unfortunately, the <em>Smoke-Test</em> project was shut down before customers could be secured. Here are my design mockups. </p>',
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
        ],
      },
    ],
  },
  {
    title: 'Mission Togo',
    urlSlug: 'mission-togo',
    featuredImage: [0, 0],
    beginDescription: `<p> Togo is a small country in western Africa. In 2010 I was part of a mission team to Gbentchal ("ben-jaal"), a village in the northern area of the country in great need of help. As the team photographer and videographer, my role was to document all aspects of our main project, which was a children's sports camp. Other groups before and after ours assisted with drilling a fresh water well, planting crops, and helping to build a school. </p><p> To raise awareness of the needs and raise funds for a return trip in 2012, I designed and built a website. The website provided information, photos, videos, and accepted donations via PayPal. It was built in PHP on top of Expression Engine. The photos, and videos featured on the website were all shot by me as well. </p>`,
    endDescription: '',
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
