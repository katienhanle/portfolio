// pages/projects/fengcha.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GlassNav from '@/components/GlassNav';

export default function FengChaCaseStudy() {
  const { pathname } = useRouter();
  const currentPath = pathname;

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
    sectionLabel: {
      fontSize: '0.9rem',
      letterSpacing: '0.1rem',
      textTransform: 'uppercase',
      color: '#E0E0E0',
      fontWeight: 500,
      marginBottom: '0.5rem',
    },
    titleH1: {
      fontSize: '2.2rem',
      fontWeight: 800,
      margin: 0,
    },
    titleH2: {
      fontSize: '1.4rem',
      fontWeight: 700,
      margin: 0,
      marginBottom: '1.25rem',
    },
    body: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
      color: '#E0E0E0',
      margin: 0,
      marginTop: '0.75rem',
    },
    calloutH3: {
      fontSize: '1.15rem',
      fontWeight: 700,
      marginTop: '1.75rem',
      marginBottom: '0.5rem',
      color: '#E0E0E0',
    },
    quote: {
      backgroundColor: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: '0.75rem',
      padding: '1.1rem 1.25rem',
      margin: '1.25rem 0 0',
      fontStyle: 'italic',
      fontSize: '1.0rem',
      lineHeight: 1.6,
      color: '#E0E0E0',
    },
    gridWrap: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '2rem',
      alignItems: 'flex-start',
      marginTop: '1.75rem',
      maxWidth: '1200px',
      marginInline: 'auto',
    },
  };

  return (
    <div style={styles.page}>
      <Head><title>Feng Cha App — UX Cleanup & Ordering Flow</title></Head>
      <GlassNav/>
      <div style={{ height: '5rem' }} />

      {/* Title / TL;DR */}
      <section style={{ marginTop: '2.5rem' }}>
        <h1 style={styles.titleH1}>Feng Cha Mobile App: UX Cleanup & Ordering Flow</h1>

        <div style={styles.gridWrap}>
          <div>
            <p style={{ ...styles.body, fontWeight: 700, marginBottom: '0.25rem' }}>Project Overview</p>
            <p style={styles.body}>
              A fast 4–6 hour redesign sprint to tighten hierarchy, reduce cognitive load, and accelerate ordering.
              I focused on realistic content, accessibility, and responsive constraints rather than purely visual styling.
              The result: clearer reading rhythm, fuller use of screen real estate, and fewer taps from intent to checkout.
            </p>

            <div style={{ lineHeight: 2, marginTop: '0.75rem' }}>
              <p style={styles.body}><strong>Role:</strong><br/>UX/UI Design · Prototyping</p>
              <p style={styles.body}><strong>Scope:</strong><br/>Home, Store List, Category Menu, PDP, Checkout</p>
              <p style={styles.body}><strong>Timeline:</strong><br/> November 6, 2025; 1 working session (4–6 hrs)</p>
            </div>
          </div>

          <div style={{ justifySelf: 'start' }}>
            <Image
              src="/fengcha/thumbnailwide1.png"
              alt="Feng Cha redesign thumbnail"
              width={1300}
              height={1021}
              style={{ width: '100%', maxWidth: '1300px', borderRadius: '1rem', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Problem framing (respectful) */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Context</p>
        <h2 style={styles.titleH2}>Good brand, heavy UI</h2>
        <p style={styles.body}>
          The app&apos;s visual identity (blue/white, mascot) is friendly, but dense text, identical type treatment,
          and generous spacing at the top slowed scanning. Key actions like ordering and category switching
          weren&apos;t prioritized. I approached this as a respectful cleanup: improve readability and flow without
          changing brand DNA.
        </p>
      </section>

      {/* Research / constraints */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Lightweight Research</p>
        <h2 style={styles.titleH2}>Grounded in real usage</h2>
        <p style={styles.body}>
          For a sprint, I leaned on in-app observation, heuristic review, and pattern parity with common food apps.
          I kept constraints in mind: iOS safe areas, tap target sizes, color contrast, and system type scaling.
        </p>
        <div style={styles.quote}>
          Goal: Help a regular boba buyer open the app, confirm a store, pick a drink, tweak options, and check out,
          quickly and confidently.
        </div>
      </section>

      {/* Design principles */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Principles</p>
        <h2 style={styles.titleH2}>Read less, do more</h2>
        <Image
            src="/fengcha/readlessnotmore.png"
            alt="Home screen with clearer hierarchy and CTA"
            width={1200}
            height={800}
            style={{ width: '100%', maxWidth: '900px', borderRadius: '1rem', height: 'auto' }}
          />
      </section>

      {/* Key changes */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Redesign Highlights</p>
        <h2 style={styles.titleH2}>What changed and why</h2>

        <h3 style={styles.calloutH3}>1. Home now drives ordering</h3>
        <p style={styles.body}>
          Added a centered <strong>“Order Now”</strong> CTA below the logo and tightened the hero spacing. Rewards remain visible,
          but copy styling creates clear contrast between tier name, threshold, and remaining points. The progress bar now
          implies a <strong>destination</strong> (goal icon) to visually anchor the reward.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Image
            src="/fengcha/homeafterexplained.png"
            alt="Home screen with clearer hierarchy and CTA"
            width={1200}
            height={800}
            style={{ width: '100%', maxWidth: '900px', borderRadius: '1rem', height: 'auto' }}
          />
        </div>

        <h3 style={styles.calloutH3}>2. Persistent “Your order is ready!” bar</h3>
        <p style={styles.body}>
          Introduced a <strong>status bar</strong> that surfaces order state even on the Home tab for quick access to pickup details.
          Users returning to the app don&apos;t have to hunt for their order — one tap reopens Order Details.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Image
            src="/fengcha/statusbar.png"
            alt="Persistent order status bar"
            width={1200}
            height={500}
            style={{ width: '100%', maxWidth: '900px', borderRadius: '1rem', height: 'auto' }}
          />
        </div>

        <h3 style={styles.calloutH3}>3. Store list: compact, scannable cards</h3>
        <p style={styles.body}>
        I wanted to imporove the store location selection experience by making each location easier
        to understand and compare at a glance. This new card layout creates a clear visual hierarchy,
        with the store name emphasized and supporting information grouped logically, reducing cognitive
        load and helping users scan more efficiently. By clustering distance, address, and actions into
        a compact, repeatable structure, the design increases scannability and rhythm, allowing users to
        make decisions faster. The addition of clear call, directions, and info icons shifts the interaction
        model from recall to recognition, reducing effort and aligning with common mobile mental models
        (<strong>Jakob’s Law</strong>).
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Image
            src="/fengcha/locationsafter.png"
            alt="Locations list with denser layout"
            width={1200}
            height={800}
            style={{ width: '100%', maxWidth: '900px', borderRadius: '1rem', height: 'auto' }}
          />
        </div>

        <h3 style={styles.calloutH3}>4. Menu: vertical category rail</h3>
        <p style={styles.body}>
          Switched to a <strong>vertical category rail</strong> for quick thumb scrubbing. The selected category stays pinned while the
          product grid scrolls, reducing disorientation. This pattern mirrors high-performing food apps and supports long menus.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Image
            src="/fengcha/menu_rail.gif"
            alt="Menu with vertical category rail"
            width={1200}
            height={800}
            style={{ width: '100%', maxWidth: '900px', borderRadius: '1rem', height: 'auto' }}
          />
        </div>

        <h3 style={styles.calloutH3}>5. PDP: cleaner options and sticky cart</h3>
        <p style={styles.body}>
          Rewrote content blocks to create a strong <strong>type stack</strong> (title → description → price) and grouped modifiers into
          distinct cards. The cart becomes a <strong>sticky bottom bar</strong> with price + quantity, so users can commit without scrolling.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Image
            src="/fengcha/pdpafter.png"
            alt="Product details with clearer hierarchy and sticky cart"
            width={1200}
            height={800}
            style={{ width: '100%', maxWidth: '900px', borderRadius: '1rem', height: 'auto' }}
          />
        </div>

        <h3 style={styles.calloutH3}>6. Checkout: Dine-in vs. Take-away moved to the end</h3>
        <p style={styles.body}>
          Users often decide where they&apos;ll consume the drink <em>after</em> building the order, so I moved this choice to
          <strong> Checkout</strong>. That keeps early screens focused on selection and speeds up first-decision friction.
          The stepper makes order state clear without extra reading.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Image
            src="/fengcha/checkoutmode.png"
            alt="Checkout with dine-in/take-away at the end"
            width={1200}
            height={800}
            style={{ width: '100%', maxWidth: '900px', borderRadius: '1rem', height: 'auto' }}
          />
        </div>
      </section>

      {/* Accessibility & responsiveness */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Accessibility & Responsiveness</p>
        <h2 style={styles.titleH2}>Readable, tappable, adaptable</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: 1.7 }}>
          <li>Increased contrast on text and iconography; ensured key actions meet AA contrast.</li>
          <li>Touch targets ≥ 44×44pt; generous spacing for category rail and cart controls.</li>
          <li>Layouts accommodate Dynamic Type and smaller devices without truncating primary labels.</li>
        </ul>
      </section>

      {/* Outcome & next steps */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Outcome</p>
        <h2 style={styles.titleH2}>Denser surface area, fewer taps</h2>
        <p style={styles.body}>
          The redesign emphasizes action and comprehension. Users spend less time parsing text and more time ordering.
          Next steps: usability test with 5–7 local customers (menu discovery, PDP options, repeat ordering), then iterate
          based on time-to-add-to-cart and checkout completion metrics.
        </p>
      </section>

      {/* Gallery (swap with your exports) */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Screens</p>
        <h2 style={styles.titleH2}>Before → After</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}>
          <Image
            src="/fengcha/hifibefore.png"
            alt="End-to-end ordering flow after"
            width={1920}
            height={1080}
            style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', height: 'auto' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}>
          <Image
            src="/fengcha/hifiafter.png"
            alt="End-to-end ordering flow after"
            width={1920}
            height={1080}
            style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', height: 'auto' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}>
          <Image
            src="/fengcha/hifiafter1.png"
            alt="End-to-end ordering flow after"
            width={1920}
            height={1080}
            style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', height: 'auto' }}
          />
        </div>
      </section>

      {/* CTA */}
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link href="/projects" legacyBehavior>
          <a className="all-project">View All Projects →</a>
        </Link>
        <style jsx>{`
          .all-project {
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
          .all-project:hover {
            transform: translateY(-3px);
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.25);
          }
        `}</style>
      </div>
    </div>
  );
}
