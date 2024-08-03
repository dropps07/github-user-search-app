import React, { useEffect } from "react";
export function search({ setData, setIsLoading }) {
    const [user, setUser] = useState("dropps07")
    const handleClick = async () => {
        setIsLoading(true);
        const data = await fetch(`https://api.github.com/users/${user}`);
        const userData = await data.json();
        setData(userData);
        setIsLoading(false);
    }
    useEffect(() => {
        handleClick()
    }, [])
    return (
        <div className="flex bg-light-pink p-3 gap-3 rounded-md shadow-lg">
            <div className="flex items-center gap-3">
                <span>
                    <svg
                        className="text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="2em"
                        width="2em"
                    >
                        <path d="M10 13c-.35.59-.64 1.24-.81 1.93C6.5 15.16 3.9 16.42 3.9 17v1.1h5.3c.17.68.45 1.32.8 1.9H2v-3c0-2.66 5.33-4 8-4m0-9a4 4 0 014 4c0 .91-.31 1.75-.82 2.43-.86.32-1.63.83-2.27 1.47L10 12a4 4 0 01-4-4 4 4 0 014-4m0 1.9A2.1 2.1 0 007.9 8a2.1 2.1 0 002.1 2.1A2.1 2.1 0 0012.1 8 2.1 2.1 0 0010 5.9m5.5 6.1c2.5 0 4.5 2 4.5 4.5 0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5z" />
                    </svg>
                </span>

                <input value={user} onChange={(e) => {
                    e.target.value
                }} className="bg-transparent focus:outline-none text-white" type="text" name="" id=""></input>
            </div>
            <div>
                <button onClick={handleClick} className="bg-dark-blue:hover outline-border-2 text-white rounded-lg px-3 py-2 shadow-md">Search</button>
            </div>
        </div>
    )
}