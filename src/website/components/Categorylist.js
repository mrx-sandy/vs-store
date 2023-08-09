import React, { useState, useEffect } from 'react';
import Cate from './Cate';

const Categorylist = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    fetch("https://vsmart.ajspire.com/api/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.categories);
        setCategories(data.categories);
        setFilteredCategories(data.categories); // Initialize filtered categories with all categories
      });
  }, []);

  const handleFilter = (filterValue) => {
    if (filterValue === 'all') {
      // If 'All' is selected, show all categories
      setFilteredCategories(categories);
    } else {
      // Filter the categories based on the selected filter value
      const filtered = categories.filter((category) => category.category_name === filterValue);
      setFilteredCategories(filtered);
    }
  };

  return (
    <div className="container-fluid bg-light bg-icon px-6 mb-5">
      <div className="container   ">
        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 400 }}>
          <h1 className="text-center display-5 mb-3">Category</h1>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <button onClick={() => handleFilter('all')} className="btn btn-primary me-2">All</button>
            <button onClick={() => handleFilter('Category 1')} className="btn btn-primary me-2">Category 1</button>
            <button onClick={() => handleFilter('Category 2')} className="btn btn-primary me-2">Category 2</button>
            {/* Add more buttons for other filter options as needed */}
          </div>
          {filteredCategories.map((el) => (
            <Cate
              key={el.category_id}
              img={el.category_image}
              name={el.category_name}
              banner={el.category_banner}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorylist;
