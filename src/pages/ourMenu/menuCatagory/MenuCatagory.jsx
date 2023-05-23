import Cover from "../../../shared/cover/Cover";
import MenuItem from "../../../shared/menuItem/MenuItem";

const MenuCatagory = ({items, img, title}) => {
    return (
        <div className="my-10">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-5 my-5">
                {
                    items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center my-6">
                <button className="btn  btn-outline border-0 border-black border-b-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCatagory;