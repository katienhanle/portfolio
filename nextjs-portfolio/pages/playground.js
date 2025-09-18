// pages/playground.js
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';



export default function Playground() {
  // Shared tokens
  const [direction, setDirection] = useState(0);
  
  const styles = {
    page: {
      background: '#0D0D0D',
      color: '#E0E0E0',
      minHeight: '100vh',
      padding: '2rem',
    },
    titleH1: { fontSize: '2.2rem', fontWeight: 800, margin: 0 },
    titleH2: { fontSize: '1.4rem', fontWeight: 700, margin: 0, marginBottom: '1.25rem' },
    body: { fontSize: '0.95rem', lineHeight: 1.7, color: '#E0E0E0', margin: 0, marginTop: '0.75rem' },
    meta: { fontSize: '0.9rem', color: '#9CA3AF', fontStyle: 'italic', margin: '0.25rem 0 0.75rem 0' },
  };

  // --- NAV (kept as your structure; tiny fixes only) ---
  const { pathname } = useRouter();
  const currentPath = pathname;
  const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Playground', href: '/playground' },
  ];
  const isActive = (href) =>
    (href === '/' && currentPath === '/') ||
    (href === '/about' && currentPath.startsWith('/about')) ||
    (href === '/projects' && (currentPath === '/projects' || currentPath.startsWith('/projects/'))) ||
    (href === '/playground' && currentPath.startsWith('/playground'));

  // --- Timeline data: use `imgs` (array) for the carousel ---
  const timeline = [
    {
      title: 'ROBLOX Game Development',
      date: '2016',
      meta: 'Game Development · Blender · Programming',
      desc: (
        <>
          When I was 13, I wanted to create a game that would be popular on the rising platform: ROBLOX.
          Through YouTube tutorials, I learned to code basic Lua, learned to export avatar models into Blender
          to pose limbs (pre-R15). I learned the basics of photo editing in order to create thumbnails and
          images for my game. The game accumulated <strong style={{ fontWeight: 700, color: '#fff' }}>580,000+</strong> visits from players in 2016.
        </>
      ),
      imgs: ['/sfathumb1.png', '/sfathumb2.png', '/sfarblxstudio.png'],
      href: '#',
    },
  ];
  

  // Carousel state (index per timeline entry)
  const [currentIndexes, setCurrentIndexes] = useState(timeline.map(() => 0));
  const handlePrev = (i) => {
    setDirection(-1);
    setCurrentIndexes((prev) => {
      const next = [...prev];
      const len = timeline[i].imgs?.length || 1;
      next[i] = (next[i] - 1 + len) % len;
      return next;
    });
  };
  
  const handleNext = (i) => {
    setDirection(1);
    setCurrentIndexes((prev) => {
      const next = [...prev];
      const len = timeline[i].imgs?.length || 1;
      next[i] = (next[i] + 1) % len;
      return next;
    });
  };
  

  return (
    <main style={styles.page}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div />
        <nav className="nav">
          {items.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <a
                key={label}
                href={href}
                className={`nav-link${active ? ' active' : ''}`}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </header>

      {/* Title */}
        <section style={{ marginTop: '3.5rem'}}>
        <h1 style={styles.titleH1}>Playground</h1>
        <p style={styles.body}>
            Creative projects, throwbacks, and more. Fixating on my hobbies led me to learning various skills,
            whether that be self-taught programming, 3D rendering, photoshopping, video editing, etc.
        </p>
        </section>


      {/* Vertical Timeline */}
      <section style={{ marginTop: '2.5rem', position: 'relative', maxWidth: 1200, marginInline: 'auto' }}>
      {/* Vertical bar on the left */}
        <div
        aria-hidden="true"
        style={{
            position: 'absolute',
            left: 24, // <-- match this to the node's left
            top: 0,
            bottom: 0,
            width: 2,
            background: 'white',
            opacity: 0.85,
        }}
        />


        <div style={{ display: 'grid', gap: '2.25rem' }}>
          {timeline.map((item, idx) => {
            const activeIdx = currentIndexes[idx] || 0;
            const imgSrc = (item.imgs && item.imgs[activeIdx]) || item.imgs?.[0] || item.img;

            return (
              <article
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '72px 1fr', // larger offset from spine
                  gap: '1.25rem',
                  alignItems: 'start',
                }}
              >
                {/* Node */}
                <div style={{ position: 'relative', height: '100%' }}>
                <div
                    style={{
                    position: 'absolute',
                    left: 24,                 // same x as the spine
                    top: 6,                   // nudge to align with the image top
                    transform: 'translateX(-50%)', // <-- centers the circle over the spine
                    width: 34,
                    height: 34,
                    borderRadius: '999px',
                    background: '#0D0D0D',
                    border: '2px solid white',
                    display: 'grid',
                    placeItems: 'center',
                    }}
                    title={item.date}
                >
                    <span style={{ fontSize: '0.8rem', color: '#ffffff' }}>•</span>
                </div>
                </div>


                {/* Entry (no background card): image carousel (left) + text (right) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(360px, 560px) 1fr',
                    gap: '1.5rem',
                    alignItems: 'center',
                  }}
                >
                  {/* Image carousel */}
                  <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 320 }}>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                        key={imgSrc}                 // re-run animation when the image changes
                        custom={direction}
                        initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        style={{ position: 'absolute', inset: 0 }}
                        >
                        {imgSrc ? (
                            <Image
                            src={imgSrc}
                            alt={item.title}
                            width={1400}
                            height={900}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            <div
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 16,
                                border: '2px dashed rgba(255,255,255,0.28)',
                            }}
                            />
                        )}
                        </motion.div>
                    </AnimatePresence>

                    {/* arrows (unchanged) */}
                    {(item.imgs?.length || 0) > 1 && (
                        <>
                        <button
                            onClick={() => handlePrev(idx)}
                            aria-label="Previous image"
                            style={{
                            position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)',
                            background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none',
                            borderRadius: '50%', width: 34, height: 34, cursor: 'pointer', lineHeight: 0,
                            }}
                        >
                            ‹
                        </button>
                        <button
                            onClick={() => handleNext(idx)}
                            aria-label="Next image"
                            style={{
                            position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)',
                            background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none',
                            borderRadius: '50%', width: 34, height: 34, cursor: 'pointer', lineHeight: 0,
                            }}
                        >
                            ›
                        </button>
                        </>
                    )}
                    </div>


                  {/* Text block */}
                  <div style={{ display: 'grid', alignContent: 'start', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                      <h2 style={{ ...styles.titleH2, marginBottom: 0 }}>{item.title}</h2>
                      <p style={{ ...styles.meta, margin: 0 }}>{item.date}</p>
                    </div>
                    {item.meta ? <p style={styles.meta}>{item.meta}</p> : null}
                    <p style={{ ...styles.body, marginTop: 0 }}>{item.desc}</p>

                    {item.href && item.href !== '#' ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginTop: '0.6rem', color: '#E0E0E0', textDecoration: 'none', fontWeight: 600 }}
                      >
                        View more →
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
