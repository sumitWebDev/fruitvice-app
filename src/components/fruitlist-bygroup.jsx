import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FruitListByGroup = (props) => {
  const [groupByDetail, setGroupByDetail] = useState([]);

  //grouping fruits based on group by value
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
  }, [props.groupByValue, props.fruitDetails]);

  //showing the group by fruits object in UI
  const showData =
    Object.keys(groupByDetail).map((group, index) => (
      <Accordion.Item key={index} eventKey={group}>
        <Accordion.Header key={`${group}-${index}`} >{group}
        </Accordion.Header>
        <Accordion.Body>
          {groupByDetail[group].map((fruit) => (
            <>
              <Row>
                <Col key={fruit.id} xs={6}>
                  <span className="px-2 fw-bold">Fruit Name - </span>
                  <span className="px-0.3">{fruit.name}</span>
                </Col>
                <Col>
                  <span className="px-2 fw-bold">Calories - </span>
                  <span>{fruit.nutritions.calories}</span>
                </Col>
              </Row>

            </>
          ))}
          <Button variant="primary" onClick={() => props.addToJarGroup(group, props.groupByValue)} size="sm" id='addToJar' className="my-2">Add all to Fruit Jar</Button>
        </Accordion.Body>
      </Accordion.Item>
    ))
  return (
    <>
      <Accordion>
        {showData}
      </Accordion>
    </>
  );
}

export default FruitListByGroup;