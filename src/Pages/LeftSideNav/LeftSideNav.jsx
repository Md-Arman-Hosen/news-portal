import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div className="space-y-4">
            <h1 className="text-2xl">All Categories</h1>
            {
                categories.map(category => <NavLink
                    className="block ml-4 text-xl font-semibold"
                    key={category.id}
                    to={`/category/${category.id}`}
                >{category.name}
                </NavLink>)
            }
            {
                card.map(singleCard => <div className="space-y-3"
                    key={singleCard._id}>
                    <img src={singleCard.image_url} alt="" />
                    <h1>{singleCard.title}</h1>
                    <div className="flex gap-3 items-center">
                        <p className="font-semibold">{singleCard.category}</p>
                        <CiCalendar />
                        <p>{singleCard.published_date}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default LeftSideNav;