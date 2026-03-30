import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  company: string;
  location: string;
  role: string;
  period: string;
  achievements: string[];
}

function ExperienceItem({ company, location, role, period, achievements }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-teal-300 dark:border-teal-500/40 last:pb-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-teal-600 dark:bg-teal-500 rounded-full border-4 border-gray-50 dark:border-black"></div>
      
      <div className="mb-4">
        <h3 className="text-2xl text-gray-900 dark:text-white mb-2">{company}</h3>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span className="font-semibold text-teal-600 dark:text-teal-400">{role}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
        </div>
      </div>
      
      <ul className="space-y-3">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed flex gap-3">
            <span className="text-teal-600 dark:text-teal-400 mt-1">▹</span>
            <span dangerouslySetInnerHTML={{ __html: achievement }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  const experiences = [
    {
      company: "Starplot",
      location: "Chicago, USA",
      role: "Data Engineer",
      period: "October 2025 - Present",
      achievements: [
        "Supported Starplot's mission of delivering a <strong>unified partnership management</strong> system that helps organizations manage partners and customers in one platform.",
        "Built a <strong>TAG (Table-Augmented Generation) based system</strong> for the Starplot dashboard, enabling users to query and retrieve insights directly from relational databases.",
        "Prepared and structured <strong>organizational datasets</strong> for the upcoming Marketplace feature to ensure clean and consistent data flows.",
        "Contributed to <strong>full-stack development</strong> using <strong>React</strong> and <strong>Laravel</strong> frameworks, enabling faster product updates and a more seamless platform experience."
      ]
    },
    {
      company: "Urban Institute",
      location: "Washington DC, USA",
      role: "Data Engineering Intern",
      period: "June 2024 - November 2024",
      achievements: [
        "Modernized the <strong>8-year-old EMR cluster</strong> provisioning system by automating version updates for RStudio, R, and EMR via custom APIs, delivering the upgrade two months early while reducing manual effort by 50% and improving workload speed by 25%.",
        "Designed and implemented <strong>AWS Step Functions</strong> to orchestrate EMR cluster and EC2 instance creation, streamlining automation setup and execution. This enabled the team to accelerate troubleshooting and reduced the manual intervention.",
        "Built a <strong>CI/CD pipeline</strong> using <strong>AWS SAM</strong> and <strong>GitHub Actions</strong>, fully automating deployments, cutting the release time by 60%."
      ]
    },
    {
      company: "Dun & Bradstreet",
      location: "Hyderabad, India",
      role: "Data Engineer",
      period: "August 2021 - July 2023",
      achievements: [
        "Improved <strong>data pipelines</strong> by adding key business features and restructuring data models, resulting in better and smoother access for analytics.",
        "Deployed <strong>3 end-to-end ETL pipelines</strong> into production using <strong>PySpark, Snowflake, AWS</strong> and <strong>Airflow</strong>, improving data delivery.",
        "Orchestrated workflows using <strong>Apache Airflow</strong> and contributed to <strong>Snowflake data modeling</strong> to streamline pipelines and improve query efficiency, enhancing overall system performance for large-scale data operations.",
        "Reduced production failure by <strong>30%</strong> by identifying and prioritizing issues through <strong>debugging</strong> and <strong>performance tuning</strong>.",
        "Handled diverse file formats—including <strong>nested JSON, CSV,</strong> and <strong>Parquet</strong>—within automated <strong>data ingestion</strong> workflows using <strong>AWS Lambda</strong>, enabling seamless integration of high-volume datasets from multiple enterprise sources.",
        "Set up end-to-end <strong>CI/CD pipelines</strong> using <strong>Jenkins</strong>, ensuring version control and automated testing, enabling faster deployments.",
        "Created <strong>SQL scripts</strong> to validate data pipelines, ensure data accuracy, <strong>compliance,</strong> and <strong>data governance</strong>- reducing manual checks by approximately 40% and strengthening overall data quality across production environments."
      ]
    },
    {
      company: "Dun & Bradstreet",
      location: "Hyderabad, India",
      role: "Data Engineer Intern",
      period: "February 2021 - August 2021",
      achievements: [
        "Documented <strong>6 ETL</strong> workflows with <strong>PySpark</strong> and <strong>Snowflake</strong>, improving knowledge transfer and reducing onboarding time.",
        "Monitored production jobs using <strong>AWS CloudWatch</strong> and <strong>SQL validation</strong>, cutting data issues and potential downtime by ~50%.",
        "Collaborated closely with <strong>stakeholders</strong> and <strong>senior engineers</strong> to develop scalable pipelines for high-impact, critical tasks."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-12">
          Experience
        </h2>
        
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
