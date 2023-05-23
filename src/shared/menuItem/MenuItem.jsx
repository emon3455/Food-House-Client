/* eslint-disable no-unused-vars */


const MenuItem = ({item}) => {

    const {name, recipe, image, price} = item;

    return (
        <div className="flex justify-between items-center gap-10">
            <div className="flex gap-5 items-center">
                <div className="">
                    <img style={{width: "100px", borderRadius: "0 200px 200px 200px"}} src={image} alt="" />
                </div>
                <div className="">
                    <p>{name}-------</p>
                    <p>{recipe}</p>
                </div>
            </div>
            <p className="text-yellow-600">
                ${price}
            </p>
        </div>
    );
};

export default MenuItem;