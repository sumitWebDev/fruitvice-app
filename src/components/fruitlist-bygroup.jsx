import { useState, useEffect } from "react";

const FruitListByGroup =  (props) => { 
    const [groupByDetail, setGroupByDetail] = useState([]);

    useEffect(() => {
        const groupedByFamily = props.fruitDetails.reduce((acc, fruit) => {
            const key = fruit[props.groupByValue.toLowerCase()];
            if (!acc[key]) {
            acc[key] = [];
            }
            acc[key].push(fruit);
            return acc;
        }, {});
        setGroupByDetail(groupedByFamily);
        console.log(groupedByFamily)
      }, [props.groupByValue]);

    const showData =
        Object.keys(groupByDetail).map((group) => (
            <div key={group}>
              <h3>{group}</h3>
              <button  onClick = {() => props.addToJarGroup(group,props.groupByValue)}>Add</button>
              <ul>
                {groupByDetail[group].map((fruit) => (
                  <li key={fruit.name}>
                    {fruit.name} ({fruit.nutritions.calories} calories)
                  </li>
                ))}
              </ul>
            </div>
          ))
    return (
     <>
        {showData}
    </>
);}

export default FruitListByGroup;