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
import ban from "../imgs/pict1.png";
import band from "../imgs/pict2.png";
import video from "../imgs/video.mp4";
import React from 'react';
import { FaDiscord } from 'react-icons/fa';

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
        <section className="relative h-screen overflow-hidden">
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
                    <div className="md:hidden items-center w-40 h-40 relative">
                        <img src={ban} alt="ICSSF" className="w-40 h-40 items-center object-cover" />
                    </div>
                    <h1 className="text-3xl md:mt-10 font-bold text-black lg:text-6xl">
                        1st International Conference On Sustainability of Sciences for the Future : {' '}
                        <Typewriter
                            options={{
                                wrapperClassName: 'typewrite text-black text-2xl lg:text-6xl',
                                strings: ['Nature Sciences', 'Environmental Science', 'Pharmacy'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className="mt-5 items-center"></p>
                    <Link 
                        className="text-xl text-light-green italic font-bold gap-10 mx-auto mb-5 py-2" 
                        to="/projek-kami" 
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
                </div>

                <div className="lg:w-1/2 ml-10 flex justify-center items-center">
                    <div className="hidden md:flex relative">
                        <img src={ban} alt="ICSSF" className="w-11/12 h-11/12 object-cover" />
                    </div>
                </div>
            </div>
        </section>

        </AnimationWrapper>
    );
};

export default HomePage;
