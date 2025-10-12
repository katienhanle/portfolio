import { useRouter } from 'next/router'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Playground', href: '/playground' },
]

export default function GlassNav() {
  const router = useRouter()
  const [hover, setHover] = useState(null)

  const isActive = (href) =>
    (href === '/' && router.pathname === '/') ||
    (href !== '/' && router.pathname.startsWith(href))

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
      }}
    >
      {/* Glass shell */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.4rem',
          borderRadius: 999,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
          backdropFilter: 'blur(14px) saturate(160%)',
          WebkitBackdropFilter: 'blur(14px) saturate(160%)',
        }}
      >
        {tabs.map(({ label, href }) => {
          const active = isActive(href)
          const highlight = (hover ?? (active ? label : null)) === label
          return (
            <button
              key={label}
              onMouseEnter={() => setHover(label)}
              onMouseLeave={() => setHover(null)}
              onClick={() => router.push(href)}
              style={{
                position: 'relative',
                border: 'none',
                background: 'transparent',
                color: 'white',
                padding: '0.55rem 0.9rem',
                borderRadius: 999,
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: active ? 600 : 400,
                letterSpacing: '0.02em',
                outline: 'none',
              }}
            >
              {/* The morphing “liquid” bubble */}
              {highlight && (
                <motion.span
                  layoutId="bubble"
                  transition={{
                    type: 'spring',
                    stiffness: 420,
                    damping: 40,
                    mass: 0.5,
                  }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 999,
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))',
                    boxShadow:
                      'inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 10px rgba(0,0,0,0.25)',
                    filter: 'saturate(120%)',
                    zIndex: -1,
                  }}
                />
              )}
              {label}
            </button>
          )
        })}

        {/* Media Kit pill (external) */}
        <a
          href="https://beacons.ai/kqtei/mediakit"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHover('MediaKit')}
          onMouseLeave={() => setHover(null)}
          style={{
            position: 'relative',
            color: 'white',
            textDecoration: 'none',
            padding: '0.55rem 0.9rem',
            borderRadius: 999,
            fontSize: '0.95rem',
            fontWeight: 500,
            border: '1px solid rgba(255,255,255,0.22)',
            background: 'rgba(255,255,255,0.06)',
          }}
        >
          {hover === 'MediaKit' && (
            <motion.span
              layoutId="bubble"
              transition={{ type: 'spring', stiffness: 420, damping: 40, mass: 0.5 }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 999,
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 10px rgba(0,0,0,0.25)',
                zIndex: -1,
              }}
            />
          )}
          Media Kit ↗
        </a>

        
      </div>
    </header>
  )
}
