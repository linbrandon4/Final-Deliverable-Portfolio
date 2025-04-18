export const PAGE_DEPH_MARGIN = 15;

export const EXPERIENCE = {
  rows: 2,
  separation: 1.5,
  leftPadding: -0.32,
  topPadding: 0.22,
  scale: 0.2,
  //optionally show the websiteURL inside of the cube in an Iframe
  webViewer: {
    position: [0, 0, -15],
    rotation: [Math.PI, Math.PI, Math.PI],
    height: 720,
    width: 1024,
  },
  items: [
    {
      url: 'websites-preview/singareddy_info_tech_inc_logo.jpg',
      websiteURL: null,
    },
    {
      url: 'websites-preview/uncommon.png',
      websiteURL: null,
    },
    {
      url: 'websites-preview/georgiatechscheller_logo.jpg',
      websiteURL:
        null,
    },
    {
      url: 'websites-preview/367421086_772808944844259_3488027745199451539_n.jpg',
      websiteURL:
        null,
    },
  ],
};

export const SKILLS_LIST = {
  rows: 4,
  separation: 2.4,
  leftPadding: -0.4,
  topPadding: 0.33,
  scale: 0.15,
  items: [
    { url: 'icons/Microsoft_Excel_2013-2019_logo.svg.png', websiteURL: null },
    { url: 'icons/react-logo.png', websiteURL: null },
    { url: 'icons/TensorFlow_logo.svg.png', websiteURL: null },
    { url: 'icons/js-logo.png', websiteURL: null },
    { url: 'icons/css-logo.png', websiteURL: null },
    { url: 'icons/html-logo.png', websiteURL: null },
    { url: 'icons/node-js-logo.png', websiteURL: null },
    { url: 'icons/python-logo.png', websiteURL: null },
    { url: 'icons/three-js-logo.png', websiteURL: null },
    { url: 'icons/selenium.svg', websiteURL: null },
    { url: 'icons/spring-boot-logo.png', websiteURL: null },
    { url: 'icons/181_Java_logo_logos-512.webp', websiteURL: null },
  ],
};

export const STOPS = [
  { displayPosition: 0, position: 0, name: 'Title' },
  {
    position: 0.13,
    displayPosition: 0.13,
    displayPositionOffset: -0.04,
    displayPositionOffsetEnd: -0.02,
    name: 'About',
  },
  {
    position: 0.2137,
    displayPosition: 0.2007,
    displayPositionOffset: -0.03,
    displayPositionOffsetEnd: -0.07,
    name: 'Experience',
  },
  {
    position: 0.2982,
    displayPosition: 0.232,
    displayPositionOffset: 0.05,
    displayPositionOffsetEnd: -0.12,
    name: 'Skills',
  },
  {
    position: 0.3899,
    displayPosition: 0.3009,
    displayPositionOffset: 0.08,
    displayPositionOffsetEnd: -0.17,
    name: 'Download Resume',
  },
  {
    position: 0.48,
    displayPosition: 0.29,
    displayPositionOffset: 0.18,
    displayPositionOffsetEnd: -0.15,
    name: 'Internship Projects',
  },
  {
    position: 0.592,
    displayPosition: 0.28,
    displayPositionOffset: 0.3,
    displayPositionOffsetEnd: -0.1,
    name: 'Get In Touch',
  },
  {
    position: 1,
    displayPosition: 1,
    displayPositionOffset: 0.03,
    displayPositionOffsetEnd: 0,
    name: 'Profile Picture',
  },
];

export const displayAt = (stopName) =>
  STOPS.find((stop) => stop.name === stopName);
