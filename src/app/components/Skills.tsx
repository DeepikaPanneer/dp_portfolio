import { Code, Database, Cloud, Workflow, BarChart3 } from 'lucide-react';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
}

function SkillCategory({ icon, title, skills, color }: SkillCategoryProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-teal-500 dark:hover:border-teal-500/60 transition-all shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl text-gray-900 dark:text-white">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6 text-teal-500 dark:text-teal-400" />,
      title: "Programming Languages & Libraries",
      skills: ["Python", "Advanced SQL", "PySpark", "Pandas", "NumPy", "R", "Bash scripting", "Jupyter Notebooks"],
      color: "bg-teal-500/10 dark:bg-teal-500/20"
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
      title: "Big Data Technologies & Databases",
      skills: ["Apache Spark", "Databricks", "Hadoop", "Snowflake", "MySQL"],
      color: "bg-emerald-500/10 dark:bg-emerald-500/20"
    },
    {
      icon: <Cloud className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
      title: "Cloud Services",
      skills: [
        "AWS Lambda",
        "AWS EMR",
        "AWS Step Functions",
        "AWS SAM",
        "AWS S3",
        "AWS CloudFormation",
        "GCP BigQuery",
        "Cloud Functions",
        "GCS",
        "Dataproc",
        "Pub/Sub"
      ],
      color: "bg-cyan-500/10 dark:bg-cyan-500/20"
    },
    {
      icon: <Workflow className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
      title: "Automation & Orchestration",
      skills: ["Apache Airflow", "Jenkins", "Git", "GitHub", "GitHub Actions", "Jira", "Docker"],
      color: "bg-amber-500/10 dark:bg-amber-500/20"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-rose-500 dark:text-rose-400" />,
      title: "Data Visualization",
      skills: ["Microsoft Excel", "Tableau", "Superset"],
      color: "bg-rose-500/10 dark:bg-rose-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
