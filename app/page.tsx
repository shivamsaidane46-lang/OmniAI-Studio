const projects = [
  { title: "AI Invoice Extractor", description: "Automated invoice data extraction and processing pipeline.", tags: ["n8n", "OpenAI", "Google Sheets", "Gmail"] },
  { title: "AI Lead Qualification Bot", description: "Scores and qualifies inbound leads using AI and business rules.", tags: ["n8n", "OpenAI", "Slack", "CRM"] },
  { title: "Social Media Content Agent", description: "Generates, schedules, and prepares social content from a repeatable system.", tags: ["n8n", "OpenAI", "Social", "Sheets"] },
  { title: "Smart Email Responder", description: "Classifies incoming email and drafts contextual responses.", tags: ["n8n", "OpenAI", "Gmail", "Slack"] },
  { title: "Workflow #5", description: "Coming as part of the 30 Days, 30 Systems challenge.", tags: ["Coming soon"] },
];

export default function Home() {
  return <>
    <nav className="nav"><div className="container nav-inner">
      <a className="brand" href="#home"><span className="logo">A</span>OmniAI Studio</a>
      <div className="links"><a href="#projects">Projects</a><a href="#services">Services</a><a href="#challenge">30 Days Challenge</a><a href="#contact">Contact</a></div>
      <a className="button" href="mailto:hello@omniaistudio.in">Work With Me</a>
    </div></nav>

    <main>
      <section id="home" className="hero"><div className="container hero-grid">
        <div><span className="eyebrow">AI AUTOMATION & SYSTEMS</span>
          <h1>I build AI systems that automate <span className="accent">real business problems.</span></h1>
          <p>I design and build end-to-end AI automations, n8n workflows, and intelligent agents that reduce manual work and make business processes more efficient.</p>
          <div className="actions"><a className="button" href="#projects">Explore Projects →</a><a className="button secondary" href="#contact">Work With Me</a></div>
        </div>
        <div className="flow"><div className="node">Gmail</div><div className="node">OpenAI</div><div className="node main">AI Agent</div><div className="node">Google Sheets</div></div>
      </div></section>

      <section id="projects" className="section"><div className="container"><div className="section-head"><span className="kicker">PORTFOLIO</span><h2>Featured Projects</h2><p className="muted">Business-focused AI systems, automations, and workflows.</p></div>
        <div className="grid4">{projects.map((p) => <article className="card" key={p.title}><h3>{p.title}</h3><p className="muted">{p.description}</p><div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div></article>)}</div>
      </div></section>

      <section className="stats"><div className="stat"><strong>0</strong><span className="muted">Workflows Built</span></div><div className="stat"><strong>0</strong><span className="muted">Hours Saved</span></div><div className="stat"><strong>5</strong><span className="muted">Projects Listed</span></div><div className="stat"><strong>0/30</strong><span className="muted">Challenge Progress</span></div></section>

      <section id="services" className="section"><div className="container"><div className="section-head"><span className="kicker">WHAT I DO</span><h2>Services</h2><p className="muted">Systems designed around practical business problems.</p></div><div className="grid4">
        {[['AI Automation','End-to-end automation pipelines that eliminate repetitive manual work.'],['n8n Workflow Development','Custom workflows that connect tools, automate processes, and move data reliably.'],['AI Agents','Task-specific agents for lead qualification, support, research, and content operations.'],['API Integrations','Connections between existing tools so information moves where it needs to go.']].map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p className="muted">{d}</p></article>)}
      </div></div></section>

      <section id="challenge" className="section"><div className="container challenge"><div><span className="kicker">BUILD IN PUBLIC</span><h2>30 Days. 30 Systems.</h2><p className="muted">One practical AI-powered workflow or business system built and documented every day for 30 days. This section will grow with the challenge.</p><a className="button" href="#challenge-days">Follow the Challenge →</a></div><div id="challenge-days" className="days">{Array.from({length:30},(_,i)=><div className={`day ${i===0?'active':''}`} key={i}>{i+1}</div>)}</div></div></section>

      <section id="contact" className="section"><div className="container" style={{textAlign:'center'}}><span className="kicker">CONTACT</span><h2>Have a project in mind?</h2><p className="muted">Let's build something useful.</p><div className="actions" style={{justifyContent:'center'}}><a className="button" href="mailto:hello@omniaistudio.in">Get In Touch →</a></div></div></section>
    </main>

    <footer className="footer"><div className="container footer-row"><span>© 2026 OmniAI Studio</span><span>AI automation • n8n • intelligent systems</span></div></footer>
  </>;
}
