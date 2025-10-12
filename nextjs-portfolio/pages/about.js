// pages/about.js
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import GlassNav from '@/components/GlassNav'


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
        <GlassNav />
        <div style={{ height: '5rem' }} />

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
            I also love playing video games, especially horror games on ROBLOX (even if I&apos;m bad with horror).
          </p>
          <p style={styles.body}>
            I&apos;d say one of my favorite hobbies is simply “meeting people.” If you&apos;re interested in connecting
            or working on something meaningful, let&apos;s create together!
          </p>
          <a 
            href="mailto:katienhanle@gmail.com" 
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              padding: '0.75rem 1.6rem',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(14px) saturate(160%)',
              WebkitBackdropFilter: 'blur(14px) saturate(160%)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              boxShadow: '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow =
                '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
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
