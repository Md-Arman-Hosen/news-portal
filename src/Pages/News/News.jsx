import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Footer from "../Footer/Footer";

const News = () => {
    const news = useLoaderData();
    const { id } = useParams();
    const newscard = news.find(newscard => newscard._id === id);

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-4 p-4">
                <div className="col-span-3">
                    <h2 className="text-5xl font-bold mb-4">{newscard.title}</h2>
                    <p className="text-lg mb-2">By: {newscard.author.name}</p>
                    <p className="text-gray-600 mb-4">
                        Published on: {new Date(newscard.author.published_date).toLocaleString()}
                    </p>
                    <img
                        src={newscard.image_url}
                        alt={newscard.title}
                        className="rounded-lg mb-4"
                    />
                    <p className="text-lg leading-relaxed">{newscard.details}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default News;
