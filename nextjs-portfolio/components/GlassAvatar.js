import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function GlassAvatar({ src, alt = '', size = 220 }) {
  const reduce = useReducedMotion();

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        borderRadius: '50%',
      }}
    >
      {/* Avatar */}
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 2,
          position: 'relative',
        }}
        priority
      />

      {/* Refined glass halo */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          inset: '-4px',
          borderRadius: '50%',
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.35), rgba(255,255,255,0.08))',
          border: '1px solid rgba(255,255,255,0.25)',
          backdropFilter: 'blur(8px) saturate(180%)',
          WebkitBackdropFilter: 'blur(8px) saturate(180%)',
          boxShadow:
            '0 0 12px rgba(255,255,255,0.1), inset 0 1px 2px rgba(255,255,255,0.25)',
          mask: 'radial-gradient(circle, transparent 65%, black 68%)',
          WebkitMask: 'radial-gradient(circle, transparent 65%, black 68%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Gentle moving light shimmer */}
      {!reduce && (
        <motion.span
          aria-hidden
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            background:
              'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.35) 40deg, transparent 80deg)',
            filter: 'blur(2px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
}
