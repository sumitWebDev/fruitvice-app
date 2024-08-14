
const FruitJar =  (props:any) => { 

    type fruitDetailsProps = {
        id: number;
        name: string;
        nutritions:{
            calories: string
        }
    };
    const fruitName = props.fruitDetails.map((item:fruitDetailsProps)=>(
            <ul>
                <li>{item.name}</li>
                <li>{item.nutritions.calories} Calories</li>
                <button  onClick = {() => props.addToJar(item.id)}>Add</button>
            </ul>
    ))

    return (
     <>
        {fruitName}
    </>
);}

export default FruitJar;