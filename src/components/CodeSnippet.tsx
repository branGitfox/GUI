import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CodeSnippetProps {
  description: string;
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ description, code }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div>
      <p>{description}</p>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold">{t("implementCode")}</h4>
          <button
            className="btn btn-sm btn-ghost"
            onClick={handleCopy}
            aria-label={isCopied ? t("copied") : t("copy")}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
              />
            </svg>
            {isCopied ? t("copied") : t("copy")}
          </button>
        </div>
      </div>
      <div className="bg-base-200 p-4 rounded-lg overflow-auto max-h-64">
        <pre className="text-sm whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;