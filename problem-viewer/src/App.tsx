import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import problemsData from './data/problems.json';
import type { ProblemStatement, SectionKey, TabConfig } from './types';
import './App.css';

const problems: ProblemStatement[] = problemsData;

const tabs: TabConfig[] = [
  { key: 'currentTechnology', label: 'Current Technology', icon: '🔧' },
  { key: 'possibleSolutions', label: 'Possible Solutions', icon: '💡' },
  { key: 'studiesAndSuccessRate', label: 'Studies & Success Rate', icon: '📊' },
  { key: 'aiMlFusionPossibilities', label: 'AI/ML Fusion', icon: '🤖' },
];

function App() {
  const [selectedProblemIndex, setSelectedProblemIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<SectionKey>('currentTechnology');

  const currentProblem = problems[selectedProblemIndex];

  return (
    <div className="app">
      <header className="header">
        <h1>Problem Analysis Dashboard</h1>
        <div className="problem-selector">
          <label htmlFor="problem-select" className="problem-selector-label">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
            Problem Statement
          </label>
          <select
            id="problem-select"
            value={selectedProblemIndex}
            onChange={(e) => {
              setSelectedProblemIndex(Number(e.target.value));
              setActiveTab('currentTechnology');
            }}
          >
            {problems.map((problem, index) => (
              <option key={index} value={index}>
                {problem.problemTitle}
              </option>
            ))}
          </select>
        </div>
      </header>

      <nav className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      <main className="content">
        <article className="markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {currentProblem[activeTab]}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}

export default App;
