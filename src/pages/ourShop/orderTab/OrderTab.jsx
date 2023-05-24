import FoodCard from '../../../shared/foodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;