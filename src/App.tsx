import React from 'react'
import Header from './components/Header'
import {Outlet} from "react-router-dom";
import getUserInfo from "./api/api.ts";
const App:React.FC = () => {
    console.log(getUserInfo())
    return (
        <>
            <div className='container mx-auto'>

                <Header/>
                <Outlet/>

            </div>
            
        </>
    )
}
export default App;