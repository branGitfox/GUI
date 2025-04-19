import React from 'react';
import { useTranslation } from 'react-i18next';
import CollaboratorsProfile from '../ui/CollaboratorsProfile.tsx';

interface CollaboratorsCardProps {
  onUseClick: () => void;
}

const CollaboratorsCard: React.FC<CollaboratorsCardProps> = ({ onUseClick }) => {
  const { t } = useTranslation();

  return (
      <div className="card bg-base-100 shadow-sm w-full">
        <div className="card-body">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-purple-500 text-white rounded-full p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-5-4M9 20H4v-2a4 4 0 015-4m5-4a3 3 0 100-6 3 3 0 000 6zm-6 0a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">{t('collaboratorsTitle')}</h2>
            </div>

            <button className="btn btn-square btn-ghost">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m6 18l6-6m0 0l-6-6" />
              </svg>
            </button>
          </div>

          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 me-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{t('collaboratorsDesc')}</span>
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

          <div className="mt-4">
            <CollaboratorsProfile user="branGitfox" repos="GUI" />
          </div>
        </div>
      </div>
  );
};

export default CollaboratorsCard;
