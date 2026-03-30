import { FolderGit2, ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  date: string;
  description: string[];
  techStack: string;
}

function ProjectCard({ title, date, description, techStack }: ProjectProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-teal-500 dark:hover:border-teal-500/60 transition-all group shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <FolderGit2 className="w-8 h-8 text-teal-600 dark:text-teal-400" />
          <div>
            <h3 className="text-xl text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              {title}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-500">{date}</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
          <ExternalLink className="w-5 h-5" />
        </button>
      </div>
      
      <ul className="space-y-2 mb-4">
        {description.map((item, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex gap-2">
            <span className="text-teal-600 dark:text-teal-400 mt-1">•</span>
            <span dangerouslySetInnerHTML={{ __html: item }}></span>
          </li>
        ))}
      </ul>
      
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-teal-600 dark:text-teal-400">Tech Stack:</strong> {techStack}
        </p>
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Stock Market Data Pipeline using Kafka and AWS",
      date: "March 2025",
      description: [
        "Designed a real-time pipeline in Python to simulate live trading data, stream via Kafka, and store securely in S3 buckets.",
        "Used AWS Glue to crawl and catalog S3 data, enabling fast, structured querying and analysis using Amazon Athena with ease."
      ],
      techStack: "Python, Pandas, Apache Kafka (on AWS EC2), AWS S3, AWS Glue (Crawler + Data Catalog), AWS Athena."
    },
    {
      title: "Multilabel Predictions on Academic Articles",
      date: "April 2024",
      description: [
        "Multi-label classification model that processes academic articles using TF-IDF vectorization and BERT to train the models for predicting article's subjects.",
        "Model performance is evaluated with precision, recall, and F1-score metrics; Matplotlib visualizations to understand label distribution and EDA."
      ],
      techStack: "Machine Learning, NLP, Python, Pandas, NumPy, BERT, scikit-learn, Matplotlib."
    },
    {
      title: "Predictions for the 2023 ICC Cricket World Cup",
      date: "November 2023",
      description: [
        "Built an R-based machine learning model to predict ICC World Cup 2023 outcomes using historical team data and visualized insights.",
        "Trained Random Forest models including team stats, venue, toss, pitch data to improve prediction accuracy and performance of match outcomes."
      ],
      techStack: "R, Random Forest, ggplot, Tidyverse."
    },
    {
      title: "Heart Attack Risk Prediction",
      date: "April 2024",
      description: [
        "Built a predictive model to assess the risk of heart attack based on patient health metrics, enabling early identification of high-risk individuals.",
        "Leveraged statistical analysis and supervised learning techniques to uncover key risk factors, improving the interpretability and accuracy of predictions.",
        "This project demonstrates the potential of data-driven approaches in advancing preventive healthcare and personalized risk assessment."
      ],
      techStack: "Python, Pandas, Scikit-learn, Data Analytics, Machine Learning."
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
