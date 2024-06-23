import { useContext, useRef } from "react";
import AnimationWrapper from "../common/page-animation";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Link, Navigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";
import logoo from "../imgs/logo-icssf-btn.png";

const UserAuthForm = ({ type }) => {

    let { userAuth: { access_token }, setUserAuth } = useContext(UserContext)
    const formRef = useRef(null);

    const userAuthThroughServer = (serverRoute, formData) => {

        axios.post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
        .then(({ data }) => {
            storeInSession("user", JSON.stringify(data))
            
            setUserAuth(data)
        })
        .catch(({ response }) => {
            toast.error(response.data.error)
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        let serverRoute = type == "sign-in" ? "/signin" : "/signup";

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

        // formData
        let form = new FormData(formElement);
        let formData = {};

        for(let [key, value] of form.entries()){
            formData[key] = value;
        }

        let { fullname, email, password } = formData;

        // form validation

        if(fullname){
            if(fullname.length < 3){
                return toast.error("Fullname must be at least 3 letters long")
           }
        }
       if(!email.length){
            return toast.error("Enter Email" )
       }
       if(!emailRegex.test(email)){
            return toast.error("Email is invalid" )
       }
       if(!passwordRegex.test(password)){
            return toast.error("Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters")
       }

       userAuthThroughServer(serverRoute, formData)

    }



    return (
        access_token ?
            <Navigate to="/" />
            :
            <AnimationWrapper keyValue={type}>
                <section className="h-cover flex flex-col md:flex-row items-center justify-center">
                    <Toaster />
                    <div className="w-full md:w-1/2 flex flex-col justify-center mb-8 items-center px-4 md:px-0">
                        <img src={logoo} className="w-full h-60 md:mr-8 md:w-full md:h-full object-cover" alt="Logo" />
                    </div>

                <form ref={formRef} className="w-[80%] max-w-[400px] md:w-1/2 px-4 md:px-0" onSubmit={handleSubmit}>
                        {
                            type != "sign-in" ?
                            <InputBox
                                name="fullname"
                                type="text"
                                placeholder="Full Name"
                                icon="fi-rr-user"
                            />
                            : ""
                        }

                        <InputBox
                            name="email"
                            type="email"
                            placeholder="Email"
                            icon="fi-rr-envelope"
                        />

                        <InputBox
                            name="password"
                            type="password"
                            placeholder="Password"
                            icon="fi-rr-key"
                        />

                        <button
                            className="btn-dark center mt-8"
                            type="submit"
                            onClick={handleSubmit}
                        >   
                            { type.replace("-", " ") }
                        </button>

                        {

                            type == "sign-in" ?
                            <p className="mt-4 text-dark-grey text-xl text-center">
                            Don't have an account ?
                            <Link to="/signup" className="underline text-black text-xl ml-1" >
                                Register here
                            </Link>  
                            </p>
                            :
                            <p className="mt-4 text-dark-grey text-xl text-center">
                            Already a member ?
                            <Link to="/signin" className="underline text-black text-xl ml-1" >
                                Sign in
                            </Link>  
                            </p>

                        }

                    </form>
                </section>
            </AnimationWrapper>
    );
};

export default UserAuthForm;