import React from 'react'
import { useState } from 'react';
import Modal from './Modal'
import UserComparison from './UserComparison';
import { UserData } from '../types/userTypes';

const ComponentsList: React.FC = () => {
    const [openModal, setOpenModal] = useState<string | null>(null);
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
    const [showCode, setShowCode] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const demoUsers: { user1: UserData; user2: UserData } = {
        user1: {
            username: "VotreProfil",
            stars: 124,
            followers: 423,
            following: 56,
            repos: 32,
            collaborations: 18,
            avatarUrl: "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
        },
        user2: {
            username: "AutreUtilisateur",
            stars: 456,
            followers: 789,
            following: 123,
            repos: 65,
            collaborations: 32,
            avatarUrl: "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
        }
    };
    const handleUserClick = (user: UserData) => {
        setSelectedUser(user);
        setOpenModal('userProfile');
        setShowCode(false);
    };
    const modalContents = {
        compare: {
            title: "Comparer vos infos avec un autre utilisateur",
            content: (
                <div>
                    <UserComparison
                        user1={demoUsers.user1}
                        user2={demoUsers.user2}
                        onUserClick={handleUserClick}
                    />

                    <div className="mt-6">
                        <button
                            className="btn btn-primary w-full"
                            onClick={() => setShowCode(true)}
                        >
                            Utiliser ce composant
                        </button>
                    </div>

                    {showCode && (
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-bold">Code à implémenter :</h4>
                                <button
                                    className="btn btn-sm btn-ghost"
                                    onClick={() => {
                                        navigator.clipboard.writeText(`import UserComparison from './UserComparison';

const MyComponent = () => {
  const user1 = {
    username: "VotreProfil",
    stars: 124,
    followers: 423,
    following: 56,
    repos: 32,
    collaborations: 18,
    avatarUrl: "https://avatars.githubusercontent.com/u/VOTRE_ID?v=4"
  };

  const user2 = {
    username: "AutreUtilisateur",
    stars: 456,
    followers: 789,
    following: 123,
    repos: 65,
    collaborations: 32,
    avatarUrl: "https://avatars.githubusercontent.com/u/AUTRE_ID?v=4"
  };

  return (
    <UserComparison 
      user1={user1} 
      user2={user2} 
      onUserClick={(user) => console.log('User clicked:', user)}
    />
  );
};`);
                                        setIsCopied(true);
                                        setTimeout(() => setIsCopied(false), 2000);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                    {isCopied ? 'Copié !' : 'Copier'}
                                </button>
                            </div>
                            <div className="bg-base-200 p-4 rounded-lg overflow-auto max-h-96">
                                <pre className="text-sm whitespace-pre-wrap">
                                    {`import UserComparison from './UserComparison';

const MyComponent = () => {
  const user1 = {
    username: "VotreProfil",
    stars: 124,
    followers: 423,
    following: 56,
    repos: 32,
    collaborations: 18,
    avatarUrl: "https://avatars.githubusercontent.com/u/VOTRE_ID?v=4"
  };

  const user2 = {
    username: "AutreUtilisateur",
    stars: 456,
    followers: 789,
    following: 123,
    repos: 65,
    collaborations: 32,
    avatarUrl: "https://avatars.githubusercontent.com/u/AUTRE_ID?v=4"
  };

  return (
    <UserComparison 
      user1={user1} 
      user2={user2} 
      onUserClick={(user) => console.log('User clicked:', user)}
    />
  );
};`}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>
            )
        },
        userProfile: {
            title: selectedUser ? `${selectedUser.username} - Profil` : "Profil",
            content: selectedUser && (
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <img
                            src={selectedUser.avatarUrl}
                            alt={selectedUser.username}
                            className="w-16 h-16 rounded-full"
                        />
                        <h3 className="text-2xl font-bold">{selectedUser.username}</h3>
                    </div>

                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-title">Stars</div>
                            <div className="stat-value">{selectedUser.stars}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Followers</div>
                            <div className="stat-value">{selectedUser.followers}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Following</div>
                            <div className="stat-value">{selectedUser.following}</div>
                        </div>
                    </div>

                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-title">Repositories</div>
                            <div className="stat-value">{selectedUser.repos}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Collaborations</div>
                            <div className="stat-value">{selectedUser.collaborations}</div>
                        </div>
                    </div>
                </div>
            )
        },
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
        },
    };
    return (
        <div className="container mx-auto px-4 mt-12">
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
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <div className="stat-title">Following</div>
                                    <div className="stat-value text-gray-600">1,200</div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm w-full">
                    <div className="card-body">
                        <div className="mask mask-star-2 bg-orange-400 h-7 w-7"></div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                            <h2 className="text-2xl sm:text-3xl font-bold">Compare deux utlisateurs</h2>
                            <span className="text-xl">
                                <button className="btn btn-square btn-ghost">
                                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                </button>
                            </span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Tu peux comparer tes infos avec ceux d'un autre utilisateur</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary w-full" onClick={() => setOpenModal('compare')}>Utiliser</button>
                        </div>

                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-4">
                            .Preview
                        </div>
                    </div>
                </div>
                <UserComparison
                    user1={demoUsers.user1}
                    user2={demoUsers.user2}
                    onUserClick={(user) => {
                        console.log('User clicked:', user.username);
                        setSelectedUser(user);
                        setOpenModal('userProfile');
                    }}
                />
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

            {openModal === 'compare' && (
                <Modal
                    isOpen={openModal === 'compare'}
                    onClose={() => setOpenModal(null)}
                    title={modalContents.compare.title}
                >
                    {modalContents.compare.content}
                </Modal>
            )}

            {openModal === 'userProfile' && selectedUser && (
                <Modal
                    isOpen={openModal === 'userProfile'}
                    onClose={() => setOpenModal(null)}
                    title={modalContents.userProfile.title}
                >
                    {modalContents.userProfile.content}
                </Modal>
            )}
        </div>
    )
}

export default ComponentsList