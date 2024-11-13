// SubSteps.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function SubSteps() {
  const { stepId } = useParams();
  const subSteps = [
    { id: 1, name: 'Sub Step 1' },
    { id: 2, name: 'Sub Step 2' },
  ];

  return (
    <div>
      <h2>Sub Steps for Step {stepId}</h2>
      <ul>
        {subSteps.map(subStep => (
          <li key={subStep.id}>
            <Link to={`/options/<span class="math-inline">\{stepId\}/</span>{subStep.id}`} className="block p-2 hover:bg-gray-300">
              {subStep.name}
            </Link>
          </li>
        ))}
        </ul>
      </div>
    );
}

export default SubSteps;