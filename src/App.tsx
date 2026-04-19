import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  BarChart, 
  Cpu, 
  Database,
  Briefcase,
  Trophy,
  User,
  MessageSquare,
  FileText
} from 'lucide-react';
import { Scene3D } from './components/Scene3D';
import { cn } from './lib/utils';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass flex items-center gap-8 px-8 py-3 rounded-full text-sm font-medium">
        <a href="#about" className="hover:text-accent transition-colors">About</a>
        <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
        <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
        <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
        <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
      </div>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-24">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-6 mb-6"
    >
      <div className="h-px w-16 bg-accent opacity-30" />
      <span className="text-accent font-mono text-xs uppercase tracking-[0.3em] font-medium">{subtitle}</span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className="text-6xl md:text-8xl font-serif leading-[1.1] tracking-tight"
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative overflow-x-hidden bg-bg-dark selection:bg-accent/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[110vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <Scene3D />
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 font-mono text-[10px] tracking-[0.5em] text-accent uppercase opacity-60"
          >
            Data Analyst & AI Engineer
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[12vw] md:text-[8vw] font-serif leading-[0.9] tracking-tighter mb-12"
          >
            HIMANSHU <br />
            <span className="font-serif-italic bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent/50">KUMBHAVAT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-white/40 max-w-xl mb-16 font-light leading-relaxed tracking-wide"
          >
            Orchestrating raw data into strategic intelligence. <br />
            Engineering the future of autonomous systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            <a href="#projects" className="group flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase transition-all hover:text-accent">
              Explore Portfolio
              <div className="w-10 h-px bg-white/20 group-hover:bg-accent group-hover:w-16 transition-all" />
            </a>
            <a href="#contact" className="px-10 py-4 glass rounded-full text-[10px] font-mono tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all">
              Initiate Contact
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-48 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 relative group">
            <motion.div
              initial={{ opacity: 0, filter: "grayscale(1)" }}
              whileInView={{ opacity: 1, filter: "grayscale(0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="aspect-[3/4] overflow-hidden rounded-2xl luxury-border relative"
            >
              <img 
                src="Himanshu-1.jpeg"
                alt="Himanshu Kumbhavat" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('.jpg')) {
                    target.src = 'Himanshu-1.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-40" />
            </motion.div>
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden lg:block">
              <span className="font-serif-italic text-[10rem] text-accent/5 pointer-events-none select-none">Himanshu</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <SectionHeader title="THE PHILOSOPHY" subtitle="Profile" />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <p className="text-3xl font-serif text-white/90 leading-[1.3] font-light italic">
                "Data is the new oil, but intelligence is the refinery."
              </p>
              <p className="text-lg text-white/50 leading-loose font-light">
                As a Bachelor of Computer Applications (BCA) specialist, I am dedicated to bridging the gap between raw datasets and business strategy. My core expertise lies in high-performance Python engineering, predictive modeling, and sophisticated data visualization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <div className="space-y-4">
                  <h4 className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase">Core Mission</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-light">Architecting scalable AI solutions that transform complex data landscapes into actionable strategic maps.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase">Future Horizon</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-light">Vision focused on engineering the next generation of neural systems at global technology powerhouses.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-48 px-6 bg-[#0E0E0E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader title="DOMAIN EXPERTISE" subtitle="Arsenal" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                title: "Data Intelligence", 
                icon: <BarChart className="w-5 h-5" />, 
                skills: [
                  { name: "Pandas", slug: "pandas", color: "150458" },
                  { name: "NumPy", slug: "numpy", color: "013243" },
                  { name: "Matplotlib", slug: "chartdotjs", color: "11557C" },
                  { name: "Seaborn", slug: "python", color: "3776AB" }
                ],
                color: "from-accent/10 to-transparent"
              },
              { 
                title: "Neural Systems", 
                icon: <Cpu className="w-5 h-5" />, 
                skills: [
                  { name: "Scikit-learn", slug: "scikitlearn", color: "F7931E" },
                  { name: "Pytorch", slug: "pytorch", color: "EE4C2C" },
                  { name: "Tensorflow", slug: "tensorflow", color: "FF6F00" },
                  { name: "Jupyter", slug: "jupyter", color: "F37626" }
                ],
                color: "from-accent/5 to-transparent"
              },
              { 
                title: "Engineering", 
                icon: <Code className="w-5 h-5" />, 
                skills: [
                  { name: "Python", slug: "python", color: "3776AB" },
                  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
                  { name: "HTML5", slug: "html5", color: "E34F26" },
                  { name: "CSS3", slug: "css3", color: "1572B6" }
                ],
                color: "from-accent/10 to-transparent"
              },
              { 
                title: "Visualization", 
                icon: <Database className="w-5 h-5" />, 
                skills: [
                  { name: "Power BI", slug: "powerbi", color: "F2C811" },
                  { name: "Tableau", slug: "tableau", color: "E97627" },
                  { name: "Git", slug: "git", color: "F05032" }
                ],
                color: "from-accent/5 to-transparent"
              }
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-12 rounded-xl group hover:border-accent/40 transition-all cursor-default"
              >
                <div className="w-10 h-10 prestige-border rounded-full flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-black transition-all">
                  {category.icon}
                </div>
                <h3 className="text-xl font-serif mb-8 tracking-wide group-hover:text-accent transition-colors">{category.title}</h3>
                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map(skill => (
                    <div key={skill.name} className="flex flex-col gap-4 group/skill items-center sm:items-start text-center sm:text-left">
                      <div className="w-14 h-14 rounded-xl glass prestige-border p-3 transition-all group-hover/skill:scale-110 group-hover/skill:bg-accent/10">
                        <img 
                          src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 group-hover/skill:text-accent transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/2 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-48 px-6 max-w-7xl mx-auto">
        <SectionHeader title="SELECTED CASES" subtitle="Portfolio" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          {[
            { 
              title: "Blinkit Sales Analysis",
              desc: "I studied customer data to show how sales happen and how to make the business run better.",
              tags: ["Data Analytics", "Pandas", "Python"],
              highlights: ["Sales Tracking", "Customer Habits"],
              image: "Blinkit.png"
            },
            {
              title: "House Price Prediction",
              desc: "I built a smart system to predict house costs accurately using over 1,400 real-world examples.",
              tags: ["ML", "Scikit", "Predictive"],
              highlights: ["Data Sorting", "Price Accuracy"],
              image: "House.png"
            },
            {
              title: "Insurance Price Tool",
              desc: "I created a project to calculate insurance prices based on details like age, health, and location.",
              tags: ["Data Analytics", "Deloitte", "Python"],
              highlights: ["Cost Prediction", "Risk Check"],
              image: "insurance.png"
            },
            {
              title: "Business Dashboards",
              desc: "I designed easy-to-use Power BI dashboards to help managers see their company's performance live.",
              tags: ["Power BI", "Tableau", "Strategy"],
              highlights: ["Live Tracking", "Easy Reports"],
              image: "https://picsum.photos/seed/hub-ai/1200/800"
            }
          ].map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass prestige-border mb-12 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 flex gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 glass text-[8px] font-mono tracking-widest uppercase rounded-full text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-4xl font-serif mb-6 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-white/40 mb-10 leading-relaxed font-light text-lg">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-x-12 gap-y-4">
                {project.highlights.map(h => (
                  <div key={h} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span className="text-[10px] text-accent font-mono uppercase tracking-[0.2em]">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience & Recognition */}
      <section id="experience" className="py-48 px-6 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-48">
          <div>
            <SectionHeader title="ACADEMIC TRACK" subtitle="Timeline" />
            <div className="space-y-16">
              {[
                { 
                  year: "2025", 
                  title: "Startup Conclave Delegate", 
                  inst: "Innovation Hub", 
                  desc: "Strategic networking and analytical deep-dive into the tech startup ecosystem." 
                },
                { 
                  year: "2024", 
                  title: "Neural Systems Mastery", 
                  inst: "IMSUC Ghaziabad", 
                  desc: "Intensive focus on supervised learning paradigms and practical neural deployment." 
                },
                { 
                  year: "2024", 
                  title: "Visualization Specialist", 
                  inst: "Pinaki IT Consultants", 
                  desc: "Advanced training in the architecture of business intelligence dashboards." 
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group relative pl-12"
                >
                  <div className="absolute left-0 top-0 text-[10px] font-mono text-accent/40 tracking-widest group-hover:text-accent transition-colors pt-2">
                    {item.year}
                  </div>
                  <div className="absolute left-[40px] top-[14px] w-[6px] h-[6px] rounded-full bg-accent/20 group-hover:bg-accent transition-all ring-8 ring-accent/5" />
                  <h4 className="text-2xl font-serif mb-2 tracking-wide text-white/90">{item.title}</h4>
                  <p className="text-accent font-mono text-[9px] mb-6 uppercase tracking-[0.3em] font-medium">{item.inst}</p>
                  <p className="text-white/30 text-sm leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title="HONORS" subtitle="Gallery" />
            <div className="grid gap-8">
              {[
                {
                  icon: <Trophy className="w-5 h-5" />,
                  title: "Tournament Medalist",
                  desc: "Silver Position in competitive Table Tennis at IMSUC Ghaziabad."
                },
                {
                  icon: <BarChart className="w-5 h-5" />,
                  title: "Domain Pioneer",
                  desc: "Developed and managed multiple end-to-end institutional-grade data ecosystems."
                },
                {
                  icon: <MessageSquare className="w-5 h-5" />,
                  title: "Strategic Lead",
                  desc: "Orchestrated college-wide innovation initiatives and tech hackathons."
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass p-10 rounded-xl group hover:bg-accent/5 transition-all prestige-border"
                >
                  <div className="w-10 h-10 prestige-border rounded-full flex items-center justify-center text-accent/60 mb-8 group-hover:bg-accent group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-serif mb-2 tracking-wide">{item.title}</h4>
                  <p className="text-white/30 text-xs leading-relaxed font-light uppercase tracking-widest">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-48 px-6 max-w-7xl mx-auto">
        <div className="glass p-16 md:p-32 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent -z-10" />
          <SectionHeader title="THE CURRICULUM" subtitle="Archive" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <p className="text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
              Explore my comprehensive academic background, technical proficiency, and project trajectory in a single document.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <a 
                href="Resume.pdf" 
                download="Himanshu_Resume.pdf"
                className="group px-12 py-6 glass rounded-full prestige-border hover:bg-white hover:text-black transition-all flex items-center gap-6"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-bg-dark transition-colors">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs font-mono tracking-[0.4em] uppercase font-bold">Download CV</span>
              </a>
              <div className="flex items-center gap-4 text-white/20">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest uppercase">Version 2.0.24</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-64 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-24">
          <SectionHeader title="STRATEGIC GATEWAY" subtitle="Channels" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12"
          >
            {[
              { 
                label: "Direct Line", 
                val: "kumbhavathimanshu001@gmail.com", 
                slug: "gmail", 
                color: "EA4335",
                link: "mailto:kumbhavathimanshu001@gmail.com" 
              },
              { 
                label: "Development", 
                val: "@Himanshukumbhavat", 
                slug: "github", 
                color: "FFFFFF",
                link: "https://github.com/Himanshukumbhavat" 
              },
              { 
                label: "LinkedIn",
                val: "Himanshu Kumbhavat",
                slug: "linkedin",
                color: "0A66C2",
                link: "https://www.linkedin.com/in/himanshu-kumbhavat-739ab1340" 
              },
              { 
                label: "Digital Narrative", 
                val: "@himanshu_kumbhavat", 
                slug: "instagram", 
                color: "E4405F",
                link: "https://www.instagram.com/himanshu_kumbhavat" 
              },
              { 
                label: "Location", 
                val: "India, UP", 
                slug: "googlemaps", 
                color: "4285F4",
                link: null 
              }
            ].map(item => (
              <a 
                key={item.label}
                href={item.link || "#"} 
                target={item.link ? "_blank" : undefined}
                rel="noreferrer"
                className="group p-12 glass rounded-2xl prestige-border hover:bg-white hover:text-black transition-all flex flex-col items-center"
              >
                <div className="w-16 h-16 prestige-border rounded-2xl flex items-center justify-center mb-10 group-hover:bg-bg-dark transition-all p-4">
                  <img 
                    src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
                    alt={item.label}
                    className="w-full h-full object-contain brightness-200 group-hover:brightness-100 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-accent font-mono text-[9px] mb-4 uppercase tracking-[0.5em] font-bold">{item.label}</p>
                <p className="text-[10px] break-all leading-relaxed opacity-40 group-hover:opacity-100 transition-opacity font-light">{item.val}</p>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-accent animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.5em] text-white/20 uppercase">STRICTLY STRATEGIC &copy; 2024</span>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          <a href="https://www.linkedin.com/in/himanshu-kumbhavat-739ab1340" target="_blank" className="text-white/20 hover:text-accent font-mono text-[10px] tracking-[0.3em] uppercase transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/himanshu_kumbhavat" target="_blank" className="text-white/20 hover:text-accent font-mono text-[10px] tracking-[0.3em] uppercase transition-colors">Instagram</a>
          <a href="https://github.com/Himanshukumbhavat" target="_blank" className="text-white/20 hover:text-accent font-mono text-[10px] tracking-[0.3em] uppercase transition-colors">Github</a>
        </div>
      </footer>
    </main>
  );
}

