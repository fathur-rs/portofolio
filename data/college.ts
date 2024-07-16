export const collegeData = [
  {
    title: "Education",
    items: [
      {
        title: "SMA Negeri 34 Jakarta",
        subTitle: "State School",
        date: "2017 - 2020",
        description:
          "",
      },
      {
        title: "Bachelor's Degree in Data Science Technology",
        subTitle: "Universitas Airlangga",
        date: "2020 - 2024",
        description:
          "GPA: 3.7/4.0. Graduated with cumlaude",
      },
    ],
  },
  {
    title: "Organization",
    items: [
      {
        title: "Badan Pengurus Mahasiswa Teknologi Sains Data",
        subTitle: "Universitas Airlangga",
        date: "Mar - Dec 2022",
        description:
          "Scientific Research Staff. Appointed as the Head of the Competition Division for the national Data Driven Analytics Competition, involving more than 35 teams.",
      },
      {
        title: "Himpunan Mahasiswa Teknologi Sains Data",
        subTitle: "Universitas Airlangga",
        date: "Jan - Dec 2023",
        description:
          "Head of the Competition and Achievement Department of Research and Scientific. Appointed as the Person in Charge of national-scale data science competitions, namely DATAQUEST, involving over 100 teams. Successfully implemented a tutoring program that assisted fellow college students in preparing for midterm and final exams", 
      },
      {
        title: "Academic Core Team",
        subTitle: "Google Developer Student Club UNAIR",
        date: "Sep - Dec 2023",
        description:
          "Speaker at Fireside Chat: Python 101. Developed and managed the machine learning path curriculum"
      }
    ],
  },
];

export type ContentCollege = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentColleges = ContentCollege[];
