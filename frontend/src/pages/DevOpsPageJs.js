import React from 'react';
import '../styles/DevOpsPage.css';
import data from '../data/DevOpsTableData.json';

const devopscolorMap = {
    "Source Control Management": "#812E58",
    "Database Automation": "#F16932",
    "Continuous Integration": "#4DA9D4",
    "Testing": "#A74233",
    "Configuration": "#1F4D7D",
    "Deployment": "#54B288",
    "Containers": "#434B4E",
    "Release Orchestration": "#499FC9",
    "Cloud": "#FCC137",
    "AIOps": "#CB6D31",
    "Analytics": "#4D8C7B",
    "Monitoring": "#444E55",
    "Security": "#1A87A9",
    "Collaboration": "#8D2B63"
};

const DevOpsPageJs = () => {
    return (
        <div className="devops-container">
            <h1 className="heading">Periodic Table of DevOps Tools</h1>
            <div className="devops-table">
                {data.elements.map((element) => (
                    <div 
                        className="element"
                        key={element.name} 
                        style={{
                            gridColumn: element.xpos,
                            gridRow: element.ypos,
                            borderColor: devopscolorMap[element.category],
                        }}
                    >
                        <strong>{element.symbol}</strong>
                        <small className="number">{element.number}</small>
                        <small className="pricing">{element.pricing_symbol}</small>
                        <small className="name">{element.name}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DevOpsPageJs;
