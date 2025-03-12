// src/pages/CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the URL

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{category}</h1>
      <p>This is the {category} page. You can display products or other content here.</p>
    </div>
  );
};

export default CategoryPage;