import React from 'react'
import { useState } from 'react';
import Modal from './Modal'

const ComponentsList: React.FC = () => {
    const [openModal, setOpenModal] = useState<string | null>(null);
    const modalContents = {
        stars: {
            title: "Stars, Followers & Following Check",
            content: (
                <div>
                    <p>Here is the code of Stars, followers and following Check.</p>
                    <div className="mt-4">
                        <div className="mockup-window bg-base-100 border border-base-300">
                            <div className="grid place-content-center h-80">Coming soon</div>
                        </div>
                    </div>
                </div>
            )
        },
        repos: {
            title: "Repositories & Collabs Count Check",
            content: (
                <div>
                    <p>Here is the code of Repositories and collabs Check.</p>
                    <div className="mt-4">
                        <div className="mockup-window bg-base-100 border border-base-300">
                            <div className="grid place-content-center h-80">Hello!</div>
                        </div>
                    </div>
                </div>
            )
        }
    };
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 py-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">Components</h1>
                <div className='flex justify-center md:justify-end'>
                    <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
                        <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                        <input type="search" className="grow" placeholder="Search" />
                        <kbd className="kbd kbd-sm hidden md:inline-flex">⌘</kbd>
                        <kbd className="kbd kbd-sm hidden md:inline-flex">K</kbd>
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="card bg-base-100 shadow-sm w-full">
                    <div className="card-body">
                        <div className="mask mask-star-2 bg-orange-400 h-7 w-7"></div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                            <h2 className="text-2xl sm:text-3xl font-bold">Stars, Followers & following Check</h2>
                            <span className="text-xl">
                                <button className="btn btn-square btn-ghost">
                                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                </button>
                            </span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>You can check your stars and Followers count using this component</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary w-full" onClick={() => setOpenModal('stars')}>Use</button>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-4">
                            .Preview
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
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title">Stars</div>
                                    <div className="stat-value text-gray-600">31K</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
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
                                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title">Followers</div>
                                    <div className="stat-value text-gray-600">4,200</div>
                                    <div className="stat-desc">↗︎ 400 (22%)</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <div className="stat-title">Following</div>
                                    <div className="stat-value text-gray-600">1,200</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm w-full">
                    <div className="card-body">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-7 w-7 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                            <h2 className="text-2xl sm:text-3xl font-bold">Repositories & collabs count Check</h2>
                            <span className="text-xl">
                                <button className="btn btn-square btn-ghost">
                                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                </button>
                            </span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>You can check your repositories and collaborations count using this component</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary w-full" onClick={() => setOpenModal('repos')}>Use</button>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-4">
                            .Preview
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
                                    <div className="stat-value text-secondary">100</div>
                                    <div className="stat-desc">21% more than last month</div>
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
                                    <div className="stat-value text-gray-600">200</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openModal === 'stars' && (
                <Modal
                    isOpen={openModal === 'stars'}
                    onClose={() => setOpenModal(null)}
                    title={modalContents.stars.title}
                >
                    {modalContents.stars.content}
                </Modal>
            )}

            {openModal === 'repos' && (
                <Modal
                    isOpen={openModal === 'repos'}
                    onClose={() => setOpenModal(null)}
                    title={modalContents.repos.title}
                >
                    {modalContents.repos.content}
                </Modal>
            )}
        </div>
    )
}

export default ComponentsList