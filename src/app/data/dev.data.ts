import { CustomImageItem, IImageGallery, IProjectBase } from './data.model';

export interface IDevProject extends IProjectBase {
  gallery?: IImageGallery;
  techStack: string;
  links: { url: string; text: string; iconId: string }[];
}

export const devProjectList: IDevProject[] = [
  {
    title: 'LyricConverter',
    urlSlug: 'lyric-converter',
    gallery: {
      id: 'lyricConverter',
      images: [
        new CustomImageItem({
          src: 'https://github.com/FiniteLooper/LyricConverter/raw/master/lyric-converter-demo.gif?raw=true',
          thumb: '/assets/dev/lyric-converter_Thumb.png',
          alt: 'LyricConverter Screen Recording',
          thumbTitle: 'LyricConverter Screen Recording',
        }),
      ],
    },
    techStack: 'TypeScript 5, Angular 16, RXJS, SCSS, Bootstrap, Jasmine',
    links: [
      {
        url: 'https://lyricconverter.net/',
        text: 'LyricConverter.net',
        iconId: 'play',
      },
      {
        url: 'https://github.com/FiniteLooper/LyricConverter',
        text: 'Source Code',
        iconId: 'github',
      },
    ],
    beginDescription: `<p><strong>LyricConverter</strong> is a project I've built and improved, on and off, for years. It was made to extract song data and lyrics from many popular lyric display software packages and convert them to other formats. Many of these software packages do not have great import/export tools so I wanted to build something to help people keep their song libraries as they migrated to new software. </p>`,
    endDescription: `<p>LyricConverter will take raw file input by dragging files into the browser or manually choosing files, extract all relevant song information from <strong>8 different input file formats</strong> to get them into a standard format used internally. Then the songs are converted into one of the <strong>6 possible output formats</strong> the user can select, or they can simply view the song information right there on the site. If a file output format is chosen, the user can choose to download the files as a compressed .zip file or as individual files. </p><p> All of the file parsing, extraction, creation, and saving takes place client side within the Angular app nearly instantaneously, even for hundreds of songs at once! </p><p> Originally written in PHP many years ago, I rewrote it all with client side JavaScript libraries. In recent years this code became cumbersome and difficult to manage or improve upon. I recently completely rewrote it in TypeScript with Angular 16, and it is now extremely maintainable and easier to improve upon. <strong>It has 200+ unit tests to ensure code quality with over 99% code coverage</strong>. Code linting rules are enforced, and github actions will enforce these code quality tools are run when anyone makes a pull request.</p><p>It also has as CI/CD deployment script on github so that any changes pushed from git are automatically built and deployed to this live site.  Since it's only a javascript single-page-app it is just hosted on Github pages as it does not require any server-side resources.</p><p>If you'd like to see more images and read about the UI design you can <a href="/design/lyric-converter" rel="ng">see it in the design section</a>.</p>`,
  },
  {
    title: 'Portfolio Website',
    urlSlug: 'portfolio-site',
    gallery: {
      id: 'portfolio',
      images: [
        new CustomImageItem({
          src: '/assets/dev/portfolio-site-desktop.gif',
          thumb: '/assets/dev/portfolio-site-desktop_Thumb.jpg',
          alt: 'Portfolio Website - Desktop Screen Size',
          thumbTitle: 'Desktop Screen Size',
        }),
        new CustomImageItem({
          src: '/assets/dev/portfolio-site-mobile.gif',
          thumb: '/assets/dev/portfolio-site-mobile_Thumb.jpg',
          alt: 'Portfolio Website - Mobile Screen Size',
          thumbTitle: 'Mobile Screen Size',
        }),
      ],
    },
    techStack: 'TypeScript 5, SCSS, Angular 16, Angular Universal',
    links: [
      {
        url: 'https://github.com/FiniteLooper/chrisbarr.me',
        text: 'Source Code',
        iconId: 'github',
      },
    ],
    beginDescription: `<p>This website you are looking at right now is my portfolio, and it is also a piece of my development portfolio! It's built using Angular 16 and makes use of Angular Universal to prerender all the pages to make the app load quicker and make it more SEO friendly.</p>`,
    endDescription: `<p>This portfolio site uses a completely original design I created without relying on any frameworks like Bootstrap or Tailwind. It features animations, SVG icons, and an SVG grain/noise filter on the background to give it a "grainy film" look. It also has a CI/CD deployment script on github so that any changes pushed from git are automatically built and deployed to this live site you are seeing now, which includes pre-rendering each individual Angular route.</p>`,
  },
  {
    title: 'Noise Maker',
    urlSlug: 'noise-maker',
    techStack: 'JavaScript, SVG, Bootstrap 5',
    gallery: {
      id: 'noise-maker',
      images: [
        new CustomImageItem({
          src: '/assets/dev/noise-maker-still-1.png',
          thumb: '/assets/dev/noise-maker-still-1_Thumb.png',
          alt: 'Noise Maker - Orange Waves',
          thumbTitle: 'Orange Waves',
        }),
        new CustomImageItem({
          src: '/assets/dev/noise-maker-still-2.png',
          thumb: '/assets/dev/noise-maker-still-2_Thumb.png',
          alt: 'Noise Maker - Neon',
          thumbTitle: 'Neon',
        }),
        new CustomImageItem({
          src: '/assets/dev/noise-maker-still-3.png',
          thumb: '/assets/dev/noise-maker-still-3_Thumb.png',
          alt: 'Noise Maker - Portal',
          thumbTitle: 'Portal',
        }),
        new CustomImageItem({
          src: '/assets/dev/noise-maker-recording-1.gif',
          thumb: '/assets/dev/noise-maker-recording-1_Thumb.png',
          alt: 'Noise Maker - Screen Recording - Noise Basics',
          thumbTitle: 'Screen Recording - Noise Basics',
        }),
        new CustomImageItem({
          src: '/assets/dev/noise-maker-recording-2.gif',
          thumb: '/assets/dev/noise-maker-recording-2_Thumb.png',
          alt: 'Noise Maker - Screen Recording - Lighting',
          thumbTitle: 'Screen Recording - Lighting',
        }),
        new CustomImageItem({
          src: '/assets/dev/noise-maker-recording-3.gif',
          thumb: '/assets/dev/noise-maker-recording-3_Thumb.png',
          alt: 'Noise Maker - Screen Recording - Effects',
          thumbTitle: 'Screen Recording - Effects',
        }),
        new CustomImageItem({
          src: '/assets/dev/noise-maker-recording-4.gif',
          thumb: '/assets/dev/noise-maker-recording-4_Thumb.png',
          alt: 'Noise Maker - Screen Recording - Presets',
          thumbTitle: 'Screen Recording - Presets',
        }),
      ],
    },
    links: [
      {
        url: 'https://finitelooper.github.io/noise-maker/',
        text: 'View Demo',
        iconId: 'play',
      },
      {
        url: 'https://github.com/FiniteLooper/noise-maker',
        text: 'Source Code',
        iconId: 'github',
      },
    ],
    beginDescription: `<p>A JavaScript based tool I made that allows you to create any noise-based SVG texture. It shows you a live preview of what you are making and will generate the code for you to apply it as a background image on your website.</p>`,
    endDescription: `<p> This taps in to the power of SVG based imagery built into all our web browsers. It first generates some random noise, and you can control the size an general pattern of the noise. On top of that you can apply various 3D lighting effects, and then some 2D filter effects.  The combinations are nearly endless, and I even surprised myself while building this as to the wide variety of patterns it can generate.  To show the features off this tool also features some presets built in, to give you an idea of where you might be able to take the pattern next!</p>`,
  },
  {
    title: 'Song Lyric File Format Parsing Libraries',
    urlSlug: 'lyric-libraries',
    techStack: 'TypeScript 5, Jest',
    links: [
      {
        url: 'https://github.com/FiniteLooper/ProPresenter-Parser',
        text: 'ProPresenter-Parser',
        iconId: 'github',
      },
      {
        url: 'https://github.com/FiniteLooper/OpenLyrics-Parser',
        text: 'OpenLyrics-Parser',
        iconId: 'github',
      },
      {
        url: 'https://github.com/FiniteLooper/SongShowPlus-Parser',
        text: 'SongShowPlus-Parser',
        iconId: 'github',
      },
      {
        url: 'https://github.com/SongProOrg/songpro-javascript',
        text: 'songpro-javascript',
        iconId: 'github',
      },
    ],
    beginDescription: `<p>While developing the LyricConverter project mentioned here I had to separate the concerns of my code. The parsing or building of any individual file format needed be made into its own project to be used stand-alone. I wanted to move as much code out of LyricConverter as I could, while also making useful NPM packages for other developers to use. </p>`,
    endDescription: `<p> Currently this has been done for four of the many formats LyricConverter supports. I created a parser for <strong>SongShow Plus</strong> files, a parser and a file builder for <strong>ProPresenter XML</strong> files, and a parser and a file builder for <strong>OpenLyrics XML</strong> files. All of these projects have 100% (or over 99+%) code coverage, clean code enforced by linting, and a CI/CD system for new contributions. As far as I know, there are no other similar projects online anywhere to deal with these file types. </p><p> The fourth project deals with parsing the <strong>SongPro</strong> file format. I did not originally create this parser library, but when I discovered it I was frustrated because it was broken in a way where I could not use it in LyricConverter. I forked this project on github and completely rewrote it in TypeScript 5 to make it easier to maintain, safer to code against, and to give any TypeScript consumers of this package a better development experience with the generated type definitions. I added more unit tests and this project now has 100% code coverage! Because of my contributions to this project I have been made a contributor for <a href="https://github.com/SongProOrg">the SongPro organization</a>. </p>`,
  },
  {
    title: 'Debbie Barr',
    urlSlug: 'debbie-barr',
    techStack: 'Eleventy, SCSS, Bootstrap 5',
    beginDescription: `<p><strong>Debbie Barr</strong> (who happens to be my mom!) is an accomplished author with 10 published books. She needed a website to showcase her work, read the backstories behind each book, find places to purchase them, and provide a way to get in touch with her.</p>`,
    endDescription: `<p>I built this site using the Eleventy framework which allows me to generate a flat file website based on JSON data and nunjucks templates. This was my first deep dive in to Eleventy and I really enjoyed building this site with it and learning how it works.</p><p>If you'd like to see more images and read about the UI design you can <a href="/design/debbie-barr" rel="ng">see it in the design section</a>.</p>`,
    gallery: {
      id: 'debbiebarr',
      images: [
        new CustomImageItem({
          thumb: 'assets/design/DebbieBarr/desktop-home_Thumb.png',
          src: 'assets/design/DebbieBarr/desktop-home.png',
          alt: 'DebbieBarr.com - Home Page | Desktop',
          thumbTitle: 'Home | Desktop',
        }),
        new CustomImageItem({
          thumb: 'assets/design/DebbieBarr/mobile-home_Thumb.png', //same as above image on purpose!
          src: 'assets/design/DebbieBarr/mobile-animation.gif',
          alt: 'DebbieBarr.com - Screen Animation | Mobile',
          thumbTitle: 'Screen Animation | Mobile',
        }),
      ],
    },
    links: [
      {
        url: 'https://debbiebarr.com',
        text: 'debbiebarr.com',
        iconId: 'play',
      },
      {
        url: 'https://github.com/FiniteLooper/debbiebarr.com',
        text: 'Source Code',
        iconId: 'github',
      },
    ],
  },
  {
    title: 'Landmark Analytics',
    urlSlug: 'landmark-analytics',
    techStack: 'Eleventy, SCSS, Bootstrap 5',
    beginDescription: `<p><strong>Landmark Analytics</strong> is a technology company that I worked for building web-based business applications. Landmark also specializes in data analytics, Oracle database management &amp; planning, and converting complex Excel spreadsheets into real business applications.</p>`,
    endDescription: `<p>I built using the Eleventy framework that allows me to use a simple tempting system to generate flat files to deploy. You can view the live site at <a href="https://landmarkanalytics.com" target="_blank">landmarkanalytics.com</a></p><p>If you'd like to see more images and read about the UI design you can <a href="/design/landmark-analytics" rel="ng">see it in the design section</a>.</p>`,
    gallery: {
      id: 'landmark',
      images: [
        new CustomImageItem({
          thumb: 'assets/design/LandmarkAnalytics/desktop-home_Thumb.png',
          src: 'assets/design/LandmarkAnalytics/desktop-home.png',
          alt: 'Landmark Analytics - Home Page | Desktop',
          thumbTitle: 'Home | Desktop',
        }),
        new CustomImageItem({
          thumb: 'assets/design/LandmarkAnalytics/mobile-home_Thumb.png',
          src: 'assets/design/LandmarkAnalytics/mobile-home.png',
          alt: 'Landmark Analytics - Home Page | Mobile',
          thumbTitle: 'Home | Mobile',
        }),
      ],
    },
    links: [
      {
        url: 'https://landmarkanalytics.com',
        text: 'landmarkanalytics.com',
        iconId: 'play',
      },
    ],
  },
];
