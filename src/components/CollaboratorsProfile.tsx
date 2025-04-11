import {getReposInfo} from "../api/api.ts";

interface PropsType {
    user:string,
    repos:string
}
import React, {useEffect, useState} from 'react'
    const CollaboratorsProfile:React.FC<PropsType> =({user, repos}) => {
        const [col, setCol] = useState<[]|undefined>([])
        useEffect(() => {

            getReposInfo(user, repos).then((repos) => setCol(repos?.collaborators))
        }, [user, repos])

    return <>

    <div className="avatar-group -space-x-6">
        {
             col?.map((col:{avatar_url:string, login:string}, index) => (
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