import React, {Component} from "react";
import './Header.css';

{/* Functional */}
{/*const Header = function(props){
    return(
        <div className="header">
            {props.heading}
            </div>

    )
}
export default Header;
*/}

{/*Class */}

class Header extends Component{
    render(){
        return (
            <div className="header">
            {this.props.heading}
            </div>
       );
    }
}

export default Header;