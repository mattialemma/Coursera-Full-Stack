import { useMeals } from "./MealsProvider";

const Counter = () => {
    const { meals } = useMeals();
    return (
        <div>
            <h3>Counter</h3>
            <p>Total meals: {meals.length}</p>
        </div>
    );
};

export default Counter;