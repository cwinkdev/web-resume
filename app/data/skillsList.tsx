import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiFirebase,
  SiCss3,
  SiTailwindcss,
  SiGithub,
} from 'react-icons/si';
import {
  FaDesktop,
  FaLightbulb,
  FaHeart,
  FaPuzzlePiece,
  FaHandshake,
} from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
import { GiMeshNetwork, GiVanDammeSplit } from 'react-icons/gi';

export const skillsList = [
  {
    key: 'React',
    icon: <SiReact />,
    additionalCSS: 'w-32 text-cyan-400',
    type: 'core',
  },
  {
    key: 'Next.js',
    icon: <SiNextdotjs />,
    additionalCSS: 'w-32 text-baseText',
    type: 'core',
  },
  {
    key: 'Typescript',
    icon: <SiTypescript />,
    additionalCSS: 'w-32 text-blue-500',
    type: 'core',
  },
  {
    key: 'Tailwind',
    icon: <SiTailwindcss />,
    additionalCSS: 'w-32 text-cyan-500',
    type: 'core',
  },
  {
    key: 'API Integration',
    icon: <GiMeshNetwork />,
    additionalCSS: 'w-fit px-4 text-amber-400',
    type: 'core',
  },
  {
    key: 'Front End',
    icon: <FaDesktop />,
    additionalCSS: 'w-32 text-green-300',
    type: 'broad',
  },
  {
    key: 'CSS',
    icon: <SiCss3 />,
    additionalCSS: 'w-32 text-blue-500',
    type: 'broad',
  },
  {
    key: 'NoSQL',
    icon: <SiFirebase />,
    additionalCSS: 'w-32 text-yellow-200',
    type: 'broad',
  },
  {
    key: 'GitHub',
    icon: <SiGithub />,
    additionalCSS: 'w-32 text-purple-600',
    type: 'broad',
  },
  {
    key: 'Responsive UI/UX',
    icon: <MdDevices />,
    additionalCSS: 'w-fit px-4 text-baseText',
    type: 'broad',
  },
  {
    key: 'Creative',
    icon: <FaLightbulb />,
    additionalCSS: 'w-32 text-yellow-300',
    type: 'intangible',
  },
  {
    key: 'Passionate',
    icon: <FaHeart />,
    additionalCSS: 'w-32 text-red-300',
    type: 'intangible',
  },
  {
    key: 'Agreeable',
    icon: <FaHandshake />,
    additionalCSS: 'w-32 text-lime-300',
    type: 'intangible',
  },
  {
    key: 'Flexible',
    icon: <GiVanDammeSplit />,
    additionalCSS: 'w-32 text-violet-300',
    type: 'intangible',
  },
  {
    key: 'Problem Solving',
    icon: <FaPuzzlePiece />,
    additionalCSS: 'w-fit px-4 text-blue-300',
    type: 'intangible',
  },
];
