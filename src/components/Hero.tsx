import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {getReposInfo, RepositoryInfo} from "../api/api.ts";
import {Link} from "react-router-dom";

const Hero:React.FC = () => {
    const {t} = useTranslation()
    const [datas, setDatas] = useState<RepositoryInfo|undefined>()
    getReposInfo("BranGitfox", "GUI").then((data:RepositoryInfo|undefined) => setDatas(data))


    return (
        <>
            <div className="hero bg-base-200 mt-15 lg:mt-0">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="/hero.jpg"
                        className=" hidden lg:w-1/2 lg:block rounded-lg shadow-2xl" />
                    <div>
                        <div className="inline-grid *:[grid-area:1/1] mb-5">
                            <div className="status status-success animate-ping"></div>
                            <div className="status status-success"></div>
                        </div> <div className="badge badge-soft badge-primary">{t('versionBadge')}</div>
                        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">{t('title')}</h1>
                        <p className="py-6">
                            {t("description")}
                        </p>
                        <a href="#install" className="btn btn-primary bg-gradient-to-r from-blue-600 to-violet-600">{t('startBtn')}</a>
                        <Link to="/components" className="btn  border-2 bg-transparent border-blue-600  mx-2">{t("useBtn")}</Link>
                    </div>
                </div>
            </div>

            <div className="stats shadow flex flex-wrap lg:flex-nowrap">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block h-8 w-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0 0a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 100-8 4 4 0 000 8z" />
                        </svg>
                    </div>
                    <div className="stat-title">{t('totalUsers')}</div>
                    <div className="stat-value text-primary">100+</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block h-8 w-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M14 10V3L4 14h7v7l10-11h-7z" />
                        </svg>
                    </div>
                    <div className="stat-title">{t('totalContributors')}</div>
                    <div className="stat-value text-secondary">{datas?.collaborators.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block h-8 w-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.89a1 1 0 00-1.175 0l-3.976 2.89c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.976-2.89c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.518-4.674z" />
                        </svg>
                    </div>
                    <div className="stat-title">{t('totalStars')}</div>
                    <div className="stat-value">{datas?.stars}</div>
                </div>
            </div>

        </>
    )
}

export default Hero