import { useState } from "react";

const FruitList =  (props:any) => { 
    type fruitDetailsProps = {
        id: number;
        name: string;
        nutritions:{
            calories: string
        }
    };

    var calories = 0;

    const fruitName = props.fruitJar.map((item:fruitDetailsProps)=>
    {
        calories +=  +item.nutritions.calories;
        return(
            <ul>
                <li>{item.name}</li>
                <li>{item.nutritions.calories}</li>
            </ul>
        )
    }
    )

    return (
     <>
        
        Fruit List
        {fruitName}
        Total Calories - {calories}
    </>
);}

export default FruitList;