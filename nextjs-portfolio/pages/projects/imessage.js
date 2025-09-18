// pages/projects/imessage.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';


export default function IMessageProject() {
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
        <title>iMessage Interface Revamp</title>
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
        <h1 style={styles.titleH1}>iMessage Interface Revamp</h1>

        <div style={styles.gridWrap}>
          {/* TLDR + Metadata */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ ...styles.body, fontWeight: 700 }}>Project Overview:</p>
              <p style={styles.body}>
                Our project aimed to identify and address common user errors within Apple&apos;s iMessage app.
                Through conducting interviews with 18 university students, we pinpointed issues including the
                discoverability of recently deleted messages, confusion between dictation and voice memo
                functions, and inconsistent gesture actions. Our redesigned features included improved
                signifiers for the deleted messages, a drop-up menu for the microphone button, and a gear icon
                on the home screen for heightened discoverability. These changes aim to make iMessage
                more intuitive and user-friendly.
              </p>
            </div>
            <div style={{ lineHeight: 2, marginTop: '0.75rem' }}>
              <p style={styles.body}><strong>Client:</strong><br />iMessage Users</p>
              <p style={styles.body}><strong>My Role:</strong><br />UX/UI Design</p>
              <p style={styles.body}><strong>Timeline:</strong><br />March 2024</p>
            </div>
          </div>

          {/* Image */}
          <div style={{ justifySelf: 'start' }}>
            <Image
              src="/imsgthumbnailwide.png"
              alt="iMessage Project"
              width={1300}
              height={1021}
              style={{ width: '100%', maxWidth: '1300px', borderRadius: '1rem', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>The Problem</p>
        <h2 style={styles.titleH2}>Usability challenges surfaced in student testing</h2>
        <p style={styles.body}>
          Our project focused on analyzing user interactions with iMessage among students at the University
          of California San Diego. Despite its popularity, iMessage presented several usability challenges
          among our participants. Given the time constraints for this project, we took a rapid prototyping approach.
          Our project aimed to make iMessage more intuitive and user-friendly, benefitting both Apple and iMessage users.
        </p>
      </section>

      {/* User Research */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>User Research</p>
        <h2 style={styles.titleH2}>Observed patterns from 18 UCSD students</h2>
        <p style={styles.body}>
          To gauge how iMessage users navigated the application, our team observed 18 UCSD students.
          Among these students, we noticed the following patterns:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0rem' }}>
          <Image
            src="/1userresearch.png"
            alt="User research Notes"
            width={800}
            height={500}
            style={{ borderRadius: '1rem', height: 'auto', width: '100%', maxWidth: '800px' }}
          />
        </div>
      </section>

      {/* Goals */}
      <section style={{ ...styles.section, textAlign: 'left' }}>
        <p style={styles.body}>
          Based on these observations, we established two main goals for the redesign:
        </p>
        <ul style={{ listStyleType: 'disc', marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.7', textAlign: 'left' }}>
          <li>Enhance clarity and user understanding of microphone icon.</li>
          <li>Simplify the user interface by replacing confusing icons with more recognizable symbols.</li>
        </ul>
      </section>

      {/* Redesign */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Redesign</p>
        <h2 style={styles.titleH2}>Our redesign decisions were led by the most common usability errors that we observed</h2>
        <p style={styles.body}>
          Each solution was designed to increase discoverability and reduce ambiguity of features in the iMessage app.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0rem', marginTop: '2rem'}}>
          <Image
            src="/imessagedesigndecisions.png"
            alt="iMessage Design Decisions"
            width={1920}
            height={1080}
            style={{ borderRadius: '1rem', height: 'auto', width: '100%', maxWidth: '800px' }}
          />
        </div>
      </section>

      {/* Solution */}
      <section style={{ ...styles.section, textAlign: 'left' }}>
        <p style={styles.sectionLabel}>Solution</p>
        <h2 style={styles.titleH2}>Targeted fixes to reduce confusion</h2>
        {/* Recently Deleted Messages */}
        <h3 style={{ ...styles.calloutH3, marginTop: '2.5rem' }}>Recently Deleted Messages</h3>
        <p style={styles.body}>
          An issue we pinpointed was the difficulty in discovering the “recently deleted messages” feature. Most users (15 out
          of 18) were unaware that the function existed at all, so we redesigned a confirmation screen that would notify users
          about this feature after deleting a message, heightening discoverability and ensuring users are aware deleted messages
          can be restored within 30 days.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.25rem 0 0' }}>
          <Image
            src="/deletemessage.png"
            alt="Confirmation for deleting message"
            width={800}
            height={500}
            style={{ borderRadius: '1rem', height: 'auto', width: '100%', maxWidth: '800px' }}
          />
        </div>
        {/* Microphone Function */}
        <h3 style={styles.calloutH3}>Microphone Function</h3>
        <p style={styles.body}>
          One of the main issues we observed among the users was the confusion between dictation and voice memo functions, both
          represented by a microphone icon. We designed a drop-up menu that appears when the microphone button is
          pressed, allowing users to choose between dictation and sending a voice memo.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}>
          <img
            src="/micbutton.gif"
            alt="Microphone function demo"
            style={{ maxWidth: '360px', width: '100%', borderRadius: '1rem' }}
          />
        </div>

        {/* Conversation Actions */}
        <h3 style={styles.calloutH3}>Conversation Actions</h3>
        <p style={styles.body}>
        Since many users looked for actions through swiping, we added a visible “More” button on swipe
        that links to the same long-press menu, providing multiple consistent pathways.
        </p>


        {/* Message Log Action Sheet */}
        <h3 style={{ ...styles.calloutH3, marginTop: '2.5rem' }}>Message Log Action Sheet</h3>
        <p style={styles.body}>
          We also enhanced the iMessage home screen by replacing the ambiguous “Edit” button with a more recognizable
          settings icon, improving feature discoverability.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.25rem 0 0' }}>
          <Image
            src="/settingsredesign.png"
            alt="Settings redesign image"
            width={800}
            height={500}
            style={{ borderRadius: '1rem', height: 'auto', width: '100%', maxWidth: '800px' }}
          />
        </div>
      </section>
      {/* Reflection & Takeaways */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Reflection &amp; Takeaways</p>
        <h2 style={styles.titleH2}>What I learned</h2>
        <p style={styles.body}>
          While this project was a redesign, it reminded me that even the most familiar apps can hide
          usability pitfalls. Despite being frequent users, most of our participants made errors, which showed
          me the importance to designing for discoverability and not just efficiency. For next steps, I&apos;d want
          to these these prototypes with a larger demographic to see how well our redesign scales amongst an
          audience larger than the student participation pool.
        </p>
      </section>
    </div>
  );
}
