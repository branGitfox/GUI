import React from "react";
import Hero from "./Hero.tsx";
import New from "./New.tsx";
import Usage from "./Usage.tsx";
import Footer from "./Footer.tsx";
const Home:React.FC = () => {

    return (
        <>

            <Hero/>
            <New/>
            <Usage/>
            <Footer/>
        </>
    )
}

export default Home