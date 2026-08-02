import React from 'react';
import { motion } from 'framer-motion';

const ProfileHeader = ({ profile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-12"
    >
      {/* Avatar + Name row */}
      <div className="flex items-center gap-4 mb-5">
        <div className="relative flex-shrink-0">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-12 w-12 rounded-full object-cover"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          />
          {/* Availability dot */}
          <span
            className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0B0B0B] bg-[#924DBF]"
            title="Available for Work"
          />
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#FAFAFA] leading-snug">
            {profile.name}
          </h1>
          <p className="font-mono text-xs text-[#71717A] mt-0.5 ">
            {profile.handle}
          </p>
        </div>
      </div>

      {/* Role + Location */}
      <p className="text-sm text-[#A1A1AA] leading-relaxed mb-3 max-w-lg">
        {profile.role}
      </p>

      {/* Status pills — text only, no rounded pill backgrounds */}
      <div className="flex items-center gap-3 font-mono text-xs text-[#52525B]">
        <span>{profile.location}</span>
        <span>·</span>
        <span className="text-[#924DBF]">{profile.status}</span>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;