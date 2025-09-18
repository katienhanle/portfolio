// pages/projects/careercrush.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';


export default function CareerCrushProject() {
  // --- Typography + layout tokens borrowed from StepSync style ---
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
      <Head>
        <title>Career Crush: A Swipe-Based Internship Matching App</title>
      </Head>

      {/* Header (matches StepSync style) */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div />
        {(() => {
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

          return (
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              {items.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    position: 'relative',
                    textDecoration: 'none',
                    color: 'white',
                    fontWeight: isActive(href) ? 'bold' : 'normal',
                    fontSize: '1.2rem',
                    paddingBottom: '0.25rem',
                  }}
                  onMouseEnter={(e) => {
                    const underline = document.createElement('div');
                    underline.className = 'underline';
                    e.currentTarget.appendChild(underline);
                  }}
                  onMouseLeave={(e) => {
                    const underline = e.currentTarget.querySelector('.underline');
                    if (underline) e.currentTarget.removeChild(underline);
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          );
        })()}
      </header>


      {/* Title + TL;DR */}
      <section style={{ marginTop: '3.5rem' }}>
        <h1 style={styles.titleH1}>Career Crush: A Swipe-Based Internship Matching App</h1>

        <div style={styles.gridWrap}>
          {/* TLDR + Metadata */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ ...styles.body, fontWeight: 700 }}>Project Overview:</p>
              <p style={styles.body}>
                Career Crush is a mobile internship/job search platform that connects students and recruiters
                through a familiar swipe-based interaction model. The app aims to reduce application fatigue and
                improve engagement by offering a universal profile, messaging features, and a recruiter dashboard.
              </p>
            </div>
            <div style={{ lineHeight: 2, marginTop: '0.75rem' }}>
              <p style={styles.body}><strong>Client:</strong><br />UCSD Students &amp; Recruiters (conceptual)</p>
              <p style={styles.body}><strong>My Role:</strong><br />UX/UI Designer, Researcher</p>
              <p style={styles.body}><strong>Timeline:</strong><br />January 2025</p>
            </div>
          </div>

          {/* Image */}
          <div style={{ justifySelf: 'start' }}>
            <Image
              src="/careercrushthumbnailwide.png"
              alt="Career Crush Project"
              width={1300}
              height={1021}
              style={{ width: '100%', maxWidth: '1300px', borderRadius: '1rem', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/*Introduction */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>The Problem</p>
        <h2 style={styles.titleH2}>Students go through endless applications with a lack of feedback</h2>
        <p style={styles.body}>
          With Career Crush, we wanted to explore a more direct, feedback-friendly way to navigate internships and entry-level jobs.
          The application serves two user groups: job seekers and recruiters, which aims to improve efficiency, usability, and
          engagement across both sides of the marketplace.
        </p>
        {/*add a pic here*/}
      </section>


      {/* Research & Critique of Existing Solutions */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Research &amp; Critique of Existing Solutions</p>
        <h2 style={styles.titleH2}>What isn’t working today</h2>
        {/* Indeed and LinkedIn */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '0rem 0 0' }}>
                  <Image
                    src="/cccomparison.png"
                    alt="Indeed and LinkedIn"
                    width={1600}
                    height={900}
                    style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', height: 'auto' }}
                  />
                </div>

      </section>

      {/*Design Objectives */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Design Objectives</p>
        <h2 style={styles.titleH2}>What we set out to build</h2>
        {/* Design Decisions */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0rem 0 0' }}>
                  <Image
                    src="/ccdesigndecisions1.png"
                    alt="Design Decisions"
                    width={1600}
                    height={900}
                    style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', height: 'auto' }}
                  />
                </div>
      </section>

      {/* Design Process */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Design Process</p>
        <h2 style={styles.titleH2}>From sketches to interactive prototype</h2>
        <p style={styles.body}>
          We moved from low-fidelity sketches to Figma wireframes, then iterated on an interactive prototype. We adopted
          a familiar swipe pattern to make triaging easy and reduce decision fatigue.
        </p>
        {/* Lofi Swipe */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0 0' }}>
                  <Image
                    src="/cclofiswipe.gif"
                    alt="CC Lofi Swipe"
                    width={1600}
                    height={900}
                    style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', height: 'auto' }}
                  />
        </div>

        <p style={styles.calloutH3}>Key Flows</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
          <li><strong>Job seeker:</strong> Discover → Favorite/Skip → Apply → Track status.</li>
          <li><strong>Recruiter:</strong> Post job → Review candidate dashboard → Favorite candidates → Message.</li>
        </ul>
        {/* User Flow */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0 0' }}>
                  <Image
                    src="/ccuserflow.png"
                    alt="CC User Flow"
                    width={1600}
                    height={900}
                    style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', height: 'auto' }}
                  />
        </div>



      </section>

      {/* Prototype Screens */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}> Prototype Screens (Figma)</p>
        <h2 style={styles.titleH2}>Core interfaces</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
          <li><strong>Job Discovery</strong> – Swipe right to favorite, left to skip; quick details on tap.</li>
          <li><strong>Favorites</strong> – Saved jobs/candidates with one-tap apply or message.</li>
          <li><strong>Messages</strong> – Streamlined recruiter–applicant communication.</li>
          <li><strong>Profile/Settings</strong> – Universal application profile and preference controls.</li>
        </ul>
        {/* Lofi */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0 0' }}>
                  <Image
                    src="/cclofi.png"
                    alt="CC Lofi"
                    width={1600}
                    height={900}
                    style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', height: 'auto' }}
                  />
        </div>
      </section>
      {/* Final Design */}
            <section style={styles.section}>
                    <p style={styles.sectionLabel}>Final Design</p>
                    <h2 style={styles.titleH2}>Career Crush: Connecting Applicants & Recruiters!</h2>
                    
                    {/* Image */}
                    <div style={{ justifySelf: 'start', marginTop: '2rem' }}>
                      <Image
                        src="/cchifi1.png"
                        alt="CareerCrush High Fidelity"
                        width={1920}
                        height={800}
                        style={{ width: '100%', maxWidth: '1920px', borderRadius: '1rem', height: 'auto', marginBottom:'2rem' }}
                      />
                    </div>
                    <h2 style={styles.titleH2}>Easy Onboarding and Profile Setup</h2>
                    <p style={styles.body}>
                    Users start by selecting whether they’re a job seeker or recruiter, and create a quick profile
                    through sign-up and job preferences. This step ensures both sides are matched with opportunities
                    that fit their goals from the very start.
                    </p>
                    {/* Image */}
                    <div style={{ justifySelf: 'start', marginTop: '2rem' }}>
                      <Image
                        src="/cchifigif.gif"
                        alt="CareerCrush High Fidelity 2"
                        width={1920}
                        height={800}
                        style={{ width: '100%', maxWidth: '1920px', borderRadius: '1rem', height: 'auto', marginBottom: '2rem'}}
                      />
                    </div>
                    <h2 style={styles.titleH2}>Interest-Based Discovery & Swipe Feature</h2>
                    <p style={styles.body}>
                    Applicants discover roles through a swipe interface that mirrors the familiarity of
                    dating apps, lowering the barrier to entry. Swipe left to pass, swipe right to save,
                    or tap to view more details, creating an engaging yet efficient browsing experience.
                    </p>
                    {/* Image */}
                    <div style={{ justifySelf: 'start', marginTop: '2rem' }}>
                      <Image
                        src="/cchifi3.png"
                        alt="CareerCrush High Fidelity 3"
                        width={1920}
                        height={800}
                        style={{ width: '100%', maxWidth: '1920px', borderRadius: '1rem', height: 'auto', marginBottom: '2rem' }}
                      />
                    </div>
                    <h2 style={styles.titleH2}>Batch Applications with One Profile</h2>
                    <p style={styles.body}>
                    Instead of filling out multiple applications, applicants are able to select multiple
                    favorites and apply using their universal profile. A streamlined application form pulls
                    in resumes and saved answers, cutting redundancy and fatigue while maintaining
                    professionalism in the job-hunting experience.
                    </p>
                  </section>
      {/* Evaluation & Feedback */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}> Evaluation &amp; Feedback</p>
        <h2 style={styles.titleH2}>What worked and what didn’t</h2>

        {/* Design Decisions */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0rem 0 0' }}>
                  <Image
                    src="/ccstrengthweak.png"
                    alt="Strengths and Weaknesses"
                    width={1600}
                    height={900}
                    style={{ width: '100%', maxWidth: '1000px', borderRadius: '1rem', height: 'auto' }}
                  />
        </div>
      </section>

      {/* Reflection & Takeaways */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Reflection &amp; Takeaways</p>
        <h2 style={styles.titleH2}>What I learned</h2>
        <p style={styles.body}>
          Designing Career Crush showed me how to apply heuristic evaluation, design factors, and cognitive directness
          to a real-world problem. Our final prototype addresses key pain points found in existing platforms while
          revealing important gaps, especially feedback loops and recommendation reliability. Staying open to
          iteration, even when the UI looks polished, was the biggest lesson.
        </p>
      </section>
    </div>
  );
}