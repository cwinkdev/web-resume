export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  keyFeatures: string[];
  techStack: {
    core?: string[];
    frontend?: string[];
    backend?: string[];
    cloud?: string[];
    deployment?: string[];
    packages?: string[];
    thirdParty?: string[];
    developmentTools?: string[];
  };
  technicalHighlights?: string[];
}

export const projects: Project[] = [
  {
    title: 'DIG',
    description: 'A full-stack web app that recreates the randomness and discovery of record hunting in a virtual setting. Users can discover, listen to, and save albums in virtual crates. The app also enhances real-world crate digging with an album scanner that uses image recognition to identify albums and provide details, track previews, and links to online retailers.',
    image: './digHomeW.png',
    link: 'https://dig-in-the-crate.vercel.app',
    keyFeatures: [
      'Virtual crate digging with custom randomization algorithm and advanced filtering by genre, popularity, and release decade',
      'Album sleeve scanner using Google Vision API for real-time image recognition and album identification',
      'Interactive album browsing with detailed views, track previews, and custom music player with waveform visualization',
      'User crates with Firebase authentication, custom virtual crate creation, and one-click export to Spotify',
      'Fully responsive design with mobile-first approach and real-time track previews'
    ],
    techStack: {
      frontend: ['React 18.2.0', 'Next.js 14.1.0 (App Router)', 'TypeScript 5.3.3', 'Tailwind CSS 3.4.1'],
      backend: ['Next.js API Routes', 'Firebase Authentication & Firestore'],
      thirdParty: ['Spotify Web API', 'Google Cloud Vision API'],
      packages: ['react-icons', 'react-select', 'react-toastify', 'react-webcam', 'react-swipeable', 'Swiper.js', 'wavesurfer.js'],
      developmentTools: ['ESLint', 'Vercel', 'Winston', 'Vercel Analytics']
    },
    technicalHighlights: [
      'Custom album randomization algorithm for discovery with advanced filtering capabilities',
      'Google Vision API integration for real-time album cover recognition and identification',
      'Custom-built music player with waveform visualization and real-time track previews',
      'Firebase authentication with Google OAuth and persistent virtual crate storage',
      'Seamless Spotify integration with one-click album export to Liked Albums'
    ]
  },
  {
    title: 'Music Bingo Pro',
    description: 'A full-stack web application that enables DJs and event hosts to create, manage, and host music bingo games. Features custom bingo card generation from Spotify playlists, digital QR code distribution, printable cards, subscription management, and integrated payment processing.',
    image: './mpg0.png',
    link: 'https://www.musicbingopro.com/',
    keyFeatures: [
      'Custom bingo card generation from music playlists with randomized square distribution and Spotify API integration',
      'Dual distribution system: Digital cards via QR codes and printable physical cards with business card customization',
      'Stripe subscription system ($5/month Pro tier) with full lifecycle management and integrated tipping via Stripe and PayPal',
      'Interactive digital cards with real-time square marking, color customization, and multi-round game session management',
      'User authentication and session management with Supabase, responsive design optimized for all devices'
    ],
    techStack: {
      frontend: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS'],
      backend: ['Next.js API Routes', 'Supabase (Auth & Database)'],
      thirdParty: ['Spotify Web API', 'Stripe API', 'PayPal SDK'],
      packages: ['@supabase/supabase-js', '@stripe/stripe-js', '@paypal/react-paypal-js', 'react-qr-code', 'react-to-print', 'react-beautiful-dnd'],
      developmentTools: ['ESLint', 'Prettier', 'PostCSS', 'TypeScript']
    },
    technicalHighlights: [
      'Custom bingo card generation algorithm with randomized square distribution from Spotify playlists',
      'Dual distribution system supporting both digital QR code cards and printable physical formats',
      'Stripe subscription management with full lifecycle handling for Pro tier ($5/month)',
      'Integrated payment processing with both Stripe and PayPal for host tipping functionality',
      'Mobile-first responsive design with secure user authentication through Supabase'
    ]
  },
  {
    title: 'DJ Gaspar Productions',
    description: 'A modern, responsive business website for DJ Gaspar Productions. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Features service pages, a booking system with Calendly, an image gallery, vendor directory, testimonials, and an about page.',
    image: './djgaspar.png',
    link: 'https://djgaspar.vercel.app',
    keyFeatures: [
      'Service showcase pages with three service types (DJ Performances, Formal Events, Music Bingo) with descriptions, packages, and extras',
      'Integrated booking system with Calendly integration featuring event type selection and form prefill',
      'Dynamic image gallery with masonry layout, responsive breakpoints, and error handling',
      'Vendor directory with curated vendor list including contact info, social links, and website links',
      'Parallax scrolling effects on hero sections and responsive mobile-first design optimized for all screen sizes'
    ],
    techStack: {
      frontend: ['Next.js 14.1.0 (App Router)', 'React 18.2.0', 'TypeScript', 'Tailwind CSS'],
      backend: ['Next.js API Routes'],
      thirdParty: ['React Calendly 4.3.0', 'Vercel Analytics 1.2.2'],
      packages: ['react-icons 5.0.1', 'react-masonry-css 1.0.16', 'react-parallax 3.5.1'],
      developmentTools: ['ESLint', 'Prettier', 'PostCSS', 'Autoprefixer']
    },
    technicalHighlights: [
      'Modern Next.js 14 App Router implementation for optimal performance and SEO',
      'React Context API for app-wide state management (navigation, booking, Calendly)',
      'Parallax scrolling effects using React Parallax library for engaging visual experience',
      'Masonry gallery layout with responsive breakpoints and error handling',
      'Integrated Calendly booking system with event type selection and form prefill for streamlined user experience'
    ]
  },
  {
    title: 'TPL Assessment Tool',
    description: 'Full-stack web application for Technology Performance Level (TPL) assessments. Enables organizations to evaluate technology performance and commercial readiness through structured, hierarchical assessments with weighted scoring, confidence intervals, and detailed analytics.',
    image: './tpl0.png',
    link: 'https://tpltest.azurewebsites.net/',
    keyFeatures: [
      'Hierarchical assessment system with multi-level capability structures, weighted scoring, and confidence-based calculations',
      'Template editor with visual interface for creating custom assessment templates and interactive weight distribution charts',
      'Guided multi-step assessment workflow with real-time progress tracking and auto-complete functionality',
      'Comprehensive reporting and analytics with visual data representation, threshold analysis, and Excel export',
      'Role-based access control (Admin/Assessor/Checker) with centralized question bank and capability linking'
    ],
    techStack: {
      frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'DaisyUI', 'Recharts', 'React Router'],
      backend: ['Node.js', 'Express.js', 'TypeScript', 'MySQL'],
      thirdParty: ['Azure Web Apps', 'Azure MySQL Flexible Server', 'Azure Key Vault', 'ARM Templates'],
      packages: ['DaisyUI', 'Recharts'],
      developmentTools: ['TypeScript', 'ESLint']
    },
    technicalHighlights: [
      'Full TypeScript implementation across frontend and backend with RESTful API architecture',
      'Recursive database queries for hierarchical data structures and complex assessment calculations',
      'Azure cloud deployment with Infrastructure as Code (ARM Templates)',
      'Secure credential management with Azure Key Vault integration',
      'Responsive, mobile-first design with comprehensive reporting and analytics'
    ]
  }
];

