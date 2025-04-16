import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getUserInfo, UserInfo } from '../api/api';

interface StarsStatsCardProps {
    onUseClick: () => void;
    user?: string;
}

const StarsStatsCard: React.FC<StarsStatsCardProps> = ({ onUseClick, user }) => {
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

export default StarsStatsCard;
