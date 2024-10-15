import React from 'react';
import '../styles/CloudTable.css';

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

function CloudTable() {
  return (
    <div className="container">
      <div className="header">
        <div className="indicator"></div>
        <h1>Worldwide market share of leading cloud infrastructure service providers in Q1 2024*</h1>
      </div>
      {data.map((item, index) => (
        <div key={index} className="cloud-provider">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.logo} alt={`${item.label} logo`} className="logo" />
          </a>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(item.percentage / 35) * 100}%`, backgroundColor: '#f97316' }}
            ></div>
          </div>
          <span className="percentage">{item.percentage}%</span>
        </div>
      ))}
    </div>
  );
}

export default CloudTable;
