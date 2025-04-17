import React from 'react';
import { useTranslation } from 'react-i18next';
import UserComparison from './UserComparison';
import {UserComparisonProps} from '../types/userTypes';
// import {UserInfo} from "../api/api.ts";

// interface UserComparisonCardProps {
//   onUseClick: () => void;
//   user1: UserData;
//   user2: UserData;
//   onUserClick: (user: UserInfo|undefined) => void;
// }

const UserComparisonCard: React.FC<UserComparisonProps> = ({
                                                                 onUseClick,
                                                                 user1,
                                                                 user2,
                                                                 onUserClick,
                                                               }) => {
  const { t } = useTranslation();

  return (
      <div className="card bg-base-100 shadow-sm w-full">
        <div className="card-body">
          {/* Nouvelle icône comparaison */}
          <div className="stat-figure text-primary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 21v-4a4 4 0 014-4h6a4 4 0 014 4v4M12 11a4 4 0 100-8 4 4 0 000 8zM17 11a3 3 0 100-6 3 3 0 000 6zM7 11a3 3 0 100-6 3 3 0 000 6z"
              />
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">{t('compareTitle')}</h2>
            <span className="text-xl">
            <button className="btn btn-square btn-ghost">
              <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
              >
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li className="flex items-center gap-2">
              <div className="bg-green-500 text-dark rounded-full p-0.5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2 h-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>{t('compareDesc')}</span>
            </li>
          </ul>


          <div className="mt-6">
            <button className="btn btn-primary w-full" onClick={onUseClick}>
              {t('useComponent')}
            </button>
          </div>

          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-4">
            .{t('preview')}
            <UserComparison user1={user1} user2={user2} onUserClick={onUserClick} />
          </div>
        </div>
      </div>
  );
};

export default UserComparisonCard;
