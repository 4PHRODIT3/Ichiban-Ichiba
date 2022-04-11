import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
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
    </div>
  )
}

export default App