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
          <label htmlFor="problem-select">Select Problem:</label>
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
