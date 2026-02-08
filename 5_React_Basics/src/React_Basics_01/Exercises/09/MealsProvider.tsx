import { createContext, useState, useContext } from "react";

const MealsContext = createContext(null);

interface meal {
    id: number;
    name: string;
    time: string;
}

const todayMeals: meal[] = [
    { id: 1, name: "Spaghetti Carbonara", time: "12:00" },
    { id: 2, name: "Pizza Margherita", time: "13:00" },
    { id: 3, name: "Lasagna", time: "14:00" },
];

const MealsProvider = ({ children }: { children: any }) => {
    const [meals, setMeals] = useState(todayMeals);

    return (
        <MealsContext.Provider value={{ meals }}>
            {children}
        </MealsContext.Provider>
    );
};

export const useMeals = () => useContext(MealsContext);

export default MealsProvider;
