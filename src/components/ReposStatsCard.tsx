import React from 'react';
import { useTranslation } from 'react-i18next';
import ReposComponents from "./ReposComponents.tsx";

interface ReposStatsCardProps {
    onUseClick: () => void,
    user:string,
    repos:string
}

const ReposStatsCard: React.FC<ReposStatsCardProps> = ({ onUseClick, user, repos }) => {
    const { t } = useTranslation();


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

                <ReposComponents user={user} repos={repos}/>
            </div>
        </div>
    );
};

export default ReposStatsCard;
