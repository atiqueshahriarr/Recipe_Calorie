import { useState } from "react";
import AddFoods from "./AddFoods";
import FoodCarts from "./FoodCarts";


const Recipe = () => {

    const [wantCook, setWantCook] = useState([]);

    const handleWantCook = (recipe_id) => {
        console.log("clicked", recipe_id);
    }


    return (
        <div className="w-4/5 mx-auto mt-16">
            <div className="mx-auto w-1/2 mb-12">
                <h3 className="text-3xl font-bold mb-5 text-center">Our Recipes</h3>
                <p className="text-center">
                    Indulge in our tantalizing array of recipes, meticulously curated to inspire your culinary creativity and delight your taste buds with every bite.</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <FoodCarts handleWantCook={handleWantCook}></FoodCarts>
                <AddFoods></AddFoods>
            </div>
        </div>
    );
};

export default Recipe;