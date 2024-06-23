import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import darkLogo from "../imgs/logo-dark.png";
import lightLogo from "../imgs/logo-light.png";
import { ThemeContext, UserContext } from '../App';
import UserNavigationPanel from "./user-navigation.component";
import axios from "axios";
import { storeInSession } from "../common/session";

const Navbar = () => {
    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
    const [userNavPanel, setUserNavPanel] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    let { theme, setTheme } = useContext(ThemeContext);
    let navigate = useNavigate();
    const { userAuth, userAuth: { access_token, profile_img, new_notification_available, isAdmin }, setUserAuth } = useContext(UserContext);

    useEffect(() => {
        if (access_token) {
            axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/new-notification", {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then(({ data }) => {
                setUserAuth({ ...userAuth, ...data });
            })
            .catch(err => {
                console.log(err);
            });
        }
    }, [access_token]);

    const handleUserNavPanel = () => {
        setUserNavPanel(currentVal => !currentVal);
    }

    const handleSearch = (e) => {
        let query = e.target.value;
        if (e.keyCode === 13 && query.length) {
            navigate(`/search/${query}`);
        }
    }

    const handleBlur = () => {
        setTimeout(() => {
            setUserNavPanel(false);
        }, 200);
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleBlurMenu = () => {
        setTimeout(() => {
            setMenuOpen(false);
        }, 200);
    }

    return (
        <>
            <nav className="navbar z-50">

                <Link to="/" className="flex-none w-10">
                    <img src={ darkLogo } className="w-full" />
                </Link>


                <div className="hidden md:flex items-left gap-3 ml-2">
                    <Link to="/program" className="link"><strong>Program</strong></Link>
                    <Link to="/author" className="link"><strong>Author</strong></Link>
                    <Link to="/information" className="link"><strong>Information</strong></Link>
                </div>

                <div className="flex items-center gap-2 md:gap-2 ml-auto">
                    <button className="md:hidden relative z-50 flex" onClick={toggleMenu}>
                        <i className={`fi ${menuOpen ? ' fi-rr-cross' : ' fi-rr-menu-burger'} text-2xl`}></i>
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-3 ml-auto">
                    {isAdmin && (
                        <Link to="/editor" className="link gap-2 flex items-center">
                            <i className="flaticon-file-edit"></i>
                            <p>Write</p>
                        </Link>
                    )}
                    {access_token ? (
                        <>
                            <Link to="/dashboard/notifications">
                                <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10">
                                    <i className="flaticon-bell text-2xl block mt-1"></i>
                                    {new_notification_available && (
                                        <span className="bg-red w-3 h-3 rounded-full absolute z-10 top-2 right-2"></span>
                                    )}
                                </button>
                            </Link>
                            <div className="relative" onClick={handleUserNavPanel} onBlur={handleBlur}>
                                <button className="w-12 h-12 mt-1">
                                    <img src={profile_img} className="w-full h-full object-cover rounded-full" />
                                </button>
                                {userNavPanel && <UserNavigationPanel />}
                            </div>
                        </>
                    ) : (
                        <>
                            <Link className="btn-dark py-2" to="/signin">
                                Sign In
                            </Link>
                            <Link className="btn-light py-2" to="/signup">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>

                

                {/* Mobile Menu */}
                <div className={`absolute top-16 right-0 bg-mobile-blur shadow-md p-5 rounded-lg md:hidden ${menuOpen ? 'block' : 'hidden'}`} onBlur={handleBlurMenu}>
                    <Link to="/program" className="link text-black mb-4 py-2 block" onClick={toggleMenu}>Program</Link>
                    <Link to="/author" className="link text-black mb-4 py-2 block" onClick={toggleMenu}>Author</Link>
                    <Link to="/information" className="link text-black mb-4 py-2 block" onClick={toggleMenu}>Information</Link>
                    {access_token && (
                        <Link to="/dashboard/notifications" className="link py-2 block" onClick={toggleMenu}>
                            Notifications
                        </Link>
                    )}
                    {access_token ? (
                        <div className="relative" onClick={handleUserNavPanel} onBlur={handleBlur}>
                            <button className="w-12 h-12 mt-1 mb-4">
                                <img src={profile_img} className="w-full h-full object-cover rounded-full" />
                            </button>
                            {userNavPanel && <UserNavigationPanel />}
                        </div>
                    ) : (
                        <>
                            <Link className="btn-dark mb-4 py-2 block" to="/signin" onClick={toggleMenu}>
                                Sign In
                            </Link>
                            <Link className="btn-light py-2 block" to="/signup" onClick={toggleMenu}>
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;
