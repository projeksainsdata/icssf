import axios from "axios";
import AnimationWrapper from "../common/page-animation";
import InPageNavigation from "../components/inpage-navigation.component";
import { useEffect, useState } from "react";
import Loader from "../components/loader.component";
import BlogPostCard from "../components/blog-post.component";
import MinimalBlogPost from "../components/nobanner-blog-post.component";
import { activeTabRef } from "../components/inpage-navigation.component";
import NoDataMessage from "../components/nodata.component";
import { filterPaginationData } from "../common/filter-pagination-data";
import LoadMoreDataBtn from "../components/load-more.component";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import ban from "../imgs/seminar.jpg";
import band from "../imgs/pict2.png";
import prof1 from "../imgs/prof1.png";
import prof2 from "../imgs/prof2.png";
import video from "../imgs/video.mp4";
import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import Timeline from "../components/timeline.component";

const HomePage = () => {
    let [blogs, setBlog] = useState(null);
    let [trendingBlogs, setTrendingBlog] = useState(null);
    let [ pageState, setPageState ] = useState("home");

    let categories = [
        "programming",
        "hollywood",
        "film making",
        "social media",
        "cooking",
        "tech",
        "finance",
        "travel",
    ];

    const fetchLatestBlogs = ({ page = 1 }) => {
        axios
            .post(import.meta.env.VITE_SERVER_DOMAIN + "/latest-blogs", { page })
            .then( async ({ data }) => {

                let formatedData = await filterPaginationData({
                    state: blogs,
                    data: data.blogs,
                    page,
                    countRoute: "/all-latest-blogs-count"
                })

                setBlog(formatedData);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchBlogsByCategory = ({ page = 1 }) => {
        axios
            .post(import.meta.env.VITE_SERVER_DOMAIN + "/search-blogs", { tag: pageState, page })
            .then( async ({ data }) => {
                
                let formatedData = await filterPaginationData({
                    state: blogs,
                    data: data.blogs,
                    page,
                    countRoute: "/search-blogs-count",
                    data_to_send: { tag: pageState }
                })

                setBlog(formatedData);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const fetchTrendingBlogs = () => {
        axios
            .get(import.meta.env.VITE_SERVER_DOMAIN + "/trending-blogs")
            .then(({ data }) => {
                setTrendingBlog(data.blogs);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const loadBlogByCategory = (e) => {
        
        let category = e.target.innerText.toLowerCase(); 

        setBlog(null);

        if(pageState == category){
            setPageState("home");
            return;
        }

        setPageState(category);

    }
    const handleNavLinkClick = (e) => {
        setPageState(e.target.innerText);
    };
    



    return (
        <AnimationWrapper>
        <section className="relative h-auto md:h-screen overflow-hidden">
            <video 
                autoPlay 
                loop 
                muted 
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black-bg opacity-80"></div>

            <div className="relative flex flex-col lg:flex-row gap-6 p-5 px-3 max-w-6xl mx-auto">
                <div className="lg:w-1/2">

                    
                    <h1 className="text-3xl md:mt-10 font-bold text-black lg:text-6xl">
                        1st International Conference On Sustainability of Sciences for the Future {' '}
                        <h1 className="text-2xl text-blue">September 26-27th, 2024 </h1>
                    </h1>
                    
                    <p className="mt-5 items-center"></p>
                    <Link 
                        className="text-xl text-light-green italic font-bold gap-10 mx-auto mb-5 py-2" 
                        to="/tema" 
                        onClick={handleNavLinkClick}
                    >
                        "Building Up The Next Generation of Scientists"
                    </Link>
                    <p className="items-center"></p>

                    <p className="text-gray-500 mt-5 mb-5 text-xl">
                        With this in mind, cultivating curiosity and interest in the new generation of scientists is not only crucial for their emotional and intellectual development, but also important to ensure a promising future for scientific exploration and discovery.
                    </p>
                    <Link 
                        className="btn-light bg-dark-blue rounded-full gap-2 mb-6 py-2 " 
                        to="/submission" 
                        onClick={handleNavLinkClick}
                    >
                        <i className="fi fi-sr-memo-circle-check mr-2"></i>
                          Submisson
                    </Link>

                    <div className="mt-10 md:hidden items-center w-full h-60 relative">
                        <img src={ban} alt="ICSSF" className="w-full h-46 rounded-lg shadow-md items-center object-cover" />
                    </div>
                </div>

                <div className="lg:w-1/2 ml-10 flex justify-center items-center">
                    <div className="hidden md:flex relative">
                        <img src={ban} alt="ICSSF" className="w-full h-full shadow-md rounded-lg object-cover" />
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-mobile-blur">
            <div>
                <h1 className="justify-center mb-2 flex md:text-left text-3xl font-bold text-black"> Conference Topics</h1>
            </div>
            <div className="relative flex flex-col lg:flex-row gap-6 p-5 px-3 max-w-6xl mx-auto">
                <div className="lg:w-1/2">
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
                <div className="lg:w-1/2">
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

        <section className="relative h-auto overflow-hidden">
            <video 
                autoPlay 
                loop 
                muted 
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black-bg opacity-80"></div>
            
            <div className="relative container mx-auto px-6 py-8">
                    <h2 className="text-3xl font-semibold text-center mb-2">Invited Speakers</h2>
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
        </section>

        <section className="md:w-200 md:px-80 items-center justify-center">
            <Timeline />
        </section>


        </AnimationWrapper>
    );
};

export default HomePage;
