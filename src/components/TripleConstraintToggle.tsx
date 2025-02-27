import React, { useState, useEffect } from 'react';
import './TripleConstraintToggle.css';

interface Constraint {
  name: string;
  enabled: boolean;
  timestamp: number | null;
}

const TripleConstraintToggle: React.FC = () => {
  const [constraints, setConstraints] = useState<Constraint[]>([
    { name: 'Fast', enabled: false, timestamp: null },
    { name: 'Good', enabled: false, timestamp: null },
    { name: 'Cheap', enabled: false, timestamp: null }
  ]);
  
  const [message, setMessage] = useState<string>('');

  const handleToggle = (index: number) => {
    const newConstraints = [...constraints];
    
    // If toggling on and we already have 2 enabled, find the oldest one and disable it
    if (!newConstraints[index].enabled) {
      const enabledCount = newConstraints.filter(c => c.enabled).length;
      
      if (enabledCount >= 2) {
        // Find the constraint with the oldest timestamp
        let oldestIndex = -1;
        let oldestTimestamp = Infinity;
        
        newConstraints.forEach((constraint, i) => {
          if (constraint.enabled && constraint.timestamp !== null && constraint.timestamp < oldestTimestamp) {
            oldestTimestamp = constraint.timestamp;
            oldestIndex = i;
          }
        });
        
        if (oldestIndex !== -1) {
          newConstraints[oldestIndex].enabled = false;
          newConstraints[oldestIndex].timestamp = null;
          
          // Set message about what was deselected
          setMessage(`"${newConstraints[oldestIndex].name}" was automatically deselected`);
          
          // Clear message after 2 seconds
          setTimeout(() => setMessage(''), 2000);
        }
      }
      
      // Enable the clicked constraint with current timestamp
      newConstraints[index].enabled = true;
      newConstraints[index].timestamp = Date.now();
    } else {
      // If toggling off, just disable it
      newConstraints[index].enabled = false;
      newConstraints[index].timestamp = null;
    }
    
    setConstraints(newConstraints);
  };

  // Get the current combination message
  const getCombinationMessage = () => {
    const enabled = constraints.filter(c => c.enabled);
    if (enabled.length !== 2) return '';
    
    const names = enabled.map(c => c.name);
    
    if (names.includes('Fast') && names.includes('Good')) {
      return 'Fast + Good = Expensive (not cheap)';
    } else if (names.includes('Fast') && names.includes('Cheap')) {
      return 'Fast + Cheap = Low quality (not good)';
    } else if (names.includes('Good') && names.includes('Cheap')) {
      return 'Good + Cheap = Slow (not fast)';
    }
    
    return '';
  };

  return (
    <div className="constraint-widget">
      <div className="toggle-container">
        {constraints.map((constraint, index) => (
          <div key={constraint.name} className="constraint-toggle">
            <label className={`toggle-label ${constraint.name.toLowerCase()}-label ${constraint.enabled ? 'enabled' : ''}`}>
              <div className="toggle-name">{constraint.name}</div>
              <div 
                className={`toggle-switch ${constraint.name.toLowerCase()}-switch ${constraint.enabled ? 'enabled' : ''}`}
                onClick={() => handleToggle(index)}
              >
                <div className="toggle-slider"></div>
              </div>
            </label>
          </div>
        ))}
      </div>
      
      {message && <div className="toggle-message">{message}</div>}
      
      <div className="combination-message">
        {getCombinationMessage()}
      </div>
    </div>
  );
};

export default TripleConstraintToggle; 