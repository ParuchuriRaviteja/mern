//navbar.js in client
import { Link } from "react-router-dom"
export default function navbar(){
    return(
        <div>
            <h1>Navbar</h1>
            <div>
                <ul>
                    <li>
                        <Link to="/register"><span className="text-sm">Register</span></Link>
                    </li>
                    <li>
                    <Link to="/login"><span className="text-sm">Login</span></Link>
                    </li>
                    <li>
                    <Link to="/logout"><span className="text-sm">Logout</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}