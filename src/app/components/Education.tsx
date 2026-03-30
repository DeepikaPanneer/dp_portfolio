import { GraduationCap, Award, ExternalLink, ShieldCheck } from 'lucide-react';

interface EducationItemProps {
  institution: string;
  location: string;
  degree: string;
  gpa: string;
  date: string;
  coursework: string;
}

function EducationItem({ institution, location, degree, gpa, date, coursework }: EducationItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-teal-500 dark:hover:border-teal-500/60 transition-all shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-teal-100 dark:bg-teal-500/10 rounded-lg">
          <GraduationCap className="w-8 h-8 text-teal-600 dark:text-teal-400" />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-1">{institution}</h3>
              <p className="text-gray-600 dark:text-gray-400">{location}</p>
            </div>
            <span className="text-gray-600 dark:text-gray-400">{date}</span>
          </div>
          
          <p className="text-xl text-teal-600 dark:text-teal-400 mb-2">{degree}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>GPA:</strong> {gpa}</p>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong className="text-teal-600 dark:text-teal-400">Coursework:</strong> {coursework}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CertificationBadge({ title, date, credentialUrl, issuer }: { title: string; date: string; credentialUrl: string; issuer: string }) {
  return (
    <div className="relative group">
      <a
        href={credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-2 border-teal-200 dark:border-teal-700 rounded-xl p-6 hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-lg transition-all"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="p-3 bg-teal-600 dark:bg-teal-500 rounded-lg">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <ExternalLink className="w-5 h-5 text-teal-600 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <h3 className="text-gray-900 dark:text-white font-semibold mb-2 leading-tight">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{issuer}</p>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
        
        <div className="mt-4 pt-4 border-t border-teal-200 dark:border-teal-800">
          <span className="text-xs text-teal-600 dark:text-teal-400 font-medium uppercase tracking-wide">
            View Credential →
          </span>
        </div>
      </a>
    </div>
  );
}

export function Education() {
  const education = [
    {
      institution: "Illinois Institute of Technology",
      location: "Chicago, IL",
      degree: "Master of Data Science",
      gpa: "3.90",
      date: "May 2025",
      coursework: "Data Preparation and Analysis, Big Data Technologies, Machine Learning, Regression, Statistics, Advance Database Organization."
    },
    {
      institution: "Coimbatore Institute of Technology",
      location: "Coimbatore, India",
      degree: "Bachelor of Technology, Information Technology",
      gpa: "3.80",
      date: "May 2021",
      coursework: "Data Structures, Database Management System, Object Oriented Programming, Cloud Computing, Data Mining and Warehousing."
    }
  ];

  const certifications = [
    { 
      title: "AWS Certified Data Engineer – Associate", 
      date: "August 2024",
      issuer: "Amazon Web Services",
      credentialUrl: "https://www.credly.com/badges/a289fc64-11a9-430b-8b22-d8f040abab03/public_url"
    },
    { 
      title: "Google Cloud Certified Cloud Digital Leader", 
      date: "February 2025",
      issuer: "Google Cloud",
      credentialUrl: "https://www.credly.com/badges/1c39aed9-4287-461a-a76b-4a9cb030dcde/public_url"
    },
    { 
      title: "AWS Certified AI Practitioner", 
      date: "September 4, 2025",
      issuer: "Amazon Web Services",
      credentialUrl: "https://www.credly.com/badges/8f65faf5-eb28-48f6-94e3-733058b9d9ed/public_url"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        
        <div className="space-y-6 mb-16">
          {education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
        
        <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
          Certifications
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Click on any badge to view the official credential
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationBadge key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
