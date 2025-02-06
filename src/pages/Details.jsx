import { GrFavorite } from "react-icons/gr";
import { IoMdShare } from "react-icons/io";
import { useLoaderData, useParams } from "react-router";
import Inquiry from "../components/home/Inquiry";

const Details = () => {
    const { id } = useParams()
    const data = useLoaderData()
    // let d = data . find (i => i.id ==id)
    const { title, description, image, category, location,
        price, size, bedrooms, bathrooms, status, features } = data.find(i => i.id == id)

    return (
        <div className="space-y-8">
            <div className="h-screen grid grid-cols-2 gap-2 relative">
                <img src={image} alt="" className="object-cover h-full w-full" />
                <div className="grid grid-cols-2 gap-2">
                    <img src={image} className="object-cover h-full w-full" />
                    <img src={image} className="object-cover h-full w-full" />
                    <img src={image} className="object-cover h-full w-full" />
                    <img src={image} className="object-cover h-full w-full" />
                </div>
                <div className="absolute bottom-[10%] left-[10%] z-10 text-xl">
                    <div className="flex gap-2">
                        <button className="btn btn-lg rounded-full"><GrFavorite /> Save</button>
                        <button className='btn btn-lg rounded-full'><IoMdShare /> Share</button>
                    </div>
                </div>
                <button className="absolute bottom-[10%] right-[10%] z-10 btn btn-lg rounded-full ">See More </button>
            </div>

            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <div>
                        <h3 className="text-2xl leading-5 font-medium">{title}</h3>
                        <h4 className="text-3xl leading-20 opacity-85 font-light">{price}</h4>
                        <p className="text-xl font-semibold leading-14">{bedrooms} Bedrooms . {bathrooms} Bathrooms . {size} </p>
                        <p className="text-lg ">Caregory : {category} . Location : {location}</p>
                        <p className="text-lg mb-4">Type : {category} . Status : {status} </p>
                        <p>{description}</p>
                        <p><img src="" alt="" /></p>
                    </div>
                    <div>
                        <h3 className="text-2xl leading-16">Features</h3>
                        <p className="text-lg ">{features.map(i => <p className="leading-10" key={i}>🔵 {i}</p>)}</p>
                    </div>
                </div>
                <Inquiry></Inquiry>
            </div>
        </div>
    );
};

export default Details;