import { useState, useEffect } from "react";
import FruitJar from "./fruit-jar";
import FruitList from "./fruit-list";

const DataStore = () => {
  type FruitDetailsProps = {
    id: number;
    name: string;
    nutritions: {
      calories: string;
    };
  };

  const [fruitDetails, setFruitDetails] = useState<FruitDetailsProps[]>([]);
  const [fruitJar, setFruitJar] = useState<FruitDetailsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://www.fruityvice.com/api/fruit/all", {
        method: "GET",
      });
      const jsonData = await response.json();
      setFruitDetails(jsonData);
    };

    fetchData();
  }, []);

  const addToJar = (id:any) => {
    const fruit = fruitDetails.find((item) => item.id === id);
    if (fruit) {
      setFruitJar([...fruitJar, fruit]);
    }
  };
  console.log(fruitDetails)

  return (
    <>
    <label htmlFor="groupBy">Group By:</label>
    <select name="groupBy" id="groupBy">
    <option value="none">None</option>
    <option value="family">Family</option>
    <option value="order">Order</option>
    <option value="genus">Genus</option>
    </select>
      <div style={{ width: "900px", height: "200px" }}>
        <FruitJar fruitDetails={fruitDetails} addToJar={addToJar} />
      </div>
      <FruitList fruitJar={fruitJar} />
    </>
  );
};

export default DataStore;