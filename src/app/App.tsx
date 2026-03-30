import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black min-h-screen transition-colors">
        <Navigation />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        
        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-6">
          <div className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-400">
            <p>© 2026 Deepika Panneerselvam. Built with React and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
