// import React, { useState } from 'react';
// import axios from 'axios';

// const ApplicationForm = ({ onApplicationAdded }) => {
//   const [formData, setFormData] = useState({
//     company: '',
//     role: '',
//     status: 'Applied',
//     dateOfApplication: '',
//     link: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/applications', formData);
//       onApplicationAdded(res.data);
//       setFormData({ company: '', role: '', status: 'Applied', dateOfApplication: '', link: '' });
//     } catch (error) {
//       console.error("Error adding application", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
//       <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
//       <select name="status" value={formData.status} onChange={handleChange}>
//         <option value="Applied">Applied</option>
//         <option value="Interview">Interview</option>
//         <option value="Offer">Offer</option>
//         <option value="Rejected">Rejected</option>
//       </select>
//       <input type="date" name="dateOfApplication" value={formData.dateOfApplication} onChange={handleChange} required />
//       <input type="url" name="link" placeholder="Application Link" value={formData.link} onChange={handleChange} />
//       <button type="submit">Add Application</button>
//     </form>
//   );
// };

// export default ApplicationForm;




import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = ({ onApplicationAdded }) => {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    dateOfApplication: '',
    link: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/applications', formData);
      onApplicationAdded(res.data);
      setFormData({ company: '', role: '', status: 'Applied', dateOfApplication: '', link: '' });
    } catch (error) {
      console.error("Error adding application", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto"
    >
      <div className="mb-4">
        <label
          htmlFor="company"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      <div className="mb-4">
        <label
          htmlFor="role"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Role
        </label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      <div className="mb-4">
        <label
          htmlFor="status"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label
          htmlFor="dateOfApplication"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Date of Application
        </label>
        <input
          type="date"
          id="dateOfApplication"
          name="dateOfApplication"
          value={formData.dateOfApplication}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      <div className="mb-6">
        <label
          htmlFor="link"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Application Link
        </label>
        <input
          type="url"
          id="link"
          name="link"
          placeholder="Application Link"
          value={formData.link}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
        >
          Add Application
        </button>
      </div>
    </form>
  );
};

export default ApplicationForm;
