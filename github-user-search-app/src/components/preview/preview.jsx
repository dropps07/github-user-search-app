import React from "react";

function Preview({
    AvatarUrl,
    user,
    login,
    public_repos,
    followers,
    following,
    twitter,
    location,
    isLoading,
    date,
    description
}) {
    return (
        <div className="bg-dark-gray p-5 flex text-white justify-center rounded-md">

            {isLoading ? <div className="flex flex-col fap-4">
                <div className="flex gap-10 items-center">
                    <div> <img
                        className="w-28 rounded-full"
                        src={AvatarUrl}
                        alt="" />
                    </div>
                    <div>
                        <h1>{user}</h1>
                        <h3 className="text-dark-blue">{login}</h3>
                        <p>Joined at {date}</p>
                    </div>
                    <div className="w-full">
                        <p className="max-w-xs text-start">{description}</p>
                    </div>
                    <div className="flex bg-dark-bg p-4 rounded-mf justify-evenly">
                        <div>
                            <h3>Repos</h3>
                            <span>{public_repos}</span>
                        </div>
                        <div>
                            <h3>Followings</h3>
                            <span>{following}</span>
                        </div>
                        <div>
                            <h3>Followers</h3>
                            <span>{followers}</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-evenly">
                                <div className="flex gap-5 item-center">
                                    <span>
                                        <svg
                                            viewBox="0 0 21 21"
                                            fill="currentColor"
                                            height="1em"
                                            width="1em"
                                        >
                                            <g
                                                fill="none"
                                                fillRule="evenodd"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                transform="translate(4 2)"
                                            >
                                                <path d="M6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 002.564 3.05z" />
                                                <path d="M9 6.5 A2.5 2.5 0 0 1 6.5 9 A2.5 2.5 0 0 1 4 6.5 A2.5 2.5 0 0 1 9 6.5 z" />
                                            </g>
                                        </svg>
                                    </span>
                                    <span>{location ? location : "Earth"}</span>
                                    <div className="flex gap-5 items-center">
                                        <span>
                                            <svg
                                                data-name="Layer 1"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                height="1em"
                                                width="1em">
                                                <path d="M22.991 3.95a1 1 0 00-1.51-.86 7.48 7.48 0 01-1.874.794 5.152 5.152 0 00-3.374-1.242 5.232 5.232 0 00-5.223 5.063 11.032 11.032 0 01-6.814-3.924 1.012 1.012 0 00-.857-.365.999.999 0 00-.785.5 5.276 5.276 0 00-.242 4.769l-.002.001a1.041 1.041 0 00-.496.89 3.042 3.042 0 00.027.439 5.185 5.185 0 001.568 3.312.998.998 0 00-.066.77 5.204 5.204 0 002.362 2.922 7.465 7.465 0 01-3.59.448A1 1 0 001.45 19.3a12.942 12.942 0 007.01 2.061 12.788 12.788 0 0012.465-9.363 12.822 12.822 0 00.535-3.646l-.001-.2a5.77 5.77 0 001.532-4.202zm-3.306 3.212a.995.995 0 00-.234.702c.01.165.009.331.009.488a10.824 10.824 0 01-.454 3.08 10.685 10.685 0 01-10.546 7.93 10.938 10.938 0 01-2.55-.301 9.48 9.48 0 002.942-1.564 1 1 0 00-.602-1.786 3.208 3.208 0 01-2.214-.935q.224-.042.445-.105a1 1 0 00-.08-1.943 3.198 3.198 0 01-2.25-1.726 5.3 5.3 0 00.545.046 1.02 1.02 0 00.984-.696 1 1 0 00-.4-1.137 3.196 3.196 0 01-1.425-2.673c0-.066.002-.133.006-.198a13.014 13.014 0 008.21 3.48 1.02 1.02 0 00.817-.36 1 1 0 00.206-.867 3.157 3.157 0 01-.087-.729 3.23 3.23 0 013.226-3.226 3.184 3.184 0 012.345 1.02.993.993 0 00.921.298 9.27 9.27 0 001.212-.322 6.681 6.681 0 01-1.026 1.524z" />
                                            </svg>
                                        </span>
                                        <span>{twitter ? twitter : "Not Found!"}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div className="rounded-full h-4 w-4 border-light-pink border-top-transparent animate-spin"></div>}
        </div>
    )
} 
