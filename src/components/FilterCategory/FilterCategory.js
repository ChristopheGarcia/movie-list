import React from 'react';

import './FilterCategory.css';

const FilterCategory = ({selectCategory, categories}) => {

/********************Stock the categories in an array and avoid duplicates***************************/
    
    const categoryMoviesArray = [];
    for (let i = 0; i < categories.length; i++){
        if(categoryMoviesArray.indexOf(categories[i].category) === -1){
            categoryMoviesArray.push(categories[i].category)
        }
    }

/********************Map the categories to feed the select bar***************************************/
    
    const newCategory = categoryMoviesArray.map((categoryMovie, index) => {
         return <option key={index} value={categoryMovie}>{categoryMovie}</option>
    })

/*****************************************************************************************************/

    return (

        <div className="selectContainer">

            <select id="selectBar" onChange={(e) => selectCategory(e.target.value)}>
                <option value="Categories">Movie categories</option>
                <option value="AllCategories">All Categories</option> 
                {newCategory}
            </select>

        </div>
     
    )
}

export default FilterCategory;