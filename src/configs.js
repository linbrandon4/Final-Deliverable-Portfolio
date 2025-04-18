import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Brandon Lin',
  subTitle: 'Final Deliverable Portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    dencity: 900,
  },
  navTitle: "Brandon Lin's Portfolio",
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'SCE Internship Information',
      infos: [
        " ",
        'Location: Scheller College of Business\nRole: Research Assistant\nMentor: Nan Zhao',
        'Hello, I am Brandon Lin. This is my SCE Body of Work Profilio',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download Resume'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my Resume!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL: 'https://drive.google.com/file/d/1wEbVNPdxhBc3FbCdTtXGLcTQd-ycC86K/view?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Internship Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Internship Tasks',
      footer: 'Link to the code and explanation',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/unnamed.jpg',
            websiteURL: 'https://docs.google.com/document/d/1x17N9vV4hj8Ha9bn-rRxBYsSVCzCxDf1QBziBAqXI_w/edit?usp=sharing',
          },
          {
            url: 'icons/webrescraper.png',
            websiteURL: 'https://docs.google.com/document/d/1XTEA0GxgEN5G-3ZvJ4eKBHGtoUiateZwdyxy44YlEUg/edit?usp=sharing',
          },
          {
            url: 'icons/machinelearning.png',
            websiteURL: 'https://docs.google.com/document/d/1TB6MJa9QeoHdkbZ2ZZ6UREvlwddDOk_czeb1eHlGILc/edit?usp=sharing',
          },
          {
            url: 'icons/imageAnalyzer.png',
            websiteURL: 'https://docs.google.com/document/d/1_avbJviYZJ75q_4VUgLt3XKjoKxYuz9Woov8B_JhDBI/edit?usp=sharing',
          },
          {
            url: 'icons/Microsoft_Excel_2013-2019_logo.svg.png',
            internalRoute: 'https://drive.google.com/drive/folders/1Uz7R5h_AEHiCjiEd6sRdkR97JasCM71a?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:brandon.lin9752@g.gcpsk12.org',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL: 'https://www.linkedin.com/in/brandonlin2/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/linbrandon4',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:linbrandon48@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
