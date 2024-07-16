export const skillData = [
  {
    title: "Skills",
    items: [
      { item: "A/B Testing" },
      { item: "ANOVA" },
      { item: "ARIMA" },
      { item: "Computer Vision" },
      { item: "Data Mining" },
      { item: "Data Visualization" },
      { item: "Data Preprocessing" },
      { item: "Data Wrangling" },
      { item: "Deep Learning" },
      { item: "Descriptive Statistics" },
      { item: "ETL" },
      { item: "Git" },
      { item: "Inferential Statistics" },
      { item: "Large Language Models" },
      { item: "MLOps" },
      { item: "Model Architecture" },
      { item: "NLP" },
      { item: "SQL" },
      { item: "Supervised ML" },
      { item: "Unsupervised ML" },
    ],
  },
  {
    title: "Tools",
    items: [
      { item: "BigQuery" },
      { item: "Docker" },
      { item: "Flask" },
      { item: "FastAPI" },
      { item: "GitHub/GitLab" },
      { item: "Google Cloud Platforms" },
      { item: "Hadoop" },
      { item: "HuggingFace Transformers" },
      { item: "Kubeflow" },
      { item: "MATLAB" },
      { item: "MongoDB" },
      { item: "MySQL" },
      { item: "PostgreSQL" },
      { item: "Power BI" },
      { item: "Prophet" },
      { item: "PyTorch" },
      { item: "SPSS" },
      { item: "Spark" },
      { item: "Tableau" },
      { item: "Tensorflow" },
      { item: "Vertex AI" },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { item: "Python" },
      { item: "R" },
      { item: "MATLAB" },
      { item: "JS" },
      { item: "HTML" },
      { item: "CSS" },
    ],
  },
];

export interface ContentSkill {
  title: string;
  items: { item: string }[];
}

export type ContentSkills = ContentSkill[];
