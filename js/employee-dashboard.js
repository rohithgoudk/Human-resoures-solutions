const serviceLineAccents = {
  "Payroll & Compliance": "#C0923F",
  "Talent Acquisition": "#6E93B0",
  "Benefits Administration": "#8FAE7C",
  "Performance Management": "#B98CA3",
  "Employee Onboarding": "#E3B463",
  "HR Analytics": "#9AA5B1"
};
const teamSnapshot = [
  { src: "https://images.unsplash.com/photo-1758874384555-37d50c0ee81a?auto=format&fit=crop&w=700&q=80", tag: "Payroll", title: "Payroll Review Session — Northlight Robotics" },
  { src: "https://images.unsplash.com/photo-1758518730384-be3d205838e8?auto=format&fit=crop&w=700&q=80", tag: "Talent", title: "Offer Extended — Tidewater Systems Search" },
  { src: "https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?auto=format&fit=crop&w=700&q=80", tag: "Benefits", title: "Open Enrollment Walkthrough — Harborview Retail" },
  { src: "https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?auto=format&fit=crop&w=700&q=80", tag: "Onboarding", title: "Day One — Crestline Manufacturing" },
  { src: "https://images.unsplash.com/photo-1745015446589-7ee6f702d8c1?auto=format&fit=crop&w=700&q=80", tag: "Analytics", title: "Quarterly Reporting Review — Bellcrest Analytics" }
];
const clientEngagements = [
  { id: 1, name: "Northlight Robotics — Onboarding Experience Redesign", facility: "Employee Onboarding", site: "Employee Onboarding", type: "Onboarding Program Build", status: "Active", progress: 72, endDate: "Dec 2025", budget: "$84,000", manager: "Elena Marsh" },
  { id: 2, name: "Fieldstone Health — Multi-State Payroll Rollout", facility: "Payroll & Compliance", site: "Payroll & Compliance", type: "Payroll Migration", status: "Ramping Up", progress: 38, endDate: "Aug 2025", budget: "$146,000", manager: "Diego Torres" },
  { id: 3, name: "Tidewater Systems — VP Engineering Executive Search", facility: "Talent Acquisition", site: "Talent Acquisition", type: "Retained Executive Search", status: "Completed", progress: 100, endDate: "Mar 2025", budget: "$58,000", manager: "Amara Osei" },
  { id: 4, name: "Harborview Retail — Benefits Open Enrollment Redesign", facility: "Benefits Administration", site: "Benefits Administration", type: "Plan Design & Enrollment", status: "Active", progress: 55, endDate: "Nov 2025", budget: "$67,000", manager: "Ben Whitfield" },
  { id: 5, name: "Crestline Manufacturing — Performance Review Framework", facility: "Performance Management", site: "Performance Management", type: "Review Cycle Redesign", status: "Review", progress: 89, endDate: "Jul 2025", budget: "$92,000", manager: "Noah Kessler" },
  { id: 6, name: "Bellcrest Analytics — Attrition & Headcount Dashboard", facility: "HR Analytics", site: "HR Analytics", type: "Reporting Build-Out", status: "Active", progress: 61, endDate: "Oct 2025", budget: "$54,000", manager: "Lucia Ferreira" },
  { id: 7, name: "Ashgrove SaaS — Global Payroll Expansion (12 Countries)", facility: "Payroll & Compliance", site: "Payroll & Compliance", type: "Global Payroll & Relocation", status: "Ramping Up", progress: 45, endDate: "Sep 2025", budget: "$210,000", manager: "Diego Torres" },
  { id: 8, name: "Meridian Hospitality — Manager Coaching Cohort", facility: "Performance Management", site: "Performance Management", type: "Manager Coaching Program", status: "Active", progress: 28, endDate: "Nov 2025", budget: "$39,000", manager: "Noah Kessler" }
];
const hrTeam = [
  { name: "Elena Marsh", role: "Onboarding Lead — Employee Experience", experience: 9, avatar: "EM", status: "active", projects: 2, speciality: "Onboarding Program Design", email: "e.marsh@stackly.com" },
  { name: "Diego Torres", role: "Payroll & Compliance Lead", experience: 13, avatar: "DT", status: "active", projects: 2, speciality: "Multi-State & Global Payroll", email: "d.torres@stackly.com" },
  { name: "Amara Osei", role: "Executive Search Partner", experience: 11, avatar: "AO", status: "away", projects: 1, speciality: "Retained Leadership Search", email: "a.osei@stackly.com" },
  { name: "Ben Whitfield", role: "Benefits Strategist", experience: 8, avatar: "BW", status: "active", projects: 2, speciality: "Plan Design & Carrier Negotiation", email: "b.whitfield@stackly.com" },
  { name: "Noah Kessler", role: "Performance & Culture Coach", experience: 7, avatar: "NK", status: "active", projects: 2, speciality: "Review Frameworks & Manager Coaching", email: "n.kessler@stackly.com" },
  { name: "Lucia Ferreira", role: "HR Analytics Lead", experience: 6, avatar: "LF", status: "active", projects: 1, speciality: "Headcount & DEI Reporting", email: "l.ferreira@stackly.com" },
  { name: "Priya Kapoor", role: "Account Director", experience: 10, avatar: "PK", status: "active", projects: 3, speciality: "Client Strategy & Renewals", email: "p.kapoor@stackly.com" }
];
const programCatalog = [
  { id: "PRG-001", name: "Payroll & Compliance", facility: "Payroll & Compliance", category: "Payroll & Compliance", date: "Jan 2023", stock: "High Demand", status: "Bestseller" },
  { id: "PRG-002", name: "Talent Acquisition", facility: "Talent Acquisition", category: "Talent Acquisition", date: "Jun 2023", stock: "Steady Demand", status: "Active" },
  { id: "PRG-003", name: "Benefits Administration", facility: "Benefits Administration", category: "Benefits Administration", date: "Mar 2024", stock: "Limited Capacity", status: "Updated" },
  { id: "PRG-004", name: "Performance Management", facility: "Performance Management", category: "Performance Management", date: "Sep 2023", stock: "High Demand", status: "Bestseller" },
  { id: "PRG-005", name: "Employee Onboarding", facility: "Employee Onboarding", category: "Employee Onboarding", date: "Nov 2024", stock: "Steady Demand", status: "Active" },
  { id: "PRG-006", name: "HR Analytics & Reporting", facility: "HR Analytics", category: "HR Analytics", date: "Feb 2022", stock: "Steady Demand", status: "Active" },
  { id: "PRG-007", name: "Executive Search", facility: "Talent Acquisition", category: "Signature Program", date: "Dec 2024", stock: "High Demand", status: "Featured" },
  { id: "PRG-008", name: "Global Payroll & Relocation", facility: "Payroll & Compliance", category: "Signature Program", date: "Jul 2024", stock: "Steady Demand", status: "Active" }
];
const hrInsights = [
  { title: "The Real Cost of a Bad Hire in 2026", authors: "Chen, S.", journal: "Stackly HR Briefing", year: 2026, status: "Published", reads: 128 },
  { title: "Designing Benefits Packages for Hybrid Teams", authors: "Whitfield, B.", journal: "Stackly HR Briefing", year: 2026, status: "Published", reads: 94 },
  { title: "A Manager's Field Guide to Difficult Conversations", authors: "Kessler, N.", journal: "Stackly HR Briefing", year: 2026, status: "Published", reads: 156 },
  { title: "Your Payroll Compliance Checklist for Q1", authors: "Torres, D.", journal: "Stackly HR Briefing", year: 2026, status: "In Review", reads: 0 },
  { title: "Building an Onboarding Experience People Remember", authors: "Marsh, E.", journal: "Stackly HR Briefing", year: 2026, status: "Published", reads: 210 },
  { title: "Reading the Room: Engagement Surveys That Work", authors: "Ferreira, L., Kapoor, P.", journal: "Internal Culture Notes", year: 2026, status: "In Draft", reads: 0 }
];
const scheduleEvents = [
  { date: "Jun 21", event: "Ashgrove SaaS — global payroll go-live", site: "Payroll & Compliance", type: "urgent" },
  { date: "Jun 25", event: "Fieldstone Health — multi-state filing audit", site: "Payroll & Compliance", type: "normal" },
  { date: "Jul 2", event: "Harborview Retail — open enrollment session", site: "Benefits Administration", type: "normal" },
  { date: "Jul 10", event: "Team debrief: Tidewater Systems executive search final report review", site: "Virtual", type: "meeting" },
  { date: "Jul 18", event: "Crestline Manufacturing — performance calibration rollout survey", site: "Performance Management", type: "normal" },
  { date: "Aug 5", event: "Meridian Hospitality — manager coaching cohort final review", site: "Performance Management", type: "normal" },
  { date: "Aug 14", event: "Annual account directors' summit", site: "Virtual", type: "meeting" },
  { date: "Sep 1", event: "Bellcrest Analytics — dashboard refresh resumes after migration", site: "HR Analytics", type: "normal" },
  { date: "Oct 15", event: "Northlight Robotics — Q4 onboarding metrics deadline", site: "Employee Onboarding", type: "urgent" }
];
const budgetData = [
  { site: "Ashgrove SaaS — Global Payroll Expansion", allocated: 1180000, spent: 612000, facility: "Payroll & Compliance" },
  { site: "Fieldstone Health — Multi-State Rollout", allocated: 620000, spent: 398000, facility: "Payroll & Compliance" },
  { site: "Tidewater Systems — Executive Search", allocated: 58000, spent: 58000, facility: "Talent Acquisition" },
  { site: "Harborview Retail — Benefits Redesign", allocated: 340000, spent: 201000, facility: "Benefits Administration" },
  { site: "Meridian Hospitality — Coaching Cohort", allocated: 158000, spent: 91000, facility: "Performance Management" },
  { site: "Bellcrest Analytics — Dashboard Program", allocated: 220000, spent: 148000, facility: "HR Analytics" },
  { site: "Northlight Robotics — Onboarding Redesign", allocated: 184000, spent: 132000, facility: "Employee Onboarding" }
];
const resourceLibrary = [
  { title: "2026 Payroll Compliance Handbook", type: "Compliance Guide", year: 2026, pages: 148, downloads: 4210 },
  { title: "Benefits Plan Design Playbook", type: "Guide", year: 2025, pages: 96, downloads: 3120 },
  { title: "Executive Search Field Guide", type: "Field Guide", year: 2025, pages: 72, downloads: 1860 },
  { title: "Onboarding Experience Blueprint", type: "Technical Manual", year: 2024, pages: 210, downloads: 5320 },
  { title: "HR Analytics Starter Kit", type: "Guide", year: 2026, pages: 64, downloads: 2044 }
];
const liveFeed = [
  { text: "Ashgrove SaaS global payroll go-live completed across 4 new countries", time: "2h ago", type: "milestone" },
  { text: "Record client renewal week reported across the account team", time: "4h ago", type: "performance" },
  { text: "Tidewater Systems executive search closed — final report published", time: "Yesterday", type: "complete" },
  { text: "Filing delay flagged at Fieldstone Health — compliance team notified", time: "Yesterday", type: "alert" },
  { text: "New enrollment portal reveals fresh engagement opportunity for Harborview Retail", time: "2d ago", type: "update" },
  { text: "Q3 renewal targets exceeded across three client accounts", time: "3d ago", type: "milestone" },
  { text: "New coaching cohort format launched for Meridian Hospitality", time: "4d ago", type: "update" }
];
const navIcons = {
  dashboard: "layout-dashboard", runs: "briefcase", teams: "users", products: "layers",
  reports: "clipboard-check", schedule: "calendar", budget: "wallet", training: "book-open", settings: "settings"
};
const navItems = [
  { icon: navIcons.dashboard, label: "Dashboard", id: "dashboard" },
  { icon: navIcons.runs, label: "Client Engagements", id: "runs" },
  { icon: navIcons.teams, label: "HR Team", id: "teams" },
  { icon: navIcons.products, label: "Program Catalog", id: "products" },
  { icon: navIcons.reports, label: "HR Insights", id: "reports" },
  { icon: navIcons.schedule, label: "Schedule", id: "schedule" },
  { icon: navIcons.budget, label: "Budget", id: "budget" },
  { icon: navIcons.training, label: "Resource Library", id: "training" },
  { icon: navIcons.settings, label: "Settings", id: "settings" }
];
const statusColors = { "Active": "status-active", "Ramping Up": "status-field", "Completed": "status-complete", "Review": "status-review" };
const stockColor = { "High Demand": "#8FAE7C", "Steady Demand": "#E3B463", "Limited Capacity": "#C97B63" };
const reportStatusColor = { "Published": "#8FAE7C", "In Review": "#E3B463", "In Draft": "#9AA5B1" };
const scheduleTypeColor = { urgent: "#C97B63", normal: "#C0923F", meeting: "#9AA5B1" };
const pageMap = {
  dashboard: { title: "Dashboard", sub: "" },
  runs:      { title: "Engagements", sub: "" },
  teams:     { title: "HR Team", sub: "" },
  products:  { title: "Programs", sub: "" },
  reports:   { title: "Insights", sub: "" },
  schedule:  { title: "Schedule", sub: "" },
  budget:    { title: "Budget", sub: "" },
  training:  { title: "Resource", sub: "" },
  settings:  { title: "Settings", sub: "" }
};

// =========================================================
// SIGNED-IN USER — read whoever logged in (login.html can store
// { email, role, name, loginTime } in localStorage) and reflect
// it across the sidebar, topbar, and Settings page.
// =========================================================
function getCurrentUser() {
  try {
    const raw = localStorage.getItem('user');
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!raw || !isAuthenticated) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}
function usernameFromEmail(email) {
  if (!email) return '';
  return email.includes('@') ? email.split('@')[0] : email;
}
const currentUser = getCurrentUser();
const currentEmail = currentUser ? (currentUser.email || '') : '';
const currentUsername = currentUser ? usernameFromEmail(currentEmail) : '';
const currentInitial = (currentUsername || currentEmail || '?').charAt(0).toUpperCase();

function paintUserChrome() {
  const nameToShow = currentUsername || currentEmail || 'Signed out';
  document.getElementById('sidebar-user-avatar').textContent = currentInitial;
  document.getElementById('sidebar-user-name').textContent = nameToShow;
  document.getElementById('sidebar-user-email').textContent = currentEmail || '—';
  document.getElementById('topbar-user-avatar').textContent = currentInitial;
  document.getElementById('topbar-user-name').textContent = nameToShow;
  document.getElementById('topbar-user-email').textContent = currentEmail || '—';
}
function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('isAuthenticated');
  window.location.href = 'login.html';
}

let state = {
  activeNav: "dashboard",
  runFilter: "All",
  productSearch: "",
  settings: { notifications: true, emailDigest: false, darkMode: true, language: "English" }
};

function fmt(n) { return "$" + n.toLocaleString(); }
function go404() { window.location.href = "404.html"; }

function regionTag(facility) {
  const c = serviceLineAccents[facility] || "#C0923F";
  return `<span class="region-tag" style="color:${c};border-color:${c};background:${c}22;">${facility}</span>`;
}

function animateStatBars(){
  requestAnimationFrame(() => {
    document.querySelectorAll('.stat-bar-fill, .progress-fill').forEach(el => {
      const target = el.getAttribute('data-w');
      if (target) el.style.width = target + '%';
    });
    const donut = document.querySelector('.donut-svg');
    if (donut) donut.classList.add('drawn');
  });
}

function fleetSnapshotHtml(){
  const imgs = teamSnapshot.map(f =>
    `<div class="fleet-img">
      <img src="${f.src}" alt="${f.title}" loading="lazy">
      <div class="fleet-cap"><b>${f.tag}</b>${f.title}</div>
    </div>`
  ).join("");
  return `<div class="card">
    <div class="card-header"><div><h2 class="card-title">Team Snapshot</h2><p class="card-sub">Live moments from active client work</p></div></div>
    <div class="fleet-scroll">${imgs}</div>
  </div>`;
}

function renderDashboard() {
  const stats = [
    { icon: "briefcase", delta: "+3 this month", value: "9", label: "Active Client Engagements", bar: 72, accent: true },
    { icon: "users", delta: "+180 this quarter", value: "1,240", label: "Employees Supported", bar: 64 },
    { icon: "wallet", delta: "On track", value: "$2.76M", label: "Retainer Budget Under Management", bar: 88 },
    { icon: "layers", delta: "+1 this quarter", value: "6", label: "Active Service Lines", bar: 90 }
  ];
  const statsHtml = stats.map(s =>
    `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
      <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span><span class="stat-delta up">${s.delta}</span></div>
      <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
      <div class="stat-bar"><div class="stat-bar-fill" data-w="${s.bar}"></div></div>
    </div>`
  ).join("");

  const rows = clientEngagements.slice(0, 5).map(t =>
    `<tr>
      <td><div class="t-name">${t.name}</div><div class="t-sub">${t.site} · ${t.manager}</div></td>
      <td>${regionTag(t.facility)}</td>
      <td class="type-col">${t.type}</td>
      <td><span class="status-badge ${statusColors[t.status]}">${t.status}</span></td>
      <td><div class="progress-wrap"><div class="progress-bar"><div class="progress-fill" data-w="${t.progress}"></div></div><span class="progress-pct">${t.progress}%</span></div></td>
      <td class="date-col">${t.endDate}</td>
      <td class="budget-col">${t.budget}</td>
    </tr>`
  ).join("");

  const feedIcons = { milestone: "trophy", performance: "trending-up", complete: "check-circle-2", alert: "alert-triangle", update: "sparkles" };
  const feedHtml = liveFeed.map(a =>
    `<li class="activity-item">
      <span class="act-icon"><i data-lucide="${feedIcons[a.type] || 'circle'}"></i></span>
      <div class="act-body"><p class="act-text">${a.text}</p><span class="act-time">${a.time}</span></div>
    </li>`
  ).join("");

  const teamHtml = hrTeam.slice(0, 5).map(m =>
    `<li class="team-item">
      <div class="member-avatar">${m.avatar}<span class="online-dot dot-${m.status}"></span></div>
      <div class="member-info"><div class="member-name">${m.name}</div><div class="member-role">${m.role}</div></div>
      <div class="member-projects"><span class="proj-count">${m.experience}</span><span class="proj-label">yrs</span></div>
    </li>`
  ).join("");

  const milestones = [
    { site: "Ashgrove SaaS", event: "Global payroll go-live", date: "Jun 21", done: false, urgent: true },
    { site: "Fieldstone Health", event: "Compliance filing audit", date: "Jun 25", done: false, urgent: false },
    { site: "Harborview Retail", event: "Open enrollment session", date: "Jul 2", done: false, urgent: false },
    { site: "Bellcrest Analytics", event: "Dashboard refresh review", date: "Aug 05", done: false, urgent: false },
    { site: "Tidewater Systems", event: "Final search report submitted", date: "Jun 14", done: true, urgent: false }
  ];
  const msHtml = milestones.map(m => {
    const parts = m.date.split(" ");
    return `<li class="milestone-item ${m.done ? "ms-done" : ""}">
      <div class="ms-date"><span>${parts[0]}</span><span>${parts[1]}</span></div>
      <div class="ms-line"><div class="ms-dot"></div></div>
      <div class="ms-body"><div class="ms-event">${m.event}</div><div class="ms-project">${m.site}</div></div>
      ${m.urgent ? '<span class="ms-tag">Urgent</span>' : ''}
      ${m.done ? '<span class="ms-tag ms-done-tag">Done</span>' : ''}
    </li>`;
  }).join("");

  const legend = [
    { color: "#C0923F", label: "Payroll & Compliance", count: 2 },
    { color: "#6E93B0", label: "Talent Acquisition", count: 2 },
    { color: "#8FAE7C", label: "Benefits Administration", count: 1 },
    { color: "#B98CA3", label: "Performance Management", count: 2 },
    { color: "#E3B463", label: "Employee Onboarding", count: 1 },
    { color: "#9AA5B1", label: "HR Analytics", count: 1 }
  ];
  const legendHtml = legend.map(l =>
    `<li class="legend-item">
      <span class="legend-dot" style="background:${l.color}"></span>
      <span class="legend-label">${l.label}</span>
      <span class="legend-count">${l.count}</span>
    </li>`
  ).join("");

  return `
    <section class="stats-grid">${statsHtml}</section>
    ${fleetSnapshotHtml()}
    <section class="mid-grid">
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Active Client Engagements</h2><p class="card-sub">Current retainer overview</p></div></div>
        <div class="table-wrapper"><table class="runs-table"><thead><tr><th>Engagement</th><th>Service Line</th><th>Program Type</th><th>Status</th><th>Progress</th><th>Renewal</th><th>Retainer</th></tr></thead><tbody>${rows}</tbody></table></div>
      </div>
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Live Feed</h2><p class="card-sub">Account updates</p></div></div>
        <ul class="activity-list">${feedHtml}</ul>
      </div>
    </section>
    <section class="bottom-grid">
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">HR Team</h2><p class="card-sub">Specialists &amp; account leads</p></div></div>
        <ul class="team-list">${teamHtml}</ul>
      </div>
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Upcoming Deadlines</h2><p class="card-sub">Next 60 days</p></div></div>
        <ul class="milestone-list">${msHtml}</ul>
      </div>
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Engagement Mix</h2><p class="card-sub">By service line</p></div></div>
        <div class="donut-chart">
          <svg viewBox="0 0 120 120" class="donut-svg">
            <circle cx="60" cy="60" r="48" fill="none" stroke="#1E1A11" stroke-width="16"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#C0923F" stroke-width="16" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#6E93B0" stroke-width="16" stroke-dashoffset="-52" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#8FAE7C" stroke-width="16" stroke-dashoffset="-94" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#B98CA3" stroke-width="16" stroke-dashoffset="-132" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#E3B463" stroke-width="16" stroke-dashoffset="-166" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#9AA5B1" stroke-width="16" stroke-dashoffset="-196" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <text x="60" y="56" text-anchor="middle" class="donut-num">6</text>
            <text x="60" y="68" text-anchor="middle" class="donut-label">Service Lines</text>
          </svg>
        </div>
        <ul class="legend-list">${legendHtml}</ul>
      </div>
    </section>
  `;
}

function renderRuns() {
  const statuses = ["All", "Active", "Ramping Up", "Review", "Completed"];
  const filtered = state.runFilter === "All" ? clientEngagements : clientEngagements.filter(e => e.status === state.runFilter);
  const stats = [
    { icon: "briefcase", value: clientEngagements.length, label: "Total Engagements Launched" },
    { icon: "check-circle-2", value: clientEngagements.filter(e => e.status === "Active").length, label: "Active Now", accent: true },
    { icon: "trending-up", value: clientEngagements.filter(e => e.status === "Ramping Up").length, label: "Ramping Up" },
    { icon: "package-check", value: clientEngagements.filter(e => e.status === "Completed").length, label: "Completed" }
  ];
  const statsHtml = stats.map((s, i) => {
    const bar = [100, 60, 40, 20][i];
    return `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
      <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
      <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
      <div class="stat-bar"><div class="stat-bar-fill" data-w="${bar}"></div></div>
    </div>`;
  }).join("");

  const filterHtml = statuses.map(s =>
    `<button class="btn-outline run-filter-btn ${state.runFilter === s ? "btn-active" : ""}" data-filter="${s}">${s}</button>`
  ).join("");

  const rows = filtered.map(t =>
    `<tr>
      <td><div class="t-name">${t.name}</div><div class="t-sub">${t.site}</div></td>
      <td>${regionTag(t.facility)}</td>
      <td class="type-col">${t.type}</td>
      <td><span class="status-badge ${statusColors[t.status]}">${t.status}</span></td>
      <td><div class="progress-wrap"><div class="progress-bar"><div class="progress-fill" data-w="${t.progress}"></div></div><span class="progress-pct">${t.progress}%</span></div></td>
      <td class="date-col" style="font-size:12px">${t.manager}</td>
      <td class="date-col">${t.endDate}</td>
      <td class="budget-col">${t.budget}</td>
    </tr>`
  ).join("");

  return `
    <section class="stats-grid">${statsHtml}</section>
    <div class="card">
      <div class="card-header"><div><h2 class="card-title">All Client Engagements</h2><p class="card-sub">Full list of active and past retainers</p></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">${filterHtml}</div></div>
      <div class="table-wrapper"><table class="runs-table"><thead><tr><th>Engagement</th><th>Service Line</th><th>Program Type</th><th>Status</th><th>Progress</th><th>Account Lead</th><th>Renewal</th><th>Retainer</th></tr></thead><tbody>${rows}</tbody></table></div>
    </div>
  `;
}

function renderTeams() {
  const stats = [
    { icon: "users", value: hrTeam.length, label: "Team Members", bar: 80 },
    { icon: "circle-dot", value: hrTeam.filter(m => m.status === "active").length, label: "Online Now", bar: 85, accent: true },
    { icon: "briefcase", value: hrTeam.reduce((a, m) => a + m.projects, 0), label: "Active Client Accounts", bar: 70 },
    { icon: "star", value: Math.round(hrTeam.reduce((a, m) => a + m.experience, 0) / hrTeam.length), label: "Avg. Yrs w/ Stackly", bar: 75 }
  ];
  const statsHtml = stats.map(s =>
    `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
      <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
      <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
      <div class="stat-bar"><div class="stat-bar-fill" data-w="${s.bar}"></div></div>
    </div>`
  ).join("");

  const cards = hrTeam.map(m =>
    `<div class="team-card">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
        <div class="member-avatar" style="width:46px;height:46px;font-size:14px">${m.avatar}<span class="online-dot dot-${m.status}"></span></div>
        <div><div class="member-name" style="font-size:15px">${m.name}</div><div class="member-role">${m.role}</div></div>
      </div>
      <div style="font-size:12.5px;color:var(--text-dim);line-height:1.9">
        <div>${m.speciality}</div>
        <div>${m.email}</div>
        <div>${m.projects} active account${m.projects !== 1 ? "s" : ""} · ${m.experience} yrs experience</div>
      </div>
    </div>`
  ).join("");

  return `
    <section class="stats-grid">${statsHtml}</section>
    <div class="card"><div class="card-header"><div><h2 class="card-title">HR Specialists &amp; Account Team</h2><p class="card-sub">Full team directory</p></div></div>
    <div class="team-grid">${cards}</div></div>
  `;
}

function renderProducts() {
  const q = state.productSearch.toLowerCase();
  const filtered = programCatalog.filter(a => a.name.toLowerCase().includes(q) || a.facility.toLowerCase().includes(q));
  const stats = [
    { icon: "layers", value: "8", label: "Programs Catalogued", bar: 75, accent: true },
    { icon: "flask-conical", value: "3", label: "In Development", bar: 55 },
    { icon: "star", value: "2", label: "Featured", bar: 30 },
    { icon: "refresh-cw", value: "1", label: "Recently Updated", bar: 20 }
  ];
  const statsHtml = stats.map(s =>
    `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
      <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
      <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
      <div class="stat-bar"><div class="stat-bar-fill" data-w="${s.bar}"></div></div>
    </div>`
  ).join("");

  const badgeBg = { "Bestseller": "rgba(192,146,63,0.2)", "Featured": "rgba(154,165,177,0.18)", "Active": "rgba(143,174,124,0.18)", "Updated": "rgba(227,180,99,0.18)" };
  const badgeColor = { "Bestseller": "#E3B463", "Featured": "#C9D3D9", "Active": "#B7CBA9", "Updated": "#F3D9A8" };

  const rows = filtered.map(a =>
    `<tr>
      <td class="type-col" style="font-size:11.5px;font-family:var(--mono)">${a.id}</td>
      <td><div class="t-name">${a.name}</div><div class="t-sub">${a.facility}</div></td>
      <td class="date-col">${a.category}</td>
      <td class="date-col">${a.date}</td>
      <td><span style="color:${stockColor[a.stock]};font-weight:700;font-size:12px">${a.stock}</span></td>
      <td><span class="status-badge" style="background:${badgeBg[a.status]};color:${badgeColor[a.status]}">${a.status}</span></td>
    </tr>`
  ).join("");

  return `
    <section class="stats-grid">${statsHtml}</section>
    <div class="card">
      <div class="card-header"><div><h2 class="card-title">Program Registry</h2><p class="card-sub">Service programs across all client accounts</p></div>
      <div class="search-box" style="flex:0 0 auto"><span class="search-icon"><i data-lucide="search"></i></span><input id="product-search-input" placeholder="Search programs…" value="${state.productSearch}"></div></div>
      <div class="table-wrapper"><table class="runs-table"><thead><tr><th>Code</th><th>Program</th><th>Category</th><th>Launch Date</th><th>Client Demand</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>
    </div>
  `;
}

function renderReports() {
  const stats = [
    { icon: "clipboard-check", value: hrInsights.length, label: "Active Articles", bar: 80, accent: true },
    { icon: "badge-check", value: hrInsights.filter(p => p.status === "Published").length, label: "Published", bar: 70 },
    { icon: "hourglass", value: hrInsights.filter(p => p.status === "In Review").length, label: "In Review", bar: 20 },
    { icon: "eye", value: hrInsights.reduce((a, p) => a + p.reads, 0), label: "Total Reads", bar: 60 }
  ];
  const statsHtml = stats.map(s =>
    `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
      <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
      <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
      <div class="stat-bar"><div class="stat-bar-fill" data-w="${s.bar}"></div></div>
    </div>`
  ).join("");

  const cards = hrInsights.map(p =>
    `<div class="research-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap">
        <div style="flex:1;min-width:180px">
          <div style="font-weight:700;color:#fff;font-size:14px;margin-bottom:4px">${p.title}</div>
          <div style="font-size:12.5px;color:var(--text-dim);margin-bottom:6px">${p.authors}</div>
          <div style="font-size:12px;color:var(--text-dimmer)">${p.journal} · ${p.year}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0">
          <span style="background:${reportStatusColor[p.status]}22;color:${reportStatusColor[p.status]};border-radius:999px;padding:3px 10px;font-family:var(--mono);font-size:10.5px;font-weight:700;text-transform:uppercase">${p.status}</span>
          ${p.reads > 0 ? `<span style="font-size:12px;color:var(--text-dim)">${p.reads} reads</span>` : ''}
        </div>
      </div>
    </div>`
  ).join("");

  return `
    <section class="stats-grid">${statsHtml}</section>
    <div class="card"><div class="card-header"><div><h2 class="card-title">HR Insights</h2><p class="card-sub">Active articles and submissions</p></div></div>
    <div style="display:flex;flex-direction:column;gap:14px">${cards}</div></div>
  `;
}

function renderSchedule() {
  const rows = scheduleEvents.map(ev => {
    const parts = ev.date.split(" ");
    let tag = "";
    if (ev.type === "urgent") tag = `<span class="evt-tag" style="background:rgba(201,123,99,0.2);color:#F0BDAE">Urgent</span>`;
    if (ev.type === "meeting") tag = `<span class="evt-tag" style="background:rgba(154,165,177,0.2);color:#C9D3D9">Meeting</span>`;
    return `<div class="schedule-row">
      <div style="width:50px;flex-shrink:0;text-align:center">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:${scheduleTypeColor[ev.type]};text-transform:uppercase;letter-spacing:0.04em">${parts[0]}</div>
        <div style="font-family:var(--display);font-size:18px;color:#EDE6D8">${parts[1]}</div>
      </div>
      <div style="width:3px;align-self:stretch;border-radius:999px;background:${scheduleTypeColor[ev.type]};opacity:0.7;flex-shrink:0"></div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;color:#EDE6D8;font-size:13.5px">${ev.event}</div>
        <div style="font-size:12px;color:var(--text-dim);margin-top:3px">${ev.site}</div>
      </div>${tag}
    </div>`;
  }).join("");

  return `<div class="card"><div class="card-header"><div><h2 class="card-title">Client Calendar</h2><p class="card-sub">All upcoming go-lives, audits, and deadlines</p></div></div>
    <div style="display:flex;flex-direction:column;gap:4px">${rows}</div></div>`;
}

function renderBudget() {
  const totalAllocated = budgetData.reduce((a, b) => a + b.allocated, 0);
  const totalSpent = budgetData.reduce((a, b) => a + b.spent, 0);
  const remaining = totalAllocated - totalSpent;
  const utilRate = Math.round((totalSpent / totalAllocated) * 100);
  const stats = [
    { icon: "wallet", value: fmt(totalAllocated), label: "Total Allocated", bar: 100, accent: true },
    { icon: "credit-card", value: fmt(totalSpent), label: "Total Spent", bar: utilRate },
    { icon: "piggy-bank", value: fmt(remaining), label: "Remaining", bar: Math.round((remaining / totalAllocated) * 100) },
    { icon: "percent", value: utilRate + "%", label: "Utilisation Rate", bar: utilRate }
  ];
  const statsHtml = stats.map(s =>
    `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
      <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
      <div class="stat-value" style="font-size:22px">${s.value}</div><div class="stat-label">${s.label}</div>
      <div class="stat-bar"><div class="stat-bar-fill" data-w="${s.bar}"></div></div>
    </div>`
  ).join("");

  const rows = budgetData.map(b => {
    const pct = Math.round((b.spent / b.allocated) * 100);
    const barGrad = pct > 85 ? "linear-gradient(90deg,#C97B63,#E0A18F)" : "linear-gradient(123deg,#4A360F,#C0923F,#E3B463,#F3D48A)";
    return `<div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px">
        <div><span style="font-weight:700;color:#EDE6D8;font-size:13.5px">${b.site}</span>
        <span class="region-tag" style="margin-left:10px;color:${serviceLineAccents[b.facility]};border-color:${serviceLineAccents[b.facility]};background:${serviceLineAccents[b.facility]}22;font-size:10.5px">${b.facility}</span></div>
        <div style="text-align:right;font-size:12.5px;color:var(--text-dim)"><span style="color:#EDE6D8;font-weight:700;font-family:var(--mono)">${fmt(b.spent)}</span> / ${fmt(b.allocated)}
        <span style="margin-left:10px;color:${pct > 80 ? "#F0BDAE" : "#B7CBA9"};font-weight:700;font-family:var(--mono)">${pct}%</span></div>
      </div>
      <div style="height:8px;background:rgba(255,255,255,0.08);border-radius:999px;overflow:hidden">
        <div class="progress-fill" data-w="${pct}" style="background:${barGrad};height:100%;transition-delay:.3s"></div>
      </div>
    </div>`;
  }).join('<div style="height:18px"></div>');

  return `
    <section class="stats-grid">${statsHtml}</section>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Budget by Engagement</h2><p class="card-sub">Allocation vs spend</p></div></div>
    <div>${rows}</div></div>
  `;
}

function renderTraining() {
  const stats = [
    { icon: "book-open", value: resourceLibrary.length, label: "Resources", bar: 80, accent: true },
    { icon: "download", value: resourceLibrary.reduce((a, p) => a + p.downloads, 0).toLocaleString(), label: "Total Downloads", bar: 90 },
    { icon: "file-text", value: resourceLibrary.reduce((a, p) => a + p.pages, 0).toLocaleString(), label: "Total Pages", bar: 65 },
    { icon: "calendar-days", value: "2026", label: "Latest Year", bar: 100 }
  ];
  const statsHtml = stats.map(s =>
    `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
      <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
      <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
      <div class="stat-bar"><div class="stat-bar-fill" data-w="${s.bar}"></div></div>
    </div>`
  ).join("");

  const cards = resourceLibrary.map(pub =>
    `<div class="pub-card">
      <div style="width:30px;height:30px;color:var(--accent-2);margin-bottom:12px"><i data-lucide="file-text" style="width:26px;height:26px"></i></div>
      <div style="font-weight:700;color:#EDE6D8;font-size:14px;margin-bottom:6px;line-height:1.4">${pub.title}</div>
      <div style="font-size:12px;color:var(--text-dimmer);margin-bottom:14px">${pub.type} · ${pub.year} · ${pub.pages} pages</div>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <span style="font-family:var(--mono);font-size:11.5px;color:#E3B463;font-weight:700">${pub.downloads.toLocaleString()} downloads</span>
        <button class="btn-outline" style="padding:5px 12px;font-size:10.5px" onclick="go404()">View</button>
      </div>
    </div>`
  ).join("");

  return `
    <section class="stats-grid">${statsHtml}</section>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Resource Library</h2><p class="card-sub">Guides, playbooks, and compliance references</p></div></div>
    <div class="pub-grid">${cards}</div></div>
  `;
}

function toggleHtml(id, value) {
  return `<div class="toggle-switch" data-toggle="${id}" style="background:${value ? "#C0923F" : "rgba(255,255,255,0.14)"}">
    <div class="toggle-knob" style="left:${value ? "20px" : "3px"}"></div></div>`;
}

function renderSettings() {
  const s = state.settings;
  const displayName = currentUsername || currentEmail || "Signed out";
  const displayEmail = currentEmail || "No account signed in";
  return `
    <div class="card"><div class="card-header"><div><h2 class="card-title">Account</h2><p class="card-sub">Signed-in profile — shown wherever your account appears in the console</p></div></div>
      <div style="display:flex;align-items:center;gap:18px;margin-bottom:20px;flex-wrap:wrap">
        <div style="width:64px;height:64px;border-radius:50%;border:2px solid rgba(192,146,63,0.45);background:var(--accent-soft);color:var(--accent-2);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:24px;text-transform:uppercase;flex-shrink:0">${currentInitial}</div>
        <div><div style="font-weight:700;color:#EDE6D8;font-size:16px;text-transform:capitalize">${displayName}</div>
        <div style="font-size:13px;color:var(--text-dim);margin-top:2px">${displayEmail}</div>
        <div style="font-family:var(--mono);font-size:12px;color:#E3B463;margin-top:4px">${currentUser ? (currentUser.role === 'admin' ? 'Admin account' : 'Specialist account') : 'Not signed in'}</div></div>
      </div>
      <button class="btn-outline" style="border-color:#C0923F;color:#E3B463" onclick="go404()">Edit Profile</button>
    </div>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Preferences</h2><p class="card-sub">Notifications and display</p></div></div>
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
          <div><div style="font-weight:700;color:#EDE6D8;font-size:13.5px">Push Notifications</div><div style="font-size:12.5px;color:var(--text-dim);margin-top:2px">Receive alerts for status changes and deadline shifts</div></div>
          ${toggleHtml("notifications", s.notifications)}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
          <div><div style="font-weight:700;color:#EDE6D8;font-size:13.5px">Weekly Email Digest</div><div style="font-size:12.5px;color:var(--text-dim);margin-top:2px">Summary of engagement activity sent every Monday</div></div>
          ${toggleHtml("emailDigest", s.emailDigest)}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
          <div><div style="font-weight:700;color:#EDE6D8;font-size:13.5px">Dark Mode</div><div style="font-size:12.5px;color:var(--text-dim);margin-top:2px">Use dark colour scheme across the console</div></div>
          ${toggleHtml("darkMode", s.darkMode)}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:18px">
          <div><div style="font-weight:700;color:#EDE6D8;font-size:13.5px">Language</div><div style="font-size:12.5px;color:var(--text-dim);margin-top:2px">Interface display language</div></div>
          <select class="pref-select" id="lang-select">${["English", "French", "Spanish", "Mandarin", "Portuguese"].map(l => `<option ${s.language === l ? "selected" : ""}>${l}</option>`).join("")}</select>
        </div>
      </div>
    </div>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Session</h2><p class="card-sub">Sign out of this account on this device</p></div></div>
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px">
        <div style="font-size:12.5px;color:var(--text-dim)">Signed in as <strong style="color:#EDE6D8">${displayEmail}</strong>. Logging out will clear this session and return you to the sign-in screen.</div>
        <button class="btn-outline" style="border-color:rgba(201,123,99,0.4);color:#F0BDAE;flex-shrink:0" id="settings-logout-btn">Logout</button>
      </div>
    </div>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Danger Zone</h2><p class="card-sub">Irreversible account actions</p></div></div>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <button class="btn-outline" style="border-color:rgba(201,123,99,0.4);color:#F0BDAE" onclick="go404()">Reset Password</button>
        <button class="btn-outline" style="border-color:rgba(201,123,99,0.4);color:#F0BDAE" onclick="go404()">Delete Account</button>
      </div>
    </div>
  `;
}

const pageRenderers = {
  dashboard: renderDashboard,
  runs: renderRuns,
  teams: renderTeams,
  products: renderProducts,
  reports: renderReports,
  schedule: renderSchedule,
  budget: renderBudget,
  training: renderTraining,
  settings: renderSettings
};

function renderNav() {
  const mainItems = navItems.slice(0, 6);
  const mgmtItems = navItems.slice(6);
  function itemHtml(item) {
    const badge = item.id === "runs" ? `<span class="nav-badge">8</span>` : "";
    return `<button class="nav-item ${state.activeNav === item.id ? "nav-active" : ""}" data-nav="${item.id}">
      <span class="nav-icon"><i data-lucide="${item.icon}"></i></span><span>${item.label}</span>${badge}</button>`;
  }
  document.getElementById("nav-main").innerHTML = mainItems.map(itemHtml).join("");
  document.getElementById("nav-management").innerHTML = mgmtItems.map(itemHtml).join("");
}

function renderPage() {
  const page = pageMap[state.activeNav];
  document.getElementById("page-title-text").textContent = page.title;
  document.getElementById("page-sub-text").textContent = page.sub;
  document.getElementById("content-area").innerHTML = pageRenderers[state.activeNav]();
  renderNav();
  const settingsLogoutBtn = document.getElementById("settings-logout-btn");
  if (settingsLogoutBtn) settingsLogoutBtn.addEventListener("click", logout);
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  animateStatBars();
  if (window.lucide) lucide.createIcons();
}

function navigateTo(id) {
  state.activeNav = id;
  closeSidebar();
  closeTopbarUserMenu();
  renderPage();
}

function openSidebar() {
  document.getElementById("sidebar").classList.add("sidebar-open");
  document.getElementById("sidebar-overlay").classList.add("show");
}
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("sidebar-open");
  document.getElementById("sidebar-overlay").classList.remove("show");
}
function closeTopbarUserMenu() {
  document.getElementById("topbar-user").classList.remove("open");
}

document.getElementById("hamburger-btn").addEventListener("click", openSidebar);
document.getElementById("close-sidebar-btn").addEventListener("click", closeSidebar);
document.getElementById("sidebar-overlay").addEventListener("click", closeSidebar);
document.getElementById("notif-btn").addEventListener("click", go404);
document.getElementById("logout-btn").addEventListener("click", logout);
document.getElementById("topbar-logout-btn").addEventListener("click", logout);
document.getElementById("topbar-user-btn").addEventListener("click", function(e) {
  e.stopPropagation();
  document.getElementById("topbar-user").classList.toggle("open");
});
document.addEventListener("click", closeTopbarUserMenu);

document.addEventListener("click", function(e) {
  const navBtn = e.target.closest("[data-nav]");
  if (navBtn) { navigateTo(navBtn.getAttribute("data-nav")); return; }
  const filterBtn = e.target.closest(".run-filter-btn");
  if (filterBtn) { state.runFilter = filterBtn.getAttribute("data-filter"); renderPage(); return; }
  const toggle = e.target.closest("[data-toggle]");
  if (toggle) {
    const key = toggle.getAttribute("data-toggle");
    state.settings[key] = !state.settings[key];
    renderPage();
    return;
  }
});

document.addEventListener("input", function(e) {
  if (e.target && e.target.id === "product-search-input") {
    state.productSearch = e.target.value;
    const caretPos = e.target.selectionStart;
    renderPage();
    const input = document.getElementById("product-search-input");
    if (input) { input.focus(); input.setSelectionRange(caretPos, caretPos); }
  }
});

document.addEventListener("change", function(e) {
  if (e.target && e.target.id === "lang-select") {
    state.settings.language = e.target.value;
  }
});

paintUserChrome();
renderPage();
if (window.lucide) lucide.createIcons();