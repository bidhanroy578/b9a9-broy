import PropTypes from "prop-types";
import { BiHeart } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router";
const Card = ({ list }) => {
    const { title, status, location, image, bathrooms, bedrooms, price, size, id } = list
    return (
        <Link to={`/detail/${id}`} className=" shadow-xl hover:scale-105 ease-in-out duration-300 :scale-95 ">
            <div style={{ backgroundImage: `url(${image})` }} className="rounded-md rounded-b-none p-2 bg-center bg-cover h-48 min-w-72">
                <div className="flex backdrop-blur-xl shadow-lg justify-between items-center ">
                    <h3 className=" font-medium w-fit h-fit text-start p-1 ">{title}</h3>
                    <p>{status}</p>
                    <BiHeart className="text-xl" />
                </div>
            </div>
            <div className="p-2">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{price}</h3> <button className="flex items-center gap-2 rounded-2xl p-1 px-2 hover:border hover:border-amber-200 cursor-pointer">Contact <CiMail /></button>
                </div>
                <p className=""><span>{bedrooms} bed . {bathrooms} bath . {size}</span></p>
                <p className="font-thin">{location}</p>
            </div>

        </Link>
    );
};
Card.propTypes = {
    list: PropTypes.object
}
export default Card;