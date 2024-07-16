export const experienceData = [
  {
    title: "Working Experience",
    items: [
      {
        title: "Backend Web Developer",
        subTitle: "PT Padma Pramata Indopersada",
        date: "Jun - Dec 2020",
        description: "Integrated UI elements with server-side logic, enhancing app interactivity and user experience. Increased user satisfaction and global accessibility with multi-language support in the payroll system UI. Track KPIs: improved engagement, reduced language barriers, increased adoption rates.",
      },
      {
        title: "Assistant Lecturer & Researcher",
        subTitle: "Universitas Airlangga",
        date: "Jan - Jul 2022",
        description: "Assisted in teaching the Algorithmic Programming subject. Contributed to published a data science paper indexed in Scopus with a score of 3.0",
      },
      {
        title: "Data Scientist",
        subTitle: "PT Central Artificial Intelligence",
        date: "Aug - Dec 2022",
        description: "Developed a Facebook scraper script using Selenium to collect profile’s data including posts, media, URLs, responses, timestamps, and friends' details. Labelled 10,000 BPOM indonesian news texts and labeled 5,000 Facebook indonesian captions data. Achieved an 85% accuracy rate for BPOM Indonesian news text and 94% for Facebook posts by fine-tuning the IndoBERT model, enhancing Central AI's sentiment analysis capabilities by 17%. Building Facebook post and BPOM Indonesian news sentiment analysis model APIs (predict, update, and create models) using Python Flask and deployed the models on Google Cloud Run. Achieved a 15% cost-saving optimization by forecasting Central AI's cloud compute usage with the ARIMA model, leading to more efficient resource allocation and improved operational efficiency",
      },
      {
        title: "Bangkit Academy Cohort",
        subTitle: "Led by Google, Tokopedia, Gojek, & Traveloka",
        date: "Aug - Dec 2023",
        description: "Join as a Cloud Computing learning path. I achieved a 92% accuracy in food image classification by developing CNN models, serving them as APIs using FastAPI, and deploying them on Google Cloud Run with Docker, resulting in efficient and scalable model implementation. Certified as an Associate Cloud Engineer by Google",
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
