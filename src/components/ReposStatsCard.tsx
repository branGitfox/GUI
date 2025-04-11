import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { getUserInfo, UserInfo } from '../api/api';

interface ReposStatsCardProps {
    onUseClick: () => void;
    user?: string;
}

const ReposStatsCard: React.FC<ReposStatsCardProps> = ({ onUseClick, user }) => {
    const { t } = useTranslation();
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    useEffect(() => {
        try {
            getUserInfo(user!).then((res) => {
                if (res) {
                    setUserInfo(res);
                }
            });
        } catch (error) {
            console.error("error:", error);
        }
    }, [user]);
    return (
        <div className="card bg-base-100 shadow-sm w-full">
            <div className="card-body">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-7 w-7 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                    </svg>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">{t("reposTitle")}</h2>
                    <span className="text-xl">
                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                </g>
                            </svg>
                        </button>
                    </span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{t("reposDesc")}</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary w-full" onClick={onUseClick}>
                        {t("useComponent")}
                    </button>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-4">
                    .{t("preview")}
                    <div className="stats shadow flex flex-col sm:flex-row">
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Collaborations</div>
                            <div className="stat-value text-secondary">2</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Repositories</div>
                            <div className="stat-value text-gray-600">{userInfo?.repositoryCount?.toLocaleString() ?? 'N/A'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReposStatsCard;