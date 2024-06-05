import { FaInstagram } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Header() {
    return (
        <div className="main">
            <div>
                <ul>
                    <li className="first-con"><a href="">Home</a></li>
                    <li className="first-con"><a href="">About</a></li>
                    <li className="first-con"><a href="">Blog</a></li>
                    <li className="first-con"><a href="">Contact</a></li>
                    <li className="first-con"><a href="">Service</a></li>
                </ul>
            </div>
            <div className="icon">
               <ul>
               <li className="first-con1"><FaRegUserCircle /></li>
                <li className="first-con1"><FaInstagram /></li>
                <li className="first-con1"><FaFacebook /></li>
               </ul>
            </div>
        </div>
    );
}
export default Header