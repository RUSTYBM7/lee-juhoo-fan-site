// Image mapping for LEE JUNHO official website
// Using Lee's actual photos for all content

export const images = {
  // Hero/Gallery - Lee's photos for main gallery
  hero: [
    '/images/lee/IMG_5109.JPG',
    '/images/lee/IMG_5110.JPG',
    '/images/lee/IMG_5111.JPG',
    '/images/lee/IMG_5112.JPG',
    '/images/lee/IMG_5113.JPG',
    '/images/lee/IMG_5114.JPG',
    '/images/lee/IMG_5115.JPG',
    '/images/lee/IMG_5116.JPG',
    '/images/lee/IMG_5117.JPG',
    '/images/lee/IMG_5118.JPG',
    '/images/lee/IMG_5119.JPG',
    '/images/lee/IMG_5120.JPG',
    '/images/lee/IMG_5121.JPG',
    '/images/lee/IMG_5122.JPG',
    '/images/lee/IMG_5123.JPG',
    '/images/lee/IMG_5124.JPG',
    '/images/lee/IMG_5125.JPG',
    '/images/lee/IMG_5126.JPG',
    '/images/lee/IMG_5127.JPG',
    '/images/lee/IMG_5128.JPG',
    '/images/lee/IMG_5129.JPG',
    '/images/lee/IMG_5130.JPG',
    '/images/lee/IMG_5131.JPG',
    '/images/lee/IMG_5132.JPG',
    '/images/lee/IMG_5133.JPG',
    '/images/lee/IMG_5134.JPG',
    '/images/lee/IMG_5135.JPG',
    '/images/lee/IMG_5136.JPG',
    '/images/lee/IMG_5137.JPG',
    '/images/lee/IMG_5138.JPG',
    '/images/lee/IMG_5139.JPG',
    '/images/lee/IMG_5140.JPG',
    '/images/lee/IMG_5141.JPG',
    '/images/lee/IMG_5142.JPG',
    '/images/lee/IMG_5143.JPG',
    '/images/lee/IMG_5144.JPG',
    '/images/lee/IMG_5145.JPG',
    '/images/lee/IMG_5146.JPG',
    '/images/lee/IMG_5147.JPG',
  ],

  // Music Album Covers - Lee's photos with album name styling
  music: {
    'Can I': '/images/lee/IMG_5115.JPG',
    'Nothing But You': '/images/lee/IMG_5118.JPG',
    'Canvas': '/images/lee/IMG_5122.JPG',
    'Fire': '/images/lee/IMG_5125.JPG',
    'Truelove': '/images/lee/IMG_5128.JPG',
    'When We Meet Again': '/images/lee/IMG_5131.JPG',
    'Nobody Else': '/images/lee/IMG_5134.JPG',
    'TWO': '/images/lee/IMG_5137.JPG',
    'FEEL': '/images/lee/IMG_5140.JPG',
  },

  // Filmography Posters - Lee's photos styled as drama posters
  filmography: {
    'Typhoon Family': '/images/lee/IMG_5113.JPG',
    'Cashero': '/images/lee/IMG_5116.JPG',
    'King the Land': '/images/lee/IMG_5119.JPG',
    'The Red Sleeve': '/images/lee/IMG_5121.JPG',
    'Confession': '/images/lee/IMG_5124.JPG',
    'Rain or Shine': '/images/lee/IMG_5127.JPG',
    'Good Manager': '/images/lee/IMG_5130.JPG',
    'Cold Eyes': '/images/lee/IMG_5133.JPG',
    'Twenty': '/images/lee/IMG_5136.JPG',
  },

  // Awards - Lee's photos from award ceremonies
  awards: {
    'Baeksang Arts Awards': '/images/lee/IMG_5110.JPG',
    'KBS Drama Awards': '/images/lee/IMG_5114.JPG',
    'Blue Dragon Awards': '/images/lee/IMG_5117.JPG',
    'Asia Artist Awards': '/images/lee/IMG_5120.JPG',
    'MBC Drama Awards': '/images/lee/IMG_5123.JPG',
  },

  // News Images
  news: {
    'Typhoon Family': '/images/lee/IMG_5113.JPG',
    'Stunning Us': '/images/lee/IMG_5130.JPG',
    'Donation': '/images/lee/IMG_5135.JPG',
    '2PM Anniversary': '/images/lee/IMG_5140.JPG',
    'Netflix': '/images/lee/IMG_5145.JPG',
  },

  // Profile / Biography images
  profile: {
    portrait: '/images/lee/IMG_5110.JPG',
    casual: '/images/lee/IMG_5115.JPG',
    action: '/images/lee/IMG_5120.JPG',
  },

  // Fashion / Style images
  fashion: [
    '/images/lee/IMG_5112.JPG',
    '/images/lee/IMG_5114.JPG',
    '/images/lee/IMG_5117.JPG',
    '/images/lee/IMG_5120.JPG',
    '/images/lee/IMG_5122.JPG',
    '/images/lee/IMG_5124.JPG',
  ],

  // Concert/Fan Meeting images
  concerts: {
    'Stunning Us Seoul': '/images/lee/IMG_5109.JPG',
    'Stunning Us Shanghai': '/images/lee/IMG_5130.JPG',
    '2PM 17th Anniversary': '/images/lee/IMG_5142.JPG',
  },
};

// Helper functions
export const getImage = (category: keyof typeof images, key?: string): string => {
  if (typeof images[category] === 'object' && !Array.isArray(images[category])) {
    const categoryObj = images[category] as Record<string, string>;
    const path = key && categoryObj[key] ? categoryObj[key] : Object.values(categoryObj)[0];
    return path || images.hero[0];
  }
  return (images[category] as string[])[0];
};

export const getMusicCover = (albumName: string): string => {
  return images.music[albumName] || images.hero[0];
};

export const getFilmographyImage = (title: string): string => {
  return images.filmography[title] || images.hero[0];
};

export const getAwardImage = (awardName: string): string => {
  return images.awards[awardName] || images.hero[0];
};

// Music album metadata for styling
export const musicAlbums = {
  'Can I': { year: '2023', type: 'Single', duration: '3:45' },
  'Nothing But You': { year: '2023', type: 'Single', duration: '4:12' },
  'Canvas': { year: '2017', type: 'EP', duration: '18:30' },
  'Fire': { year: '2015', type: 'Album', duration: '42:00' },
  'Truelove': { year: '2014', type: 'Single', duration: '3:58' },
  'When We Meet Again': { year: '2012', type: 'Single', duration: '4:05' },
  'Nobody Else': { year: '2011', type: 'Single', duration: '3:52' },
  'TWO': { year: '2010', type: 'EP', duration: '22:00' },
  'FEEL': { year: '2009', type: 'Album', duration: '45:00' },
};

// Filmography metadata for styling
export const filmographyData = {
  'Typhoon Family': { year: '2025', role: 'Kang Tae-poong', network: 'tvN' },
  'Cashero': { year: '2025', role: 'Lee Sang-hak', network: 'tvN' },
  'King the Land': { year: '2023', role: 'Kwang Baek', network: 'tvN' },
  'The Red Sleeve': { year: '2021', role: 'Yi San', network: 'MBC' },
  'Confession': { year: '2019', role: 'Lee Hyun-woo', network: 'tvN' },
  'Rain or Shine': { year: '2017', role: 'Do Ha-neul', network: 'MBC' },
  'Good Manager': { year: '2017', role: 'Ga Dong-chae', network: 'MBC' },
  'Cold Eyes': { year: '2013', role: 'Park Hye-min', network: 'Film' },
  'Twenty': { year: '2015', role: 'Dae-woo', network: 'Film' },
};

// Awards metadata
export const awardsData = {
  'Baeksang Arts Awards': { year: '2024', category: 'Best Actor' },
  'MBC Drama Awards': { year: '2021', category: 'Best Actor' },
  'KBS Drama Awards': { year: '2021', category: 'Best Couple' },
  'Blue Dragon Awards': { year: '2022', category: 'Popularity' },
  'Asia Artist Awards': { year: '2023', category: 'K-Pop' },
};