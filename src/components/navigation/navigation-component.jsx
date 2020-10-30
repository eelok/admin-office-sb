import Rect from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return(
        <nav>
           <ul>
               <li><Link  to='/concerts'>Concerts</Link></li>
               <li><Link to='/addconcert'>Add Concerts</Link></li>
           </ul>
        </nav>
    )
}

export default Navigation;