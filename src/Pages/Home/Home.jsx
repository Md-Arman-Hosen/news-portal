import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6  p-4">
                <div><LeftSideNav></LeftSideNav> </div>
                <div className="md:col-span-2 ">
                    {
                        news.map(aNews => <NewsCard
                        key={aNews._id}
                        news = {aNews}
                        ></NewsCard> )
                    }
                </div>
                <div > <RightSideNav></RightSideNav>   </div>
            </div>
        </div>
    );
};

export default Home;