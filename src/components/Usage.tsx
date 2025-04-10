import React, {useState} from "react";

const Usage:React.FC = () => {
    const [copyStatus, setCopystatus] = useState<boolean>(false)
    const copyCode = () => {
        navigator.clipboard.writeText("npm install gui-react")
        setCopystatus(!copyStatus)
    }


    return (
        <>
            <div className="p-5">

                <h2 className=' font-bold   mb-3'># Installation <div className="badge badge-soft badge-primary">npm install gui-react {copyStatus?(
                    <svg onClick={copyCode} className='inline w-7 h-7 cursor-pointer mb-1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z" stroke="#1c5ffd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z" stroke="#1c5ffd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.08008 14.9998L8.03008 16.9498L11.9201 13.0498" stroke="#1c5ffd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                ):(
                    <svg onClick={copyCode} className='inline w-7 h-7 cursor-pointer mb-1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="#1c5ffd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="#1c5ffd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                )}
                </div></h2>
                <div className="mockup-code w-full">
                    <pre data-prefix="$"><code>npm i gui</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>installation..</code></pre>
                    <pre data-prefix=">" className="text-success"><code>Fait!</code></pre>
                </div>
            </div>
        </>
    )
}

export default Usage