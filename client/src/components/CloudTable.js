import React from 'react';

const data = [
  { name: 'aws', label: 'AWS', percentage: 31, color: 'bg-orange-500', logo: 'https://placehold.co/30x30?text=AWS', link: 'https://aws.amazon.com' },
  { name: 'azure', label: 'Azure', percentage: 25, color: 'bg-orange-500', logo: 'https://placehold.co/30x30?text=Azure', link: 'https://azure.microsoft.com' },
  { name: 'google-cloud', label: 'Google Cloud', percentage: 11, color: 'bg-orange-500', logo: 'https://placehold.co/30x30?text=Google', link: 'https://cloud.google.com' },
  { name: 'alibaba-cloud', label: 'Alibaba Cloud', percentage: 4, color: 'bg-orange-500', logo: 'https://placehold.co/30x30?text=Alibaba', link: 'https://www.alibabacloud.com' },
  { name: 'salesforce', label: 'Salesforce', percentage: 3, color: 'bg-orange-500', logo: 'https://placehold.co/30x30?text=Salesforce', link: 'https://www.salesforce.com' },
  { name: 'ibm-cloud', label: 'IBM Cloud', percentage: 2, color: 'bg-orange-500', logo: 'https://placehold.co/30x30?text=IBM', link: 'https://www.ibm.com/cloud' },
  { name: 'oracle', label: 'Oracle', percentage: 2, color: 'bg-orange-500', logo: 'https://placehold.co/30x30?text=Oracle', link: 'https://www.oracle.com/cloud' },
  { name: 'tencent-cloud', label: 'Tencent Cloud', percentage: 2, color: 'bg-orange-500', logo: 'https://placehold.co/30x30?text=Tencent', link: 'https://cloud.tencent.com' },
];

const CloudTable = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="bg-orange-500 h-12 w-4 mr-4"></div>
        <h1 className="text-xl font-semibold">
          Worldwide market share of leading cloud infrastructure service providers in Q1 2024*
        </h1>
      </div>
      {data.map((item, index) => (
        <div key={index} className="flex items-center mb-4">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.logo} alt={`${item.label} logo`} className="w-8 h-8 mr-4" />
          </a>
          <div className="flex-1 bg-gray-200 rounded-full h-8 relative">
            <div
              className={`${item.color} h-full rounded-full`}
              style={{ width: `${(item.percentage / 35) * 100}%` }}
            ></div>
          </div>
          <span className="ml-4 text-black font-semibold text-lg">{item.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default CloudTable;
