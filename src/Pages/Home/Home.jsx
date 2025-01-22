import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6 border p-4">
                <div className="border"><LeftSideNav></LeftSideNav> </div>
                <div className="md:col-span-2 border">Middle news</div>
                <div className="border"> <RightSideNav></RightSideNav>   </div>
            </div>
        </div>
    );
};

export default Home;