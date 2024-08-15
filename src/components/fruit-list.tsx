import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FruitList =  (props:any) => { 

    type fruitDetailsProps = {
        id: number;
        name: string;
        nutritions:{
            calories: string
        }
    };
    const fruitName = props.fruitDetails.map((item:fruitDetailsProps)=>(
            <ListGroup key={item.id}>
                <ListGroup.Item className='py-2'>
                <Row>
                    <Col xs={6}>
                        <span className="px-2 fw-bold">Fruit Name - </span>
                        <span className="px-0.3">{item.name}</span>
                    </Col>
                    <Col>
                        <span className="px-2 fw-bold">Calories - </span>
                        <span>{item.nutritions.calories} </span>
                    </Col>
                    <Col>
                        <Button onClick = {() => props.addToJar(item.id)} size="sm" id='addToJar'>Add to Jar</Button>
                    </Col>
                </Row>
                </ListGroup.Item>
            </ListGroup>
    ))

    return (
     <>
        {fruitName}
    </>
);}

export default FruitList;