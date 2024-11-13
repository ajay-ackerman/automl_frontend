// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function MainSteps() {
//   const steps = [
//     { id: 1, name: 'Data Preparation' },
//     { id: 2, name: 'Data Processing' },
//     { id: 3, name: 'Exploratory Data Analysis (EDA)' },
//     { id: 4, name: 'Model Training' },
//     { id: 5, name: 'Model Evaluation' },
//     { id: 6, name: 'Model Deployment' },
//     { id: 7, name: 'Report Generation' }
//   ];

//   const location = useLocation();

//   return (
//     <aside className="bg-gray-800 text-white w-1/4 h-full">
//       <h2 className="text-xl font-bold p-4">Auto ML</h2>
//       <ul>
//         {steps.map(step => (
//           <li key={step.id}>
//             <Link
//               to={step.route}
//               className={`block p-4 hover:bg-gray-600 ${location.pathname === step.route ? 'bg-gray-600' : ''}`}
//             >
//               {step.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }

// export default MainSteps;
//-------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function MainSteps() {
//   const [mainSteps, setMainSteps] = useState([
//     { id: 1, name: 'Data Preparation' },
//     { id: 2, name: 'Feature Engineering' },
//     { id: 3, name: 'Data Processing' },
//     { id: 4, name: 'Exploratory Data Analysis (EDA)' },
//     { id: 5, name: 'Model Selection' },
//     { id: 6, name: 'Model Training' },
//     { id: 7, name: 'Model Evaluation' },
//     { id: 8, name: 'Model Deployment' },
//     { id: 9, name: 'Report Generation' },
//   ]);

//   useEffect(() => {
//     // Fetch main steps from API if needed
//     // Replace with your API call
//   }, []);

//   return (
//     <aside className="bg-gray-200 p-4">
//       <h2 className="text-xl font-bold mb-4">Auto ML</h2>
//       <ul>
//         {mainSteps.map(step => (
//           <li key={step.id}>
//             <Link to={`/substeps/${step.id}`} className="block p-2 hover:bg-gray-300">
//               {step.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }

// export default MainSteps;
//----------------------------------------------------------------------------

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MainSteps() {
  const steps = [
    { id: 1, name: 'Data Upload', route: '/upload' },
    { id: 2, name: 'Data Processing', route: '/processing' },
    { id: 3, name: 'Exploratory Data Analysis (EDA)', route: '/eda' }, // Updated route for EDA
    { id: 4, name: 'Model Training', route: '/training' },
    { id: 5, name: 'Model Evaluation', route: '/evaluation' }, // Updated route for Model Evaluation
    { id: 6, name: 'Model Deployment', route: '/deployment' }, // Updated route for Model Deployment
    { id: 7, name: 'Report Generation', route: '/report' } // Updated route for Report Generation
  ];

  const location = useLocation();

  return (
    <aside className="bg-gray-800 text-white w-1/4 h-full">
      <h2 className="text-xl font-bold p-4">Auto ML</h2>
      <ul>
        {steps.map(step => (
          <li key={step.id}>
            <Link
              to={step.route}
              className={`block p-4 hover:bg-gray-600 ${location.pathname === step.route ? 'bg-gray-600' : ''}`}
            >
              {step.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default MainSteps;
