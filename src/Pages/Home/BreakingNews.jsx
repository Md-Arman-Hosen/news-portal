import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex border bg-gray-300">
            <h5 className=" m-1 text-white border px-3 py-3 pt-1 pb-1 bg-red-600">Latest</h5>
            <Marquee pauseOnHover={true}>
                <Link className="px-4" to="/">Match Highlight: Germany vs Spain-- As it happened......!     </Link>   
                <Link className="px-4" to="/">Match Highlight: Germany vs Spain-- As it happened......!     </Link>
                <Link className="px-4" to="/">Match Highlight: Germany vs Spain-- As it happened......!     </Link>
                <Link className="px-4" to="/">Match Highlight: Germany vs Spain-- As it happened......!     </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;