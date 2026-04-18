import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/Logo.PNG';

const NavMenu = [
    { id: 1, title: "Services", link: 'services' }, 
    { id: 2, title: "Works", link: 'works' }, 
    { id: 3, title: "Blog", link: '/blog' }, 
    { id: 4, title: "About Me", link: 'about' }, 
];

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e, link, isSection) => {
        if (isSection) {
            e.preventDefault();
            
            // If we are not on the home page, go home first
            if (location.pathname !== '/') {
                navigate('/');
                // Small delay to allow Home to mount before scrolling
                setTimeout(() => {
                    const element = document.getElementById(link);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                // If already on home page, just scroll
                const element = document.getElementById(link);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="py-5 bg-gray-800 text-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="cursor-pointer">
                    <img src={logo} alt="Logo" className="h-10" />
                </Link>

                <ul className="flex justify-center gap-8 font-medium">
                    {NavMenu.map((item) => (
                        <li key={item.id}>
                            {item.title === "Blog" ? (
                                <Link to={item.link} className="hover:text-blue-500 transition-colors">
                                    {item.title}
                                </Link>
                            ) : (
                                <a 
                                    href={`#${item.link}`}
                                    onClick={(e) => handleNavClick(e, item.link, true)}
                                    className="hover:text-blue-500 transition-colors cursor-pointer"
                                >
                                    {item.title}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;