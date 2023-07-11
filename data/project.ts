export const projectData = [
      {
        title: "Projects",
        items: [
          {
            title: "Banking Marketing Targets",
            subTitle: "Data Analytics",
            date: "2020",
            description: "Conducted end-to-end data analysis on banking marketing targets, highlighting insights for strategic decisions. Leveraged PySpark to pull data, enhancing the efficiency and scalability of data handling. Performed exploratory data analysis and data visualization, providing intuitive understanding of underlying patterns and trends. Implemented various machine learning algorithms, achieving an average accuracy of 90%, showcasing high performance and precision in model building. Evaluated models to ensure their effectiveness and reliability, optimizing for the best performing model for predictive tasks.",
            url: "https://www.kaggle.com/code/fathurrs/banking-dataset-marketing-targets",
          },
          {
            title: "Tokopedia Flash Sale Catalogue Scrapper",
            subTitle: "Data Mining",
            date: "2021",
            description: "Fast runtime E-Commerce Flash Sale Catalogue Scrapper using Selenium & BeautifulSoup framework.",
            url: "https://github.com/fathur-rs/tokopedia_flash_sales_scrapper/blob/master/TokopediaFlashSalesScrapper.py",
          },
          {
            title: "Tweetoxicity — Sentiment Analysis",
            subTitle: "Web App",
            date: "2022",
            description: "ML-powered behavioral analysis web application. Real-time calculating Twitter account sentiment analysis using Fine-Tuned Indonesian Tweets Sentiment Classification Transformer Model achieving 95% accuracy.",
            url: "https://github.com/fathur-rs/tweetoxicity-v2",
          },
          {
            title: "Trxnslate — Handwritten Prescription Recognition",
            subTitle: "Web App",
            date: "2023",
            description: "Utilizes Fine-Tuned Vision Transformer Architecture achieving 98% accuracy. The web app allows users to upload prescription images, generating digital text output within seconds. The project incorporates Kubeflow for MLops pipeline and deployed on GCP.",
            url: "https://trxnslate-streamlit-uv7qigoz4a-et.a.run.app/",
          },
        ],
      },
  ];

  export type ContentProject = {
    title: string;
    items: {
      title: string;
      subTitle: string;
      date: string;
      description: string;
      url: string;
    }[];
  };

  export type ContentProjects = ContentProject[];
