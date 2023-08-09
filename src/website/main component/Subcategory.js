import React, { useState, useEffect } from 'react';

const Subcategory = () => {
  const [sub, setsub] = useState([]);

  useEffect(() => {
    fetch("https://vsmart.ajspire.com/api/subcategories/1")
      .then(response => response.json())
      .then(data => setsub(data.subcategories))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {sub.map((el) => (
        <div key={el.id}>{el.subcategory_name}</div>
      ))}
    </div>
  );
};

export default Subcategory;