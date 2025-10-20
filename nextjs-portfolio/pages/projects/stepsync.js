// pages/projects/stepsync.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import GlassNav from '@/components/GlassNav';

export default function StepSyncProject() {
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
        fontSize: '1.25rem',
        fontWeight: 600,
        marginTop: '2rem',
        marginBottom: '1rem',
        color: '#E0E0E0',
      },
      quote: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '0.75rem',
        padding: '1.25rem 1.5rem',
        margin: '1.5rem 0 0',
        fontStyle: 'italic',
        fontSize: '1.05rem',
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
        <Head><title>StepSync Project</title></Head>
        <GlassNav/>
        <div style={{ height: '5rem' }} /> 

      {/* Title Section */}
      <section style={{ marginTop: '2.5rem' }}>
        <h1 style={styles.titleH1}>StepSync: Dance Portfolio & Audition Tracking App</h1>

        <div style={styles.gridWrap}>
          {/* TLDR + Metadata */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={styles.body}><strong>Project Overview:</strong></p>
              <p style={styles.body}>
              Over the course of two months, I designed StepSync, an independent UX/UI project aimed at addressing
              a major gap in the dance community: the absence of a credible, centralized platform for dancers.
              As the sole designer, I drew from my personal experience as a performer and dance lead to guide the
              project from discovery to concept. Through community interviews, affinity mapping, and iterative
              prototyping, I envisioned a mobile-first platform where dancers can build portfolios, track auditions,
              and receive team-verified credentials.
              </p>
            </div>
            <div style={{ lineHeight: 2, marginTop: '0.75rem' }}>
              <p style={styles.body}><strong>Client:</strong><br />Independent / Dancer and Dance Team Community</p>
              <p style={styles.body}><strong>My Role:</strong><br />UX/UI Design · Branding · Product Strategy</p>
              <p style={styles.body}><strong>Timeline:</strong><br />Summer 2025</p>
            </div>
          </div>

          {/* Image */}
          <div style={{ justifySelf: 'start' }}>
            <Image
              src="/stepsyncthumbnail.png"
              alt="StepSync Project"
              width={972}
              height={1021}
              style={{ width: '100%', maxWidth: '900', borderRadius: '1rem', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>The Problem</p>
        <h2 style={styles.titleH2}>A creative community without a credible home for portfolios</h2>

        <p style={styles.body}>
          The dance community, especially teams, lacks a professional platform for portfolio-building, credentialing,
          and audition tracking. This limits opportunities for casting, networking, and showcasing their growth as a dancer.
          Dancers rely on scattered tools (Instagram, Google Drive, or DMs) that don’t present their resume and credits cohesively.
        </p>
        <p style={styles.body}>
          Inspired by conversations with peers and personal challenges as a dance team organizer,
          I set out to design a platform that would bridge this gap and empower dancers to own their narrative.
        </p>

        {/* How Might We */}
        <div style={styles.quote}>
          How might we give dancers a credible space to showcase and verify their skills?
        </div>

      </section>

      {/* Community Insights */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Community Insights</p>
        <h2 style={styles.titleH2}>The struggle for those seeking a dance profession</h2>

        <p style={{ ...styles.body, marginTop: 0 }}>
          <strong>I interviewed professional dancers in the LA dance community.</strong>
        </p>
        <p style={styles.body}>
          Through affinity mapping my research, I learned that the dance community struggles across
          three disconnected needs: showcasing portfolios, verifying team affiliations, and tracking auditions.
          All of these currently exist in scattered, unreliable platforms.
        </p>

        {/* Affinity map */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.75rem 0 0' }}>
          <Image
            src="/redssaffinitymapping.png"
            alt="SS Affinity Map"
            width={1600}
            height={900}
            style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', height: 'auto' }}
          />
        </div>
      </section>

      {/* User Research / Goals */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>User Research</p>
        <h2 style={styles.titleH2}>Clarify value and create credible visibility</h2>

        <p style={{ ...styles.body, marginTop: 0 }}>
          <strong>Social media doesn&apos;t provide visibility for professionals seeking opportunities.</strong>
        </p>
        <p style={styles.body}>
          I conducted interviews and collected stories from dancers across different college and
          competitive teams. Their anecdotes revealed that while social media offers visibility,
          it lacks structure, trust, and verification which created a sense of uncertainty with how
          dancers present themselves to recruiters and teams.
        </p>

        {/* Quote Block */}
        <div style={styles.quote}>
          “Posting my dance videos onto Instagram doesn&apos;t get as many views since it&apos;s a
          competitive performance, and the dance videos that usually go viral aren&apos;t professional
          choreographies. My profile isn&apos;t as visible to tour managers or other gig recruiters.”
        </div>

        {/* Issues statement */}
        <h3 style={styles.calloutH3}>This frustration emerged from three underlying issues:</h3>

        {/* Issues image */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.25rem 0 0' }}>
          <Image
            src="/redssissues.png"
            alt="SS Issues"
            width={1600}
            height={900}
            style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', height: 'auto' }}
          />
        </div>
      </section>

      {/* Ideation */}
      <section style={styles.section}>
              <p style={styles.sectionLabel}>Ideation</p>
              <h2 style={styles.titleH2}>I leveraged these points to guide my design decisions</h2>

              <p style={{ ...styles.body, marginTop: 0 }}>
                <strong>These issues became targeted solutions that would make StepSync
                  visibly different to dancers.
                </strong>
              </p>
              {/* Image */}
              <div style={{ justifySelf: 'start', marginTop:'2rem' }}>
                <Image
                  src="/redssdesigndecisions.png"
                  alt="StepSync Design Decisions"
                  width={1920}
                  height={1080}
                  style={{ width: '100%', maxWidth: '1920px', borderRadius: '1rem', height: 'auto', marginBottom: '3.5rem' }}
                />
              </div>

              <h2 style={styles.titleH2}>After establishing content priority, I structured the user flow</h2>
              
              <p style={styles.body}>
              As StepSync is a new concept, I wanted to identify the features that were essential to solving
              these pain points in order to translate them into clear and intuitive flows. I prioritized
              credibility, visibility, and growth opportunities. During my design process, I wanted to
              prioritize some key decisions:
              </p>
              <ul style={{ listStyleType: 'disc', marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.7', textAlign: 'left' }}>
                  <li>Centralized/Standardized Profiles: A single place for dancers to upload their videos and credits, reducing scattered platforms.</li>
                  <li>Verification Flow: A system for teams to verify experience and affiliations, heightening credibility.</li>
                  <li>Audition Tracking: Status tags and notifications to help dancers manage their opportunities.</li>
                  <li>Inclusive Design: Accessible layouts and color palettes to make sure dancers with different needs
                    are included (readable typography, colorblind-friendly contrasts, etc.)</li>
                  <li>Simplify the user interface by replacing confusing icons with more recognizable symbols.</li>
              </ul>
              <p> </p>
              {/* Image */}
              <div style={{ justifySelf: 'start', marginTop: '2rem' }}>
                <Image
                  src="/ssreduserflow.png"
                  alt="StepSync User Flow"
                  width={1920}
                  height={960}
                  style={{ width: '100%', maxWidth: '1920px', borderRadius: '1rem', height: 'auto' }}
                />
              </div>
            </section>
      {/* Wireframing */}
      <section style={styles.section}>
              <p style={styles.sectionLabel}>Wireframing</p>
              <h2 style={styles.titleH2}>Sketched pages and built prototypes to test my ideas</h2>
              <p style={styles.body}>
              To explore how dancers, choreographers, and managers might interact with StepSync., I
              sketched and tried different prototypes. These wireframes focused on showcasing
              credibility, reducing scattered tools, and creating clear paths for auditions
              and verification. Because dancers and organizers primarily share and consume
              media on mobile, StepSync was designed with a mobile-first approach.


              </p>
              {/* Image */}
              <div style={{ justifySelf: 'start', marginTop: '2rem' }}>
                <Image
                  src="/redsswireframe1.png"
                  alt="StepSync Wireframe"
                  width={1920}
                  height={800}
                  style={{ width: '100%', maxWidth: '1920px', borderRadius: '1rem', height: 'auto' }}
                />
              </div>
             


            </section>
      {/* Iteration */}
      <section style={styles.section}>
              <p style={styles.sectionLabel}>Iteration</p>
              <h2 style={styles.titleH2}>Experimenting with page structures</h2>
              <p style={styles.body}>
              I developed low-fidelity prototypes to explore different approaches to the layout of StepSync.
              </p>
              {/* Image */}
              <div style={{ justifySelf: 'start', marginTop: '2rem' }}>
                <Image
                  src="/sslofi.png"
                  alt="StepSync Low Fidelity"
                  width={1920}
                  height={800}
                  style={{ width: '100%', maxWidth: '1920px', borderRadius: '1rem', height: 'auto' }}
                />
              </div>
            </section>
      {/* Final Design */}
      <section style={styles.section}>
              <p style={styles.sectionLabel}>Final Design</p>
              <h2 style={styles.titleH2}>StepSync: Dance Progress and Auditions Localized!</h2>
              {/* Image */}
              <div style={{ justifySelf: 'start', marginTop: '2rem' }}>
                <Image
                  src="/sshifi1.png"
                  alt="StepSync Low Fidelity"
                  width={1920}
                  height={800}
                  style={{ width: '100%', maxWidth: '1920px', borderRadius: '1rem', height: 'auto' }}
                />
              </div>
            </section>
      <section style={styles.section}>
              <h2 style={styles.titleH2}>Personalized Experience from Day One</h2>
              <p style={styles.body}>
              After a quick sign-up, dancers select their goals, availability, and interests.
              This powers a tailored feed from audition opportunities to community events, ensuring
              that every dancer immediately sees content relevant to their career path and aspirations.
              </p>
              <div style={{ justifySelf: 'start', marginTop: '2rem' }}>
                <Image
                  src="/sshifi2.png"
                  alt="StepSync Low Fidelity2"
                  width={1920}
                  height={800}
                  style={{ width: '100%', maxWidth: '1920px', borderRadius: '1rem', height: 'auto' }}
                />
              </div>
      </section>
      {/* Reflection */}
      <section style={styles.section}>
              <p style={styles.sectionLabel}>Impact and Takeaways</p>
              <h2 style={styles.titleH2}>Two passions overlapped for me in this project.</h2>
              <p style={styles.body}>
              Working on this project, with it relating to one of the biggest parts of my life, helped me
              with my design decisions, especially since I had first-hand experience being the user
              in these scenarios.
              </p>
              <p style={styles.body}>
              This project became my first polished end-to-end prototype, but also reminded me that
              no design is ever “finished.” While the final version feels cohesive, it still has
              areas for improvement, from refining audition flows to simplifying profile edits.
              Acknowledging these flaws keeps me open-minded as a UX designer and motivates me
              to keep iterating.
              </p>
              
            </section>
    {/* Next Project CTA */}
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'center',
          }}
        >
          <a
            href="/projects/careercrush"
            className="next-project"
          >
            View Next Project →
          </a>

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
