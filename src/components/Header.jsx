import { Link } from "react-router-dom"

export default function Header() {
    return (
        < nav >
            <ul>
                <li>
                    <Link to={"/about-us"}>AboutUs</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
        </nav >
    );
}