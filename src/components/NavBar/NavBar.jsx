import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link, withRouter } from 'react-router-dom';


import './NavBar.css';

class NavBar extends React.Component {
    render() {

        const { location } = this.props;

        const homeClass = location.pathname == '/' ? 'active-item' : ''
        const aboutClass = location.pathname == '/about' ? 'active-item' : ''
        const projectsClass = location.pathname == '/projects' ? 'active-item' : ''
        const skillsClass = location.pathname == '/skills' ? 'active-item' : ''
        const contactClass = location.pathname == '/contact' ? 'active-item' : ''
        return (
            <Menu>
                <Link className={`menu-item ${homeClass}`} to="/">Home</Link>
                <Link className={`menu-item ${aboutClass}`} to="/about">About</Link>
                <Link className={`menu-item ${projectsClass}`} to="/projects">Projects</Link>
                <Link className={`menu-item ${skillsClass}`} to="/skills">Skills</Link>
                <Link className={`menu-item ${contactClass }`} to="contact">Contact</Link>

            </Menu>
        );

    }
}
export default withRouter(NavBar);