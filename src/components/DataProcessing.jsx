// import React from 'react';

// function DataProcessing() {
//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Data Processing</h2>
//       <p>Select data processing steps such as handling missing data, scaling, and normalization.</p>
//       {/* Add more controls as needed */}
//     </div>
//   );
// }

// export default DataProcessing;

// import React, { useState } from 'react';

// const DataProcessing = ({ uploadedData }) => {
//   const [unwantedColumn, setUnwantedColumn] = useState('');
//   const [targetVariable, setTargetVariable] = useState('');
//   const [problemType, setProblemType] = useState('classification');
//   const [testSize, setTestSize] = useState(0.2); // Default test size of 20%
  
//   // Assuming uploadedData is an array of objects (the data structure from the uploaded file)
//   const columns = uploadedData.length > 0 ? Object.keys(uploadedData[0]) : [];

//   const handleDeleteColumn = () => {
//     if (unwantedColumn) {
//       // Logic to delete the unwanted column from uploadedData
//       const updatedData = uploadedData.map(({ [unwantedColumn]: _, ...rest }) => rest);
//       // Update the uploadedData state or prop with updatedData as needed
//       console.log('Updated data after column deletion:', updatedData);
//     }
//   };

//   const handleSubmit = () => {
//     // Here you can handle the logic to use the selected options for preprocessing
//     console.log('Target Variable:', targetVariable);
//     console.log('Problem Type:', problemType);
//     console.log('Test Size:', testSize);
//     // Add further processing logic here
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-full p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold mb-4">Data Processing</h1>

//       <div className="mb-4">
//         <label className="block mb-2" htmlFor="unwanted-column">Select Column to Delete:</label>
//         <select
//           id="unwanted-column"
//           value={unwantedColumn}
//           onChange={(e) => setUnwantedColumn(e.target.value)}
//           className="border border-gray-400 rounded p-2"
//         >
//           <option value="">-- Select Column --</option>
//           {columns.map((column) => (
//             <option key={column} value={column}>
//               {column}
//             </option>
//           ))}
//         </select>
//         <button
//           className="bg-red-600 text-white px-4 py-2 rounded mt-2"
//           onClick={handleDeleteColumn}
//         >
//           Delete Column
//         </button>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-2" htmlFor="target-variable">Select Target Variable:</label>
//         <select
//           id="target-variable"
//           value={targetVariable}
//           onChange={(e) => setTargetVariable(e.target.value)}
//           className="border border-gray-400 rounded p-2"
//         >
//           <option value="">-- Select Target Variable --</option>
//           {columns.map((column) => (
//             <option key={column} value={column}>
//               {column}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-2">Select Problem Type:</label>
//         <select
//           value={problemType}
//           onChange={(e) => setProblemType(e.target.value)}
//           className="border border-gray-400 rounded p-2"
//         >
//           <option value="classification">Classification</option>
//           <option value="regression">Regression</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-2" htmlFor="test-size">Select Test Size (%):</label>
//         <input
//           type="number"
//           id="test-size"
//           value={testSize * 100} // Display in percentage
//           onChange={(e) => setTestSize(e.target.value / 100)}
//           className="border border-gray-400 rounded p-2"
//           min="0"
//           max="100"
//         />
//       </div>

//       <button
//         className="bg-blue-600 text-white px-6 py-2 rounded"
//         onClick={handleSubmit}
//       >
//         Process Data
//       </button>
//     </div>
//   );
// };

// export default DataProcessing;

// ===========================
import React, { useState, useEffect } from 'react';

const DataProcessing = ({ uploadedData }) => {
  const [unwantedColumn, setUnwantedColumn] = useState('');
  const [targetVariable, setTargetVariable] = useState('');
  const [problemType, setProblemType] = useState('classification');
  const [testSize, setTestSize] = useState(0.2); // Default test size of 20%
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // Check if uploadedData is an array and contains data
    if (Array.isArray(uploadedData) && uploadedData.length > 0) {
      setColumns(Object.keys(uploadedData[0])); // Extract column names
    } else {
      console.error('uploadedData is either undefined or not a valid array');
      setColumns([]); // Ensure columns are empty if the data is invalid
    }
  }, [uploadedData]);

  const handleDeleteColumn = () => {
    if (unwantedColumn) {
      // Logic to delete the unwanted column from uploadedData
      const updatedData = uploadedData.map(({ [unwantedColumn]: _, ...rest }) => rest);
      console.log('Updated data after column deletion:', updatedData);
    } else {
      console.error('No column selected for deletion');
    }
  };

  const handleSubmit = () => {
    if (!targetVariable || !columns.includes(targetVariable)) {
      console.error('Please select a valid target variable');
      return;
    }

    // Here you can handle the logic to use the selected options for preprocessing
    console.log('Target Variable:', targetVariable);
    console.log('Problem Type:', problemType);
    console.log('Test Size:', testSize);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Data Processing</h1>

      {columns.length > 0 ? (
        <>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="unwanted-column">Select Column to Delete:</label>
            <select
              id="unwanted-column"
              value={unwantedColumn}
              onChange={(e) => setUnwantedColumn(e.target.value)}
              className="border border-gray-400 rounded p-2"
            >
              <option value="">-- Select Column --</option>
              {columns.map((column) => (
                <option key={column} value={column}>
                  {column}
                </option>
              ))}
            </select>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded mt-2"
              onClick={handleDeleteColumn}
            >
              Delete Column
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="target-variable">Select Target Variable:</label>
            <select
              id="target-variable"
              value={targetVariable}
              onChange={(e) => setTargetVariable(e.target.value)}
              className="border border-gray-400 rounded p-2"
            >
              <option value="">-- Select Target Variable --</option>
              {columns.map((column) => (
                <option key={column} value={column}>
                  {column}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Select Problem Type:</label>
            <select
              value={problemType}
              onChange={(e) => setProblemType(e.target.value)}
              className="border border-gray-400 rounded p-2"
            >
              <option value="classification">Classification</option>
              <option value="regression">Regression</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="test-size">Select Test Size (%):</label>
            <input
              type="number"
              id="test-size"
              value={testSize * 100} // Display in percentage
              onChange={(e) => setTestSize(e.target.value / 100)}
              className="border border-gray-400 rounded p-2"
              min="0"
              max="100"
            />
          </div>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded"
            onClick={handleSubmit}
          >
            Process Data
          </button>
        </>
      ) : (
        <p>No data available to process. Please upload a valid dataset.</p>
      )}
    </div>
  );
};

export default DataProcessing;
