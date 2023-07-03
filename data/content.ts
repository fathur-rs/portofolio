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
        description: "• Building Indonesia News Sentiment Analyzer Model achieving 85% accuracy and deploying it with Flask API. Building Facebook Scrapper and Facebook Caption Sentiment Analyzer Model achieving 94% accuracy and deploying it with Flask API.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Bachelor's Degree in Data Science Technology",
        subTitle: "Universitas Airlangga",
        date: "2020 - Present",
        description: "Faculty of Advanced Technology and Multidisciplin (FTMM).",
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
