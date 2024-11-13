import React, { useState } from 'react';

const algorithms = [
  { id: 1, name: 'Linear Regression' },
  { id: 2, name: 'Decision Tree' },
  { id: 3, name: 'Random Forest' },
  { id: 4, name: 'Support Vector Machine' },
  { id: 5, name: 'K-Nearest Neighbors' }
];

const ModelTraining = () => {
  // State to hold selected algorithms for each pipeline
  const [selectedAlgorithms, setSelectedAlgorithms] = useState(Array(5).fill(''));

  const handleAlgorithmChange = (index, value) => {
    const newSelection = [...selectedAlgorithms];
    newSelection[index] = value;
    setSelectedAlgorithms(newSelection);
  };

  const handleTrainModels = () => {
    // Logic to train models based on selectedAlgorithms
    console.log('Training models with algorithms:', selectedAlgorithms);
    // You can call an API to start training the models here
  };

  return (
    <div className="flex flex-col space-y-4 p-4">
      <h2 className="text-2xl font-bold">Model Training</h2>
      {selectedAlgorithms.map((selectedAlgo, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Pipeline {index + 1}</h3>
          <select
            value={selectedAlgo}
            onChange={(e) => handleAlgorithmChange(index, e.target.value)}
            className="border border-gray-400 p-2 rounded w-full"
          >
            <option value="">Select Algorithm</option>
            {algorithms.map((algo) => (
              <option key={algo.id} value={algo.name}>
                {algo.name}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button
        onClick={handleTrainModels}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Start Training
      </button>
    </div>
  );
};

export default ModelTraining;
