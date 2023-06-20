export const projectData = [
      {
        title: "Projects",
        items: [
          {
            title: "Banking Marketing Targets",
            subTitle: "Data Analytics",
            date: "2020",
            description: "End-to-End Data Analysis. Pulling data with pySpark. Exploratory Data Analysis (EDA), Data Visualization, implementing various machine learning algorithms achieving 90% average accuracy, and model evaluation.",
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
            description: "ML-powered behavioral analysis web application. Real-time calculating Twitter account sentiment analysis using ensemble machine learning algorithm achieving 95% accuracy.",
            url: "https://tweetoxicity-streamlit-uv7qigoz4a-et.a.run.app",
          },
          {
            title: "Trxnslate — Handwritten Prescription Recognition",
            subTitle: "Web App",
            date: "2023",
            description: "Utilizes CNN VGG 16 Transfer Learning Model achieving 98% accuracy, The web app allows users to upload prescription images, generating digital text output within seconds. The project incorporates Kubeflow for MLops pipeline and deployed on GCP.",
            url: "http://bit.ly/TRxNLATE",
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