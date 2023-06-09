
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    // const [popularMenus , setpopularMenus] = useState([]);
    // useEffect(()=>{
    //     fetch("menu.json")
    //     .then(res=> res.json())
    //     .then(data=> {
    //         const popularsItem  = data.filter(menu=> menu.category==="popular")
    //         setpopularMenus(popularsItem);
    //     })
    // } ,[])
    const [menu] = useMenu();
    const popularItem  = menu.filter(menu=> menu.category==="popular");

    return (
        <section className="p-2">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"--- Check out Popular Menu ---"}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-5">
                {
                    popularItem.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <div className="text-center my-4">
                <button className="btn  btn-outline border-0 border-black border-b-4">View Full Menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;