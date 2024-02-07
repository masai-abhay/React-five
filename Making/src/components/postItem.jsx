import React from 'react';

const DataDisplay = ({ data }) => {
  return (
    <div style={{backgroundColor: "gray", fontFamily: "serif"}}>
      <h2>Data Display</h2>
      {data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>
            <strong>{item.title}</strong>: {item.body}
          </li>
          ))}
        </ul>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default DataDisplay;