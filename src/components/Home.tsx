import React from "react";
import Hero from "./Hero.tsx";
import New from "./New.tsx";
import Usage from "./Usage.tsx";

const Home:React.FC = () => {
    return (
        <>

            <Hero/>
            <New/>
            <Usage/>
        </>
    )
}

export default Home