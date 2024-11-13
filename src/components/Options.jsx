// Options.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function Options() {
  const { stepId, subStepId } = useParams();

  return (
    <div>
      <h2>Options for Step {stepId}, Sub Step {subStepId}</h2>
      {/* Display options here */}
    </div>
  );
}

export default Options;