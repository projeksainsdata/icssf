import Navbar from "../components/navbar.component";
import TabsInformation from "../components/TabsInformation";

const InformationPage = () => {

    return (
        <>
        <Navbar />
        
        <div className="flex flex-col justify-center items-center mx-auto text-center mt-10 px-[9%]">
            <h1 className="text-5xl font-bold font-gelasio text-center">Information</h1>
            <h3 className="text-2xl">1st International Conference On Sustainability of Sciences for the Future (ICSSF)</h3>
            <hr width={300}/>
        </div>
        <TabsInformation/>
        </>
    )
}

export default InformationPage;