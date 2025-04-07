import React from "react";


const New:React.FC = () => {
    return (
        <>
            <div className="flex flex-wrap gap-10 p-4 justify-evenly mb-5 mt-3 w-full" >
                <div className="indicator">
                    <span className="indicator-item badge badge-primary">New</span>
                    <div className="bg-base-300 grid w-[400px] h-[400px] lg:h-52 lg:w-52 place-items-center">content</div>
                </div>

                <div className="indicator">
                    <span className="indicator-item badge badge-primary">New</span>
                    <div className="bg-base-300 grid w-[400px] h-[400px] lg:h-52 lg:w-52 place-items-center">content</div>
                </div>

                <div className="indicator">
                    <span className="indicator-item badge badge-primary">New</span>
                    <div className="bg-base-300 grid w-[400px] h-[400px] lg:h-52 lg:w-52 place-items-center">content</div>
                </div>
            </div>
        </>
    )
}

export default New