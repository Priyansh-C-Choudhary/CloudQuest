import React from 'react';
import '../styles/DevOpsTable.css';
import data from '../data/sampledata.json';

const colorMap = {
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#58586B",
    "post-transition metal": "#218380",
    lanthanide: "#4AABAF",
    metalloid: "#73D2DE",
  };

const DevOpsTable = () => {
    return (
        <div className="devops-table">
            {data.elements.map((element) => (
                <div 
                className="element"
                key={element.name} 
                style={{
                    gridColumn: element.xpos,
                    gridRow: element.ypos,
                    borderColor: colorMap[element.category],
                }}
            >
                <strong>{element.symbol}</strong>
                <small className="number">{element.number}</small>
                <small className="name">{element.name}</small>
            </div>
        ))}
        </div>
    );
};

export default DevOpsTable;
