// Image mapping for LEE JUNHO official website
// Organized by category for appropriate content representation

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

  // Music Album Covers - Using Lee's photos as album art
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

  // Filmography / Drama Posters - Using Lee's photos as posters
  filmography: {
    'Typhoon Family': '/images/lee/IMG_5110.JPG',
    'Cashero': '/images/lee/IMG_5113.JPG',
    'King the Land': '/images/lee/IMG_5116.JPG',
    'The Red Sleeve': '/images/lee/IMG_5119.JPG',
    'Confession': '/images/lee/IMG_5121.JPG',
    'Rain or Shine': '/images/lee/IMG_5124.JPG',
    'Good Manager': '/images/lee/IMG_5127.JPG',
    'Cold Eyes': '/images/lee/IMG_5130.JPG',
    'Twenty': '/images/lee/IMG_5133.JPG',
  },

  // Awards - Using Lee's photos for award ceremonies
  awards: {
    'Baeksang Arts Awards': '/images/lee/IMG_5111.JPG',
    'KBS Drama Awards': '/images/lee/IMG_5114.JPG',
    'Blue Dragon Awards': '/images/lee/IMG_5117.JPG',
    'Asia Artist Awards': '/images/lee/IMG_5120.JPG',
    'MBC Drama Awards': '/images/lee/IMG_5123.JPG',
  },

  // News Images - Using Lee's photos for news/events
  news: {
    'Typhoon Family': '/images/lee/IMG_5110.JPG',
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

  // Fashion / Style images - Using Lee's photos
  fashion: [
    '/images/lee/IMG_5112.JPG',
    '/images/lee/IMG_5114.JPG',
    '/images/lee/IMG_5117.JPG',
    '/images/lee/IMG_5120.JPG',
    '/images/lee/IMG_5122.JPG',
    '/images/lee/IMG_5124.JPG',
  ],
};

// Helper function to get image with fallback
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

// List of cover images that need to be uploaded
export const requiredCovers = {
  music: [
    'music-can-i.jpg',
    'music-nothing-but-you.jpg',
    'music-canvas.jpg',
    'music-fire.jpg',
    'music-truelove.jpg',
    'music-when-we-meet-again.jpg',
    'music-nobody-else.jpg',
    'music-two.jpg',
    'music-feel.jpg',
  ],
  filmography: [
    'film-typhoon-family.jpg',
    'film-cashero.jpg',
    'film-king-the-land.jpg',
    'film-red-sleeve.jpg',
    'film-confession.jpg',
    'film-rain-or-shine.jpg',
    'film-good-manager.jpg',
    'film-cold-eyes.jpg',
    'film-twenty.jpg',
  ],
  awards: [
    'award-baeksang.jpg',
    'award-kbs.jpg',
    'award-blue-dragon.jpg',
    'award-aaa.jpg',
    'award-mbc.jpg',
  ],
  news: [
    'news-typhoon-family.jpg',
    'news-stunning-us.jpg',
    'news-donation.jpg',
    'news-2pm-anniversary.jpg',
    'news-netflix.jpg',
  ],
};