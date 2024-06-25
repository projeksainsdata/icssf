import { Link } from "react-router-dom";
import lightPageNotFoundImg from "../imgs/404-light.png";
import darkPageNotFoundImg from "../imgs/404-dark.png";
import lightFullLogo from "../imgs/logo-light.png";
import darkFullLogo from "../imgs/logo-dark.png";
import { ThemeContext } from "../App";
import { useContext } from "react";
import Navbar from "../components/navbar.component";
import TabsInformation from "../components/TabsInformation";

const InformationPage = () => {

    let { theme } = useContext(ThemeContext);

    return (
        <>
        <Navbar />
        
        <div className="items-center mx-auto text-center mt-10 px-[9%]">
            <h4 className="text-2xl font-bold font-gelasio">- Information - <br/>1st International Conference On Sustainability of Sciences for the Future (ICSSF)</h4>
        </div>
        <TabsInformation/>
        </>
    )
}

export default InformationPage;