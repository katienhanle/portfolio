// pages/projects/demonslayer.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import GlassNav from '@/components/GlassNav';
import Link from "next/link";


export default function DemonSlayerProject() {
  const { pathname } = useRouter();
  const currentPath = pathname;

  // Keep consistent with other project pages
  const styles = {
    page: {
      background: '#0D0D0D',
      color: '#E0E0E0',
      minHeight: '100vh',
      padding: '2rem',
    },
    section: {
      marginTop: '3.5rem',
      maxWidth: '800px',
      marginInline: 'auto',
      textAlign: 'left',
    },
    sectionWide: {
      marginTop: '3.5rem',
      maxWidth: '1200px',
      marginInline: 'auto',
      textAlign: 'left',
    },
    sectionLabel: {
      fontSize: '0.9rem',
      letterSpacing: '0.1rem',
      textTransform: 'uppercase',
      color: '#E0E0E0',
      fontWeight: 500,
      marginBottom: '0.5rem',
    },
    titleH1: { fontSize: '2.2rem', fontWeight: 800, margin: 0 },
    titleH2: { fontSize: '1.4rem', fontWeight: 700, margin: 0, marginBottom: '1.25rem' },
    body: { fontSize: '0.95rem', lineHeight: 1.7, color: '#E0E0E0', margin: 0, marginTop: '0.75rem' },
    meta: { fontSize: '0.9rem', color: '#9CA3AF', fontStyle: 'italic', margin: '0.25rem 0 0.75rem 0' },
    gridWrap: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '2rem',
      alignItems: 'flex-start',
      marginTop: '1.75rem',
      maxWidth: '1200px',
      marginInline: 'auto',
    },
    card: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: '0.75rem',
      padding: '1.25rem 1.5rem',
    },
    pill: {
      display: 'inline-block',
      padding: '0.45rem 1rem',
      borderRadius: '999px',
      border: '1px solid rgba(255,255,255,0.18)',
      background: 'rgba(255,255,255,0.08)',
      marginTop: '1rem',
      textDecoration: 'none',
      color: '#fff',
    },
    pixelGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 72px)',
      gap: '0.75rem',
      justifyContent: 'center',
    },
    pixelCell: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.4rem',
    },
    pixelLabel: { fontSize: '0.75rem', color: '#9CA3AF', textAlign: 'center' },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      overflow: 'hidden',
      borderRadius: '0.75rem',
      border: '1px solid rgba(255,255,255,0.15)',
    },
    thtd: { padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' },
    shareRow: {
      display: 'flex',
      gap: 16,
      overflowX: 'auto',
      padding: '12px 4px 8px',
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch',
      marginTop: '1rem', // 👈 adds vertical spacing above the images
    },
  };

  const overlayFor = (label) => `/overlays/${label.toLowerCase().replace(/\s+/g, '')}_overlay.png`;
  const overlayOverrides = { /* ... */ };
  const sprites = [
  { key: 'EMBER',   file: '/pixels/ember_overlay.png',   label: 'Ember' },
  { key: 'CURRENT', file: '/pixels/current_overlay.png', label: 'Current' },
  { key: 'VOLT',    file: '/pixels/volt_overlay.png',    label: 'Volt' },
  { key: 'GALE',    file: '/pixels/gale_overlay.png',    label: 'Gale' },
  { key: 'TERRA',   file: '/pixels/terra_overlay.png',   label: 'Terra' },
  { key: 'MIRAGE',  file: '/pixels/mirage_overlay.png',  label: 'Mirage' },
  { key: 'VIPER',   file: '/pixels/viper_overlay.png',   label: 'Viper' },
  { key: 'BLOOM',   file: '/pixels/bloom_overlay.png',   label: 'Bloom' },
  { key: 'WISP',    file: '/pixels/wisp_overlay.png',    label: 'Wisp' },
  { key: 'ECHO',    file: '/pixels/echo_overlay.png',    label: 'Echo' },
  { key: 'HEART',   file: '/pixels/heart_overlay.png',   label: 'Heart' },
  { key: 'FANG',    file: '/pixels/fang_overlay.png',    label: 'Fang' },
  { key: 'RADIANT', file: '/pixels/radiant_overlay.png', label: 'Radiant' },
  { key: 'ECLIPSE', file: '/pixels/eclipse_overlay.png', label: 'Eclipse' },
  { key: 'ARIA',    file: '/pixels/aria_overlay.png',    label: 'Aria' },
  { key: 'DREAM',   file: '/pixels/dream_overlay.png',   label: 'Dream' },
];




  return (
    <div style={styles.page}>
      <Head><title>Demon Slayer Quiz — Marketing Design</title></Head>
      <GlassNav />
      <div style={{ height: '5rem' }} />

      {/* Title */}
      <section style={{ marginTop: '2.5rem' }}>
        <h1 style={styles.titleH1}>Demon Slayer-Inspired Personality Quiz — Game/Marketing Design</h1>

        <div style={styles.gridWrap}>
          {/* TL;DR + Metadata */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ ...styles.body, fontWeight: 700 }}>Project Overview:</p>
              <p style={styles.body}>
                I packaged this interactive quiz like a collectible fan experience. It was centered on identity,
                curiosity, and shareable reveals. The marketing layer used pixel art & result cards to turn each
                archetype into a “Slayer style” users felt were personal and motivated to post.
              </p>
            </div>
            <div style={{ lineHeight: 2, marginTop: '0.75rem' }}>
            <p style={styles.body}><strong>Client:</strong><br />General Public / Social Media Users / Anime Fans</p>
              <p style={styles.body}><strong>My Role:</strong><br />Marketing Design · Gaming · Social Media</p>
              <p style={styles.body}><strong>Stack:</strong><br />Figma · Framer Motion · Next.js · Vercel</p>
              <p style={styles.body}><strong>Timeline:</strong><br />October 2025</p>
            </div>
            <a
              href="#analytics"
              style={{ 
                ...styles.pill, 
                display: 'inline-block',
                position: 'relative', 
                zIndex: 5, 
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const target = document.getElementById('analytics');
                if (!target) {
                  console.log('Target not found');
                  return;
                }
            
                // Find the scrollable DIV
                const allElements = document.querySelectorAll('*');
                let scrollContainer = null;
                
                allElements.forEach(el => {
                  if (el.scrollHeight > el.clientHeight && el.tagName === 'DIV') {
                    scrollContainer = el;
                  }
                });
                
                if (!scrollContainer) {
                  console.log('No scrollable container found!');
                  return;
                }
                
                console.log('Found scroll container:', scrollContainer);
                
                // Disable smooth scroll on the container
                const originalBehavior = scrollContainer.style.scrollBehavior;
                scrollContainer.style.scrollBehavior = 'auto';
                
                const startY = scrollContainer.scrollTop;
                const targetRect = target.getBoundingClientRect();
                const containerRect = scrollContainer.getBoundingClientRect();
                const destY = startY + targetRect.top - containerRect.top - 100;
                const distance = destY - startY;
                
                console.log('Scroll calculation:', { startY, destY, distance });
                
                const duration = 1000;
                const startTime = performance.now();
            
                const easeInOutCubic = (t) =>
                  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            
                let frameCount = 0;
                function step(now) {
                  const elapsed = now - startTime;
                  const t = Math.min(elapsed / duration, 1);
                  const eased = easeInOutCubic(t);
                  const newY = startY + distance * eased;
                  
                  scrollContainer.scrollTop = newY;
                  frameCount++;
                  
                  if (frameCount % 10 === 0) {
                    console.log(`Frame ${frameCount}: scrollTop=${scrollContainer.scrollTop}`);
                  }
                  
                  if (elapsed < duration) {
                    requestAnimationFrame(step);
                  } else {
                    scrollContainer.style.scrollBehavior = originalBehavior;
                    console.log('Animation complete! Frames:', frameCount);
                  }
                }
                requestAnimationFrame(step);
              }}
            >
              Skip to Analytics ↓
            </a>
            <a
              href="https://corpsquiz.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="try-button"
            >
              Try it here!
            </a>

            <style jsx>{`
              .try-button {
                display: inline-block;
                margin-left: 0.75rem; /* space between the two buttons */
                background: linear-gradient(90deg, #ffb347 0%, #ff7b00 100%);
                border: 1.5px solid #ffb347;
                border-radius: 999px;
                padding: 0.45rem 1.3rem;
                color: #2b0040;
                font-family: 'Jersey 25', sans-serif;
                font-size: 1.1rem;
                text-shadow: 0 1px 0 rgba(255, 255, 255, 0.15);
                cursor: pointer;
                transition: transform 0.1s ease, filter 0.1s ease, box-shadow 0.2s ease;
              }

              .try-button:hover {
                transform: scale(1.04);
                filter: brightness(1.1);
                box-shadow: 0 0 10px rgba(255, 140, 0, 0.5);
              }

              .try-button a {
                text-decoration: none;
                color: inherit;
              }

              @media (max-width: 800px) {
                .try-button {
                  display: block;
                  margin: 1rem 0;
                  text-align: center;
                  width: fit-content;
                }
              }
            `}</style>



          </div>

          {/* Hero image / thumbnail */}
          <div style={{ justifySelf: 'start' }}>
            <Image
              src="/ds/dsquizthumb2.png"   // put a wide hero image in /public
              alt="Demon Slayer Quiz — Marketing"
              width={1300}
              height={1021}
              style={{ width: '100%', maxWidth: '1300px', borderRadius: '1rem', height: 'auto' }}
            />
          </div>
          
        </div>
      </section>     
      {/* Motivation */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Motivation</p>
        <h2 style={styles.titleH2}>Why I Made This</h2>
        <p style={styles.body}>
          I&apos;ve always enjoyed personality quizzes, especially ones I could share with friends. Recently, I&apos;d been rewatching
          <em> Demon Slayer </em> and saw how deeply people connected with its characters and stories.
          Around the same time, I noticed how shareable personality quizzes perform online: quick, expressive, and made
          for screenshots.
        </p>
        <p style={styles.body}>
          My goal was to create a fan-inspired experience that used <strong>design, emotion, and community</strong>.
          The quiz I sought to make was one that allowed fans to see themselves in that experience through a personalized pixel avatar and shareable character screen.
        </p>
      </section>


      {/* Marketing Design */}
      <section id="marketing" style={styles.section}>
        <p style={styles.sectionLabel}>Marketing Design</p>
        <h2 style={styles.titleH2}>Concept → Visual System → Share Mechanics</h2>
        <p style={styles.body}>
          <em>“Corps Exam (Personality Quiz)”</em> aimed to use MBTI-inspired logic and
          anime-inflected aesthetics for both curiosity and a sense of identity. Each result generated a screen
          with an MBTI result that related to the Demon Slayer show lore and and custom pixel character to
          encourage organic shares across Instagram and TikTok.
        </p>
      </section>

      {/* User Flow */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>User Flow</p>
        <h2 style={styles.titleH2}>Minimal and Share-oriented</h2>
        <p style={styles.body}>
          The user flow minimizes cognitive load. While I designed for desktop as well, I had a focus on mobile for shareability.
          Each step fits on a single mobile screen with primary actions fixed near the thumb.
        </p>
      {/* Image */}
      <div style={{ justifySelf: 'start' }}>
          <Image
            src="/ds/dsuserflow1.png"
            alt="DS Lofi"
            width={972}
            height={1021}
            style={{ width: '100%', maxWidth: '900', borderRadius: '1rem', height: 'auto' }}
          />
        </div>

      </section>

      {/* Lo-Fi Prototype */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Lo-Fi Prototype</p>
        <h2 style={styles.titleH2}>Wireframes to Validate Layout and Hierarchy</h2>
        <p style={styles.body}>
          I started with wireframes that focused on readability. I was going for a minimal pixel look. The goal
          was to just explore button hierarchy and spacing. I went with the font Jersey 25 for a nice clean pixel 
          aesthetic.
        </p>

        {/* Image */}
        <div style={{ justifySelf: 'start' }}>
          <Image
            src="/ds/dslofi.png"
            alt="DS Lofi"
            width={972}
            height={1021}
            style={{ width: '100%', maxWidth: '900', borderRadius: '1rem', height: 'auto' }}
          />
        </div>
      </section>
            {/* Hi-Fi Prototype */}
            <section style={styles.section}>
        <p style={styles.sectionLabel}>Hi-Fi Prototype</p>
        <h2 style={styles.titleH2}>Final UI, Motion, and Share Frame</h2>
        <p style={styles.body}>
          Once the structure worked out, I focused on clarity. The final UI used a color-coded system based
          on result type. Every screen was built to fit comfortably on mobile for easy sharing. I optimized
          spacing, type size, and button placement for thumb reach. The result screen was framed for 1080x1920
          capture, making them easily shareable to friends and social media.
        </p>

        {/* Image */}
        <div style={{ justifySelf: 'start' }}>
          <Image
            src="/ds/dshifi_1.png"
            alt="DS Lofi"
            width={972}
            height={1021}
            style={{ width: '100%', maxWidth: '900', borderRadius: '1rem', height: 'auto' }}
          />
        </div>
        {/* Image */}
        <div style={{ justifySelf: 'start' }}>
          <Image
            src="/ds/dshifi2.png"
            alt="DS Lofi"
            width={972}
            height={1021}
            style={{ width: '100%', maxWidth: '900', borderRadius: '1rem', height: 'auto' }}
          />
        </div>
      </section>
      {/* Pixel Art Grid */}
      <section style={styles.section}>
              <p style={styles.sectionLabel}>Pixel Art (32×32)</p>
              <h2 style={styles.titleH2}>The Sixteen Styles</h2>
              <p style={styles.body}>
                I designed a cohesive sprite set to represent all possible results. These were designed
                directly in Pixilart using a 32x32 grid. Each layer (hair, eyes, skin tone, and uniform)
                was drawn and exported individually so they could stack on top of each other in code.
                Keeping a consistent 32x32 grid helped to mix combinations while keeping the preview
                aligned for the results.
                (Each style maps to the quiz&apos;s MBTI logic and lore.)
              </p>

              <div style={{ ...styles.card, marginTop: '1rem' }}>
                <div style={styles.pixelGrid}>
                  {sprites.map(({ key, file, label }) => {
                    const overlaySrc = overlayOverrides[label] || overlayFor(label);
                    return (
                      <div key={key} style={styles.pixelCell}>
                        <div
                          style={{
                            width: 64,
                            height: 64,
                            borderRadius: 8,
                            overflow: 'hidden',
                          }}
                        >
                          <Image
                            src={file}
                            alt={`${label} card`}
                            width={64}
                            height={64}
                            style={{ width: 64, height: 64, objectFit: 'cover', display: 'block', borderRadius: 8 }}
                          />

                        </div>
                        <span style={styles.pixelLabel}>{label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
      {/* Shareables */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Shareables</p>
        <h2 style={styles.titleH2}>Mobile-first Result Screen</h2>
        <p style={styles.body}>
          The result screen was built to be <strong>instantly</strong> shareable. Each layout fits an Instagram Story
          frame with the avatar, style name, palette, and a short summary. The goal was to make screenshots
          feel natural. Social media became the main way the quiz spread, turning every result into its own mini post.
        </p>

        {/* replace the placeholder block with this */}
        <div className="share-row" style={styles.shareRow}>
          {[
            { src: "/ds/card-1.PNG", alt: "Result card 1", width: 1080, height: 1920 },
            { src: "/ds/card-2.PNG", alt: "Result card 2", width: 1080, height: 1920 },
            { src: "/ds/card-3.PNG", alt: "Result card 3", width: 1080, height: 1920 },
          ].map((c, i) => (
            <figure key={i} style={{ margin: 0, scrollSnapAlign: 'start', flex: '0 0 auto' }} className="share-item">
              <Image
                src={c.src}
                alt={c.alt}
                width={c.width}
                height={c.height}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '0.5rem',
                  maxWidth: '300px'
                }}
              />
            </figure>
          ))}
        </div>

        {/* tiny responsive helper */}
        <style jsx>{`
          @media (min-width: 900px) {
            .share-row {
              overflow: visible !important;
              display: grid !important;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px !important;
              scroll-snap-type: none !important;
            }
            .share-item {
              scroll-snap-align: unset !important;
              flex: 0 0 auto !important;
            }
          }
        `}</style>
      </section>


      {/* Real User Feedback */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Real User Input</p>
        <h2 style={styles.titleH2}>What Players Said</h2>
        <p style={styles.body}>
        After launch, survey responses highlighted how players resonated with both the tone and the
        interactive format. Many described the quiz as “fun and simple” and appreciated its RPG-style
        worldbuilding. Others expressed excitement over the character creator, though several mentioned
        wanting more customization options.
        </p>

        {/* Image */}
        <div style={{ justifySelf: 'start', marginTop: '2rem',}}>
                  <Image
                    src="/ds/feedback1.png"
                    alt="DS Lofi"
                    width={972}
                    height={1021}
                    style={{ width: '100%', maxWidth: '900', borderRadius: '1rem', height: 'auto' }}
                  />
                </div>
      </section>

            {/* Analytics & Insights */}
            <section id="analytics" style={styles.section}>
              <p style={styles.sectionLabel}>Analytics & Insights</p>
              <h2 style={styles.titleH2}>What the Numbers Said</h2>
              <p style={styles.body}>
                Metrics were tracked using Vercel Analytics and embedded UTMs. These insights highlight how
                shareable design drove engagement across social platforms and organic reach. In just the first 24 hours,
                the quiz accumulated <strong>a thousand</strong> completions.
              </p>

              <div style={{ ...styles.card, marginTop: '1.5rem', padding: '1.5rem' }}>
                <p style={{ ...styles.body, opacity: 0.9 }}>
                  <strong>Site launched:</strong> <span>October&nbsp;18,&nbsp;2025</span><br />
                  <strong>Active period:</strong> <span>2&nbsp;days</span><br />
                  <strong>Site Views:</strong> <span>6,154</span><br />

                  In just 24 hours, the quiz accumulated <strong>more than a thousand</strong> completions, an impressive conversion
                  window that shows the effectiveness of mobile-first shareability and social reach.
                </p>

                {/* Image */}
                <div style={{ justifySelf: 'start', marginTop: '2rem',}}>
                  <Image
                    src="/ds/analytics1.png"
                    alt="DS Lofi"
                    width={972}
                    height={1021}
                    style={{ width: '100%', maxWidth: '900', borderRadius: '1rem', height: 'auto' }}
                  />
                </div>


                <p style={{
                  marginTop: '1rem',
                  fontSize: '0.9rem',
                  opacity: 0.7,
                  textAlign: 'right',
                  fontStyle: 'italic'
                }}>
                  Data updated: October&nbsp;20,&nbsp;2025&nbsp;•&nbsp;16:52&nbsp;PM
                  (Based on Vercel Analytics & DS Form Responses)
                </p>
                <p style={styles.body}>
                The data confirmed what I designed for: a social-first experience. Over 70% of users discovered
                the quiz through social media, validating how the 1080×1920 layout naturally blended into story
                shares. Most participants identified as female. This alignment between audience insight and design
                execution showed how framing the quiz as a shareable, story-sized artifact wasn&apos;t just aesthetic,
                it was strategic.
                </p>
              </div>
            </section>

      {/* Outcomes */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Outcomes</p>
        <h2 style={styles.titleH2}>What Shipped, What We Learned, & What&apos;s Next</h2>
                <p style={styles.body}>
                I shipped the full quiz flow with a mobile-first result screen and a shareable card sized
                perfectly for Instagram Stories. Once the shareable card launched, users started posting their
                results more often, turning the quiz into something that naturally fit into the social media space.
                It blended aesthetic storytelling with community-driven sharing, which helped boost reach organically.
                From the feedback and demographic data, I learned that most players identified as female.
                For the next iteration, I plan to expand customization options with more female hairstyles and
                accessories to make the character creator feel more personal and inclusive.
                </p>
      </section>

    {/* Next Project CTA */}
    <div style={{ marginTop: "4rem", textAlign: "center" }}>
      <Link href="/projects/stepsync" legacyBehavior>
        <a className="next-project">View Next Project →</a>
      </Link>

      <style jsx>{`
        .next-project {
          display: inline-block;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 0.9rem 1.75rem;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          backdrop-filter: blur(10px);
          transition: all 0.2s ease;
        }
        .next-project:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </div>

    </div>
  );
}

// Respect your per-page background pattern from _app.js
DemonSlayerProject.pageBg = '#0D0D0D';
