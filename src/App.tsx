import React from 'react'
import Header from './components/Header'
import {Outlet} from "react-router-dom";
import getUserInfo, {getReposInfo} from "./api/api.ts";
const App:React.FC = () => {
    console.log(getReposInfo('BranGitfox', 'GUI'))
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