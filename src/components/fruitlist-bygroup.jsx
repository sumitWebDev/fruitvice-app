
const FruitListByGroup =  (props) => { 

    const grouping = ()=>{
        const groupedByFamily = props.fruitDetails.reduce((acc, fruit) => {
            const key = props.groupByValue.toLowerCase();
            console.log(key)
            if (!acc[key]) {
            acc[fruit[key]] = [];
            }
            acc[fruit.key].push(fruit);
            return acc;
        }, {});
        console.log(groupedByFamily)
    }
    grouping();
    return (
     <>
        {/* {        Object.keys(props.groupByDetail).map((group) => (
            <div key={group}>
              <h3>{group}</h3>
              <ul>
                {props.groupByDetail[group].map((fruit) => (
                  <li key={fruit.name}>
                    {fruit.name} ({fruit.nutritions.calories} calories)
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
          {props.groupByValue}
    </>
);}

export default FruitListByGroup;