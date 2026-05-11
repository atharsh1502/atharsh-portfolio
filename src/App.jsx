import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Gauge,
  GraduationCap,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  Zap,
} from 'lucide-react'
import './App.css'

const profile = {
  name: 'Atharsh G',
  title: 'Java Full Stack Developer',
  company: 'Ford Motor Company',
  location: 'Chennai, Tamil Nadu, India',
  email: 'atharsh.g15022003@gmail.com',
  github: 'https://github.com/atharsh1502',
  linkedin: 'https://www.linkedin.com/in/atharshg/',
  leetcode: 'https://leetcode.com/u/atharshg/',
  hackerrank: 'https://www.hackerrank.com/profile/atharsh_1502',
}

const stats = [
  { value: '10K+', label: 'requests per day', icon: Gauge },
  { value: '20+', label: 'microservice pipelines', icon: Boxes },
  { value: '3K+', label: 'security fixes', icon: ShieldCheck },
  { value: '40%', label: 'faster deployments', icon: Zap },
  { value: '45%', label: 'better maintainability', icon: Rocket },
  { value: '30+', label: 'secured APIs', icon: ShieldCheck },
  { value: '200+', label: 'DSA problems solved', icon: BrainCircuit },
  { value: '$1M', label: 'automation savings impact', icon: Trophy },
]

const missions = [
  {
    id: 'ford-dev',
    role: 'Software Developer',
    org: 'Ford Global Technology & Business Center',
    period: 'Sep 2025 - Present',
    xp: 9400,
    icon: Car,
    highlights: [
      'Rewriting WAS Liberty applications into Spring Boot, Angular, and microservice architecture.',
      'Designed scalable Spring Boot and Apache Kafka microservices for asynchronous distributed communication.',
      'Migrated legacy monolithic applications to microservices architecture, improving scalability and maintainability by 45%.',
      'Built a vehicle build-and-delivery dashboard that reduced lookup and calculation effort by 38%.',
      'Engineered a plant calendar platform that lowered manual search and work time by 70%.',
      'Driving production launches, test coverage, vulnerability fixes, and tech refresh work.',
      'Debugged production issues through log analysis, root cause analysis, and performance profiling.',
    ],
  },
  {
    id: 'ford-junior',
    role: 'Junior Software Developer',
    org: 'Ford Global Technology & Business Center',
    period: 'Jul 2024 - Sep 2025',
    xp: 8200,
    icon: Rocket,
    highlights: [
      'Improved search speed by 20% with SQL optimization and JVM tuning.',
      'Built scheduling features that raised efficiency by 50% for 3 business units.',
      'Deployed 16+ reusable microservices aligned with SOLID principles.',
      'Integrated OAuth 2.0 and RBAC across services for stronger compliance.',
      'Optimized database queries and backend workflows, improving system performance and operational efficiency by 30%.',
    ],
  },
  {
    id: 'ford-intern',
    role: 'Software Developer Intern',
    org: 'Ford Global Technology & Business Center',
    period: 'Jan 2024 - Jul 2024',
    xp: 6100,
    icon: TerminalSquare,
    highlights: [
      'Built a fundraising platform that reduced transaction errors by 35%.',
      'Fixed 3,000+ security issues using SonarQube, Checkmarx, and FOSSA.',
      'Resolved vulnerabilities across 30+ APIs using Checkmarx, SonarQube, FOSSA, 42Crunch, Cycode, FCR, and Quay.',
      'Automated CI/CD with GitHub Actions, reducing deployment delays by 30%.',
      'Created Kafka-driven services for real-time dashboards serving 500+ concurrent users.',
      'Applied validation, transactional integrity, and structured error handling to strengthen backend reliability.',
    ],
  },
  {
    id: 'nullclass',
    role: 'MERN Stack Developer Intern',
    org: 'NULL CLASS',
    period: 'Aug 2023 - Nov 2023',
    xp: 4200,
    icon: Code2,
    highlights: [
      'Modernized a StackOverflow clone and weather app using the MERN stack.',
      'Improved load time by 20% through UI and API enhancements.',
      'Integrated Google APIs and MongoDB for real-time weather data with 99.9% uptime.',
    ],
  },
]

const skillGroups = [
  {
    name: 'Backend Core',
    icon: Cpu,
    skills: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices', 'Apache Kafka', 'gRPC', 'JDBC'],
    level: 94,
  },
  {
    name: 'Frontend UI',
    icon: Sparkles,
    skills: ['React.js', 'Angular', 'TypeScript', 'JavaScript ES6+', 'NgRx'],
    level: 88,
  },
  {
    name: 'Data Layer',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'IBM DB2', 'Cassandra'],
    level: 84,
  },
  {
    name: 'Cloud Ops',
    icon: Rocket,
    skills: ['GCP', 'OpenShift', 'Docker', 'Kubernetes', 'Jenkins', 'Tekton', 'GitHub Actions'],
    level: 86,
  },
  {
    name: 'Quality Shield',
    icon: ShieldCheck,
    skills: ['Unit Testing', 'Integration Testing', 'E2E Testing', 'SonarQube', 'Checkmarx', 'FOSSA', '42Crunch', 'Cycode'],
    level: 89,
  },
  {
    name: 'Architecture',
    icon: BrainCircuit,
    skills: ['System Design', 'OOP', 'DSA', 'SOLID', 'Design Patterns', 'Fault Tolerance', 'Event-Driven Architecture'],
    level: 87,
  },
  {
    name: 'CS Fundamentals',
    icon: TerminalSquare,
    skills: ['Operating Systems', 'Computer Networks', 'TCP/IP', 'HTTP/HTTPS', 'Time Complexity', 'Space Complexity'],
    level: 85,
  },
  {
    name: 'Debug Mode',
    icon: Gauge,
    skills: ['Root Cause Analysis', 'Log Analysis', 'Performance Profiling', 'Query Optimization', 'Secure Coding'],
    level: 88,
  },
]

const projects = [
  {
    name: 'TinyURL System',
    type: 'System Design',
    power: '10K+ requests/day',
    stack: ['Redis', 'DB Sharding', 'Java'],
    detail: 'URL shortener architecture tuned for scale, key generation, cache hits, and shard-aware persistence.',
  },
  {
    name: 'BookMyShow Clone',
    type: 'Real-Time Ticketing',
    power: '1K+ concurrent users',
    stack: ['Kafka', 'Redis', 'Spring Boot'],
    detail: 'Seat locking, booking flow, and event-driven updates designed for high-concurrency traffic.',
  },
  {
    name: 'E-Commerce App',
    type: 'Full Stack Product',
    power: '300+ products',
    stack: ['Spring Boot', 'Angular', 'CI/CD'],
    detail: 'Catalog, cart, deployment pipeline, and admin-ready structure for an end-to-end shopping system.',
  },
  {
    name: 'News Feed System',
    type: 'Scalable Feed',
    power: 'Sub-100ms latency',
    stack: ['Kafka', 'Cassandra', 'Caching'],
    detail: 'Twitter and Instagram style feed architecture focused on ranking, fanout, and low-latency delivery.',
  },
  {
    name: 'Patient Management System',
    type: 'Microservices Architecture',
    power: 'REST + gRPC + Kafka',
    stack: ['Spring Boot', 'Kafka', 'Docker', 'API Gateway'],
    detail: 'Distributed healthcare platform with API Gateway routing, authentication, asynchronous workflows, design patterns, and integration testing.',
  },
]

const awards = [
  'Star of the Quarter: Q3 2024, Q4 2024, and Q1 2025',
  'Performer of the Quarter at Ford: Q4 2024 and Q1 2025',
  'Coordinated automation across 32 applications, reducing manual effort by 60%',
  'Reduced production issues and contributed to $1M cost savings through automation and system improvements',
  'President of IT at Velammal Engineering College, leading a symposium with 700+ participants',
]

const certifications = [
  'System Design LLD to HLD',
  'Git and GitHub',
  'JavaScript',
  'Application Development using React Native',
]

const problemSolving = [
  'Solved 200+ DSA problems across arrays, trees, graphs, and dynamic programming.',
  'Strong command of algorithmic problem solving, time complexity, and space complexity optimization.',
  'Practice profiles active on LeetCode and HackerRank.',
]

function App() {
  const [activeMissionId, setActiveMissionId] = useState(missions[0].id)
  const activeMission = useMemo(
    () => missions.find((mission) => mission.id === activeMissionId) ?? missions[0],
    [activeMissionId],
  )

  return (
    <main>
      <nav className="topbar" aria-label="Portfolio navigation">
        <a className="brand" href="#hero" aria-label="Atharsh portfolio home">
          <span className="brand-mark">AG</span>
          <span>
            <strong>{profile.name}</strong>
            <small>Full Stack Quest Log</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#missions">Missions</a>
          <a href="#skills">Loadout</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <BadgeCheck size={16} />
              Active at {profile.company}
            </p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-text">
              I build Spring Boot, Kafka, Angular, and React systems that turn business-heavy workflows into fast,
              measurable, production-ready applications with distributed-systems reliability.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                View Builds <ArrowUpRight size={18} />
              </a>
              <a className="secondary-action" href={`mailto:${profile.email}`}>
                <Mail size={18} /> Start Co-op
              </a>
            </div>
          </div>

          <div className="command-deck" aria-label="Atharsh developer status panel">
            <div className="deck-header">
              <span>PLAYER PROFILE</span>
              <strong>LVL 24</strong>
            </div>
            <div className="avatar-orbit">
              <div className="avatar-core">
                <Code2 size={46} />
                <span>JAVA</span>
              </div>
              <span className="orbit-dot dot-one" />
              <span className="orbit-dot dot-two" />
              <span className="orbit-dot dot-three" />
            </div>
            <div className="deck-readout">
              <p>{profile.title}</p>
              <span>{profile.location}</span>
            </div>
            <div className="health-row">
              <span>Build Velocity</span>
              <div className="health-bar"><i style={{ width: '91%' }} /></div>
            </div>
            <div className="health-row">
              <span>Security Armor</span>
              <div className="health-bar"><i style={{ width: '89%' }} /></div>
            </div>
          </div>
        </div>

        <div className="stat-ribbon" aria-label="Portfolio metrics">
          {stats.map(({ value, label, icon: Icon }) => (
            <div className="stat-cell" key={label}>
              <Icon size={20} />
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-band missions-band" id="missions">
        <div className="section-heading">
          <p className="eyebrow">
            <BriefcaseBusiness size={16} />
            Experience Campaign
          </p>
          <h2>Ford missions and production wins</h2>
        </div>

        <div className="mission-layout">
          <div className="mission-map" aria-label="Experience timeline">
            {missions.map((mission) => {
              const Icon = mission.icon
              const isActive = mission.id === activeMission.id

              return (
                <button
                  className={`mission-node ${isActive ? 'active' : ''}`}
                  key={mission.id}
                  type="button"
                  onClick={() => setActiveMissionId(mission.id)}
                >
                  <Icon size={22} />
                  <span>{mission.role}</span>
                  <small>{mission.period}</small>
                </button>
              )
            })}
          </div>

          <article className="mission-card">
            <div>
              <p className="mission-period">{activeMission.period}</p>
              <h3>{activeMission.role}</h3>
              <p className="mission-org">{activeMission.org}</p>
            </div>
            <div className="xp-chip">{activeMission.xp.toLocaleString()} XP</div>
            <ul>
              {activeMission.highlights.map((highlight) => (
                <li key={highlight}>
                  <CheckCircle2 size={18} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-band skills-band" id="skills">
        <div className="section-heading">
          <p className="eyebrow">
            <Cpu size={16} />
            Skill Loadout
          </p>
          <h2>Backend power, UI speed, and DevOps discipline</h2>
        </div>

        <div className="skill-grid">
          {skillGroups.map(({ name, icon: Icon, skills, level }) => (
            <article className="skill-card" key={name}>
              <div className="skill-top">
                <Icon size={24} />
                <strong>{name}</strong>
                <span>{level}</span>
              </div>
              <div className="skill-meter" aria-label={`${name} level ${level}`}>
                <i style={{ width: `${level}%` }} />
              </div>
              <div className="tag-cloud">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band projects-band" id="projects">
        <div className="section-heading">
          <p className="eyebrow">
            <TerminalSquare size={16} />
            Build Arena
          </p>
          <h2>Projects with scale baked in</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-index">0{index + 1}</div>
              <p>{project.type}</p>
              <h3>{project.name}</h3>
              <strong>{project.power}</strong>
              <span>{project.detail}</span>
              <div className="stack-row">
                {project.stack.map((item) => (
                  <em key={item}>{item}</em>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band proof-band">
        <div className="proof-column">
          <p className="eyebrow">
            <Trophy size={16} />
            Achievements
          </p>
          <h2>Recognition and leadership unlocks</h2>
        </div>
        <div className="proof-list">
          {awards.map((award) => (
            <div className="proof-item" key={award}>
              <Award size={20} />
              <span>{award}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-band problem-band">
        <div className="section-heading">
          <p className="eyebrow">
            <BrainCircuit size={16} />
            Problem Solving
          </p>
          <h2>Algorithm practice and CS fundamentals</h2>
        </div>
        <div className="problem-grid">
          {problemSolving.map((item) => (
            <div className="problem-item" key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-band education-band">
        <div className="education-panel">
          <GraduationCap size={28} />
          <div>
            <p className="eyebrow">Education</p>
            <h2>Velammal Engineering College</h2>
            <span>B.Tech Information Technology, Anna University, 2020 - 2024</span>
            <span className="education-score">CGPA listed across resumes: 9.02 / 10 and 9.05 / 10</span>
          </div>
        </div>
        <div className="cert-panel">
          <CalendarDays size={28} />
          <div>
            <p className="eyebrow">Certifications</p>
            <h2>Continuous upgrades</h2>
            <div className="cert-list">
              {certifications.map((certification) => (
                <span key={certification}>{certification}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div>
          <p className="eyebrow">
            <MapPin size={16} />
            {profile.location}
          </p>
          <h2>Ready for the next production quest.</h2>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} /> Email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Code2 size={18} /> GitHub <ExternalLink size={15} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={18} /> LinkedIn <ChevronRight size={16} />
          </a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer">
            <BrainCircuit size={18} /> LeetCode <ExternalLink size={15} />
          </a>
          <a href={profile.hackerrank} target="_blank" rel="noreferrer">
            <TerminalSquare size={18} /> HackerRank <ExternalLink size={15} />
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
