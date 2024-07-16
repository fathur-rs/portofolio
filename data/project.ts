export const projectData = [
      {
        title: "Projects",
        items: [
          {
            title: "Banking Marketing Targets",
            subTitle: "Data Analysis",
            date: "2020",
            description: "Conducted end-to-end data analysis on banking marketing targets, highlighting insights for strategic decisions. Performed exploratory data analysis and data visualization, providing intuitive understanding of underlying patterns and trends. Implemented various machine learning algorithms, achieving an average accuracy of ~81%, showcasing high performance and precision in model building. Evaluated models to ensure their effectiveness and reliability, optimizing for the best performing model for predictive tasks.",
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
            title: "Tweetoxicity",
            subTitle: "Natural Language Processing",
            date: "2022",
            description: "Tweetoxicity is a program that utilizes machine learning to analyzes Twitter/X user sentiment’s throught their recents tweets or retweets, Tweetoxicity can also analyze topics or hashtags. Scraped over 20,000 tweets, including likes, retweet counts, quotes, tweet text, and usernames across diverse topics using Selenium to create a text dataset. Incorporated human and two pre-trained Indonesian text transformer sentiment analysis models (IndoBERT and IndoRoBERTa) for labeling 20,000 tweets text, with a final sentiment label determined using a voting mechanism. Achieved 93% accuracy in sentiment classification (negative, neutral, positive) by fine-tuning Distilled IndoBERT on labeled Indonesian tweets, resulting in 3x faster inferencing time and a 27% reduction in model size compared to other BERT models",
            url: "https://github.com/fathur-rs/Tweetoxicity-2.0",
          },
          {
            title: "TRxNSLATE",
            subTitle: "Computer Vision",
            date: "2023",
            description: "TRxNSLATE is a program that can read handwritten medical prescriptions by converting them into digital text and feeding them into a large language model to decipher their meaning for the nuanced audience. Trained a YOLOv10 model, achieving 85% accuracy in detecting drug names, dosages, and instructions, and trained a TrOCR model to convert detected handwritten medical text to digital text with 98% accuracy. Fine-tuned MedLlama2 LLM to generate prescription explanations ",
            url: "https://github.com/fathur-rs/TRxNSLATE-2.0",
          },
          {
            title: "nitter-harvest: Twitter Scrapper Modules",
            subTitle: "Python Modules",
            date: "2023",
            description: "Fast runtime Twitter data scraper includes: user, topic, and hashtag scraper. No login/authentication is required; simply query what you need, and the program will return the output. Built with the Selenium and bs4 libraries",
            url: "https://github.com/fathur-rs/nitter-harvest",
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
