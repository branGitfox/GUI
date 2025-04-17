import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
import UserComparison from './UserComparison';
import { UserData } from '../types/userTypes';
import { useTranslation } from "react-i18next";
import CollaboratorsCard from './CollaboratorsCard.tsx';
import CodeSnippet from './CodeSnippet.tsx';
import StarsStatsCard from './StarsStatsCard.tsx';
import ReposStatsCard from './ReposStatsCard.tsx';
import UserComparisonCard from './UserComparisonCard.tsx';

const ComponentsList: React.FC = () => {
    const [openModal, setOpenModal] = useState<string | null>(null)
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null)
    const [showCode, setShowCode] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const { t } = useTranslation()

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
            title: t("compareTitle"),
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
                            {t("useComponent")}
                        </button>
                    </div>

                    {showCode && (
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-bold">{t("implementCode")} :</h4>
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
                                    {isCopied ? t("copied") : t("copy")}
                                </button>
                            </div>
                            <div className="bg-base-200 p-4 rounded-lg overflow-auto max-h-64">
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
            title: selectedUser ? `${selectedUser.username} - ${t("profileTitle")}` : t("profileTitle"),
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
            title: t("starsTitle"),
            content: (
                <CodeSnippet
                    description={t("starsDescription")}
                    code={``}
                />
            )
        },
        repos: {
            title: t("reposTitle"),
            content: (
                <CodeSnippet
                    description={t("repositoriesDescription")}
                    code={``}
                />
            )
        },


        collaboratorsProfile: {
            title: t("collaboratorsTitle"),
            content: (
                <CodeSnippet
                    description={t("collaboratorsDescription")}
                    code={``}
                />
            )
        },
    };
    return (
        <div className="container mx-auto px-4 mt-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 py-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">{t("component")}</h1>
                <div className='flex justify-center md:justify-end'>
                    <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
                        <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                        <input type="search" className="grow" placeholder={t("search")} />
                        <kbd className="kbd kbd-sm hidden md:inline-flex">⌘</kbd>
                        <kbd className="kbd kbd-sm hidden md:inline-flex">K</kbd>
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <StarsStatsCard onUseClick={() => setOpenModal('stars')} user='AntoinnetRjuan'/>
                <ReposStatsCard onUseClick={() => setOpenModal('repos')} user={"BranGitfox"} repos={"GUI"}/>
                <UserComparisonCard
                    onUseClick={() => setOpenModal('compare')}
                    user1={demoUsers.user1}
                    user2={demoUsers.user2}
                    onUserClick={handleUserClick}
                />
                <CollaboratorsCard onUseClick={() => setOpenModal('collaboratorsProfile')} />
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


            {openModal === 'collaboratorsProfile' && (
                <Modal
                    isOpen={openModal === 'collaboratorsProfile'}
                    onClose={() => setOpenModal(null)}
                    title={modalContents.collaboratorsProfile.title}
                >
                    {modalContents.collaboratorsProfile.content}
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