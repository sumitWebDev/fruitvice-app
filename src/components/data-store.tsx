import { useState, useEffect } from "react";
import FruitJar from "./fruit-jar";
import FruitList from "./fruit-list";
import FruitListByGroup from "./fruitlist-bygroup";

const DataStore = () => {
  type FruitDetailsProps = {
    name: string;
    id: number;
    family: string;
    order: string;
    genus: string;
    nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
    };
   };
   interface GroupedFruits {
    [key: string]: FruitDetailsProps[];
  }
  const [fruitDetails, setFruitDetails] = useState<FruitDetailsProps[]>([]);
  const [fruitJar, setFruitJar] = useState<FruitDetailsProps[]>([]);
  const [groupByValue, setGroupByValue] = useState('none');
  //const [groupFruitDetails, setGroupFruitDetails] = useState<GroupedFruits[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try{      
        const response = await fetch("https://www.fruityvice.com/api/fruit/all", {
        method: "GET",
      });
      const jsonData = await response.json();
      setFruitDetails(jsonData);}

      catch (e){
        console.log(e)
      }

    };

    fetchData();
  }, []);

  const addToJar = (id:number) => {
    const fruit = fruitDetails.find((item) => item.id === id);
    if (fruit) {
      setFruitJar([...fruitJar, fruit]);
    }
  };
  console.log(fruitDetails)
  
  
  const addToJarGroup = (group: keyof FruitDetailsProps,value: keyof FruitDetailsProps) => {
   const fruit = fruitDetails.filter((item) => (item[value] === group));
    console.log(group)
    console.log(value)
    console.log(fruit)

    if (fruit) {
      setFruitJar([...fruitJar, ...fruit ]);
    }
  };
  console.log(fruitDetails)


  const groupBy = (e:any)=>{
    setGroupByValue(e.target.value);
  }

  return (
    <>
    <label htmlFor="groupBy">Group By:</label>
    <select name="groupBy" id="groupBy" onChange={(e) => groupBy(e)}>
    <option value="none">None</option>
    <option value="family">Family</option>
    <option value="order">Order</option>
    <option value="genus">Genus</option>
    </select>


    
  <div style={{ width: "900px", height: "200px" }}>
    {groupByValue !== 'none' ?  (<FruitListByGroup fruitDetails={fruitDetails} groupByValue={groupByValue} addToJarGroup={addToJarGroup} />  )   : (<FruitJar fruitDetails={fruitDetails} addToJar={addToJar} />)    }
      </div> 
      <FruitList fruitJar={fruitJar} />
    </>
  );
};

export default DataStore;