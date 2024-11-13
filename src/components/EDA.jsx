
// // import React, { useState } from 'react';
// // import axios from 'axios'; // Assuming you're using Axios for API requests

// // const EDS = ({ data }) => {
// //   const [selectedColumn, setSelectedColumn] = useState('');
// //   const [edaFunction, setEdaFunction] = useState('summary');
// //   const [edaResult, setEdaResult] = useState('');
  
// //   // List of columns for dropdown
// //   const columns = data && data.length > 0 ? Object.keys(data[0]) : [];

// //   const handleEdaFunctionChange = (e) => {
// //     setEdaFunction(e.target.value);
// //   };

// //   const handleColumnChange = (e) => {
// //     setSelectedColumn(e.target.value);
// //   };

// //   const handleEDA = async () => {
// //     try {
// //       const response = await axios.post('/api/eda', {
// //         function: edaFunction,
// //         column: selectedColumn, // Pass column if needed for specific EDA
// //         data: data // Send the data to the backend for analysis
// //       });
// //       setEdaResult(response.data.result); // Assuming the API returns the result in this format
// //     } catch (error) {
// //       console.error('Error running EDA:', error);
// //     }
// //   };

// //   return (
// //     <div className="flex h-screen">
// //       {/* Left Panel */}
// //       <div className="w-1/4 bg-gray-100 p-4 border-r">
// //         <h2 className="text-xl font-bold mb-4">EDA Controls</h2>

// //         {/* EDA Function Selection */}
// //         <div className="mb-4">
// //           <label className="block mb-2" htmlFor="eda-function">
// //             Select EDA Function:
// //           </label>
// //           <select
// //             id="eda-function"
// //             value={edaFunction}
// //             onChange={handleEdaFunctionChange}
// //             className="border border-gray-400 p-2 rounded w-full"
// //           >
// //             <option value="summary">Summary Statistics</option>
// //             <option value="correlation">Correlation Matrix</option>
// //             <option value="barChart">Bar Chart</option>
// //             <option value="scatterPlot">Scatter Plot</option>
// //           </select>
// //         </div>

// //         {/* Column Selection for Charts */}
// //         {edaFunction === 'barChart' || edaFunction === 'scatterPlot' ? (
// //           <div className="mb-4">
// //             <label className="block mb-2" htmlFor="columns">
// //               Select Column:
// //             </label>
// //             <select
// //               id="columns"
// //               value={selectedColumn}
// //               onChange={handleColumnChange}
// //               className="border border-gray-400 p-2 rounded w-full"
// //             >
// //               <option value="">-- Select Column --</option>
// //               {columns.map((column) => (
// //                 <option key={column} value={column}>
// //                   {column}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //         ) : null}

// //         <button
// //           className="bg-blue-600 text-white px-4 py-2 rounded w-full"
// //           onClick={handleEDA}
// //         >
// //           Run EDA
// //         </button>
// //       </div>

// //       {/* Right Panel - EDA Results */}
// //       <div className="w-3/4 p-6 bg-white">
// //         <h2 className="text-2xl font-bold mb-4">EDA Results</h2>
// //         <div
// //           className="bg-gray-200 h-96 flex items-center justify-center rounded-lg overflow-auto"
// //           dangerouslySetInnerHTML={{ __html: edaResult }}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default EDS;


// import React, { useState } from 'react';
// import axios from 'axios';

// const EDS = ({ data }) => {
//   const [selectedColumn, setSelectedColumn] = useState('');
//   const [edaFunction, setEdaFunction] = useState('summary');
//   const [edaResult, setEdaResult] = useState('');
  
//   // List of columns for dropdown
//   const columns = data && data.length > 0 ? Object.keys(data[0]) : [];

//   const handleEdaFunctionChange = (e) => {
//     setEdaFunction(e.target.value);
//   };

//   const handleColumnChange = (e) => {
//     setSelectedColumn(e.target.value);
//   };

//   const handleEDA = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/eda', {
//         function: edaFunction,
//         column: selectedColumn, // Pass column if needed for specific EDA
//         data: data // Send the data to the backend for analysis
//       });
//       setEdaResult(response.data.result); // Assuming the API returns the result in this format
//     } catch (error) {
//       console.error('Error running EDA:', error);
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Panel */}
//       <div className="w-1/4 bg-gray-100 p-4 border-r">
//         <h2 className="text-xl font-bold mb-4">EDA Controls</h2>

//         {/* EDA Function Selection */}
//         <div className="mb-4">
//           <label className="block mb-2" htmlFor="eda-function">
//             Select EDA Function:
//           </label>
//           <select
//             id="eda-function"
//             value={edaFunction}
//             onChange={handleEdaFunctionChange}
//             className="border border-gray-400 p-2 rounded w-full"
//           >
//             <option value="summary">Summary Statistics</option>
//             <option value="correlation">Correlation Matrix</option>
//             <option value="barChart">Bar Chart</option>
//             <option value="scatterPlot">Scatter Plot</option>
//           </select>
//         </div>

//         {/* Column Selection for Charts */}
//         {edaFunction === 'barChart' || edaFunction === 'scatterPlot' ? (
//           <div className="mb-4">
//             <label className="block mb-2" htmlFor="columns">
//               Select Column:
//             </label>
//             <select
//               id="columns"
//               value={selectedColumn}
//               onChange={handleColumnChange}
//               className="border border-gray-400 p-2 rounded w-full"
//             >
//               <option value="">-- Select Column --</option>
//               {columns.map((column) => (
//                 <option key={column} value={column}>
//                   {column}
//                 </option>
//               ))}
//             </select>
//           </div>
//         ) : null}

//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded w-full"
//           onClick={handleEDA}
//         >
//           Run EDA
//         </button>
//       </div>

//       {/* Right Panel - EDA Results */}
//       <div className="w-3/4 p-6 bg-white">
//         <h2 className="text-2xl font-bold mb-4">EDA Results</h2>
//         <div
//           className="bg-gray-200 h-96 flex items-center justify-center rounded-lg overflow-auto"
//           dangerouslySetInnerHTML={{ __html: edaResult }}
//         />
//       </div>
//     </div>
//   );
// };

// export default EDS;


import React, { useState } from 'react';
import axios from 'axios';

const EDS = ({ data }) => {
  const [selectedColumn, setSelectedColumn] = useState('');
  const [edaFunction, setEdaFunction] = useState('summary');
  const [edaResult, setEdaResult] = useState('');

  // List of columns for dropdown
  const columns = data && data.length > 0 ? Object.keys(data[0]) : [];

  const handleEdaFunctionChange = (e) => {
    setEdaFunction(e.target.value);
  };

  const handleColumnChange = (e) => {
    setSelectedColumn(e.target.value);
  };

  const handleEDA = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/eda', {
        function: edaFunction,
        column: selectedColumn // Pass the column if needed for specific EDA
      });
      setEdaResult(response.data.result); // Assuming the API returns the result in this format
    } catch (error) {
      console.error('Error running EDA:', error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-1/4 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">EDA Controls</h2>

        {/* EDA Function Selection */}
        <div className="mb-4">
          <label className="block mb-2" htmlFor="eda-function">
            Select EDA Function:
          </label>
          <select
            id="eda-function"
            value={edaFunction}
            onChange={handleEdaFunctionChange}
            className="border border-gray-400 p-2 rounded w-full"
          >
            <option value="summary">Summary Statistics</option>
            <option value="correlation">Correlation Matrix</option>
            <option value="barChart">Bar Chart</option>
            <option value="scatterPlot">Scatter Plot</option>
          </select>
        </div>

        {/* Column Selection for Charts */}
        {edaFunction === 'barChart' || edaFunction === 'scatterPlot' ? (
          <div className="mb-4">
            <label className="block mb-2" htmlFor="columns">
              Select Column:
            </label>
            <select
              id="columns"
              value={selectedColumn}
              onChange={handleColumnChange}
              className="border border-gray-400 p-2 rounded w-full"
            >
              <option value="">-- Select Column --</option>
              {columns.map((column) => (
                <option key={column} value={column}>
                  {column}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={handleEDA}
        >
          Run EDA
        </button>
      </div>

      {/* Right Panel - EDA Results */}
      <div className="w-3/4 p-6 bg-white">
        <h2 className="text-2xl font-bold mb-4">EDA Results</h2>
        <div
          className="bg-gray-200 h-96 flex items-center justify-center rounded-lg overflow-auto"
          dangerouslySetInnerHTML={{ __html: edaResult }}
        />
      </div>
    </div>
  );
};

export default EDS;
