
const WantFood = ({ wantCookItem }) => {
    console.log(wantCookItem);
    const { recipe_name, preparing_time, calories } = wantCookItem;


    return (
        <div className="bg-gray-200 mb-1 mt-1">
            <td className="">1</td>
            <td className="">{recipe_name}</td>
            <td className="">{preparing_time} minutes</td>
            <td className="">{calories} calories</td>
            <td className=""><button className="btn">Preparing</button></td>
        </div >
    );
};

export default WantFood;