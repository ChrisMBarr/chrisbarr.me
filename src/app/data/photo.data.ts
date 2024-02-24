import { CustomImageItem } from './data.model';

type IPhotoCategoryId = 'art' | 'africa' | 'engagements' | 'live-events' | 'still-life' | 'portraits' | 'weddings-bridals';

export interface IPhotoCategory {
  title: string;
  urlSlug: IPhotoCategoryId;
  featuredImage: number;
  description?: string;
  photos: CustomImageItem[];
}

export const photosList: IPhotoCategory[] = [
  {
    title: 'Engagements',
    urlSlug: 'engagements',
    featuredImage: 0,
    photos: [
      new CustomImageItem({
        thumb: 'assets/photo/engagements/DSC_3894_thumb.jpg',
        src: 'assets/photo/engagements/DSC_3894.jpg',
        alt: 'Engagements - Derek & Bethany 1/4',
        thumbTitle: 'Derek & Bethany',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/DSC_4000_thumb.jpg',
        src: 'assets/photo/engagements/DSC_4000.jpg',
        alt: 'Engagements - Derek & Bethany 2/4',
        thumbTitle: 'Derek & Bethany',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/DSC_4104_thumb.jpg',
        src: 'assets/photo/engagements/DSC_4104.jpg',
        alt: 'Engagements - Derek & Bethany 3/4',
        thumbTitle: 'Derek & Bethany',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/DSC_4400_thumb.jpg',
        src: 'assets/photo/engagements/DSC_4400.jpg',
        alt: 'Engagements - Derek & Bethany 4/4',
        thumbTitle: 'Derek & Bethany',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_9800_thumb.jpg',
        src: 'assets/photo/engagements/IMG_9800.jpg',
        alt: 'Engagements - Terry Lee & Abby 1/7',
        thumbTitle: 'Terry Lee & Abby',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_9913_thumb.jpg',
        src: 'assets/photo/engagements/IMG_9913.jpg',
        alt: 'Engagements - Terry Lee & Abby 2/7',
        thumbTitle: 'Terry Lee & Abby',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_9592_thumb.jpg',
        src: 'assets/photo/engagements/IMG_9592.jpg',
        alt: 'Engagements - Terry Lee & Abby 3/7',
        thumbTitle: 'Terry Lee & Abby',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_9712_thumb.jpg',
        src: 'assets/photo/engagements/IMG_9712.jpg',
        alt: 'Engagements - Terry Lee & Abby 4/7',
        thumbTitle: 'Terry Lee & Abby',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_9974_thumb.jpg',
        src: 'assets/photo/engagements/IMG_9974.jpg',
        alt: 'Engagements - Terry Lee & Abby 5/7',
        thumbTitle: 'Terry Lee & Abby',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_0410_thumb.jpg',
        src: 'assets/photo/engagements/IMG_0410.jpg',
        alt: 'Engagements - Terry Lee & Abby 6/7',
        thumbTitle: 'Terry Lee & Abby',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_0634_thumb.jpg',
        src: 'assets/photo/engagements/IMG_0634.jpg',
        alt: 'Engagements - Terry Lee & Abby 7/7',
        thumbTitle: 'Terry Lee & Abby',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_6834_thumb.jpg',
        src: 'assets/photo/engagements/IMG_6834.jpg',
        alt: 'Engagements - Tyler & Diedra 1/6',
        thumbTitle: 'Tyler & Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_6852_thumb.jpg',
        src: 'assets/photo/engagements/IMG_6852.jpg',
        alt: 'Engagements - Tyler & Diedra 2/6',
        thumbTitle: 'Tyler & Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_7103_thumb.jpg',
        src: 'assets/photo/engagements/IMG_7103.jpg',
        alt: 'Engagements - Tyler & Diedra 3/6',
        thumbTitle: 'Tyler & Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_7319_thumb.jpg',
        src: 'assets/photo/engagements/IMG_7319.jpg',
        alt: 'Engagements - Tyler & Diedra 4/6',
        thumbTitle: 'Tyler & Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_7458_thumb.jpg',
        src: 'assets/photo/engagements/IMG_7458.jpg',
        alt: 'Engagements - Tyler & Diedra 5/6',
        thumbTitle: 'Tyler & Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_7580_thumb.jpg',
        src: 'assets/photo/engagements/IMG_7580.jpg',
        alt: 'Engagements - Tyler & Diedra 6/6',
        thumbTitle: 'Tyler & Diedra',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_8942_thumb.jpg',
        src: 'assets/photo/engagements/IMG_8942.jpg',
        alt: 'Engagements - Shane & Kelley 1/5',
        thumbTitle: 'Shane & Kelley',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_8963_thumb.jpg',
        src: 'assets/photo/engagements/IMG_8963.jpg',
        alt: 'Engagements - Shane & Kelley 2/5',
        thumbTitle: 'Shane & Kelley',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_8990_thumb.jpg',
        src: 'assets/photo/engagements/IMG_8990.jpg',
        alt: 'Engagements - Shane & Kelley 3/5',
        thumbTitle: 'Shane & Kelley',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/IMG_9321_thumb.jpg',
        src: 'assets/photo/engagements/IMG_9321.jpg',
        alt: 'Engagements - Shane & Kelley 4/5',
        thumbTitle: 'Shane & Kelley',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/engagements/collage1_thumb.jpg',
        src: 'assets/photo/engagements/collage1.jpg',
        alt: 'Engagements - Shane & Kelley 5/5 (Collage)',
        thumbTitle: 'Shane & Kelley: Collage',
      }),
    ],
  },
  {
    title: 'Weddings & Bridals',
    urlSlug: 'weddings-bridals',
    featuredImage: 32,
    photos: [
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_0952_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_0952.jpg',
        alt: 'Bridal - Diedra 1/6',
        thumbTitle: 'Bridal - Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_0998_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_0998.jpg',
        alt: 'Bridal - Diedra 2/6',
        thumbTitle: 'Bridal - Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_1134_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_1134.jpg',
        alt: 'Bridal - Diedra 3/6',
        thumbTitle: 'Bridal - Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_1151_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_1151.jpg',
        alt: 'Bridal - Diedra 4/6',
        thumbTitle: 'Bridal - Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_1183_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_1183.jpg',
        alt: 'Bridal - Diedra 5/6',
        thumbTitle: 'Bridal - Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_1364_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_1364.jpg',
        alt: 'Bridal - Diedra 6/6',
        thumbTitle: 'Bridal - Diedra',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_1563_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_1563.jpg',
        alt: 'Wedding - Terry Lee & Abby 1/3',
        thumbTitle: 'Wedding - Terry Lee & Abby',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_3316_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_3316.jpg',
        alt: 'Wedding - Terry Lee & Abby 2/3',
        thumbTitle: 'Wedding - Terry Lee & Abby',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/DSC_8489_thumb.jpg',
        src: 'assets/photo/weddings-bridals/DSC_8489.jpg',
        alt: 'Wedding - Terry Lee & Abby 3/3',
        thumbTitle: 'Wedding - Terry Lee & Abby',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_1256_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_1256.jpg',
        alt: 'Wedding - Drew & Allison 1/7',
        thumbTitle: 'Wedding - Drew & Allison',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_1768_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_1768.jpg',
        alt: 'Wedding - Drew & Allison 2/7',
        thumbTitle: 'Wedding - Drew & Allison',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_1937_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_1937.jpg',
        alt: 'Wedding - Drew & Allison 3/7',
        thumbTitle: 'Wedding - Drew & Allison',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_2013_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_2013.jpg',
        alt: 'Wedding - Drew & Allison 4/7',
        thumbTitle: 'Wedding - Drew & Allison',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_2035_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_2035.jpg',
        alt: 'Wedding - Drew & Allison 5/7',
        thumbTitle: 'Wedding - Drew & Allison',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_2078_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_2078.jpg',
        alt: 'Wedding - Drew & Allison 6/7',
        thumbTitle: 'Wedding - Drew & Allison',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_3113_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_3113.jpg',
        alt: 'Wedding - Drew & Allison 7/7',
        thumbTitle: 'Wedding - Drew & Allison',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_3723_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_3723.jpg',
        alt: 'Wedding - The McGanns 1/2',
        thumbTitle: 'Wedding - The McGanns',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_3766_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_3766.jpg',
        alt: 'Wedding - The McGanns 2/2',
        thumbTitle: 'Wedding - The McGanns',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_4221_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_4221.jpg',
        alt: 'Wedding - Tyler & Diedra 1/4',
        thumbTitle: 'Wedding - Tyler & Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_5026_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_5026.jpg',
        alt: 'Wedding - Tyler & Diedra 2/4',
        thumbTitle: 'Wedding - Tyler & Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_5628_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_5628.jpg',
        alt: 'Wedding - Tyler & Diedra 3/4',
        thumbTitle: 'Wedding - Tyler & Diedra',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_5650_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_5650.jpg',
        alt: 'Wedding - Tyler & Diedra 4/4',
        thumbTitle: 'Wedding - Tyler & Diedra',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_5908_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_5908.jpg',
        alt: 'Wedding - Will & Chassidy 1/3',
        thumbTitle: 'Wedding - Will & Chassidy',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_6142_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_6142.jpg',
        alt: 'Wedding - Will & Chassidy 2/3',
        thumbTitle: 'Wedding - Will & Chassidy',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_6325_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_6325.jpg',
        alt: 'Wedding - Will & Chassidy 3/3',
        thumbTitle: 'Wedding - Will & Chassidy',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_6793_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_6793.jpg',
        alt: 'Wedding - Amy & Johnny 1/8',
        thumbTitle: 'Wedding - Amy & Johnny',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_6934_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_6934.jpg',
        alt: 'Wedding - Amy & Johnny 2/8',
        thumbTitle: 'Wedding - Amy & Johnny',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_7281_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_7281.jpg',
        alt: 'Wedding - Amy & Johnny 3/8',
        thumbTitle: 'Wedding - Amy & Johnny',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_7326_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_7326.jpg',
        alt: 'Wedding - Amy & Johnny 4/8',
        thumbTitle: 'Wedding - Amy & Johnny',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_7528_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_7528.jpg',
        alt: 'Wedding - Amy & Johnny 5/8',
        thumbTitle: 'Wedding - Amy & Johnny',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_7557_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_7557.jpg',
        alt: 'Wedding - Amy & Johnny 6/8',
        thumbTitle: 'Wedding - Amy & Johnny',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_7669_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_7669.jpg',
        alt: 'Wedding - Amy & Johnny 7/8',
        thumbTitle: 'Wedding - Amy & Johnny',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_7701_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_7701.jpg',
        alt: 'Wedding - Amy & Johnny 8/8',
        thumbTitle: 'Wedding - Amy & Johnny',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_9521_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_9521.jpg',
        alt: 'Wedding - Jeremy & April 1/2',
        thumbTitle: 'Wedding - Jeremy & April',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/weddings-bridals/IMG_9576_thumb.jpg',
        src: 'assets/photo/weddings-bridals/IMG_9576.jpg',
        alt: 'Wedding - Jeremy & April 2/2',
        thumbTitle: 'Wedding - Jeremy & April',
      }),
    ],
  },
  {
    title: 'Portraits',
    urlSlug: 'portraits',
    featuredImage: 3,
    photos: [
      new CustomImageItem({
        thumb: 'assets/photo/portraits/DSC_6164_thumb.jpg',
        src: 'assets/photo/portraits/DSC_6164.jpg',
        alt: 'Portraits - The Gann Family',
        thumbTitle: 'The Gann Family',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/portraits/DSC_6242_thumb.jpg',
        src: 'assets/photo/portraits/DSC_6242.jpg',
        alt: 'Portraits - Calvin Gann',
        thumbTitle: 'Calvin Gann',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/portraits/DSC_6400_thumb.jpg',
        src: 'assets/photo/portraits/DSC_6400.jpg',
        alt: 'Portraits - Cory Gann',
        thumbTitle: 'Cory Gann',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/portraits/IMG_0603_thumb.jpg',
        src: 'assets/photo/portraits/IMG_0603.jpg',
        alt: 'Portraits - Marla: Maternity 1/2',
        thumbTitle: 'Marla: Maternity',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/portraits/IMG_0683_thumb.jpg',
        src: 'assets/photo/portraits/IMG_0683.jpg',
        alt: 'Portraits - Marla: Maternity 2/2',
        thumbTitle: 'Marla: Maternity',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/portraits/IMG_1432_thumb.jpg',
        src: 'assets/photo/portraits/IMG_1432.jpg',
        alt: 'Portraits - Andy: Crossfit 1/2',
        thumbTitle: 'Andy: Crossfit',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/portraits/IMG_1451_thumb.jpg',
        src: 'assets/photo/portraits/IMG_1451.jpg',
        alt: 'Portraits - Andy: Crossfit 2/2',
        thumbTitle: 'Andy: Crossfit',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/portraits/IMG_1993_thumb.jpg',
        src: 'assets/photo/portraits/IMG_1993.jpg',
        alt: 'Portraits - Liza: Triathlon 1/2',
        thumbTitle: 'Liza: Triathlon',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/portraits/IMG_2028_thumb.jpg',
        src: 'assets/photo/portraits/IMG_2028.jpg',
        alt: 'Portraits Liza: Triathlon 2/2',
        thumbTitle: 'Liza: Triathlon',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/portraits/IMG_2891_thumb.jpg',
        src: 'assets/photo/portraits/IMG_2891.jpg',
        alt: 'Portraits - Lanessa: Portraits 1/2',
        thumbTitle: 'Lanessa: Portraits',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/portraits/IMG_6396_thumb.jpg',
        src: 'assets/photo/portraits/IMG_6396.jpg',
        alt: 'Portraits - Lanessa: Portraits 2/2',
        thumbTitle: 'Lanessa: Portraits',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/portraits/IMG_6588_thumb.jpg',
        src: 'assets/photo/portraits/IMG_6588.jpg',
        alt: 'Portraits - Brandon: Portraits 1/2',
        thumbTitle: 'Brandon: Portraits',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/portraits/IMG_6644_thumb.jpg',
        src: 'assets/photo/portraits/IMG_6644.jpg',
        alt: 'Portraits - Brandon: Portraits 2/2',
        thumbTitle: 'Brandon: Portraits',
      }),

      new CustomImageItem({
        thumb: 'assets/photo/portraits/IMG_6609_thumb.jpg',
        src: 'assets/photo/portraits/IMG_6609.jpg',
        alt: 'Portraits - Peter & Charity',
        thumbTitle: 'Peter & Charity',
      }),
    ],
  },
  {
    title: 'Live Events',
    urlSlug: 'live-events',
    featuredImage: 3,
    photos: [
      new CustomImageItem({
        thumb: 'assets/photo/live-events/IMG_3736_thumb.jpg',
        src: 'assets/photo/live-events/IMG_3736.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/live-events/IMG_3925_thumb.jpg',
        src: 'assets/photo/live-events/IMG_3925.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/live-events/IMG_5805_thumb.jpg',
        src: 'assets/photo/live-events/IMG_5805.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/live-events/IMG_5992_thumb.jpg',
        src: 'assets/photo/live-events/IMG_5992.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/live-events/IMG_6014_thumb.jpg',
        src: 'assets/photo/live-events/IMG_6014.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/live-events/IMG_7396_thumb.jpg',
        src: 'assets/photo/live-events/IMG_7396.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/live-events/panorama3_thumb.jpg',
        src: 'assets/photo/live-events/panorama3.jpg',
      }),
    ],
  },
  {
    title: 'Africa',
    urlSlug: 'africa',
    featuredImage: 13,
    description: `<p>In both 2010 and 2011 I traveled with a mission group to Togo, a small country in western Africa. We spent most of our time in a village called Gbentchal ("ben-jaal") because it was in need of the most help. Over the course of the years a fresh water well was drilled, crops were planted, and a school was built. During my time there we held a children's sports camp among other things, but I was mostly there as the team photographer and videographer. Below you can see a selection of my photos from both trips, and a summary video I made of our 2011 trip.</p><p>Over in the design area of this site you can see <a href="/design/mission-togo" rel="ng">the web design I made</a> to raise funds and awareness for this mission.</p>`,
    photos: [
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_5212_thumb.jpg',
        src: 'assets/photo/africa/IMG_5212.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_5874_thumb.jpg',
        src: 'assets/photo/africa/IMG_5874.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_5995_thumb.jpg',
        src: 'assets/photo/africa/IMG_5995.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_6660_thumb.jpg',
        src: 'assets/photo/africa/IMG_6660.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_6849_thumb.jpg',
        src: 'assets/photo/africa/IMG_6849.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_7147_thumb.jpg',
        src: 'assets/photo/africa/IMG_7147.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_7160_thumb.jpg',
        src: 'assets/photo/africa/IMG_7160.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_7362_thumb.jpg',
        src: 'assets/photo/africa/IMG_7362.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_7536_thumb.jpg',
        src: 'assets/photo/africa/IMG_7536.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_7646_thumb.jpg',
        src: 'assets/photo/africa/IMG_7646.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_7699_thumb.jpg',
        src: 'assets/photo/africa/IMG_7699.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_7707_thumb.jpg',
        src: 'assets/photo/africa/IMG_7707.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_7800_thumb.jpg',
        src: 'assets/photo/africa/IMG_7800.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_7833_thumb.jpg',
        src: 'assets/photo/africa/IMG_7833.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_8295_thumb.jpg',
        src: 'assets/photo/africa/IMG_8295.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_8301_thumb.jpg',
        src: 'assets/photo/africa/IMG_8301.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_8683_thumb.jpg',
        src: 'assets/photo/africa/IMG_8683.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_8692_thumb.jpg',
        src: 'assets/photo/africa/IMG_8692.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_8616_thumb.jpg',
        src: 'assets/photo/africa/IMG_8616.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/Gbentchal Panorama5_thumb.jpg',
        src: 'assets/photo/africa/Gbentchal Panorama5.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_8818_thumb.jpg',
        src: 'assets/photo/africa/IMG_8818.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_9262_thumb.jpg',
        src: 'assets/photo/africa/IMG_9262.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_9286_thumb.jpg',
        src: 'assets/photo/africa/IMG_9286.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_9301_thumb.jpg',
        src: 'assets/photo/africa/IMG_9301.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_9876_thumb.jpg',
        src: 'assets/photo/africa/IMG_9876.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_9900_thumb.jpg',
        src: 'assets/photo/africa/IMG_9900.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/africa/IMG_9972_thumb.jpg',
        src: 'assets/photo/africa/IMG_9972.jpg',
      }),
    ],
  },
  {
    title: 'Art',
    urlSlug: 'art',
    featuredImage: 1,
    description:
      'Abstract & art photography is what first drew me in to photography. I love to experiment and play with light and perspective. A few of my best long exposure pieces are below',
    photos: [
      new CustomImageItem({
        thumb: 'assets/photo/art/DSC_0075_thumb.jpg',
        src: 'assets/photo/art/DSC_0075.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/DSC_1395_thumb.jpg',
        src: 'assets/photo/art/DSC_1395.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/DSC_2814_thumb.jpg',
        src: 'assets/photo/art/DSC_2814.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/DSC_3243_thumb.jpg',
        src: 'assets/photo/art/DSC_3243.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/DSC_3494_thumb.jpg',
        src: 'assets/photo/art/DSC_3494.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/DSC_5093_thumb.jpg',
        src: 'assets/photo/art/DSC_5093.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/DSC_5762_thumb.jpg',
        src: 'assets/photo/art/DSC_5762.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/DSC_5987_thumb.jpg',
        src: 'assets/photo/art/DSC_5987.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/IMG_1155_thumb.jpg',
        src: 'assets/photo/art/IMG_1155.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/IMG_1415_thumb.jpg',
        src: 'assets/photo/art/IMG_1415.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/IMG_2166_thumb.jpg',
        src: 'assets/photo/art/IMG_2166.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/IMG_2955_thumb.jpg',
        src: 'assets/photo/art/IMG_2955.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/IMG_4388_thumb.jpg',
        src: 'assets/photo/art/IMG_4388.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/IMG_7043_thumb.jpg',
        src: 'assets/photo/art/IMG_7043.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/IMG_7611_thumb.jpg',
        src: 'assets/photo/art/IMG_7611.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/IMG_8080_thumb.jpg',
        src: 'assets/photo/art/IMG_8080.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/IMG_9202_thumb.jpg',
        src: 'assets/photo/art/IMG_9202.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/art/IMG_9372_thumb.jpg',
        src: 'assets/photo/art/IMG_9372.jpg',
      }),
    ],
  },
  {
    title: 'Still Life',
    urlSlug: 'still-life',
    featuredImage: 5,
    photos: [
      new CustomImageItem({
        thumb: 'assets/photo/still-life/d2z6nn-87a52587-ceee-4b5e-bfb1-2f8619ef80f9_thumb.jpg',
        src: 'assets/photo/still-life/d2z6nn-87a52587-ceee-4b5e-bfb1-2f8619ef80f9.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/field pano_thumb.jpg',
        src: 'assets/photo/still-life/field pano.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_0278_thumb.jpg',
        src: 'assets/photo/still-life/IMG_0278.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_0291_thumb.jpg',
        src: 'assets/photo/still-life/IMG_0291.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_0413_thumb.jpg',
        src: 'assets/photo/still-life/IMG_0413.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_0655_thumb.jpg',
        src: 'assets/photo/still-life/IMG_0655.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_1237-Pano_thumb.jpg',
        src: 'assets/photo/still-life/IMG_1237-Pano.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_1584_thumb.jpg',
        src: 'assets/photo/still-life/IMG_1584.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_1935_thumb.jpg',
        src: 'assets/photo/still-life/IMG_1935.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_2314_thumb.jpg',
        src: 'assets/photo/still-life/IMG_2314.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_2885_thumb.jpg',
        src: 'assets/photo/still-life/IMG_2885.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_2955_thumb.jpg',
        src: 'assets/photo/still-life/IMG_2955.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_4388_thumb.jpg',
        src: 'assets/photo/still-life/IMG_4388.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_8420_thumb.jpg',
        src: 'assets/photo/still-life/IMG_8420.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_8443_thumb.jpg',
        src: 'assets/photo/still-life/IMG_8443.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_8476_thumb.jpg',
        src: 'assets/photo/still-life/IMG_8476.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_8559_thumb.jpg',
        src: 'assets/photo/still-life/IMG_8559.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/IMG_9110_thumb.jpg',
        src: 'assets/photo/still-life/IMG_9110.jpg',
      }),
      new CustomImageItem({
        thumb: 'assets/photo/still-life/pano6_thumb.jpg',
        src: 'assets/photo/still-life/pano6.jpg',
      }),
    ],
  },
];
