import { useMeals } from "./MealsProvider";

const MealsList = () => {
    const { meals } = useMeals();
    return (
        <div>
            <h1>Meals</h1>
            {meals.map((meal: any) => (
                <p key={meal.id}>{meal.name} - {meal.time}</p>
            ))}
        </div>
    );
};

export default MealsList;