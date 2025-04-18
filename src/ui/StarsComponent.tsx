import React, {useEffect, useState} from "react"
import {getUserInfo, UserInfo} from "../api/api.ts";

const StarsComponent:React.FC<{user:string}> = ({user}) => {

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        if (user) {
            getUserInfo(user)
                .then((res) => {
                    if (res) {
                        setUserInfo(res);
                    }
                })
                .catch((err) => console.error('Error fetching user info:', err));
        }
    }, [user]);
    return (
        <>
            <div className="stats shadow mt-4 flex flex-col sm:flex-row">
                <div className="stat">
                    <div className="stat-figure text-yellow-500">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l2.9 6.2L22 9.3l-5 4.9L18.2 22 12 18.3 5.8 22 7 14.2 2 9.3l7.1-1.1L12 2z" />
                        </svg>
                    </div>
                    <div className="stat-title">Stars</div>
                    <div className="stat-value text-gray-700">
                        {userInfo?.stars?.toLocaleString() ?? 'N/A'}
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-blue-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-5-4M9 20H4v-2a4 4 0 015-4m5-4a3 3 0 100-6 3 3 0 000 6zm-6 0a3 3 0 100-6 3 3 0 000 6z" />
                        </svg>
                    </div>
                    <div className="stat-title">Followers</div>
                    <div className="stat-value text-gray-700">
                        {userInfo?.followers?.toLocaleString() ?? 'N/A'}
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-green-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v6m3-3h-6m-4 3a4 4 0 100-8 4 4 0 000 8zm0 2c-2.67 0-8 1.34-8 4v1h8" />
                        </svg>
                    </div>
                    <div className="stat-title">Following</div>
                    <div className="stat-value text-gray-700">
                        {userInfo?.following?.toLocaleString() ?? 'N/A'}
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarsComponent