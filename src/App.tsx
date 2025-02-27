import React from 'react';
import './App.css';
import TripleConstraintToggle from './components/TripleConstraintToggle';

// This is the main App component for the Fast, Good, Cheap project
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Management Triangle</h1>
        <h2>Fast, Good, Cheap: Pick Two</h2>
        
        <div className="app-container">
          <TripleConstraintToggle />
          
          <div className="explanation">
            <p>In project management, you can only optimize for two constraints:</p>
            <ul>
              <li><span className="fast-text">Fast</span> + <span className="good-text">Good</span> = Expensive (not cheap)</li>
              <li><span className="fast-text">Fast</span> + <span className="cheap-text">Cheap</span> = Low quality (not good)</li>
              <li><span className="good-text">Good</span> + <span className="cheap-text">Cheap</span> = Slow (not fast)</li>
            </ul>
            
            <div className="additional-info">
              <p>This concept is also known as the "Triple Constraint" and illustrates the inherent tradeoffs in any project:</p>
              <ul>
                <li><strong>Fast</strong> - Speed of delivery</li>
                <li><strong>Good</strong> - Quality of implementation</li>
                <li><strong>Cheap</strong> - Resource efficiency</li>
              </ul>
              <p>Try selecting different combinations to see how they affect your project!</p>
            </div>
          </div>
        </div>
        
        <footer className="app-footer">
          <p>Built with React & TypeScript</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
