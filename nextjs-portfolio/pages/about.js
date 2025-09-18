// pages/about.js
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Nav state
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

  // Video handlers
  const handleToggle = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      if (v.paused) {
        await v.play();          // user gesture enables audio
        setIsPlaying(true);      // hide overlay button
        setShowControls(true);   // show native scrubber/volume
      } else {
        v.pause();
        setIsPlaying(false);     // show overlay button again
        // setShowControls(false); // optional if you want controls hidden when paused
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleEnded = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    v.load();                    // re-show poster image
    setIsPlaying(false);         // bring overlay button back
    setShowControls(false);      // hide controls on poster
  };

  // Styles
  const styles = {
    page: {
      background: '#0D0D0D',
      color: '#E0E0E0',
      minHeight: '100vh',
      padding: '2rem',
    },
    titleH1: { fontSize: '2.2rem', fontWeight: 800, margin: 0 },
    body: { fontSize: '0.95rem', lineHeight: 1.7, marginTop: '0.75rem' },
    gridLayout: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr', // text | squares
      gap: '2rem',
      marginTop: '5rem',
      alignItems: 'start',
    },
    textCol: { maxWidth: '750px', lineHeight: 1.8 },
    squareGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
    },
    square: {
      backgroundColor: '#161616',
      border: '1px solid #2a2a2a',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.25) inset',
      aspectRatio: '1 / 1',
    },
  };

  return (
    <div style={styles.page}>
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

      {/* Two-column layout */}
      <section style={styles.gridLayout}>
        {/* Left: intro text */}
        <div style={styles.textCol}>
          <h1 style={styles.titleH1}>I&apos;m Katie!</h1>
          <p style={styles.body}>
            I&apos;m a designer, visual storyteller, and full-time creative. I studied Cognitive Science with a
            specialization in Design & Interaction, and I&apos;m especially motivated by inclusive design—creating
            experiences that are usable and welcoming for everyone. I aim to build with empathy at every step.
          </p>
          <p style={styles.body}>
            Creativity has always been my core, not just in design but in movement. When I&apos;m not building
            interfaces or editing videos, you can probably find me choreographing, leading dance teams, or
            performing onstage. That same love for rhythm, storytelling, and visual impact shows up in the way
            I design, with flow, intention, and detail.
          </p>
          <p style={styles.body}>
            I enjoy listening to music, and I&apos;ve been invited to travel, perform on stage, and even judge
            competitions—experiences that continue to shape both my artistry and my perspective as a creative.
            Some of my favorite artists include fromis_9, TWICE, aespa, and tlinh.
          </p>
          <p style={styles.body}>
            I also love playing video games, especially FPS and interactive/narrative horror games 
          like Valorant and Until Dawn (even if I'm bad with horror).
          </p>
          <p style={styles.body}>
            I&apos;d say one of my favorite hobbies is simply “meeting people.” I enjoy learning about
            others and discovering new ways of looking at the world. If you&apos;re interested in connecting
            or working on something meaningful, let&apos;s create together!
          </p>
          {/* Replace this line */}

          <a 
            href="mailto:katienhanle@gmail.com" 
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#E0E0E0',
              color: '#0D0D0D',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#cfcfcf';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E0E0E0';
            }}
          >
            Let&apos;s collaborate →
          </a>

        </div>

        {/* Right: 2×2 squares */}
        <div style={styles.squareGrid}>
          {/* Video square (click to play, native controls while playing) */}
          <div style={{ ...styles.square, position: 'relative', overflow: 'hidden' }}>
            <video
              ref={videoRef}
              poster="/ab1thumb.png"             // put this image in /public
              preload="metadata"
              playsInline
              controls={showControls}            // native scrubber/volume while playing
              controlsList="nodownload noplaybackrate"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem' }}
              onEnded={handleEnded}
              onClick={handleToggle}
              onPlay={() => { setIsPlaying(true); setShowControls(true); }}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/ab1.mp4" type="video/mp4" /> {/* put this video in /public */}
            </video>

            {/* Overlay play button — only when NOT playing */}
            {!isPlaying && (
              <button
                onClick={handleToggle}
                aria-label="Play video"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'grid',
                  placeItems: 'center',
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28))',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                <span
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '999px',
                    background: 'rgba(0,0,0,0.55)',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: 28,
                    lineHeight: 1,
                  }}
                >
                  ►
                </span>
              </button>
            )}
          </div>

          {/* Image square #1 */}
          <div style={{ ...styles.square, overflow: 'hidden' }}>
            <Image
              src="/ab2.png"            // drop your image in /public
              alt="About highlight 2"
              width={1200}
              height={1200}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem' }}
            />
          </div>

          {/* Image square #2 */}
          <div style={{ ...styles.square, overflow: 'hidden' }}>
            <Image
              src="/ab3.png"            // drop your image in /public
              alt="About highlight 3"
              width={1200}
              height={1200}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem' }}
            />
          </div>

          {/* Image square #3 */}
          <div style={{ ...styles.square, overflow: 'hidden' }}>
            <Image
              src="/ab4.png"            // drop your image in /public
              alt="About highlight 4"
              width={1200}
              height={1200}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
