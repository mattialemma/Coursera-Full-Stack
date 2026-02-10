
const DessertsList = (props) => {
    const lowCaloriesDesserts = props.data
        .filter((dessert) => {
            return dessert.calories < 500;
        })
        .sort((a, b) => {
            return a.calories - b.calories; // Sort by calories in ascending order
            // if a is less than b, it will be placed before b
            // if a is greater than b, it will be placed after b
            // if a is equal to b, their order will remain the same
        })
        .map((dessert) => {
            return (
                <li key={dessert.name}>
                    {dessert.name} - {dessert.calories} cal
                </li>
            );
        });

    return <ul className="p-5">{lowCaloriesDesserts}</ul>;

}
export default DessertsList;

