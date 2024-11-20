import React from 'react'

import { useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories/Categories';

function StartLearning() {
  const categoriesData = useLoaderData();

  return (
    <div >
   <Categories categoriesData={categoriesData}/>
    </div>
  )
}

export default StartLearning
