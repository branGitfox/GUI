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

import { useTranslation } from 'react-i18next';
import { getUserInfo, RepositoryInfo, UserInfo} from "../api/api.ts";
import {UserComparisonProps} from "../types/userTypes.ts";

interface ReposStatsCardProps2 {
    onUseClick: () => void,
    user:string,
    repos:string
}

const ReposStatsCard: React.FC<ReposStatsCardProps2> = ({ onUseClick, user, repos }) => {
    const { t } = useTranslation();
    const [reposInfo, setReposInfo] = useState<RepositoryInfo|undefined>()
    const [userInfo, setUserInfo] = useState<UserInfo|undefined>()
    getReposInfo(user, repos).then((data:RepositoryInfo|undefined) => setReposInfo(data))
    getUserInfo(user).then((data:UserInfo|undefined) => setUserInfo(data))

    return (
        <div className="card bg-base-100 shadow-sm w-full">
            <div className="card-body">
                {/* Icône principale pour "repository" */}
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v2H4V4zm0 4h16v12H4V8zm4 4h8m-8 4h4" />
                    </svg>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 items-center">
                    <h2 className="text-2xl sm:text-3xl font-bold">{t('reposTitle')}</h2>
                    <button className="btn btn-square btn-ghost">
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

                <ul className="mt-6 flex flex-col gap-2 text-sm">
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500 me-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{t('reposDesc')}</span>
                    </li>
                </ul>

                <div className="mt-6">
                    <button className="btn btn-primary w-full" onClick={onUseClick}>
                        {t('useComponent')}
                    </button>
                </div>

                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-4">
                    .{t('preview')}
                </div>

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
            </div>
        </div>
    );
};

interface StarsStatsCardProps2 {
    onUseClick: () => void;
    user?: string;
}

const StarsStatsCard: React.FC<StarsStatsCardProps2> = ({ onUseClick, user }) => {
    const { t } = useTranslation();
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
        <div className="card bg-base-100 shadow-sm w-full">
            <div className="card-body">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                        <div className="mask mask-star-2 bg-yellow-400 h-6 w-6"></div>
                        <h2 className="text-2xl sm:text-3xl font-bold">{t('starsTitle')}</h2>
                    </div>
                    <button className="btn btn-square btn-ghost">
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5v14l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                        </svg>
                    </button>
                </div>

                <ul className="text-sm flex flex-col gap-2">
                    <li className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-500 me-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l2.9 6.2L22 9.3l-5 4.9L18.2 22 12 18.3 5.8 22 7 14.2 2 9.3l7.1-1.1L12 2z" />
                        </svg>
                        <span>{t('starsDesc')}</span>
                    </li>
                </ul>

                <div className="mt-6">
                    <button className="btn btn-primary w-full" onClick={onUseClick}>
                        {t('useComponent')}
                    </button>
                </div>

                <div className="mt-6 text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    .{t('preview')}
                </div>

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
            </div>
        </div>
    );
};

const UserComparison: React.FC<UserComparisonProps> = ({ user1, user2, onUserClick }) => {
    const [position, setPosition] = useState(50);
    const [userOne, setUser1]= useState<UserInfo|undefined>()

    const [userTwo, setUser2]= useState<UserInfo|undefined>()
    getUserInfo(user1).then((info:UserInfo|undefined) => setUser1(info))
    getUserInfo(user2).then((info:UserInfo|undefined) => setUser2(info))
    return (
        <div className="w-full relative h-64 rounded-lg overflow-hidden">
            <div
                className="absolute top-0 left-0 bottom-0 cursor-pointer"
                style={{
                    width: `${position}%`,
                    zIndex: 2
                }}
                onClick={() => onUserClick?.(userOne)}
            >
                <img
                    src={userOne?.avatarUrl}
                    alt={userOne?.login}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                    {userOne?.login}
                </div>
            </div>
            <div
                className="absolute top-0 right-0 bottom-0 cursor-pointer"
                style={{
                    width: `${100 - position}%`,
                    zIndex: 2
                }}
                onClick={() => onUserClick?.(userTwo)}
            >
                <img
                    src={userTwo?.avatarUrl}
                    alt={userTwo?.login}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                    {userTwo?.login}
                </div>
            </div>
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10"
                style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                onMouseDown={(e) => {
                    e.preventDefault();
                    const startX = e.clientX;
                    const startPos = position;

                    const handleMouseMove = (moveEvent: MouseEvent) => {
                        const container = e.currentTarget.parentElement?.getBoundingClientRect();
                        if (!container) return;

                        const newPosition = startPos + ((moveEvent.clientX - startX) / container.width) * 100;
                        setPosition(Math.min(Math.max(newPosition, 10), 90));
                    };

                    const handleMouseUp = () => {
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                    };

                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                }}
            />
        </div>
    );
};

 export {
     CollaboratorsProfile,
     ReposStatsCard,
     StarsStatsCard,
     UserComparison
 }