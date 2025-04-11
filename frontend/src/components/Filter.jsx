import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    status: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row items-center gap-4 md:gap-6">
      <div className="flex flex-col w-full md:w-auto">
        <label htmlFor="status" className="text-sm font-medium mb-1">Status</label>
        <select
          id="status"
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Statuses</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="flex flex-col w-full md:w-auto">
        <label htmlFor="startDate" className="text-sm font-medium mb-1">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* <div className="flex flex-col w-full md:w-auto">
        <label htmlFor="endDate" className="text-sm font-medium mb-1">End Date</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div> */}
    </div>
  );
};

export default Filter;
