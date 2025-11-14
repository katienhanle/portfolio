// pages/playground.js
import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import GlassNav from '@/components/GlassNav';

export default function Playground() {
  // Shared tokens
  const [direction, setDirection] = useState(0);

  const styles = {
    page: {
      background: '#0D0D0D',
      color: '#E0E0E0',
      minHeight: '100vh',
      padding: '2rem 2rem 2rem 3.25rem', // extra left space for glass scrollbar
    },
    titleH1: { fontSize: '3.4rem', fontWeight: 800, margin: 0 },
    titleH2: { fontSize: '1.6rem', fontWeight: 700, margin: 0, marginBottom: '1.25rem' },
    body: { fontSize: '1.05rem', lineHeight: 1.7, color: '#E0E0E0', margin: 0, marginTop: '0.75rem' },
    meta: { fontSize: '0.9rem', color: '#9CA3AF', fontStyle: 'italic', margin: '0.25rem 0 0.75rem 0' },
    card: {
      position: 'relative',
      borderRadius: '1rem',
      padding: '1.5rem',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.18)',
      backdropFilter: 'blur(14px) saturate(160%)',
      WebkitBackdropFilter: 'blur(14px) saturate(160%)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
      transition: 'all 0.3s ease',
    },
  };

  // --- Timeline data: use `imgs` (array) for the carousel ---
  const timeline = [
    {
      title: 'Swim for Admin: Roblox Game Development',
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
          href="https://www.youtube.com/watch?v=jYjMsnbLX7g"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#E0E0E0', textDecoration: 'none' }}
        >
          Early Trend YouTube Roblox Music Video
        </a>
      ),
      alt: 'Roblox music video thumbnail',
      date: '2016',
      meta: 'Video Production · Roblox Studio · Creativity',
      desc: (
        <>
          Later that year, I <strong>self-produced a Roblox music video</strong>,
          learning how to stage scenes, move in the program, and time shots inside
          Roblox Studio. It was my first experience combining storytelling with
          interactive environments, and it taught me how creative tools could turn
          simple worlds into cinematic spaces. <br /><br />
          The video reached{' '}
          <strong
            style={{
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px',
            }}
          >
            22,000 views+
          </strong>{' '}
          on YouTube after its release on <em>July 22, 2016</em>.
        </>
      ),
      imgs: ['/robloxmusicvideo.jpg'],
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
      imgs: ['/danceforsmiles.png'],
      href: '#',
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
      imgs: ['/kut-1.png', '/kut-2.png', '/kut-3.png'],
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
      <GlassNav />
      <div style={{ height: '5rem' }} /> {/* spacer below fixed nav */}

      {/* Title */}
      <section style={{ marginTop: '3.5rem' }}>
        <h1 style={styles.titleH1}>Playground</h1>
        <p style={styles.body}>
          Creative projects, throwbacks, and more. Fixating on my hobbies led me to learning various skills, whether
          that be self-taught programming, 3D rendering, photoshopping, video editing, etc.
        </p>
      </section>

      {/* Cards (no left rail, each item is a liquid-glass panel) */}
      <section style={{ marginTop: '2.5rem', maxWidth: 1200, marginInline: 'auto' }}>
        <div style={{ display: 'grid', gap: '2rem' }}>
          {timeline.map((item, idx) => {
            const activeIdx = currentIndexes[idx] || 0;
            const imgSrc = (item.imgs && item.imgs[activeIdx]) || item.imgs?.[0] || item.img;
            const altText =
              item.alt || (typeof item.title === 'string' ? item.title : 'Playground image');

            return (
              <article
                key={idx}
                style={styles.card}
              >
                {/* Image + Text grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(340px, 560px) 1fr',
                    gap: '1.5rem',
                    alignItems: 'center',
                  }}
                >
                  {/* Image carousel */}
                  <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 320 }}>
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
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
                              objectFit: 'contain',
                              backgroundColor: '#111',
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
                            zIndex: 2,
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
                            zIndex: 2,
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
