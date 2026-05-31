export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  duration: string;
  youtubeId: string;
  album: string;
  year: string;
  coverUrl: string;
}

export const defaultTracks: MusicTrack[] = [
  { 
    id: '1', 
    title: 'Can I', 
    artist: 'LEE JUNHO', 
    duration: '3:40',
    youtubeId: 'SVar8xIk60Q',
    album: 'Can I',
    year: '2023',
    coverUrl: '/images/lee/IMG_5110.JPG'  // Lee photo as cover
  },
  { 
    id: '2', 
    title: 'Nothing But You', 
    artist: 'LEE JUNHO', 
    duration: '4:04',
    youtubeId: 'VWytW6dtgpA',
    album: 'Nothing But You',
    year: '2023',
    coverUrl: '/images/lee/IMG_5115.JPG'  // Lee photo as cover
  },
  { 
    id: '3', 
    title: 'Did You See The Rainbow?', 
    artist: 'LEE JUNHO', 
    duration: '3:40',
    youtubeId: '9K7tSKerGjU',
    album: 'Typhoon Family OST',
    year: '2025',
    coverUrl: '/images/lee/IMG_5120.JPG'  // Lee photo as cover
  },
  { 
    id: '4', 
    title: 'Canvas', 
    artist: 'LEE JUNHO', 
    duration: '3:30',
    youtubeId: 'ExoVy0Mx4Tc',
    album: 'CANVAS',
    year: '2017',
    coverUrl: '/images/lee/IMG_5125.JPG'  // Lee photo as cover
  },
  { 
    id: '5', 
    title: 'Fire', 
    artist: 'LEE JUNHO', 
    duration: '3:45',
    youtubeId: 'tOdawMOeTJg',
    album: 'FEEL',
    year: '2014',
    coverUrl: '/images/lee/IMG_5130.JPG'  // Lee photo as cover
  },
  { 
    id: '6', 
    title: 'Truelove', 
    artist: 'LEE JUNHO', 
    duration: '4:11',
    youtubeId: 'hyx8MScf_74',
    album: 'Rain or Shine OST',
    year: '2018',
    coverUrl: '/images/lee/IMG_5135.JPG'  // Lee photo as cover
  },
  { 
    id: '7', 
    title: 'When We Meet Again', 
    artist: 'LEE JUNHO', 
    duration: '3:47',
    youtubeId: 'kZauIKd3OnA',
    album: 'The Day We Meet Again',
    year: '2024',
    coverUrl: '/images/lee/IMG_5140.JPG'  // Lee photo as cover
  },
  { 
    id: '8', 
    title: 'Nobody Else', 
    artist: 'LEE JUNHO', 
    duration: '4:10',
    youtubeId: '-2pNlxmhduY',
    album: 'JUNHO THE BEST',
    year: '2018',
    coverUrl: '/images/lee/IMG_5145.JPG'  // Lee photo as cover
  },
];