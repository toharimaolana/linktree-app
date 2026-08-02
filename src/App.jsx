import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { linksData, profileData, categoriesData } from './assets/data.js';
import ProfileHeader from './components/ProfileHeader.jsx';
import LinkCard from './components/LinkCard.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filteredLinks = linksData.filter((link) =>
    activeCategory === 'ALL' ? true : link.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#FAFAFA]">
      <div className="max-w-lg mx-auto px-6 py-16 sm:py-20">

        {/* Profile */}
        <ProfileHeader profile={profileData} />

        {/* Filter — text-only, no pill backgrounds */}
        <div className="flex items-center gap-6 mb-8">
          {categoriesData.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative font-mono text-xs tracking-widest uppercase outline-none transition-colors duration-200"
                style={{ color: isActive ? '#924DBF' : '#52525B' }}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="filterLine"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: '#924DBF' }}
                    transition={{ type: 'spring', stiffness: 600, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Link list */}
        <div>
          <AnimatePresence mode="popLayout">
            {filteredLinks.map((link, index) => (
              <LinkCard
                key={link.id}
                link={link}
                onClick={handleLinkClick}
                delay={index * 0.06}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;