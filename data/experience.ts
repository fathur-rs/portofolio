export const experienceData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Intern Backend Developer",
        subTitle: "PT Padma Pramata Indopersada",
        date: "Jun - Dec 2020",
        description: "Integrating user-interface elements with server-side logic. Implementing multi-language option into the production stage on their payroll system UI.",
      },
      {
        title: "Lab Assistant",
        subTitle: "Universitas Airlangga",
        date: "Jan - Jul 2022",
        description: "Responsible for practicum Programming Algorithm 1 course carrying out teaching activities to practitioners as an assist. Guiding practitioners in practical activities.",
      },
      {
        title: "Intern Text Processing Engineer",
        subTitle: "PT Central Artificial Intelligence",
        date: "Aug - Dec 2022",
        description: "Building Indonesia News Sentiment Analyzer Model achieving 85% accuracy and deploying it with Flask API. Building Facebook Scrapper and Facebook Caption Sentiment Analyzer Model achieving 94% accuracy and deploying it with Flask API.",
      },
    ],
  },
];

export type ContentExperience = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentExperiences = ContentExperience[];
