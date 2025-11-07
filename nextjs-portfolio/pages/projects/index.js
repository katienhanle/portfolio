import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import GlassNav from '@/components/GlassNav'


export default function ProjectsIndexPage() {
  // ✅ Hooks must be inside the component
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
    <div style={{ background: '#0D0D0D', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <GlassNav />
      <div style={{ height: '5rem' }} /> {/* spacer below fixed nav */}

      {/* Title */}
      <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '3.5rem' }}>
        Projects
      </h1>

      {/* Project Grid */}
      <section style={{ padding: '4rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
          }}
        >
          {/* Feng Cha Project */}
          <Link href="/projects/fengcha" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '1rem',
                padding: '2rem',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(14px) saturate(160%)',
                WebkitBackdropFilter: 'blur(14px) saturate(160%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.boxShadow =
                  '0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow =
                  '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ textAlign: 'left', width: '100%' }}>
                <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700 }}>
                Feng Cha App UX Cleanup
                </h2>
                <p style={{ color: '#9CA3AF', margin: '0.25rem 0', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  UI/UX Design · Prototyping · Mobile Design
                </p>
                <p style={{ margin: 0, marginBottom: '1rem', fontSize: '0.95rem', lineHeight: 1.6, color: '#E0E0E0' }}>
                Streamlined the Feng Cha's store and menu selection flow to reduce friction and help users order faster.
                </p>
              </div>
              <Image
                src="/fengcha/thumbnailwide1.png"
                alt="Feng Cha UX"
                width={600}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
              />
            </div>
          </Link>
          {/* Demon Slayer Quiz — Marketing Design */}
          <Link href="/projects/demonslayer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '1rem',
                padding: '2rem',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(14px) saturate(160%)',
                WebkitBackdropFilter: 'blur(14px) saturate(160%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.boxShadow =
                  '0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow =
                  '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ textAlign: 'left', width: '100%' }}>
                <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700 }}>
                  Demon Slayer Personality Quiz
                </h2>
                <p style={{ color: '#9CA3AF', margin: '0.25rem 0', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  Marketing Design · Visual Design · Content
                </p>
                <p style={{ margin: 0, marginBottom: '1rem', fontSize: '0.95rem', lineHeight: 1.6, color: '#E0E0E0' }}>
                  A share-ready fan experience with 32×32 pixel sprites, reveal animations, and result cards built for Stories.
                </p>
              </div>
              <Image
                src="/ds/dsquizthumbnailwide4.png"
                alt="Demon Slayer Quiz — Marketing"
                width={600}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
              />
            </div>
          </Link>

          {/* StepSync */}
          <Link href="/projects/stepsync" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '1rem',
              padding: '2rem',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(14px) saturate(160%)',
              WebkitBackdropFilter: 'blur(14px) saturate(160%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.boxShadow =
                '0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >

              <div style={{ textAlign: 'left', width: '100%' }}>
                <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700 }}>StepSync</h2>
                <p
                  style={{
                    color: '#9CA3AF',
                    margin: '0.25rem 0',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                  }}
                >
                  UX/UI Design · Branding · Product Strategy
                </p>
                <p
                  style={{
                    margin: 0,
                    marginBottom: '1rem',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#E0E0E0',
                  }}
                >
                  A dance portfolio and verification platform that helps dancers showcase videos, track auditions, and confirm team credentials.
                </p>
              </div>
              <Image
                src="/ssthumbnailwide.png"
                alt="StepSync Project"
                width={600}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
              />
            </div>
          </Link>

          {/* Career Crush */}
          <Link href="/projects/careercrush" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '1rem',
              padding: '2rem',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(14px) saturate(160%)',
              WebkitBackdropFilter: 'blur(14px) saturate(160%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.boxShadow =
                '0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >

              <div style={{ textAlign: 'left', width: '100%' }}>
                <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700 }}>Career Crush</h2>
                <p
                  style={{
                    color: '#9CA3AF',
                    margin: '0.25rem 0',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                  }}
                >
                  UX Research · Product Design
                </p>
                <p
                  style={{
                    margin: 0,
                    marginBottom: '1rem',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#E0E0E0',
                  }}
                >
                  A swipe-based internship/job platform that simplifies the application process for students and recruiters.
                </p>
              </div>
              <Image
                src="/careercrushthumbnailwide.png"
                alt="Career Crush Project"
                width={600}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
              />
            </div>
          </Link>

          {/* iMessage */}
          <Link href="/projects/imessage" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '1rem',
              padding: '2rem',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(14px) saturate(160%)',
              WebkitBackdropFilter: 'blur(14px) saturate(160%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.boxShadow =
                '0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >

              <div style={{ textAlign: 'left', width: '100%' }}>
                <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700 }}>
                  iMessage Interface Revamp
                </h2>
                <p
                  style={{
                    color: '#9CA3AF',
                    margin: '0.25rem 0',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                  }}
                >
                  UX Research · App Design
                </p>
                <p
                  style={{
                    margin: 0,
                    marginBottom: '1rem',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#E0E0E0',
                  }}
                >
                  Redesigned iMessage to improve feature discoverability and create a more intuitive user experience.
                </p>
              </div>
              <Image
                src="/imsgthumbnailwide.png"
                alt="iMessage Project"
                width={600}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
              />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
