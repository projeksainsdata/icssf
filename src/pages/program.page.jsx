import { Link } from "react-router-dom";
import lightPageNotFoundImg from "../imgs/404-light.png";
import darkPageNotFoundImg from "../imgs/404-dark.png";
import lightFullLogo from "../imgs/logo-light.png";
import darkFullLogo from "../imgs/logo-dark.png";
import { ThemeContext } from "../App";
import { useContext,useState } from "react";
import Navbar from "../components/navbar.component";
import prof1 from "../imgs/prof1.png";
import prof2 from "../imgs/prof2.png";
// import TabsInformation from "../components/TabsInformation";

const InformationPage = () => {

    let names = [{
    	div:"INTERNATIONAL ADVISORY BOARD",
    	people:["Prof. Dr. I Nyoman Pugeg Aryantha","Prof. Dr. Eng. Khairurrijal, M.Si.","Dr. Rahayu Sulistyorini, S.T., M.T."]
    },{
    	div:"STEERING COMMITTEE",
    	people:["John Doe","Jane Done"]
    }]
    let { theme } = useContext(ThemeContext);
    const [division,setDivision] = useState(names[0])

    const setDiv = (div) =>{

    	let findPeople = names.find(name=>name.div==div)
    	if(findPeople){
    		setDivision(findPeople)
    	}
    }
    return (
        <>
        <Navbar />
        
        {/*<img src="https://ichse.itera.ac.id/wp-content/uploads/2023/07/PicsArt_03-02-08.51.10-e1566185314695.jpg" className="absolute -z-10 top-24 h-56 brightness-50"/>*/}
        <div className="mt-10 px-[9%] z-50">
        	<div className=" flex flex-col justify-center items-center">
            	<h1 className="text-5xl font-bold font-gelasio text-center">Program</h1>
            	<h3 className="text-sm text-center">1st International Conference On Sustainability of Sciences for the Future (ICSSF)</h3>
            	<hr width={300}/>
            </div>
            <div id="commitee" class="my-10">
            	<h2 className="text-3xl py-3 text-center">Commitee</h2>
            	<div className="flex">
            	<div className="w-fit h-fit rounded-lg flex flex-col gap-3">
				{[
				  "INTERNATIONAL ADVISORY BOARD",
				  "STEERING COMMITTEE",
				  "CHAIR",
				  "SECRETARY",
				  "SCIENTIFIC & TECHNICAL",
				  "EVENT",
				  "IT",
				].map((title, index) => (
        			<div className={`rounded-l-full p-5 hover:bg-black-light hover:text-black cursor-pointer ${division.div==title?"bg-black-light text-black":"bg-light-green text-white"}`} key={index} onClick={()=>setDiv(title)}>
        				<p className="font-bold">{title}</p>
        			</div>
      			))}
      			</div>
      			<div className="bg-black-light w-full text-black px-10 py-20 rounded-r-lg">
				  	<h1 className="text-3xl">{division.div}</h1>
      				<ul className="text-2xl list-disc mx-4 space-y-3">
      				{division.people.map(name=>(
						<li className="text-2xl">{name}</li>
      				))}
					</ul>
      			</div>
      			</div>
			</div>

{/*			<div id="speaker" className="flex flex-col justify-center items-center text-center">
            	<h1 className="text-4xl py-3">Speaker</h1>
            	<div className="flex flex-wrap justify-center items-center w-full gap-5 md:gap-10">
            	{[1,2,3,4,5].map((x)=>
            	<div className="text-center flex flex-col justify-center items-center gap-3 md:w-3/12">
            		<img src="https://ichse.itera.ac.id/wp-content/uploads/elementor/thumbs/Masato-san-qa84ylp51f243o9oqfwfdizvr2cs18jzco61y6oo8o.jpg" className="rounded-full w-52 h-52"/>
            		<p className="font-bold text-lg">Prof. Masato Iguchi</p>
            		<p>Sakurajima Volcano Research Center, Disaster Prevention Research Institute</p>
            		<p>Kyoto University, Japan</p>
            	</div>
            	)}
            	</div>
			</div>*/}
            <div className="relative container mx-auto px-6 py-8">
            	<h2 className="text-3xl font-semibold text-center mb-2">Keynote Speakers</h2>
            	<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            	    <div className="bg-blur p-6 rounded-lg shadow-lg">
            	        <div className="flex items-center mb-4">
            	            <img src={prof1} alt="Speaker 1" className="w-20 h-20 absolute rounded-full mr-2"/>
            	            <div className="ml-24">
            	                <h3 className="text-xl text-light-green font-bold">Prof. Hideyo Kawakita</h3>
            	                <p className="text-black">Faculty of Science, Department of Astrophysics and Meteorology, Kyoto Sangyo University</p>
            	            </div>
            	        </div>
            	    </div>
            	    <div className="bg-blur p-6 rounded-lg shadow-lg">
            	        <div className="flex items-center mb-4">
            	            <img src={prof2} alt="Speaker 2" className="w-20 h-20 absolute rounded-full mr-2"/>
            	            <div className="ml-24">
            	                <h3 className="text-xl text-light-green font-bold">Speaker 2</h3>
            	                <p className="text-black">Title/Position</p>
            	            </div>
            	        </div>
            	    </div>
            	</div>
            </div>

        <section className="bg-mobile-blur">
            <div>
                <h1 className="justify-center mb-2 flex md:text-left text-3xl font-bold text-black"> Conference Topics</h1>
            </div>
            <div className="relative flex flex-col lg:flex-row gap-6 p-5 px-3 max-w-6xl mx-auto">
                <div className="lg:w-1/3">
                    <div className="lg:w-full bg-black-light rounded-lg shadow p-4 mb-4">
                        
                        <h1 className="text-2xl mb-4 font-blod text-light-green flex items-center justify-center">
                        <i className="fi fi-sr-microscope mr-2 text-2xl"></i> Nature Sciences</h1>
                        <ul className="list-disc text-xl pl-5 text-left">
                            <li>Mathematics</li>
                            <li>Physics</li>
                            <li>Biology</li>
                            <li>Chemistry</li>
                            <li>Astronomy</li>
                            <li>Meteorology</li>
                            <li>Atmospheric and Planetary Science</li>
                            <li>Earth Science</li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-2/3">
                    <div className="lg:w-full bg-black-light rounded-lg shadow p-4 mb-4">
                        <h1 className="text-2xl mb-4 font-blod text-light-green flex items-center justify-center">
                        <i className="fi fi-sr-leaf mr-2 text-2xl"></i> Environmental Sciences</h1>
                        <ul className="list-disc text-xl pl-5 text-left">
                            <li>Global Environmental Change and Disaster Management</li>
                            <li>Natural Resources Science</li>
                            <li>Environmental Dynamics and Ecosystem</li>
                            <li>Environmental Management and Policy</li>
                            <li>Renewable energy</li>
                            <li>Ecology and Biodiversity</li>
                            <li>Environmental Pollution</li>
                            <li>Solid Waste Management</li>
                            <li>Global Pandemic</li>
                            <li>Carbon Footprint</li>
                            <li>Urban city heat impact</li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="lg:w-full bg-black-light rounded-lg shadow p-4 mb-4">
                        <h1 className="text-2xl mb-4 font-blod text-light-green flex items-center justify-center">
                        <i className="fi fi-sr-capsules mr-2 text-2xl"></i> Pharmacy</h1>
                        <ul className="list-disc text-xl pl-5 text-left">
                            <li>Pharmaceutical Sciences</li>
                            <li>Global Health and Pharmacy</li>
                            <li>Pharmacy Automation and Technology</li>
                            <li>Physical Pharmacy and Cosmetic</li>
                            <li>Natural Products Chemistry and Pharmacognosy</li>
                            <li>Medicinal and Pharmaceutical Chemistry</li>
                            <li>Precision Medicine</li>
                            <li>Pharmacy Policy and Regulatory</li>
                            <li>Clinical and Industrial Drug</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        </div>
        </>
    )
}

export default InformationPage;
