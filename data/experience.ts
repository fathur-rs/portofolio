export const experienceData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Intern Backend Developer",
        subTitle: "PT Padma Pramata Indopersada",
        date: "Jun - Dec 2020",
        description: "Integrated UI elements with server-side logic, enhancing app interactivity and user experience. Increased user satisfaction and global accessibility with multi-language support in the payroll system UI. Track KPIs: improved engagement, reduced language barriers, increased adoption rates.",
      },
      {
        title: "Lab Assistant",
        subTitle: "Universitas Airlangga",
        date: "Jan - Jul 2022",
        description: "Guided and supported students in Algorithm Programming 1 through interactive lab sessions. Managed an engaging learning environment for hands-on coding practice. Provided constructive feedback to enhance student performance.",
      },
      {
        title: "Intern Text Processing Engineer",
        subTitle: "PT Central Artificial Intelligence",
        date: "Aug - Dec 2022",
        description: "Developed an 85% accurate Indonesia News Sentiment Analyzer Model, deployed via RESTful API for the Central Notula product. Created a 94% accurate Caption Sentiment Analyzer & Developed Facebook Scrapper, also deployed via RESTful API. Seamless integration of sentiment analysis models for efficient data processing and real-time insights. Easy accessibility and integration of models through RESTful APIs for scalable deployment.",
      },
      {
        title: "Bangkit Academy Cohort",
        subTitle: "Led by Google, Tokopedia, Gojek, & Traveloka",
        date: "August 2023 - Present",
        description: "Cloud Computing Learning Path",
      },
      {
        title: "Core Team - Academic Staff",
        subTitle: "GDSC Universitas Airlangga",
        date: "September 2023 - Present",
        description: "Responsible for developing the curriculum 2023/2024. Sourcing resource persons for events, and guiding members",
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
