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

  // --- NAV ---
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
      title: 'SFA ROBLOX Game Development',
      alt: 'ROBLOX game development thumbnails and studio',
      date: '2016',
      meta: 'Game Development · Blender · Programming',
      desc: (
        <>
          When I was 13, I wanted to create a game that would be popular on the rising platform: ROBLOX.
          Through YouTube tutorials, I learned to code basic Lua, learned to export avatar models into Blender
          to pose limbs (pre-R15). I learned the basics of photo editing in order to create thumbnails and
          images for my game. The game accumulated&nbsp;
          <strong
            style={{
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px',
            }}
          >
            580,000+
          </strong>{' '}
          visits from players in 2016.
        </>
      ),
      imgs: ['/sfarblxstudio.png', '/sfathumb1.png', '/sfathumb2.png'],
      href: '#',
    },
    {
      title: (
        <a
          href="https://www.roblox.com/games/621129760/KAT"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#E0E0E0', textDecoration: 'none' }}
        >
          KAT ROBLOX Game Thumbnail Design
        </a>
      ),
      alt: 'KAT thumbnail design preview',
      date: '2017',
      meta: 'Graphic Design · Thumbnails',
      desc: (
        <>
          In 2017, I created custom graphic thumbnails for <strong>KAT (Knife Ability Test)</strong>, a massively
          popular Roblox PvP deathmatch by Fierzaa. My work was featured in-game during its peak years and exposed to
          a huge player base—KAT has reached{' '}
          <strong
            style={{
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px',
            }}
          >
            1.4&nbsp;billion+
          </strong>{' '}
          visits. While the thumbnails are no longer in use today, this side project helped to refine my digital art
          skills and deliver fast, engaging visuals that stood out on Roblox’s Game Catalog.
        </>
      ),
      imgs: ['/kat-thumb-1.png', '/kat-thumb-2.png'],
      href: 'https://www.roblox.com/games/621129760/KAT',
    },
    {
      title: 'Dance for Smiles Workshop Poster',
      alt: 'Operation Smile Dance for Smiles promotional poster',
      date: '2021',
      meta: 'Graphic Design · Event Promotion · Social Media',
      desc: (
        <>
          In high school, I designed a collective poster for the{' '}
          <strong>Operation Smile Student Program</strong>&apos;s fundraiser event
          <em> Dance for Smiles</em>. The poster helped to promote a series of cultural
          dance workshops hosted by four of our high school&apos;s organizations,
          proceeds supporting cleft lip surgeries in developing countries. The graphic was shared
          across multiple clubs and social media channels.
        </>
      ),
      imgs: [
        '/danceforsmiles.png', // export your poster image into /public
      ],
      href: '#', // optional: link to Operation Smile or event archive if you want
    },
    
    {
      title: 'Dance Team Leadership & Formation Design',
      alt: 'Dance project formation planning and rehearsal',
      date: '2023',
      meta: 'Choreography · Leadership · Creative Direction',
      desc: (
        <>
          As a dance captain for <strong>KUT</strong>, I led practices and designed
          formation changes for large-scale performances. This process included
          systems thinking, clear visual communication (sketching and iterating formations),
          and leadership when directing practices and coordinating rehearsals. <br /><br />
          To me, just like design, choreography is about guiding an audience through a
          story, balancing rhythm, flow, and visual impact.
        </>
      ),
      imgs: [
        '/kut-1.png',
        '/kut-2.png',
        '/kut-3.png',
      ],
      href: '#', // you can link to a video or keep as "#"
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
              <a key={label} href={href} className={`nav-link${active ? ' active' : ''}`}>
                {label}
              </a>
            );
          })}
        </nav>
      </header>

      {/* Title */}
      <section style={{ marginTop: '3.5rem' }}>
        <h1 style={styles.titleH1}>Playground</h1>
        <p style={styles.body}>
          Creative projects, throwbacks, and more. Fixating on my hobbies led me to learning various skills, whether
          that be self-taught programming, 3D rendering, photoshopping, video editing, etc.
        </p>
      </section>

      {/* Vertical Timeline */}
      <section style={{ marginTop: '2.5rem', position: 'relative', maxWidth: 1200, marginInline: 'auto' }}>
        {/* Vertical bar on the left */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 24,
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
            const altText =
              item.alt || (typeof item.title === 'string' ? item.title : 'Playground image');

            return (
              <article
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '72px 1fr',
                  gap: '1.25rem',
                  alignItems: 'start',
                }}
              >
                {/* Node */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: 24,
                      transform: 'translateX(-50%)',
                      width: 34,
                      height: 34,
                      borderRadius: '50%',
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

                {/* Entry: image carousel (left) + text (right) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(360px, 560px) 1fr',
                    gap: '1.5rem',
                    alignItems: 'center',
                  }}
                >
                  {/* Image carousel (hardened) */}
                  <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 320 }}>
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        // Re-mount reliably when index changes (not just when the URL string changes)
                        key={`${idx}-${activeIdx}`}
                        custom={direction}
                        initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                      >
                        {imgSrc ? (
                          <Image
                          src={imgSrc}
                          alt={altText}
                          width={1290}
                          height={990}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain', // fit entire image
                            backgroundColor: '#111', // optional: fills empty space with dark bg
                          }}
                        />
                        ) : null}

                        <div
                          className="img-fallback"
                          style={{
                            display: imgSrc ? 'none' : 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            borderRadius: 16,
                            border: '2px dashed rgba(255,255,255,0.28)',
                            fontSize: 14,
                            color: '#bbb',
                          }}
                        >
                          Missing image: {String(imgSrc || 'unknown')}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* arrows */}
                    {(item.imgs?.length || 0) > 1 && (
                      <>
                        <button
                          onClick={() => handlePrev(idx)}
                          aria-label="Previous image"
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: 10,
                            transform: 'translateY(-50%)',
                            background: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: 34,
                            height: 34,
                            cursor: 'pointer',
                            lineHeight: 0,
                            zIndex: 2, // keep above slide
                          }}
                        >
                          ‹
                        </button>
                        <button
                          onClick={() => handleNext(idx)}
                          aria-label="Next image"
                          style={{
                            position: 'absolute',
                            top: '50%',
                            right: 10,
                            transform: 'translateY(-50%)',
                            background: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: 34,
                            height: 34,
                            cursor: 'pointer',
                            lineHeight: 0,
                            zIndex: 2, // keep above slide
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
