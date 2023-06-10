export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Lab Assistant at Universitas Airlangga",
        subTitle: "On Site",
        date: "Jan - Jul 2022",
        description: "Responsible for practicum programming algorithm 1 course carry out teaching activities to practitioners as assist and guide practitioners in practical activities.",
      },
      {
        title: "Intern Text Processing Engineer at Central AI",
        subTitle: "Remote",
        date: "Aug - Dec 2022",
        description: "Building Indonesia News Sentiment Analyzer Model achieving 85% accuracy and deploying it with Flask API. Building Facebook Scrapper and Facebook Caption Sentiment Analyzer Model achieving 94% accuracy and deploying it with Flask API.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Bachelor's Degree in Data Science Technology",
        subTitle: "University Airlangga",
        date: "2020 - Present",
        description: "Faculty of Advanced Technology and Multidisciplin (FTMM).",
      },
    ],
  },
    // @NOTE: You can add more sections here
    {
      title: "Projects",
      items: [
        {
          title: "Banking Marketing Targets",
          subTitle: "Data Analytics",
          date: "2020",
          description: "End-to-End Data Analysis. Pulling data with pySpark. Exploratory Data Analysis (EDA), Data Visualization, implementing various machine learning algorithms achieving 90% average accuracy, and model evaluation.",
        },
        {
          title: "Tokopedia Flash Sale Catalogue Scrapper",
          subTitle: "Data Mining",
          date: "2021",
          description: "Fast runtime E-Commerce Flash Sale Catalogue Scrapper using Selenium & BeautifulSoup framework.",
        },
        {
          title: "Tweetoxicity — ML  Sentiment Based",
          subTitle: "Web App",
          date: "2022",
          description: "ML-powered behavioral analysis web application. Real-time calculating Twitter account sentiment analysis using ensemble machine learning algorithm achieving 95% accuracy.",
        },
        {
          title: "Trxnslate — Automated Handwritten Prescription Recognition",
          subTitle: "Web App",
          date: "2023",
          description: "Utilizes CNN VGG 16 Transfer Learning Model achieving 98% accuracy, The web app allows users to upload prescription images, generating digital text output within seconds. The project incorporates Kubeflow for MLops pipeline and deployed on GCP.",
        },
      ],
    },
];

export const  contentDataSkill = [
  {
    title: "Projects",
    items: [
      {
        title: "Banking Marketing Targets",
        subTitle: "Data Analytics",
        date: "2020",
        description: "End-to-End Data Analysis. Pulling data with pySpark. Exploratory Data Analysis (EDA), Data Visualization, implementing various machine learning algorithms achieving 90% average accuracy, and model evaluation.",
      },
      {
        title: "Tokopedia Flash Sale Catalogue Scrapper",
        subTitle: "Data Mining",
        date: "2021",
        description: "Fast runtime E-Commerce Flash Sale Catalogue Scrapper using Selenium & BeautifulSoup framework.",
      },
      {
        title: "Tweetoxicity — ML  Sentiment Based",
        subTitle: "Web App",
        date: "2022",
        description: "ML-powered behavioral analysis web application. Real-time calculating Twitter account sentiment analysis using ensemble machine learning algorithm achieving 95% accuracy.",
      },
      {
        title: "Trxnslate — Automated Handwritten Prescription Recognition",
        subTitle: "Web App",
        date: "2023",
        description: "Utilizes CNN VGG 16 Transfer Learning Model achieving 98% accuracy, The web app allows users to upload prescription images, generating digital text output within seconds. The project incorporates Kubeflow for MLops pipeline and deployed on GCP.",
      },
    ],
  },
];


export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
