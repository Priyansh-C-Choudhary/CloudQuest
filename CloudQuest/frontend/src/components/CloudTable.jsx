import React from 'react';

const data = [
  { name: 'aws', label: 'AWS', percentage: 31, link: 'https://aws.amazon.com' },
  { name: 'azure', label: 'Azure', percentage: 25, link: 'https://azure.microsoft.com' },
  { name: 'google-cloud', label: 'Google Cloud', percentage: 11, link: 'https://cloud.google.com' },
  { name: 'alibaba-cloud', label: 'Alibaba Cloud', percentage: 4, link: 'https://www.alibabacloud.com' },
  { name: 'salesforce', label: 'Salesforce', percentage: 3, link: 'https://www.salesforce.com' },
  { name: 'ibm-cloud', label: 'IBM Cloud', percentage: 2, link: 'https://www.ibm.com/cloud' },
  { name: 'oracle', label: 'Oracle', percentage: 2, link: 'https://www.oracle.com/cloud' },
  { name: 'tencent-cloud', label: 'Tencent Cloud', percentage: 2, link: 'https://cloud.tencent.com' },
];

function CloudTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mx-auto"> {/* Adjusted padding and max width */}
      <h1 className="text-2xl font-bold mb-6 text-center">Cloud Infrastructure Providers</h1>
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-3"> {/* Adjusted margin between items */}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium w-1/4 text-right pr-4" // Shifted the label to the right with padding
          >
            {item.label}
          </a>
          <div className="relative w-3/4 h-5 bg-gray-200 rounded-full"> {/* Reduced space in progress bar area */}
            <div
              className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-green-400 to-teal-500"
              style={{ width: `${(item.percentage / 35) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm font-bold w-10 text-center">{item.percentage}%</span> {/* Adjusted text alignment */}
        </div>
      ))}
    </div>
  );
}

export default CloudTable;
