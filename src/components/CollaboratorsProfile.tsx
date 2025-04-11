import {getReposInfo} from "../api/api.ts";

interface PropsType {
    user:string,
    repos:string
}
import React, {useEffect, useState} from 'react'
const CollaboratorsProfile:React.FC<PropsType> =({user, repos}) => {
    const [collabs, setCollabs] = useState<[]|undefined>([])
    useEffect(() => {

        getReposInfo(user, repos).then((repos) => setCollabs(repos?.collaborators))
    }, [user, repos])

    return <>

    <div className="avatar-group -space-x-6">
        {
             collabs?.map((col, index) => (
                 <div className="avatar" key={index}>
                <div className="w-12">
                   <img src={col.avatar_url} alt={col.login+'_profile'}/>
                </div>
            </div>
            ))
        }

    </div>


    </>
}


export default CollaboratorsProfile