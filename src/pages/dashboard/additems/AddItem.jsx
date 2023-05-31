import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";

const imageHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostingURL = ``

    const onSubmit = data => {
        console.log(data);
    };


    return (
        <div>
            <SectionTitle subHeading="What's New" heading="Add An Item"></SectionTitle>

            <div className="p-4 ">

                <div className="card  w-full max-w-2xl mx-auto shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Name*</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600 font-semibold mt-1">This field is required</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Category*</span>
                                </label>

                                <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-info w-full ">
                                    <option disabled>Pick One</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="salad">Salad</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                                {errors.category && <span className="text-red-600 font-semibold mt-1">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Recipe Price*</span>
                                </label>
                                <input type="text" {...register("price", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.price && <span className="text-red-600 font-semibold mt-1">This field is required</span>}
                            </div>

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <textarea placeholder="Details" {...register("recipe", { required: true })} className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                            {errors.recipe && <span className="text-red-600 font-semibold mt-1">This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Image*</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-info w-full max-w-sm" />
                            {errors.image && <span className="text-red-600 font-semibold mt-1">This field is required</span>}
                        </div>

                        <div className="form-control mt-6 ">
                            <button className="btn btn-warning">Add Item</button>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    );
};
export default AddItem;