import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/swimming.png"
import qZone2 from "../../../assets/class.png"
import qZone3 from "../../../assets/playground.png"
const RightSideNav = () => {
    return (
        <div>
            {/*Login icon zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold">Login With</h2>
                <button className="btn btn-outline btn-accent w-full text-lg mb-2 ">
                    <FaGoogle />Login with Google
                </button>
                <button className="btn btn-outline w-full text-lg ">
                    <FaGithub />Login with GitHub
                </button>
            </div>
            {/*Social icon zone */}
            <div className="p-4  mb-6">
                <h2 className="text-3xl font-bold mb-3">Find Us On</h2>
              <a className="p-4 flex items-center gap-3 text-lg border rounder-t-lg" href="">
                <FaFacebook/> Facebook
              </a>
              <a className="p-4 flex items-center gap-3 text-lg border-x" href="">
                <FaTwitter/> Twitter
              </a>
              <a className="p-4 flex items-center gap-3 text-lg border rounder-b-lg" href="">
                <FaInstagram/> Instagram
              </a>
            </div>
            {/*q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;