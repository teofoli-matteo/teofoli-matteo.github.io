const { createApp } = Vue;

createApp({
  data() {
    return {
      theme: "dark",
      activeFilter: "All",

      profile: {
        name: "Matteo Teofoli",
        role: "Student in Cybersecurity & Cyber Defence / Developer • CTF Player",
        location: "Worldwide",
        github: "https://github.com/teofoli-matteo",
        bio:
          "I actively participate in CTF competitions and have solid experience in software development. This portfolio showcases my school projects, personal work, and security-related activities.",
        highlights: [
          { label: "Focus", value: "CTF • Security • Development" },
          { label: "Languages", value: "C / Python / JavaScript" },
          { label: "Goal", value: "Internship / Apprenticeship" },
          { label: "Interests", value: "Offensive security & tooling" },
        ],
        skills: [
  // CTF & Offensive Security
  "CTF",
  "Privilege Escalation (Linux / Windows)",
  "Active Directory Attacks",
  "Web Security",
  "Reverse Engineering",
  "Cryptography",

  // Web Vulnerabilities
  "SQL Injection",
  "Cross-Site Scripting (XSS)",
  "Authentication Bypass",
  "Command Injection",
  "Insecure Deserialization",

  // Tooling
  "Burp Suite",
  "Nmap",
  "Netcat",
  "John the Ripper",
  "Hashcat",
  "Gobuster",
  "Metasploit",

  // Systems & Dev
  "Linux",
  "Git",
  "Python",
  "JavaScript",
  "C",
  "C++",
  "C#",
  "Vue.js",
]
      },

      projects: [
        {
          title: "School Project — Project Name",
          type: "School",
          year: "2025",
          description:
            "Academic project focusing on problem solving, algorithms, and clean code practices.",
          tags: ["C", "Algorithms", "Git"],
          links: [
            { label: "Repository", href: "https://github.com/teofoli-matteo" },
          ],
        },
        {
          title: "Personal Project — Project Name",
          type: "Personal",
          year: "2025",
          description:
            "Personal project developed outside school to explore new technologies or solve real-world problems.",
          tags: ["Python", "Automation"],
          links: [
            { label: "Repository", href: "https://github.com/teofoli-matteo" },
          ],
        },
        {
          title: "CTF — Tooling / Write-ups",
          type: "CTF",
          year: "2024–2026",
          description:
            "Security challenges, write-ups, and tools developed for CTF competitions.",
          tags: ["Web", "Crypto", "Reverse"],
          links: [
            { label: "Profile", href: "https://github.com/teofoli-matteo" },
          ],
        },
      ],

      ctf: {
        platforms: [
          { name: "Hack The Box", handle: "@your_handle", link: "#" },
          { name: "TryHackMe", handle: "@your_handle", link: "#" },
          { name: "CTFtime", handle: "Team / Profile", link: "#" },
        ],
        about:
          "I regularly take part in Capture The Flag competitions, focusing mainly on web security, cryptography, and reverse engineering.",
        bullets: [
          "Exploit development and automation",
          "Binary analysis and reversing",
          "Web vulnerabilities: XSS, SSRF, SQLi, auth bypass",
        ],
      },
    };
  },

  computed: {
    filters() {
      const types = [...new Set(this.projects.map((p) => p.type))];
      return ["All", ...types];
    },
    filteredProjects() {
      if (this.activeFilter === "All") return this.projects;
      return this.projects.filter((p) => p.type === this.activeFilter);
    },
  },

  methods: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", this.theme);
      localStorage.setItem("theme", this.theme);
    },
    setFilter(f) {
      this.activeFilter = f;
    },
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    },
  },

  mounted() {
    const saved = localStorage.getItem("theme");
    if (saved) this.theme = saved;
    document.documentElement.setAttribute("data-theme", this.theme);
  },

  template: `
    <header>
      <div class="container nav">
        <div class="brand" @click="scrollTo('top')" style="cursor:pointer">
          <div class="logo"></div>
          <div>
            <div>{{ profile.name }}</div>
            <div class="small">{{ profile.role }}</div>
          </div>
        </div>

        <nav class="links">
          <a href="#about" @click.prevent="scrollTo('about')">About</a>
          <a href="#projects" @click.prevent="scrollTo('projects')">Projects</a>
          <a href="#ctf" @click.prevent="scrollTo('ctf')">CTF</a>
          <a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
          <button class="btn" @click="toggleTheme">🌓 Theme</button>
        </nav>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="container hero-grid">
          <div class="card card-pad">
            <h1>CTF, Development & Security Projects</h1>
            <p>{{ profile.bio }}</p>

            <div class="hero-actions">
              <a class="btn" :href="profile.github" target="_blank">🐙 GitHub</a>
              <a class="btn" :href="profile.linkedin" target="_blank">💼 LinkedIn</a>
              <a class="btn" href="#projects" @click.prevent="scrollTo('projects')">View projects</a>
            </div>

            <div class="tags" style="margin-top:14px">
              <span class="tag" v-for="s in profile.skills" :key="s">{{ s }}</span>
            </div>
          </div>

          <div class="card card-pad kv">
            <div class="row"><span>Location</span><strong>{{ profile.location }}</strong></div>
            <div class="row"><span>Categories</span><strong>School • Personal • CTF</strong></div>
            <div class="row"><span>Status</span><strong>Open to opportunities</strong></div>
          </div>
        </div>
      </section>

      <section id="about" class="section">
        <div class="container card card-pad">
          <h2>About Me</h2>
          <p>
            I am a Master’s student in Cybersecurity and Cyberdefense at the University of Luxembourg, with a background in Applied Information Technology. I have strong experience in software development using Python, Go, Java, and web technologies, and prior hands-on work with C, C++, C#, and JavaScript.
            Passionate about cybersecurity from an early stage, I have been actively involved in CTF competitions for several years, developing practical skills in offensive security, problem-solving, and security tooling. My interests lie at the intersection of development, security, and real-world exploitation.
          </p>
        </div>
      </section>

      <section id="projects" class="section">
        <div class="container">
          <h2>Projects</h2>

          <div class="filters">
            <button
              v-for="f in filters"
              :key="f"
              class="btn"
              @click="setFilter(f)"
              :style="activeFilter === f ? 'border-color:#7c5cff' : ''"
            >
              {{ f }}
            </button>
          </div>

          <div class="grid" style="margin-top:14px">
            <article class="card project" v-for="p in filteredProjects" :key="p.title">
              <span class="pill">{{ p.type }} • {{ p.year }}</span>
              <h3>{{ p.title }}</h3>
              <p class="desc">{{ p.description }}</p>
              <div class="tags">
                <span class="tag" v-for="t in p.tags" :key="t">{{ t }}</span>
              </div>
              <div class="footer">
                <a class="btn" v-for="l in p.links" :key="l.label" :href="l.href" target="_blank">
                  {{ l.label }}
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="ctf" class="section">
        <div class="container card card-pad">
          <h2>CTF Experience</h2>
          <p>{{ ctf.about }}</p>
          <div class="tags">
            <span class="tag" v-for="b in ctf.bullets" :key="b">{{ b }}</span>
          </div>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container card card-pad">
          <h2>Contact</h2>
          <div class="hero-actions">
            <a class="btn" :href="'mailto:' + profile.email">Email</a>
            <a class="btn" :href="profile.github" target="_blank">GitHub</a>
            <a class="btn" :href="profile.linkedin" target="_blank">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        <div class="container small">
          © {{ new Date().getFullYear() }} — {{ profile.name }} · Built with Vue & GitHub Pages
        </div>
      </footer>
    </main>
  `,
}).mount("#app");
