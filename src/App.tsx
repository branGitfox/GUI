import React from 'react'
import Header from './components/Header'
import {Outlet} from "react-router-dom";


const App:React.FC = () => {

    return (
        <>

            <div className='container mx-auto relative'>

                <Header/>
                <Outlet/>

            </div>
        </>
    )
}
export default App;