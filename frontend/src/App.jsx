
// import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <div className="flex gap-8 mb-8">
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="h-24 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="h-24 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]" alt="React logo" />
//         </a>
//       </div>
//       <h1 className="text-5xl font-bold mb-8">Vite + React</h1>
//       <div className="text-center">
//         <button
//           onClick={() => setCount((count) => count + 1)}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-4"
//         >
//           count is {count}
//         </button>
//         <p className="mb-4">
//           Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="text-gray-500">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ApplicationForm from './components/ApplicationForm';
// import ApplicationList from './components/ApplicationList';
// import Filter from './components/Filter';
// import './index.css';

// const App = () => {
//   const [applications, setApplications] = useState([]);
//   const [filters, setFilters] = useState({});

//   const fetchApplications = async (filterParams = {}) => {
//     try {
//       const params = { ...filterParams };
//       const res = await axios.get('http://localhost:5000/api/applications', { params });
//       setApplications(res.data);
//     } catch (error) {
//       console.error("Error fetching applications", error);
//     }
//   };

//   useEffect(() => {
//     fetchApplications(filters);
//   }, [filters]);

//   const handleApplicationAdded = (newApplication) => {
//     setApplications(prev => [newApplication, ...prev]);
//   };

//   const handleStatusUpdated = (updatedApplication) => {
//     setApplications(prev => 
//       prev.map(app => app._id === updatedApplication._id ? updatedApplication : app)
//     );
//   };

//   const handleApplicationDeleted = (id) => {
//     setApplications(prev => prev.filter(app => app._id !== id));
//   };

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//   };

//   return (
//     <div className="app-container">
//       <h1>Student Job Tracker</h1>
//       <ApplicationForm onApplicationAdded={handleApplicationAdded} />
//       <Filter onFilterChange={handleFilterChange} />
//       <ApplicationList 
//         applications={applications} 
//         onStatusUpdated={handleStatusUpdated}
//         onApplicationDeleted={handleApplicationDeleted} 
//       />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import Filter from './components/Filter';
import './index.css';

const App = () => {
  const [applications, setApplications] = useState([]);
  const [filters, setFilters] = useState({});
  const [view, setView] = useState('form'); // 'form' or 'list'

  const fetchApplications = async (filterParams = {}) => {
    try {
      // const res = await axios.get('http://localhost:5000/api/applications', { params: filterParams });
      const res = await axios.get(`${import.meta.env.BACKEND_URI}/api/applications`, { params: filterParams });
      setApplications(res.data);
    } catch (error) {
      console.error("Error fetching applications", error);
    }
  };

  useEffect(() => {
    if (view === 'list') {
      fetchApplications(filters);
    }
  }, [filters, view]);

  const handleApplicationAdded = (newApplication) => {
    setApplications(prev => [newApplication, ...prev]);
    setView('list'); // Switch to list after submission
  };

  const handleStatusUpdated = (updatedApplication) => {
    setApplications(prev =>
      prev.map(app => app._id === updatedApplication._id ? updatedApplication : app)
    );
  };

  const handleApplicationDeleted = (id) => {
    setApplications(prev => prev.filter(app => app._id !== id));
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
          Student Job Tracker
        </h1>

        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-6 py-2 rounded font-semibold shadow ${view === 'form' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border border-blue-700'}`}
            onClick={() => setView('form')}
          >
            Add Application
          </button>
          <button
            className={`px-6 py-2 rounded font-semibold shadow ${view === 'list' ? 'bg-green-700 text-white' : 'bg-white text-green-700 border border-green-700'}`}
            onClick={() => setView('list')}
          >
            View Applications
          </button>
        </div>

        {view === 'form' && (
          <ApplicationForm onApplicationAdded={handleApplicationAdded} />
        )}

        {view === 'list' && (
          <>
            <Filter onFilterChange={handleFilterChange} />
            <ApplicationList
              applications={applications}
              onStatusUpdated={handleStatusUpdated}
              onApplicationDeleted={handleApplicationDeleted}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
