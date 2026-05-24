import React from 'react';

const TurfZoneIcon = ({ className = "w-12 h-12" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className} select-none`}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
            >
                <path
                    d="M15 55C25 55 22 48 35 48"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                />
                <path
                    d="M10 63C22 63 20 58 30 58"
                    stroke="#EA580C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.4"
                />

                <path
                    d="M25 50H42L46 38L51 62L55 45L58 52H65"
                    stroke="#EA580C"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse"
                />

                <path
                    d="M68 25C70.2091 25 72 23.2091 72 21C72 18.7909 70.2091 17 68 17C65.7909 17 64 18.7909 64 21C64 23.2091 65.7909 25 68 25Z"
                    fill="#10B981"
                />
                <path
                    d="M52 32L61 26L67 33L76 29L74 36L66 38L62 48L69 56L65 62L56 52L51 43L43 45L40 38L52 36V32Z"
                    fill="#10B981"
                    stroke="#EA580C"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <path
                    d="M56 52L54 68L44 76L46 79L58 72L61 58"
                    fill="#10B981"
                    stroke="#EA580C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default TurfZoneIcon;