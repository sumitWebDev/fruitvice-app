import { useState, useEffect } from "react";
import FruitJar from "./fruit-jar";
import FruitList from "./fruit-list";
import FruitListByGroup from "./fruitlist-bygroup";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../styles/data-store.css';

//Logo Imports
var LogoImg = require ('../assets/logo-img.png');
var LogoTitle = require ('../assets/logo-title.png');

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
  
  const removeFromJar = () =>{
    setFruitJar([]);
  }
  
  
  const addToJarGroup = (group: keyof FruitDetailsProps,value: keyof FruitDetailsProps) => {
   const fruit = fruitDetails.filter((item) => (item[value] === group));

    if (fruit) {
      setFruitJar([...fruitJar, ...fruit ]);
    }
  };

  const groupBy = (e:any)=>{
    setGroupByValue(e.target.value);
  }

  return (
    <>
  <Navbar className="text-center">
    <Navbar.Brand className="images-header mx-auto">
      <img src={LogoImg} className=" mx-auto LogoImg" alt="Fruit Jar" width={100} height={100}/>
      <img src={LogoTitle} className=" mx-auto LogoImg" alt="Fruit Jar"  width={150} height={80}/>
    </Navbar.Brand>
  </Navbar>
    
  <Container>
    <Row>
      <Col lg={6}>
        <label htmlFor="groupBy" className="my-3 fw-bold">Group Fruits By ( Order/Genus/Family ) :</label>
        <Form.Select size="lg" name="groupBy" id="groupBy" onChange={(e) => groupBy(e)} className="w-25 p-1 fs-6 shadow-none border-none mb-3">
          <option value="none">None</option>
          <option value="family">Family</option>
          <option value="order">Order</option>
          <option value="genus">Genus</option>
        </Form.Select >
          {groupByValue !== 'none' ?  (<FruitListByGroup fruitDetails={fruitDetails} groupByValue={groupByValue} addToJarGroup={addToJarGroup} />  )   : (<FruitList fruitDetails={fruitDetails} addToJar={addToJar} />)    }
      </Col>
      {fruitJar.length ?  (<FruitJar fruitJar={fruitJar} removeFromJar={removeFromJar}/>) : (' ') }
    </Row> 
  </Container>   
    </>
  );
};

export default DataStore;