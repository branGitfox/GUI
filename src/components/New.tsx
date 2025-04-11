import React from "react";
import { useTranslation } from "react-i18next";
const New: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 p-3 md:p-4 justify-center mb-5 mt-3 w-full">
                <div className="relative w-full sm:w-64 md:w-72 lg:w-52">
                    <span className="absolute -right-2 -top-2 badge badge-primary z-10">{t("new")}</span>
                    <div className="bg-base-300 grid h-64 sm:h-64 md:h-72 lg:h-52 place-items-center rounded-lg w-full">
                        {t("newContent")}
                    </div>
                </div>
                <div className="relative w-full sm:w-64 md:w-72 lg:w-52">
                    <span className="absolute -right-2 -top-2 badge badge-primary z-10">{t("new")}</span>
                    <div className="bg-base-300 grid h-64 sm:h-64 md:h-72 lg:h-52 place-items-center rounded-lg w-full">
                        {t("newContent")}
                    </div>
                </div>
                <div className="relative w-full sm:w-64 md:w-72 lg:w-52">
                    <span className="absolute -right-2 -top-2 badge badge-primary z-10">{t("new")}</span>
                    <div className="bg-base-300 grid h-64 sm:h-64 md:h-72 lg:h-52 place-items-center rounded-lg w-full">
                        {t("newContent")}
                    </div>
                </div>
            </div>
        </>
    )
}

export default New