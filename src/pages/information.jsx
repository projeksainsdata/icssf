import { Link } from "react-router-dom";
import lightPageNotFoundImg from "../imgs/404-light.png";
import darkPageNotFoundImg from "../imgs/404-dark.png";
import lightFullLogo from "../imgs/logo-light.png";
import darkFullLogo from "../imgs/logo-dark.png";
import { ThemeContext } from "../App";
import { useContext } from "react";
import Navbar from "../components/navbar.component";

const InformationPage = () => {

    let { theme } = useContext(ThemeContext);

    return (
        <>
        <Navbar />
        <section className="h-cover relative p-10 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold font-gelasio mt-20">INFORMATION</h1>
            <img src={ theme == "light" ? darkPageNotFoundImg : lightPageNotFoundImg } className="select-none border-grey w-72 object-cover mt-0" />
            <p className="text-dark-grey text-xl ">The page you are looking for does not Information. Head back to the <Link to="/" className="text-black underline">home page</Link></p>
        </section>
        </>
    )
}

export default InformationPage;