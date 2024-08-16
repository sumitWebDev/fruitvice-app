import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

var FruitJarImg = require ('../assets/fruit-jar.png');

const FruitJar =  (props:any) => { 
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
            <tr key={calories}>
                <td>{item.name}</td>
                <td>{item.nutritions.calories}</td>
            </tr>
        )
    }
    )

    return (
     <>
        <Col>
            <img src={FruitJarImg} className=" mx-auto fruit-jar-logo mx-auto d-block" alt="Fruit Jar" width={200} height={200}/>
            <Table striped responsive="sm" className="mx-auto w-50">
            <thead>
                <tr>
                    <th>Fruit Name</th>
                    <th>Calories</th>
                </tr>
            </thead>
            <tbody>
            {fruitName}
            </tbody>
            </Table>
            <Button onClick = {() => props.removeFromJar()} size="sm" id='addToJar' className='my-5 mx-auto d-block'>Clear Fruit Jar</Button>
            <p className='total-calories-text text-center'>
                Total Calories Count {calories}
            </p>
        </Col>
    </>
);}

export default FruitJar;