import Table from 'react-bootstrap/Table';

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
            <tr>
                <td>{item.name}</td>
                <td>{item.nutritions.calories}</td>
            </tr>
        )
    }
    )

    return (
     <>
        <img src={FruitJarImg} className=" mx-auto fruit-jar-logo" alt="Fruit Jar" width={200} height={200}/>
        <p className="my-3 fw-bold text-center">Fruit List</p>
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
        Total Calories - {calories}
    </>
);}

export default FruitJar;