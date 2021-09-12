import React from 'react'

function Ex1() {
    const inputArray = [2, 3, -5, -2, 4];
    let newArray = [];
    const adjacentElementsProduct = (array) => {
        console.log(array)
        for(let i in array){
            console.log(i); 
            let newMaxNumber = array[i]*array[i+1];
            console.log(newMaxNumber);
            newArray.push(newMaxNumber);
        } 
    }
    adjacentElementsProduct(inputArray);
    console.log(newArray)
    let maxNumber = Math.max(...newArray);
    
    return (
        <div>
             <h3>Section 1</h3>
             <label>{(`the array is [${inputArray}], and the final result is ${maxNumber}`)}</label>
        </div>
    )
}

export default Ex1;
