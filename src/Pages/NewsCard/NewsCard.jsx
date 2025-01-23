/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaShareAlt, FaRegBookmark, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id, author, rating } = news;
    return (
        <div>
            <div className="card bg-base-100 mb-16 ">
                <div className="flex items-center gap-3 bg-slate-200 p-2">
                    <img className="avatar mask mask-circle h-12 w-12 mx-4" src={author.img} alt="" />
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                    <div className="flex gap-2 ml-40">
                        <FaRegBookmark />
                        <FaShareAlt />
                    </div>
                </div>
                <div className="card-body">

                    <h2 className="card-title">{title}</h2>
                    <figure>
                        <img
                            src={image_url} />
                    </figure>
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <Link
                            to={`/news/${_id}`}
                            className="text-orange-600 block">Read More ......</Link>  </p> : <p>{details}</p>
                    }
                </div>
                <div className="border"></div>
                <div className="flex space-x-4 mt-2 items-center">
                    <div className="flex space-x-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                    </div>
                    <div>
                    <p className="text-lg">{rating.number}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;