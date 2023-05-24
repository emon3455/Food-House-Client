
const FoodCard = ({ item }) => {
    return (
        <div className="card bg-base-100 shadow-2xl">
            <div className="h-1/2">
                <img className="w-full h-full rounded-lg" src={item.image} alt="Shoes" />
            </div>
            <div className="h-1/2 card-body flex items-center">
                <h2 className="card-title text-justify">{item.name}</h2>
                <p className="text-orange-500 font-extrabold text-lg">${item.price}</p>
                <p>{item.recipe}</p>
                <button className="btn  btn-outline border-0 border-yellow-500 border-b-4 text-yellow-400">Add To Cart</button>
            </div>
        </div>
    );
};

export default FoodCard;