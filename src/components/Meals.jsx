import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
    const [availableMeals, setAvailableMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await fetch('http://localhost:3000/meals');
                const meals = await response.json();
                setAvailableMeals(meals);
            } catch (error) {
                console.log("Received error: " + error);
            }
        }
        fetchMeals();

    }, []);

    console.log(availableMeals);
    return (
        <ul id="meals">
            {availableMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal}/>
            ))}
        </ul>
    )
}