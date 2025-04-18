import React, {useEffect, useState} from "react";
import {getReposInfo, getUserInfo, RepositoryInfo, UserInfo} from "../api/api.ts";

const ReposComponents:React.FC<{user:string, repos:string}> = ({user, repos}) => {

    const [reposInfo, setReposInfo] = useState<RepositoryInfo|undefined>()
    const [userInfo, setUserInfo] = useState<UserInfo|undefined>()
    useEffect(() => {
        getReposInfo(user, repos).then((data:RepositoryInfo|undefined) => setReposInfo(data))
        getUserInfo(user).then((data:UserInfo|undefined) => setUserInfo(data))
    }, [user, repos])
    return (
        <>
            <div className="stats shadow mt-4 flex flex-col sm:flex-row">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        {/* Nouvelle icône collaboration */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M12 12a4 4 0 100-8 4 4 0 000 8zm6 0a3 3 0 100-6 3 3 0 000 6zm-12 0a3 3 0 100-6 3 3 0 000 6z"
                            />
                        </svg>
                    </div>
                    <div className="stat-title">Collaborations</div>
                    <div className="stat-value text-secondary">{reposInfo?.collaborators.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 7v13h18V7M3 7l9-4 9 4" />
                        </svg>
                    </div>
                    <div className="stat-title">Repositories</div>
                    <div className="stat-value text-gray-600">{userInfo?.repositoryCount}</div>
                </div>
            </div>
        </>
    )
}

export default ReposComponents
