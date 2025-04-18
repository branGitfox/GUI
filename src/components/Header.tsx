import React from "react";
import {Link, Location, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Header:React.FC = () => {
    const location:Location = useLocation()
    const activeLink  = (link:string):boolean => {
        return location.pathname == link
    }
    const {t, i18n} = useTranslation()

    const changeLanguage = (lang:string):void => {
        i18n.changeLanguage(lang).then(() => console.log("fait"))
    }





    return (
        <>
            <div className="navbar bg-base-100 shadow-sm fixed right-0 left-0 z-50 container mx-auto top-0">
                <div className="flex-1">
                    <svg viewBox="0 0 24 24" fill="none" className='w-10 h-10 inline' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM15.9299 8.25017C15.7204 8.25293 15.1872 8.34452 14.2695 9.03471C14.2361 9.05985 14.2022 9.08578 14.1678 9.11252C14.0704 9.18836 13.9431 9.21015 13.8277 9.17457L13.8253 9.17382C13.7671 9.15592 13.7088 9.13888 13.6504 9.12272C12.5651 8.82255 11.4349 8.82255 10.3496 9.12272C10.2882 9.13972 10.2268 9.15768 10.1657 9.17661L10.1644 9.17703C10.0529 9.21205 9.93139 9.19 9.83937 9.11807C9.80249 9.08937 9.76619 9.0616 9.73045 9.03473C8.81228 8.34432 8.27679 8.2528 8.0659 8.25016C7.86561 8.86863 7.84087 9.54684 7.99569 10.1834C8.00513 10.2222 8.01523 10.2608 8.02599 10.2993L8.02812 10.3068C8.05962 10.4184 8.03648 10.538 7.96621 10.6297C7.9504 10.6503 7.93482 10.6711 7.91949 10.6922C7.48056 11.2949 7.23972 12.0687 7.25034 12.8714L7.25038 12.8747C7.25036 14.5643 7.68912 15.5564 8.29455 16.1566C8.90483 16.7616 9.72415 17.0085 10.5687 17.1233L10.604 17.1281L10.6078 17.1286C11.5456 17.2688 12.443 17.2601 13.3777 17.1014L13.3898 17.0997L13.4137 17.0968C14.2627 16.9938 15.0859 16.7572 15.6994 16.1583C16.3076 15.5644 16.7496 14.5738 16.7496 12.8747L16.7497 12.8714C16.7603 12.0687 16.5194 11.2949 16.0805 10.6922C16.0664 10.6728 16.0521 10.6537 16.0377 10.6347L16.0366 10.6333C15.9647 10.5393 15.941 10.4168 15.9731 10.3025C15.9842 10.263 15.9945 10.2234 16.0042 10.1835C16.1588 9.54654 16.1326 8.86788 15.9299 8.25017Z" fill="#1304dc"></path> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#1304dc" stroke-width="2"></path> <path d="M13.717 8.88177C12.5881 8.56954 11.4119 8.56954 10.283 8.88177C10.2637 8.8871 10.2444 8.89254 10.2252 8.89808C10.1067 8.93218 9.97923 8.909 9.8807 8.83491V8.83491C8.69311 7.94193 8.07278 7.98181 7.91927 8.01161V8.01161C7.8946 8.0164 7.87585 8.03481 7.86732 8.05844C7.86516 8.06441 7.86303 8.07038 7.8609 8.07636C7.61639 8.76505 7.57904 9.52813 7.75277 10.2425C7.76289 10.2841 7.77371 10.3255 7.78525 10.3667C7.78601 10.3694 7.78677 10.3721 7.78753 10.3748C7.79754 10.4102 7.7902 10.4483 7.7678 10.4776V10.4776C7.75074 10.4998 7.73394 10.5223 7.71741 10.545C7.24479 11.1939 6.98907 12.0213 7.00036 12.8747C7.00036 16.3399 8.80396 17.1358 10.535 17.3711L10.5708 17.3758C11.5347 17.5199 12.4587 17.511 13.4195 17.3479L13.4438 17.345C15.1832 17.1339 16.9996 16.3587 16.9996 12.8747C17.0109 12.0213 16.7552 11.1939 16.2826 10.545C16.2674 10.5242 16.252 10.5035 16.2364 10.483C16.236 10.4825 16.2356 10.482 16.2352 10.4815C16.211 10.4498 16.203 10.4085 16.2138 10.3701V10.3701C16.2257 10.3277 16.2368 10.2852 16.2471 10.2425C16.421 9.52611 16.3815 8.76076 16.1329 8.07176C16.1313 8.06753 16.1298 8.06331 16.1283 8.05909C16.1195 8.03503 16.1004 8.01628 16.0752 8.01142V8.01142C15.921 7.98164 15.3041 7.94381 14.1193 8.83491V8.83491C14.0208 8.90896 13.8933 8.93197 13.7748 8.89804C13.7556 8.89252 13.7363 8.8871 13.717 8.88177Z" stroke="#1304dc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <a className="btn btn-ghost text-xl">GUI</a>
                </div>
                <div className="flex-none hidden md:block">
                    <div className="flex items-center">
                        <svg className='w-7 h-7' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#0886af" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M34.53,14.59s-1.6,18.21-24,32.78" stroke-linecap="round"></path><line x1="7.35" y1="14.59" x2="41.46" y2="14.59" stroke-linecap="round"></line><line x1="24.4" y1="9.08" x2="24.4" y2="14.59" stroke-linecap="round"></line><path d="M16.76,22.05S25.2,36.8,32,41.33" stroke-linecap="round"></path><path d="M33.55,54.92l10.74-25a.89.89,0,0,1,1.63,0l10.73,25" stroke-linecap="round"></path><line x1="37.25" y1="46.3" x2="52.96" y2="46.3" stroke-linecap="round"></line></g></svg>
                        <select onChange={(e) => changeLanguage(e.target.value)} defaultValue='FR' className="select select-primary mx-2 w-20 h-5">
                            <option value='fr'>FR</option>
                            <option value='eng'>ENG</option>
                        </select>
                        <Link to='/' className={`mr-5 ${activeLink('/') && 'underline'} decoration-violet-600 hover:decoration-violet-600`}>{t("home")}</Link>
                        <Link to='/components' className={`mr-5 ${activeLink('/components') && 'underline'} hover:underline decoration-violet-600`}>{t("component")}</Link>
                        <div className="flex gap-2">
                            <label className="swap swap-rotate">
                                <input type="checkbox" className="theme-controller" value="light" />
                                <svg
                                    className="swap-off h-10 w-10 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>
                                <svg
                                    className="swap-on h-10 w-10 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>

                <svg className='w-7 h-7 md:hidden' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#0886af" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M34.53,14.59s-1.6,18.21-24,32.78" stroke-linecap="round"></path><line x1="7.35" y1="14.59" x2="41.46" y2="14.59" stroke-linecap="round"></line><line x1="24.4" y1="9.08" x2="24.4" y2="14.59" stroke-linecap="round"></line><path d="M16.76,22.05S25.2,36.8,32,41.33" stroke-linecap="round"></path><path d="M33.55,54.92l10.74-25a.89.89,0,0,1,1.63,0l10.73,25" stroke-linecap="round"></path><line x1="37.25" y1="46.3" x2="52.96" y2="46.3" stroke-linecap="round"></line></g></svg>
                <select onChange={(e) => changeLanguage(e.target.value)} defaultValue='FR' className="select select-primary mx-2 w-20 h-5 md:hidden">
                    <option value='fr'>FR</option>
                    <option value='eng'>ENG</option>
                </select>
                <div className="flex-none md:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/' className={activeLink('/') ? 'active' : ''}>{t("home")}</Link>
                            </li>
                            <li>
                                <Link to='/components' className={activeLink('/components') ? 'active' : ''}>{t("component")}</Link>
                            </li>
                            <li>
                                <label className="swap swap-rotate flex justify-start">
                                    <input type="checkbox" className="theme-controller" value="light" />
                                    <div className="swap-off">Mode {t("light")}</div>
                                    <div className="swap-on">Mode {t("dark")}</div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header