import React from 'react'
//import { useSelector} from 'react-redux'

function NavBar() {
    const mode = useSelector (state => state);


    return (
        <div className="NavBar">
            <NavBar content="Blog" />
            <NavBar content="About Me" />
            <NavBar content="Projects" />
            <NavBar content="contact" />
        </div>
    )
};

export default NavBar