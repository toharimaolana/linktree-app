import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ElectricBorder from './ElectricBorder';

const ACCENT = '#924DBF';

/* ─────────────────────────────────────────────
   Featured Card — ElectricBorder wrapper
───────────────────────────────────────────── */
const FeaturedCard = ({ link, onClick, delay }) => {
  const Icon = link.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-6"
    >
      <ElectricBorder
        color={link.electricColor || ACCENT}
        speed={link.electricSpeed || 1.0}
        chaos={link.electricChaos || 0.03}
        borderRadius={14}
      >
        <motion.button
          onClick={() => onClick(link.url)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="group w-full text-left rounded-[14px] bg-[#111111] px-5 py-5 outline-none"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Index + FEATURED label */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[10px] text-[#52525B]">{link.index}</span>
                <span
                  className="font-mono text-[10px] tracking-widest uppercase px-1.5 py-0.5 rounded-sm font-bold"
                  style={{ background: ACCENT, color: '#fff' }}
                >
                  FEATURED
                </span>
              </div>

              <h2
                className="text-base font-bold text-[#FAFAFA] leading-tight transition-colors duration-200"
                style={{ '--hover-color': ACCENT }}
              >
                <span className="group-hover:text-[#924DBF] transition-colors duration-200">{link.title}</span>
              </h2>
              <p className="mt-1 text-xs text-[#71717A] leading-relaxed">
                {link.description}
              </p>
            </div>

            <motion.div
              className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mt-0.5"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              whileHover={{ rotate: 45 }}
              transition={{ type: 'spring', stiffness: 600, damping: 20 }}
            >
              <ArrowUpRight className="h-4 w-4 text-[#71717A] group-hover:text-[#924DBF] transition-colors duration-200" />
            </motion.div>
          </div>
        </motion.button>
      </ElectricBorder>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Standard Row Card — editorial divider style
───────────────────────────────────────────── */
const RowCard = ({ link, onClick, delay }) => {
  const Icon = link.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <button
        onClick={() => onClick(link.url)}
        className="group w-full text-left py-4 flex items-center gap-4 outline-none focus-visible:outline-[1px] focus-visible:outline-[#924DBF]"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Index number */}
        <span className="font-mono text-[10px] text-[#3F3F46] w-6 flex-shrink-0 select-none">
          {link.index}
        </span>

        {/* Icon */}
        <div
          className="flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center bg-[#161616]"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Icon className="h-3.5 w-3.5 text-[#71717A] group-hover:text-[#924DBF] transition-colors duration-200" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#FAFAFA] row-underline group-hover:text-[#924DBF] transition-colors duration-200 leading-tight">
            {link.title}
          </p>
          <p className="text-xs text-[#52525B] mt-0.5 leading-snug">
            {link.description}
          </p>
        </div>

        {/* Arrow */}
        <motion.div
          className="flex-shrink-0"
          initial={{ x: 0, opacity: 0.3 }}
          whileHover={{ x: 3, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 600, damping: 25 }}
        >
          <ArrowUpRight className="h-4 w-4 text-[#3F3F46] group-hover:text-[#924DBF] transition-colors duration-200" />
        </motion.div>
      </button>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   LinkCard — dispatcher
───────────────────────────────────────────── */
const LinkCard = ({ link, onClick, delay }) => {
  if (link.isFeatured) {
    return <FeaturedCard link={link} onClick={onClick} delay={delay} />;
  }
  return <RowCard link={link} onClick={onClick} delay={delay} />;
};

export default LinkCard;