export const skillData = [
  {
    title: "Skills",
    items: [
      {
        skill: "Python",
      },
      {
        skill: "R",
      },
      {
        skill: "Git/Github",
      },
      {
        skill: "MySQL",
      },
      {
        skill: "Data Mining",
      },
      {
        skill: "Machine Learning",
      },
      {
        skill: "RESTful API",
      },
      {
        skill: "IBM SPSS",
      },
      {
        skill: "A/B Testing",
      },
      {
        skill: "Inferential Statistics",
      },
      {
        skill: "Kubeflow",
      },
      {
        skill: "Apache Spark",
      },
      {
        skill: "Docker",
      },
      {
        skill: "Google Cloud Platform",
      },
      {
        skill: "MLOps",
      },
      {
        skill: "Microsoft Office",
      },
    ],
  },
];

export type ContentSkill = {
  title: string;
  items: {
    skill: string;
  }[];
};

export type ContentSkills = ContentSkill[];
