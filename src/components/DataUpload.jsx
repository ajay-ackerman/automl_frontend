


// import React, { useState } from 'react';
// import readXlsxFile from 'read-excel-file';

// function DataUpload() {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');
//   const [fileData, setFileData] = useState(null); // State to hold file data

//   const handleFileChange = (event) => {
//     const uploadedFile = event.target.files[0];
//     if (uploadedFile) {
//       setFile(uploadedFile);
//       setMessage(`Selected file: ${uploadedFile.name}`);
//     }
//   };

//   const handleUpload = () => {
//     if (file) {
//       const reader = new FileReader();

//       // Detect if the file is CSV or XLSX based on extension
//       const fileType = file.name.split('.').pop();
//       if (fileType === 'csv') {
//         reader.onload = (e) => {
//           const text = e.target.result;
//           const rows = text.split('\n').map((row) => row.split(','));
//           const headers = rows[0]; // First row as headers
//           const data = rows.slice(1).map((row) => {
//             const obj = {};
//             headers.forEach((header, index) => {
//               obj[header] = row[index];
//             });
//             return obj;
//           });
//           setFileData({ name: file.name, size: file.size, content: data });
//         };
//         reader.readAsText(file);
//       } else if (fileType === 'xlsx') {
//         // Use the `readXlsxFile` library for Excel files
//         readXlsxFile(file).then((rows) => {
//           const headers = rows[0]; // First row as headers
//           const data = rows.slice(1).map((row) => {
//             const obj = {};
//             headers.forEach((header, index) => {
//               obj[header] = row[index];
//             });
//             return obj;
//           });
//           setFileData({ name: file.name, size: file.size, content: data });
//         });
//       }

//       setMessage(`Uploading ${file.name}...`);
//       setTimeout(() => {
//         setMessage('File uploaded successfully!');
//       }, 2000);
//     } else {
//       setMessage('Please select a file to upload.');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-full p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold mb-4">Data Loading Section</h1>
      
//       <h2 className="text-xl font-semibold mb-2">Upload a .csv or .xlsx file</h2>
//       <div className="border-dashed border-2 border-gray-400 p-8 w-full max-w-md text-center">
//         <input 
//           type="file" 
//           accept=".csv,.xlsx" 
//           onChange={handleFileChange} 
//           className="hidden" 
//           id="file-upload"
//         />
//         <label 
//           htmlFor="file-upload" 
//           className="cursor-pointer flex items-center justify-center h-full"
//         >
//           <span className="text-gray-500">Drag and drop file here</span>
//         </label>
//         <p className="text-gray-500 mt-2">Limit 200MB per file • CSV, XLSX</p>
//       </div>
//       {message && <p className="mt-4 text-blue-700">{message}</p>}
//       <button 
//         className="bg-green-600 text-white px-6 py-2 rounded mt-4"
//         onClick={handleUpload}
//       >
//         Upload
//       </button>

//       {/* Display file data after upload */}
//       {fileData && (
//         <div className="mt-8 w-full max-w-4xl">
//           <h3 className="text-xl font-semibold mb-2">Uploaded File: {fileData.name} ({(fileData.size / 1024).toFixed(2)} KB)</h3>
//           <table className="min-w-full border-collapse border border-gray-200">
//             <thead>
//               <tr className="bg-gray-100">
//                 {Object.keys(fileData.content[0]).map((header, index) => (
//                   <th key={index} className="border border-gray-200 px-4 py-2">{header}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {fileData.content.slice(0, 10).map((row, rowIndex) => (
//                 <tr key={rowIndex} className="hover:bg-gray-50">
//                   {Object.values(row).map((value, index) => (
//                     <td key={index} className="border border-gray-200 px-4 py-2">{value}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <p className="mt-2 text-gray-500">The file contains {fileData.content.length} rows and {Object.keys(fileData.content[0]).length} columns.</p>
//           <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Save Data</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DataUpload;

import React, { useState } from 'react';
import axios from 'axios'; // For making API requests

function DataUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [fileData, setFileData] = useState(null); // State to hold file data

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setMessage(`Selected file: ${uploadedFile.name}`);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Read file and extract data
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        const rows = text.split('\n').map(row => row.split(','));
        const headers = rows[0]; // First row as headers
        const data = rows.slice(1).map(row => {
          const obj = {};
          headers.forEach((header, index) => {
            obj[header] = row[index];
          });
          return obj;
        });
        
        setFileData({ name: file.name, size: file.size, content: data });

        // Upload data to the backend
        try {
          const response = await axios.post('http://localhost:5000/api/upload', { data });
          setMessage('Data uploaded successfully.');
        } catch (error) {
          console.error('Error uploading data:', error);
          setMessage('Error uploading data.');
        }
      };
      reader.readAsText(file);
    } else {
      setMessage('Please select a file to upload.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Data Loading Section</h1>
      
      <h2 className="text-xl font-semibold mb-2">Upload a .csv or .xlsx file</h2>
      <div className="border-dashed border-2 border-gray-400 p-8 w-full max-w-md text-center">
        <input 
          type="file" 
          accept=".csv,.xlsx" 
          onChange={handleFileChange} 
          className="hidden" 
          id="file-upload"
        />
        <label 
          htmlFor="file-upload" 
          className="cursor-pointer flex items-center justify-center h-full"
        >
          <span className="text-gray-500">Drag and drop file here</span>
        </label>
        <p className="text-gray-500 mt-2">Limit 200MB per file • CSV, XLSX</p>
      </div>
      {message && <p className="mt-4 text-blue-700">{message}</p>}
      <button 
        className="bg-green-600 text-white px-6 py-2 rounded mt-4"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
}

export default DataUpload;
