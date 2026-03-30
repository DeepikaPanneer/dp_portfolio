import { Database, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-2xl opacity-20 dark:opacity-30"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500 dark:border-teal-400 shadow-2xl">
                <ImageWithFallback
                  src="deepika.png"
                  alt="Deepika Panneerselvam - Data Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-teal-600 dark:bg-teal-500 text-white p-4 rounded-2xl shadow-xl">
                <Database className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-1 bg-teal-600 dark:bg-teal-400"></div>
              <span className="text-teal-600 dark:text-teal-400 uppercase tracking-wider font-semibold">Data Engineer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl mb-4 text-gray-900 dark:text-white">
              Deepika Panneerselvam
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Dynamic Data Engineer with 3+ years of experience designing, building, and optimizing high-impact data pipelines across cloud and
              big-data ecosystems. The specialty includes developing scalable ETL workflows using PySpark and Snowflake, modernizing legacy
              systems on AWS, automating deployments with CI/CD, and enabling reliable, analytics-ready datasets for enterprise use cases.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 rounded-lg text-teal-700 dark:text-teal-300 font-medium">
                PySpark
              </span>
              <span className="px-4 py-2 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 rounded-lg text-teal-700 dark:text-teal-300 font-medium">
                Snowflake
              </span>
              <span className="px-4 py-2 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 rounded-lg text-teal-700 dark:text-teal-300 font-medium">
                AWS
              </span>
              <span className="px-4 py-2 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 rounded-lg text-teal-700 dark:text-teal-300 font-medium">
                Apache Airflow
              </span>
              <span className="px-4 py-2 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 rounded-lg text-teal-700 dark:text-teal-300 font-medium">
                CI/CD
              </span>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>Chicago, IL</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <a href="mailto:deepikapanneerselvam6@gmail.com" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Email Me
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/deepika-panneerselvam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded-lg transition-colors shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/DeepikaPanneer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors shadow-lg"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
