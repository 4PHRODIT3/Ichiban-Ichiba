import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "./components/mini-components";
import Navbar from "./components/Navbar/Navbar";
import ProductsSection from "./components/ProductsSection/ProductsSection";
// import { db } from './firestore/config';
// import { collection, getDocs  } from 'firebase/firestore/lite';

const App = () => {
  // const [categories,setCategories] = useState([]);
  // useEffect(() => {
  //   getCategories();
  // },[]);

  // async function getCategories(){
  //   const categoriesRef = collection(db, 'categories');
  //   const categoriesSnapshot = await getDocs(categoriesRef);
  //   const categoriesList = categoriesSnapshot.docs.map(doc => ({...doc.data(),id: doc.id}))
  //   setCategories(categoriesList);
  // }

  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <ProductsSection />
    </div>
  );
};

export default App;
