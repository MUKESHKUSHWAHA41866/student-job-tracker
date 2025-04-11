// import React from 'react';
// import axios from 'axios';

// const ApplicationList = ({ applications, onStatusUpdated, onApplicationDeleted }) => {

//   const updateStatus = async (id, newStatus) => {
//     try {
//       const res = await axios.patch(`http://localhost:5000/api/applications/${id}`, { status: newStatus });
//       onStatusUpdated(res.data);
//     } catch (error) {
//       console.error("Error updating status", error);
//     }
//   };

//   const deleteApplication = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/applications/${id}`);
//       onApplicationDeleted(id);
//     } catch (error) {
//       console.error("Error deleting application", error);
//     }
//   };

//   return (
//     <div className="applications">
//       {applications.map(app => (
//         <div key={app._id} className="application-card">
//           <h3>{app.company}</h3>
//           <p><strong>Role:</strong> {app.role}</p>
//           <p><strong>Status:</strong> {app.status}</p>
//           <p><strong>Applied on:</strong> {new Date(app.dateOfApplication).toLocaleDateString()}</p>
//           {app.link && <p><a href={app.link} target="_blank" rel="noopener noreferrer">View Application</a></p>}
//           <div className="actions">
//             <select value={app.status} onChange={(e) => updateStatus(app._id, e.target.value)}>
//               <option value="Applied">Applied</option>
//               <option value="Interview">Interview</option>
//               <option value="Offer">Offer</option>
//               <option value="Rejected">Rejected</option>
//             </select>
//             <button onClick={() => deleteApplication(app._id)}>Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ApplicationList;





import React from 'react';
import axios from 'axios';

const ApplicationList = ({ applications, onStatusUpdated, onApplicationDeleted }) => {

  const updateStatus = async (id, newStatus) => {
    try {
      const res = await axios.patch(`http://localhost:5000/api/applications/${id}`, { status: newStatus });
      onStatusUpdated(res.data);
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  const deleteApplication = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/applications/${id}`);
      onApplicationDeleted(id);
    } catch (error) {
      console.error("Error deleting application", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto p-4">
      {applications.map(app => (
        <div
          key={app._id}
          className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2 text-blue-600">{app.company}</h3>
          <p className="text-gray-700"><strong>Role:</strong> {app.role}</p>
          <p className="text-gray-700"><strong>Status:</strong> {app.status}</p>
          <p className="text-gray-700"><strong>Applied on:</strong> {new Date(app.dateOfApplication).toLocaleDateString()}</p>
          
          {app.link && (
            <p className="mt-2">
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                View Application
              </a>
            </p>
          )}

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <select
              value={app.status}
              onChange={(e) => updateStatus(app._id, e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
            <button
              onClick={() => deleteApplication(app._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationList;
