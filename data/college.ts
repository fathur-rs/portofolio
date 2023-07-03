export const collegeData = [
  {
    title: "Education",
    items: [
      {
        title: "Bachelor's Degree in Data Science Technology",
        subTitle: "Universitas Airlangga",
        date: "2020 - Present",
        description:
          "Faculty of Advanced Technology and Multidisciplin (FTMM)",
      },
    ],
  },
  {
    title: "Organization",
    items: [
      {
        title: "Badan Pengurus Mahasiswa Teknologi Sains Data (BPHM-TSD)",
        subTitle: "Universitas Airlangga",
        date: "Mar - Dec 2022",
        description:
          "Scientific Research Staff",
      },
      {
        title: "Himpunan Mahasiswa Teknologi Sains Data (HIMATESDA)",
        subTitle: "Universitas Airlangga",
        date: "2023 - Present",
        description:
          "Head of Competition and Achievement Division Department of Research and Scientific ",
      },
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
