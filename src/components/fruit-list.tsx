import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
const FruitList = (props: any) => {

    const fruitName = props.fruitDetails.map((item: FruitDetailsProps) => (
        <ListGroup key={item.id}>
            <ListGroup.Item className='py-2'>
                <Row>
                    <Col xs={6}>
                        <span className="px-1 fw-bold">Fruit Name - </span>
                        <span className="px-1">{item.name}</span>
                    </Col>
                    <Col>
                        <span className="px-2 fw-bold">Calories - </span>
                        <span>{item.nutritions.calories} </span>
                    </Col>
                    <Col>
                        <Button onClick={() => props.addToJar(item.id)} size="sm" id='addToJar'>Add to Jar</Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    ))

    return (
        <>
            <div className="ListGroupContainer">
                {fruitName}
            </div>

        </>
    );
}

export default FruitList;