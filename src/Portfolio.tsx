// Portfolio.tsx
import "./App.css";
import prfoilePic from "./assets/mypfp.webp";
import ProjectCard, { type Project } from "./ProjectCard";
import Reveal from "./Reveal";
import voice from "./assets/voice.png";
import chat from "./assets/chatapp1.png";
import app from "./assets/s-app.jpg";
import Typewriter from "./Typewriter";
import ScrollDownButton from "./ScrollDownButton";
import FlashyText from "./FlashyText";

const projects: Project[] = [
  {
    name: "Voice Music",
    description:
      "Production-deployed music streaming platform, independently extended from an internship build. Cloud-hosted audio delivery via Supabase Storage, with a PostgreSQL (Neon) metadata API and direct URL streaming to avoid server-side buffering.",
    tech: ["React", "Node.js", "PostgreSQL", "Supabase"],
    url: "https://voice-music.vercel.app/",
    imageUrl: voice,
  },
  {
    name: "En Samachara",
    description:
      "Real-time messaging app built on Socket.io for low-latency bidirectional communication. Supabase Storage handles media transmission with automated cleanup on message deletion, backed by a MongoDB Atlas data layer.",
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB Atlas"],
    url: "https://en-samachara.vercel.app/",
    imageUrl: chat,
  },
  {
    name: "Seminar Hall Booking System",
    description:
      "Cross-platform mobile app for real-time slot selection, dynamic scheduling, and role-based access, backed by a scalable ASP.NET + Supabase PostgreSQL API hosted on Render.",
    tech: ["React Native", "ASP.NET", "PostgreSQL"],
    imageUrl: app,
    url: "https://github.com/nandan4747/SeminarHallBookingSystem_android",
  },
  {
    name: "Jackie Chatbot",
    description:
      "AI conversational interface using Spring Boot as a secure middleware layer to proxy Gemini API calls and keep the API key off the client, with a React frontend supporting streaming responses.",
    tech: ["React", "Spring Boot", "Google Gemini API"],
  },
];

const skillGroups = [
  { label: "Languages", items: ["JavaScript", "Java", "C#"] },
  {
    label: "Frameworks & Libraries",
    items: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "ASP.NET Core",
      "EF Core",
      "React",
      "React Native",
      "JavaFX",
      "Android",
    ],
  },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"] },
  {
    label: "Deployment & Tools",
    items: ["Git", "GitHub", "Postman", "Vercel", "Netlify", "Render", "Neon"],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "RNS First Grade College, Bengaluru",
    meta: "2023 – 2026 · CGPA 8.15",
  },
  {
    degree: "12th / PUC — Commerce",
    school: "RNS Pre-University, Bengaluru",
    meta: "2023 · 80.16%",
  },
  {
    degree: "10th / SSLC",
    school: "Sri Adichunchanagiri English Medium School",
    meta: "2021 · 70%",
  },
];

export default function Portfolio() {
  return (
    <div className="bg">
      <section className="hero" id="hero">
        <p className="hero-line">
          <Typewriter
            text="I write code. Sometimes it even runs on the first try."
            flashyMode={false}
          />
        </p>
        <p>
          And hey there, I'm{" "}
          <Typewriter text="Nandan" flashyMode={true} flashyInterval={180} />
        </p>
        <ScrollDownButton targetId="" />
        to know more.
      </section>

      <section className="aboutme" id="about">
        <Reveal className="aboutme-inner">
          <img className="pfp" src={prfoilePic} alt="profile picture" />
          <div className="aboutme-info">
            <p className="section-label">About me</p>
            <p className="my-name">
              <FlashyText text="NANDAN KUMAR B K" interval={280} />
            </p>
            <p className="aboutme-summary">
              Full-Stack Developer and BCA graduate with hands-on experience in
              Node.js, Java Spring Boot and React. Delivered cloud-deployed,
              production-grade applications, Comfortable working across the full
              stack.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section" id="projects">
        <Reveal>
          <p className="section-label">
            <Typewriter text="Projects" />
          </p>
          <p className="section-title">Selected work</p>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.name} {...p} />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section" id="skills">
        <Reveal>
          <p className="section-label">
            <Typewriter text="Skills" />
          </p>
          <p className="section-title">Technical toolkit</p>
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <p className="skill-group-label">{group.label}</p>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section" id="education">
        <Reveal>
          <p className="section-label">
            <Typewriter text="Education" />
          </p>
          <p className="section-title">Academic background</p>
          <div className="education-list">
            {education.map((e) => (
              <div className="education-item" key={e.degree}>
                <p className="education-degree">{e.degree}</p>
                <p className="education-school">{e.school}</p>
                <p className="education-meta">{e.meta}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section contact-section" id="contact">
        <Reveal>
          <p className="section-label">
            {" "}
            <Typewriter text="Contact" />
          </p>
          <p className="section-title">Get in touch</p>
          <ul className="contacts-list">
            <li>
              <a href="mailto:nk6423719@gmail.com">nk6423719@gmail.com</a>
            </li>
            <li>
              <a href="tel:+918431552106">+91 8431552106</a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/nandan-kumar-0bb140327"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nandan4747"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
