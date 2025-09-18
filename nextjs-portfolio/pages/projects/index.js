import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
          {/* StepSync */}
          <Link href="/projects/stepsync" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
