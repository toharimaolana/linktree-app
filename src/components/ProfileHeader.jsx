// components/ProfileHeader.jsx
import React from 'react';

const ProfileHeader = ({ name, subtitle, }) => {
    return (
        <div className="text-center mb-12" style={{animation: 'slideUp 0.6s ease-out both'}}>
        <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center  hover:scale-110 transition-transform duration-300">
            <img src="/profile_8bit.jpeg" alt={`${name}'s avatar`} className="w-20 h-20 rounded-full object-cover border-2 border-white/30" />
        </div>
        <h1 className="text-xl  lg:text-4xl  font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hi, I'm {name}
        </h1>
        <p className="text-white/70 text-base sm:text-lg mb-2">
            {subtitle}
        </p>
        </div>
    );
};

export default ProfileHeader;