import { CustomImageItem, IGallery, IProjectBase } from './data.model';

export interface IDevProject extends IProjectBase {
  gallery?: IGallery;
  techStack: string;
  links: { url: string; text: string; iconId: string }[];
}

export const devProjectList: IDevProject[] = [
  {
    title: 'Lyric Converter',
    urlSlug: 'lyric-converter',
    gallery: {
      id: 'lyricConverter',
      images: [
        new CustomImageItem({
          src: 'https://github.com/FiniteLooper/LyricConverter/raw/master/lyric-converter-demo.gif?raw=true',
          thumb: '/assets/dev/lyric-converter_Thumb.png',
          alt: 'LyricConverter Screen Recording',
          thumbTitle: 'LyricConverter Screen Recording'
        }),
      ],
    },
    techStack: 'TypeScript 5, Angular 16, RXJS, SCSS, Bootstrap, Jasmine',
    links: [
      {
        url: 'http://lyricconverter.net/',
        text: 'LyricConverter.net',
        iconId: '',
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
          thumb: '/assets/dev/portfolio-site-desktop_Thumb.png',
          alt: 'Portfolio Website - Desktop Screen Size',
          thumbTitle: 'Desktop Screen Size'
        }),
        new CustomImageItem({
          src: '/assets/dev/portfolio-site-mobile.gif',
          thumb: '/assets/dev/portfolio-site-mobile_Thumb.png',
          alt: 'Portfolio Website - Mobile Screen Size',
          thumbTitle: 'Mobile Screen Size'
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
    endDescription: `<p>This portfolio site makes use of SVG icons, and an SVG grain/noise filter on the background to give it a "grainy film" look. It also has as CI/CD deployment script on github so that any changes pushed from git are automatically built and deployed to this live site you are seeing now, which includes pre-rendering each individual route.</p>`,
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
];
