export const projectData = [
      {
        title: "Projects",
        items: [
          {
            title: "Banking Marketing Targets",
            subTitle: "Data Analytics",
            date: "2020",
            description: "Conducted end-to-end data analysis on banking marketing targets, highlighting insights for strategic decisions. Performed exploratory data analysis and data visualization, providing intuitive understanding of underlying patterns and trends. Implemented various machine learning algorithms, achieving an average accuracy of 90%, showcasing high performance and precision in model building. Evaluated models to ensure their effectiveness and reliability, optimizing for the best performing model for predictive tasks.",
            url: "https://www.kaggle.com/code/fathurrs/banking-dataset-marketing-targets",
          },
          {
            title: "Tokopedia Flash Sale Catalogue Scrapper",
            subTitle: "Data Mining",
            date: "2021",
            description: "Built a fast Tokopedia Flash Sale Catalogue Scrapper. Leveraged Selenium & BeautifulSoup for efficient data mining. Optimized for speedy data collection from e-commerce sales.",
            url: "https://github.com/fathur-rs/tokopedia_flash_sales_scrapper/blob/master/TokopediaFlashSalesScrapper.py",
          },
          {
            title: "Tweetoxicity — Sentiment Analysis",
            subTitle: "Web App",
            date: "2022",
            description: "Developed ML-powered Tweetoxicity web app for behavioral analysis. Enabled real-time Twitter scrapper. Utilized a fine-tuned Transformer Model for Indonesian tweets. Achieved a high accuracy of 95%.",
            url: "https://github.com/fathur-rs/tweetoxicity-v2",
          },
          {
            title: "Trxnslate — Handwritten Prescription Recognition",
            subTitle: "Web App",
            date: "2023",
            description: "Built Trxnslate, a prescription recognition web app. Utilized Fine-Tuned Vision Transformer, achieving 98% accuracy. Enabled swift digital conversion of uploaded prescription images. Integrated Kubeflow for MLops pipeline. Deployed on GCP for cloud-based operation.",
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
