// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainSteps from './components/MainSteps';
// import DataUpload from './components/DataUpload';
// import DataProcessing from './components/DataProcessing';
// import ModelTraining from './components/ModelTraining';
// import Results from './components/Results';
// import SubSteps from './components/SubSteps';

// function App() {
//   return (
//     <Router>
//       <div className="flex h-screen">
//         <MainSteps />
//         <div className="flex-1 p-4">
//           <Routes>
//             <Route path="/substeps/:id" element={<SubSteps />} />
//             <Route path="/upload" element={<DataUpload />} />
//             <Route path="/processing" element={<DataProcessing />} />
//             <Route path="/training" element={<ModelTraining />} />
//             <Route path="/results" element={<Results />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
// ------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import DataUpload from './components/DataUpload';
// import DataProcessing from './components/DataProcessing';
// import EDA from './components/EDA'; // Add EDA component
// import ModelTraining from './components/ModelTraining';
// import Results from './components/Results';
// import ReportGeneration from './components/ReportGeneration'; // Add ReportGeneration component

// function App() {
//   const [selectedStep, setSelectedStep] = useState('DataUpload');

//   return (
//     <div className="flex h-screen">
//       {/* Main Steps component */}
//       <div className="flex-1 p-4">
//         {selectedStep === 'DataUpload' && <DataUpload />}
//         {selectedStep === 'DataProcessing' && <DataProcessing />}
//         {selectedStep === 'EDA' && <EDA />} {/* EDA step */}
//         {selectedStep === 'ModelTraining' && <ModelTraining />}
//         {selectedStep === 'Results' && <Results />}
//         {selectedStep === 'ReportGeneration' && <ReportGeneration />} {/* Report generation */}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainSteps from './components/MainSteps';
import DataUpload from './components/DataUpload';
import DataProcessing from './components/DataProcessing';
import EDA from './components/EDA'; // Added EDA component
import ModelTraining from './components/ModelTraining';
import ModelEvaluation from './components/ModelEvaluation'; 
import ModelDeployment from './components/ModelDeployment'; // Added Model Deployment
import Results from './components/Results';
import ReportGeneration from './components/ReportGeneration'; // Added Report Generation
import SubSteps from './components/SubSteps';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <MainSteps />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/substeps/:id" element={<SubSteps />} />
            <Route path="/upload" element={<DataUpload />} />
            <Route path="/processing" element={<DataProcessing />} />
            {/* <Route path="/processing"  /> */}

            <Route path="/eda" element={<EDA />} /> {/* New EDA route */}
            <Route path="/training" element={<ModelTraining />} />
            <Route path="/evaluation" element={<ModelEvaluation />} /> {/* New Model Evaluation route */}
            <Route path="/deployment" element={<ModelDeployment />} /> {/* New Model Deployment route */}
            <Route path="/results" element={<Results />} />
            <Route path="/report" element={<ReportGeneration />} /> {/* New Report Generation route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
