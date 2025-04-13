// src/components/TableSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TableSection = () => {
  // Sample data for the table
  const tableData = [
    {
      id: 1,
      target: 'Nexla',
      acquirer: 'Verla Tech.',
      type: 'Strategic',
      value: '$372',
      revenue: '3.3x',
      abstract: 'Data classification & messaging software',
      rationale: 'Helps customers further improve their data quality and meet interoperability regulatory requirements including CCS...'
    },
    {
      id: 2,
      target: 'Sylo',
      acquirer: 'Axon',
      type: 'Strategic',
      value: '$59.0',
      revenue: '29.0x',
      abstract: 'Data privacy & compliance SaaS',
      rationale: 'Creates a streamlined way to extend Axon market-leading position. Axon, a way to address evolving challenges that are emerging...'
    },
    {
      id: 3,
      target: 'Luma Tech',
      acquirer: 'Quant',
      type: 'Financial',
      value: '$90.4',
      revenue: '5.1x',
      abstract: 'Database, application & data security software',
      rationale: 'Largest infosec take-private to date, eclipsing Quant\'s pickup of Luma Tech for $1.5 billion in 2011. Implies an estimated 4 billion mkt...'
    },
    {
      id: 4,
      target: 'Zephyr Inc',
      acquirer: 'Kinden One',
      type: 'Strategic',
      value: '$85.1',
      revenue: '10.6x',
      abstract: 'Israeli enterprise data encryption software',
      rationale: 'One partner, the data classification and information rights management vendor...'
    },
    {
      id: 5,
      target: 'Draft',
      acquirer: 'Clyra Co.',
      type: 'Strategic',
      value: '$40.0',
      revenue: '5.3x',
      abstract: 'Encryption & key management SaaS',
      rationale: 'Clyra Co. has been in the process of extending its capabilities to address use cases beyond those initial to its founding...'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-primary mb-4">
            An AI-native workspace
            <br />built for the future
          </h2>
          <p className="body-text text-tertiary">
            Seamlessly organize, analyze, and visualize your most important data.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Table Navigation Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <button className="px-6 py-3 text-primary border-b-2 border-primary font-medium">
                Documents
              </button>
              <button className="px-6 py-3 text-gray-500 hover:text-primary transition-colors">
                Tables
              </button>
              <button className="px-6 py-3 text-gray-500 hover:text-primary transition-colors">
                Charts
              </button>
              <button className="px-6 py-3 text-gray-500 hover:text-primary transition-colors">
                Slides
              </button>
            </div>
          </div>

          {/* Table Header */}
          <div className="px-6 py-4 bg-light bg-opacity-60">
            <h3 className="text-xl font-medium text-tertiary">Select M&A transactions in data security (cont'd)</h3>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="pl-6 py-4 text-left text-primary font-medium border-b border-gray-200">#</th>
                  <th className="py-4 text-left text-primary font-medium border-b border-gray-200">Target</th>
                  <th className="py-4 text-left text-primary font-medium border-b border-gray-200">Acquirer</th>
                  <th className="py-4 text-left text-primary font-medium border-b border-gray-200">Type</th>
                  <th className="py-4 text-left text-primary font-medium border-b border-gray-200">Firm Value ($B)</th>
                  <th className="py-4 text-left text-primary font-medium border-b border-gray-200">FV/LTM Revenue</th>
                  <th className="py-4 text-left text-primary font-medium border-b border-gray-200">Target Abstract</th>
                  <th className="py-4 text-left text-primary font-medium border-b border-gray-200">Strategic Rationale</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="pl-6 py-5 border-b border-gray-200 font-medium">{row.id}</td>
                    <td className="py-5 border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-md bg-primary flex-shrink-0 flex items-center justify-center mr-3 shadow-sm">
                          <span className="text-white text-sm font-bold">{row.target.charAt(0)}</span>
                        </div>
                        <span className="font-medium">{row.target}</span>
                      </div>
                    </td>
                    <td className="py-5 border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-md flex-shrink-0 flex items-center justify-center mr-3 shadow-sm" style={{ backgroundColor: getRandomColor(row.id) }}>
                          <span className="text-white text-sm font-bold">{row.acquirer.charAt(0)}</span>
                        </div>
                        <span className="font-medium">{row.acquirer}</span>
                      </div>
                    </td>
                    <td className="py-5 border-b border-gray-200">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${row.type === 'Strategic' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="py-5 border-b border-gray-200 font-medium">{row.value}</td>
                    <td className="py-5 border-b border-gray-200 font-medium">{row.revenue}</td>
                    <td className="py-5 border-b border-gray-200">
                      <div className="max-w-md line-clamp-2">{row.abstract}</div>
                    </td>
                    <td className="py-5 border-b border-gray-200">
                      <div className="max-w-md line-clamp-2">{row.rationale}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to generate random colors for the acquirer badges
function getRandomColor(seed) {
  const colors = [
    '#4F46E5', // Indigo
    '#7C3AED', // Violet
    '#EC4899', // Pink
    '#F59E0B', // Amber
    '#10B981', // Emerald
    '#3B82F6', // Blue
    '#6366F1', // Indigo
  ];
  
  return colors[seed % colors.length];
}

export default TableSection;