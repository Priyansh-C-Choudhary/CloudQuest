import React from 'react';
import '../styles/cloudtable.css';

const data = [
  { name: 'AWS', percentage: 31 },
  { name: 'Azure', percentage: 25 },
  { name: 'Google Cloud', percentage: 11 },
  { name: 'Alibaba Cloud', percentage: 4 },
  { name: 'Salesforce', percentage: 3 },
  { name: 'IBM Cloud', percentage: 2 },
  { name: 'Oracle', percentage: 2 },
  { name: 'Tencent Cloud', percentage: 2 },
];

const CloudTable = () => {
  return (
    <div className="chart-container">
      <h2>Worldwide market share of leading cloud infrastructure service providers in Q1 2024</h2>
      <div className="chart">
        {data.map((item, index) => (
          <div key={index} className="chart-row">
            <span className="provider-name">{item.name}</span>
            <div className="bar-container">
              <div className="bar" style={{ width: `${item.percentage * 3}px` }}></div>
            </div>
            <span className="percentage">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudTable;
