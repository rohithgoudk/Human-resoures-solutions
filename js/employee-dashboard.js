const officeAccents = {
  "Bengaluru, IN": "#00C48C",
  "Pune, IN": "#7CD859",
  "Hyderabad, IN": "#FFD400",
  "Chennai, IN": "#4FB6FF",
  "Mumbai, IN": "#FF8FD8",
  "Gurugram, IN": "#9AA5B1"
};
const requisitions = [
  { id: 1, name: "Senior Backend Engineer — Platform Team", office: "Bengaluru, IN", site: "Bengaluru, IN", type: "Engineering", status: "Interviewing", progress: 72, endDate: "Dec 2025", budget: "₹32L–₹40L", manager: "Ananya Sharma" },
  { id: 2, name: "Regional Sales Manager — Enterprise Accounts", office: "Mumbai, IN", site: "Mumbai, IN", type: "Sales", status: "Sourcing", progress: 38, endDate: "Aug 2025", budget: "₹24L–₹30L", manager: "Rohan Kapoor" },
  { id: 3, name: "HR Business Partner — Operations", office: "Hyderabad, IN", site: "Hyderabad, IN", type: "Human Resources", status: "Filled", progress: 100, endDate: "Mar 2025", budget: "₹18L–₹22L", manager: "Priya Nair" },
  { id: 4, name: "Product Marketing Manager", office: "Chennai, IN", site: "Chennai, IN", type: "Marketing", status: "Interviewing", progress: 55, endDate: "Nov 2025", budget: "₹20L–₹26L", manager: "Divya Menon" },
  { id: 5, name: "Customer Success Lead — SMB Segment", office: "Gurugram, IN", site: "Gurugram, IN", type: "Customer Support", status: "Offer Stage", progress: 89, endDate: "Jul 2025", budget: "₹16L–₹20L", manager: "Aditya Verma" },
  { id: 6, name: "Finance Analyst — FP&A", office: "Pune, IN", site: "Pune, IN", type: "Finance", status: "Interviewing", progress: 61, endDate: "Oct 2025", budget: "₹12L–₹15L", manager: "Sneha Joshi" },
  { id: 7, name: "Data Engineer — Analytics Platform", office: "Bengaluru, IN", site: "Bengaluru, IN", type: "Engineering", status: "Sourcing", progress: 45, endDate: "Sep 2025", budget: "₹22L–₹28L", manager: "Ananya Sharma" },
  { id: 8, name: "Talent Acquisition Specialist", office: "Mumbai, IN", site: "Mumbai, IN", type: "Human Resources", status: "Interviewing", progress: 28, endDate: "Nov 2025", budget: "₹10L–₹13L", manager: "Rohan Kapoor" }
];
const hrTeam = [
  { name: "Ananya Sharma", role: "Senior Technical Recruiter — Bengaluru, IN", experience: 8, avatar: "AS", status: "active", projects: 2, speciality: "Engineering Hiring", email: "a.sharma@talently.com" },
  { name: "Rohan Kapoor", role: "Recruiter — Sales & GTM, Mumbai, IN", experience: 6, avatar: "RK", status: "active", projects: 2, speciality: "Sales & GTM Hiring", email: "r.kapoor@talently.com" },
  { name: "Priya Nair", role: "HR Business Partner — Hyderabad, IN", experience: 11, avatar: "PN", status: "away", projects: 2, speciality: "Employee Relations", email: "p.nair@talently.com" },
  { name: "Divya Menon", role: "Talent Partner — Marketing, Chennai, IN", experience: 5, avatar: "DM", status: "active", projects: 1, speciality: "Marketing & Brand Hiring", email: "d.menon@talently.com" },
  { name: "Aditya Verma", role: "Recruiter — Customer Success, Gurugram, IN", experience: 4, avatar: "AV", status: "active", projects: 1, speciality: "CS & Support Hiring", email: "a.verma@talently.com" },
  { name: "Sneha Joshi", role: "HRBP — Finance & Ops, Pune, IN", experience: 9, avatar: "SJ", status: "active", projects: 1, speciality: "Compensation & Payroll", email: "s.joshi@talently.com" },
  { name: "Karan Bhatt", role: "Head of Talent Acquisition — Bengaluru, IN", experience: 13, avatar: "KB", status: "active", projects: 2, speciality: "Hiring Strategy & Leadership", email: "k.bhatt@talently.com" }
];
const employeeDirectory = [
  { id: "EMP-001", name: "Rahul Verma", office: "Bengaluru, IN", category: "Engineering", date: "Jan 2023", engagement: "Excellent", status: "Top Performer" },
  { id: "EMP-002", name: "Ishita Rao", office: "Mumbai, IN", category: "Sales", date: "Jun 2023", engagement: "Good", status: "Active" },
  { id: "EMP-003", name: "Farhan Ali", office: "Hyderabad, IN", category: "Human Resources", date: "Mar 2024", engagement: "Needs Attention", status: "New Hire" },
  { id: "EMP-004", name: "Neha Kulkarni", office: "Chennai, IN", category: "Marketing", date: "Sep 2023", engagement: "Excellent", status: "Top Performer" },
  { id: "EMP-005", name: "Vikas Choudhary", office: "Gurugram, IN", category: "Customer Support", date: "Nov 2024", engagement: "Good", status: "Active" },
  { id: "EMP-006", name: "Meenal Deshpande", office: "Pune, IN", category: "Finance", date: "Feb 2022", engagement: "Good", status: "Active" },
  { id: "EMP-007", name: "Arjun Reddy", office: "Bengaluru, IN", category: "Engineering", date: "Dec 2024", engagement: "Excellent", status: "Promoted" },
  { id: "EMP-008", name: "Tanvi Shah", office: "Mumbai, IN", category: "Human Resources", date: "Jul 2024", engagement: "Good", status: "Active" }
];
const performanceReviews = [
  { title: "Engineering Org — Q2 2025 Calibration Summary", authors: "Sharma, A. et al.", journal: "Performance Review Cycle", year: 2025, status: "Published", reads: 128 },
  { title: "Sales Incentive Plan Effectiveness Review", authors: "Kapoor, R., Menon, D.", journal: "Compensation Committee Report", year: 2025, status: "Published", reads: 64 },
  { title: "Attrition Analysis: Customer Support Team", authors: "Verma, A. et al.", journal: "Internal HR Report", year: 2025, status: "In Review", reads: 0 },
  { title: "Manager Effectiveness Survey — Annual Findings", authors: "Bhatt, K., Nair, P.", journal: "Leadership Development Report", year: 2024, status: "Published", reads: 210 },
  { title: "Diversity & Inclusion Progress Report", authors: "Nair, P., Joshi, S.", journal: "People Analytics Bulletin", year: 2024, status: "Published", reads: 305 },
  { title: "Remote Work Productivity Study — Draft", authors: "Sharma, A. et al.", journal: "Internal HR Report", year: 2025, status: "In Draft", reads: 0 }
];
const hrCalendar = [
  { date: "Jun 21", event: "New hire onboarding — Engineering cohort begins", site: "Bengaluru, IN", type: "urgent" },
  { date: "Jun 25", event: "Quarterly HRBP review — Hyderabad office", site: "Hyderabad, IN", type: "normal" },
  { date: "Jul 2", event: "Payroll audit & compliance check", site: "Mumbai, IN", type: "normal" },
  { date: "Jul 10", event: "Team debrief: Q2 performance calibration final review", site: "Virtual", type: "meeting" },
  { date: "Jul 18", event: "Sales team engagement survey rollout", site: "Mumbai, IN", type: "normal" },
  { date: "Aug 5", event: "Customer Support offer stage final review", site: "Gurugram, IN", type: "normal" },
  { date: "Aug 14", event: "Annual HR leadership summit", site: "Bengaluru, IN", type: "meeting" },
  { date: "Sep 1", event: "Finance team — returns after restructuring", site: "Pune, IN", type: "normal" },
  { date: "Oct 15", event: "Engineering headcount plan deadline", site: "Bengaluru, IN", type: "urgent" }
];
const payrollBudget = [
  { site: "Engineering Hiring & Payroll", allocated: 20500000, spent: 12840000, office: "Bengaluru, IN" },
  { site: "Sales Team Compensation Plan", allocated: 18200000, spent: 9080000, office: "Mumbai, IN" },
  { site: "HR Business Partner Program", allocated: 2750000, spent: 2750000, office: "Hyderabad, IN" },
  { site: "Marketing Talent Acquisition", allocated: 13900000, spent: 9010000, office: "Chennai, IN" },
  { site: "Customer Support Upskilling", allocated: 3580000, spent: 2510000, office: "Gurugram, IN" },
  { site: "Finance & Ops Compensation", allocated: 15200000, spent: 9980000, office: "Pune, IN" },
  { site: "L&D and Employee Engagement", allocated: 11100000, spent: 5320000, office: "Bengaluru, IN" }
];
const policyLibrary = [
  { title: "Employee Handbook 2025 Edition", type: "Handbook", year: 2025, pages: 96, downloads: 4210 },
  { title: "Code of Conduct & Workplace Ethics Policy", type: "Policy Document", year: 2024, pages: 42, downloads: 3890 },
  { title: "Manager's Guide to Performance Conversations", type: "Guide", year: 2024, pages: 128, downloads: 2670 },
  { title: "Leave, Benefits & Payroll Reference Guide", type: "Reference Guide", year: 2025, pages: 74, downloads: 5120 },
  { title: "Diversity, Equity & Inclusion Playbook", type: "Playbook", year: 2023, pages: 156, downloads: 1980 }
];
const hrFeed = [
  { text: "Bengaluru engineering team crossed a 95% offer acceptance rate this quarter", time: "2h ago", type: "milestone" },
  { text: "Record employee referral submissions across the Mumbai office", time: "4h ago", type: "performance" },
  { text: "HR Business Partner program rollout completed — final report published", time: "Yesterday", type: "complete" },
  { text: "Payroll processing delay flagged for the Hyderabad office — resolved", time: "Yesterday", type: "alert" },
  { text: "New wellness benefits package unlocks fresh engagement opportunity for the Gurugram team", time: "2d ago", type: "update" },
  { text: "Q3 hiring targets exceeded across three departments", time: "3d ago", type: "milestone" },
  { text: "New onboarding checklist launched across the Chennai marketing team", time: "4d ago", type: "update" }
];
const navIcons = {
  dashboard: "layout-dashboard", runs: "briefcase", teams: "users", products: "id-card",
  reports: "clipboard-check", schedule: "calendar", budget: "wallet", training: "book-open", settings: "settings"
};
const navItems = [
  { icon: navIcons.dashboard, label: "Dashboard", id: "dashboard" },
  { icon: navIcons.runs, label: "Requisitions", id: "runs" },
  { icon: navIcons.teams, label: "HR Team", id: "teams" },
  { icon: navIcons.products, label: "Employee Directory", id: "products" },
  { icon: navIcons.reports, label: "Performance Reviews", id: "reports" },
  { icon: navIcons.schedule, label: "HR Calendar", id: "schedule" },
  { icon: navIcons.budget, label: "Payroll & Budget", id: "budget" },
  { icon: navIcons.training, label: "Policy Library", id: "training" },
  { icon: navIcons.settings, label: "Settings", id: "settings" }
];
const statusColors = { "Interviewing": "status-active", "Sourcing": "status-field", "Filled": "status-complete", "Offer Stage": "status-review" };
const engagementColor = { "Excellent": "#3ddc84", "Good": "#FFD400", "Needs Attention": "#FF5C5C" };
const reportStatusColor = { "Published": "#3ddc84", "In Review": "#FFD400", "In Draft": "#9AA5B1" };
const scheduleTypeColor = { urgent: "#FF5C5C", normal: "#00C48C", meeting: "#9AA5B1" };
const pageMap = {
  dashboard: { title: "Dashboard", sub: "" },
  runs:      { title: "Requisitions", sub: "" },
  teams:     { title: "HR Team", sub: "" },
  products:  { title: "Employees", sub: "" },
  reports:   { title: "Reviews", sub: "" },
  schedule:  { title: "Calendar", sub: "" },
  budget:    { title: "Budget", sub: "" },
  training:  { title: "Policies", sub: "" },
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

function fmt(n) { return "₹" + n.toLocaleString('en-IN'); }
function go404() { window.location.href = "404.html"; }

function regionTag(office) {
  const c = officeAccents[office] || "#00C48C";
  return `<span class="region-tag" style="color:${c};border-color:${c};background:${c}22;">${office}</span>`;
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

function renderDashboard() {
  const stats = [
    { icon: "briefcase", delta: "+3 this month", value: "8", label: "Open Requisitions", bar: 72, accent: true },
    { icon: "user-plus", delta: "+18 this week", value: "142", label: "Employees Onboarded", bar: 64 },
    { icon: "wallet", delta: "On track", value: "₹8.4Cr", label: "Total Payroll Budget", bar: 88 },
    { icon: "building-2", delta: "+2 this quarter", value: "6", label: "Active Offices", bar: 90 }
  ];
  const statsHtml = stats.map(s =>
    `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
      <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span><span class="stat-delta up">${s.delta}</span></div>
      <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
      <div class="stat-bar"><div class="stat-bar-fill" data-w="${s.bar}"></div></div>
    </div>`
  ).join("");

  const rows = requisitions.slice(0, 5).map(t =>
    `<tr>
      <td><div class="t-name">${t.name}</div><div class="t-sub">${t.site} · ${t.manager}</div></td>
      <td>${regionTag(t.office)}</td>
      <td class="type-col">${t.type}</td>
      <td><span class="status-badge ${statusColors[t.status]}">${t.status}</span></td>
      <td><div class="progress-wrap"><div class="progress-bar"><div class="progress-fill" data-w="${t.progress}"></div></div><span class="progress-pct">${t.progress}%</span></div></td>
      <td class="date-col">${t.endDate}</td>
      <td class="budget-col">${t.budget}</td>
    </tr>`
  ).join("");

  const feedIcons = { milestone: "trophy", performance: "trending-up", complete: "check-circle-2", alert: "alert-triangle", update: "sparkles" };
  const feedHtml = hrFeed.map(a =>
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
    { site: "Bengaluru Engineering", event: "New hire onboarding cohort", date: "Jun 21", done: false, urgent: true },
    { site: "Hyderabad Office", event: "Quarterly HRBP review", date: "Jun 25", done: false, urgent: false },
    { site: "Mumbai Office", event: "Payroll audit & compliance check", date: "Jul 2", done: false, urgent: false },
    { site: "Gurugram Office", event: "Offer stage final review", date: "Aug 05", done: false, urgent: false },
    { site: "HRBP Program", event: "Final report submitted", date: "Jun 14", done: true, urgent: false }
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
    { color: "#00C48C", label: "Engineering", count: 2 },
    { color: "#7CD859", label: "Sales", count: 1 },
    { color: "#FFD400", label: "Human Resources", count: 2 },
    { color: "#4FB6FF", label: "Marketing", count: 1 },
    { color: "#FF8FD8", label: "Customer Support", count: 1 },
    { color: "#9AA5B1", label: "Finance", count: 1 }
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
    <section class="mid-grid">
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Open Requisitions</h2><p class="card-sub">Current hiring pipeline overview</p></div></div>
        <div class="table-wrapper"><table class="runs-table"><thead><tr><th>Role</th><th>Office</th><th>Department</th><th>Stage</th><th>Progress</th><th>Target Close</th><th>Salary Band</th></tr></thead><tbody>${rows}</tbody></table></div>
      </div>
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Live Feed</h2><p class="card-sub">People &amp; culture updates</p></div></div>
        <ul class="activity-list">${feedHtml}</ul>
      </div>
    </section>
    <section class="bottom-grid">
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">HR Team</h2><p class="card-sub">Recruiters &amp; business partners</p></div></div>
        <ul class="team-list">${teamHtml}</ul>
      </div>
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Upcoming Deadlines</h2><p class="card-sub">Next 60 days</p></div></div>
        <ul class="milestone-list">${msHtml}</ul>
      </div>
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Requisition Mix</h2><p class="card-sub">By department</p></div></div>
        <div class="donut-chart">
          <svg viewBox="0 0 120 120" class="donut-svg">
            <circle cx="60" cy="60" r="48" fill="none" stroke="#1b1d21" stroke-width="16"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#00C48C" stroke-width="16" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#7CD859" stroke-width="16" stroke-dashoffset="-52" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#FFD400" stroke-width="16" stroke-dashoffset="-94" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#4FB6FF" stroke-width="16" stroke-dashoffset="-132" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#FF8FD8" stroke-width="16" stroke-dashoffset="-166" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#9AA5B1" stroke-width="16" stroke-dashoffset="-196" stroke-linecap="round" transform="rotate(-90 60 60)"/>
            <text x="60" y="56" text-anchor="middle" class="donut-num">8</text>
            <text x="60" y="68" text-anchor="middle" class="donut-label">Roles Open</text>
          </svg>
        </div>
        <ul class="legend-list">${legendHtml}</ul>
      </div>
    </section>
  `;
}

function renderRuns() {
  const statuses = ["All", "Interviewing", "Sourcing", "Offer Stage", "Filled"];
  const filtered = state.runFilter === "All" ? requisitions : requisitions.filter(e => e.status === state.runFilter);
  const stats = [
    { icon: "briefcase", value: requisitions.length, label: "Total Roles Opened" },
    { icon: "check-circle-2", value: requisitions.filter(e => e.status === "Interviewing").length, label: "Interviewing Now", accent: true },
    { icon: "trending-up", value: requisitions.filter(e => e.status === "Sourcing").length, label: "Sourcing" },
    { icon: "user-check", value: requisitions.filter(e => e.status === "Filled").length, label: "Filled" }
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
      <td>${regionTag(t.office)}</td>
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
      <div class="card-header"><div><h2 class="card-title">All Requisitions</h2><p class="card-sub">Full list of open and recently closed roles</p></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">${filterHtml}</div></div>
      <div class="table-wrapper"><table class="runs-table"><thead><tr><th>Role</th><th>Office</th><th>Department</th><th>Stage</th><th>Progress</th><th>Recruiter</th><th>Target Close</th><th>Salary Band</th></tr></thead><tbody>${rows}</tbody></table></div>
    </div>
  `;
}

function renderTeams() {
  const stats = [
    { icon: "users", value: hrTeam.length, label: "Team Members", bar: 80 },
    { icon: "circle-dot", value: hrTeam.filter(m => m.status === "active").length, label: "Online Now", bar: 85, accent: true },
    { icon: "briefcase", value: hrTeam.reduce((a, m) => a + m.projects, 0), label: "Active Requisitions Owned", bar: 70 },
    { icon: "star", value: Math.round(hrTeam.reduce((a, m) => a + m.experience, 0) / hrTeam.length), label: "Avg. Yrs w/ Talently", bar: 75 }
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
        <div>${m.projects} active requisition${m.projects !== 1 ? "s" : ""} · ${m.experience} yrs experience</div>
      </div>
    </div>`
  ).join("");

  return `
    <section class="stats-grid">${statsHtml}</section>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Recruiters &amp; HR Business Partners</h2><p class="card-sub">Full team directory</p></div></div>
    <div class="team-grid">${cards}</div></div>
  `;
}

function renderProducts() {
  const q = state.productSearch.toLowerCase();
  const filtered = employeeDirectory.filter(a => a.name.toLowerCase().includes(q) || a.office.toLowerCase().includes(q));
  const stats = [
    { icon: "id-card", value: "2,847", label: "Total Employees", bar: 75, accent: true },
    { icon: "user-plus", value: "142", label: "New Hires (90d)", bar: 55 },
    { icon: "star", value: "89", label: "Top Performers", bar: 30 },
    { icon: "alert-circle", value: "34", label: "Flagged for Follow-Up", bar: 20 }
  ];
  const statsHtml = stats.map(s =>
    `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
      <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
      <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
      <div class="stat-bar"><div class="stat-bar-fill" data-w="${s.bar}"></div></div>
    </div>`
  ).join("");

  const badgeBg = { "Top Performer": "rgba(0,196,140,0.18)", "Promoted": "rgba(154,165,177,0.18)", "Active": "rgba(61,220,132,0.16)", "New Hire": "rgba(255,212,0,0.16)" };
  const badgeColor = { "Top Performer": "#7CD859", "Promoted": "#C9D3D9", "Active": "#8fe0ac", "New Hire": "#FFE68A" };

  const rows = filtered.map(a =>
    `<tr>
      <td class="type-col" style="font-size:11.5px;font-family:var(--mono)">${a.id}</td>
      <td><div class="t-name">${a.name}</div><div class="t-sub">${a.office}</div></td>
      <td class="date-col">${a.category}</td>
      <td class="date-col">${a.date}</td>
      <td><span style="color:${engagementColor[a.engagement]};font-weight:700;font-size:12px">${a.engagement}</span></td>
      <td><span class="status-badge" style="background:${badgeBg[a.status]};color:${badgeColor[a.status]}">${a.status}</span></td>
    </tr>`
  ).join("");

  return `
    <section class="stats-grid">${statsHtml}</section>
    <div class="card">
      <div class="card-header"><div><h2 class="card-title">Employee Directory</h2><p class="card-sub">Everyone catalogued across all offices</p></div>
      <div class="search-box" style="flex:0 0 auto"><span class="search-icon"><i data-lucide="search"></i></span><input id="product-search-input" placeholder="Search employees…" value="${state.productSearch}"></div></div>
      <div class="table-wrapper"><table class="runs-table"><thead><tr><th>ID</th><th>Employee</th><th>Department</th><th>Join Date</th><th>Engagement</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>
    </div>
  `;
}

function renderReports() {
  const stats = [
    { icon: "clipboard-check", value: performanceReviews.length, label: "Active Reviews", bar: 80, accent: true },
    { icon: "badge-check", value: performanceReviews.filter(p => p.status === "Published").length, label: "Published", bar: 70 },
    { icon: "hourglass", value: performanceReviews.filter(p => p.status === "In Review").length, label: "In Review", bar: 20 },
    { icon: "eye", value: performanceReviews.reduce((a, p) => a + p.reads, 0), label: "Total Views", bar: 60 }
  ];
  const statsHtml = stats.map(s =>
    `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
      <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
      <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
      <div class="stat-bar"><div class="stat-bar-fill" data-w="${s.bar}"></div></div>
    </div>`
  ).join("");

  const cards = performanceReviews.map(p =>
    `<div class="research-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap">
        <div style="flex:1;min-width:180px">
          <div style="font-weight:700;color:#fff;font-size:14px;margin-bottom:4px">${p.title}</div>
          <div style="font-size:12.5px;color:var(--text-dim);margin-bottom:6px">${p.authors}</div>
          <div style="font-size:12px;color:var(--text-dimmer)">${p.journal} · ${p.year}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0">
          <span style="background:${reportStatusColor[p.status]}22;color:${reportStatusColor[p.status]};border-radius:999px;padding:3px 10px;font-family:var(--mono);font-size:10.5px;font-weight:700;text-transform:uppercase">${p.status}</span>
          ${p.reads > 0 ? `<span style="font-size:12px;color:var(--text-dim)">${p.reads} views</span>` : ''}
        </div>
      </div>
    </div>`
  ).join("");

  return `
    <section class="stats-grid">${statsHtml}</section>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Performance Reviews</h2><p class="card-sub">Active review cycles and submissions</p></div></div>
    <div style="display:flex;flex-direction:column;gap:14px">${cards}</div></div>
  `;
}

function renderSchedule() {
  const rows = hrCalendar.map(ev => {
    const parts = ev.date.split(" ");
    let tag = "";
    if (ev.type === "urgent") tag = `<span class="evt-tag" style="background:rgba(255,92,92,0.18);color:#FFB3AC">Urgent</span>`;
    if (ev.type === "meeting") tag = `<span class="evt-tag" style="background:rgba(154,165,177,0.2);color:#C9D3D9">Meeting</span>`;
    return `<div class="schedule-row">
      <div style="width:50px;flex-shrink:0;text-align:center">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:${scheduleTypeColor[ev.type]};text-transform:uppercase;letter-spacing:0.04em">${parts[0]}</div>
        <div style="font-family:var(--display);font-size:18px;color:#D7E2EA">${parts[1]}</div>
      </div>
      <div style="width:3px;align-self:stretch;border-radius:999px;background:${scheduleTypeColor[ev.type]};opacity:0.7;flex-shrink:0"></div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;color:#D7E2EA;font-size:13.5px">${ev.event}</div>
        <div style="font-size:12px;color:var(--text-dim);margin-top:3px">${ev.site}</div>
      </div>${tag}
    </div>`;
  }).join("");

  return `<div class="card"><div class="card-header"><div><h2 class="card-title">HR Calendar</h2><p class="card-sub">All upcoming onboarding, audits, and deadlines</p></div></div>
    <div style="display:flex;flex-direction:column;gap:4px">${rows}</div></div>`;
}

function renderBudget() {
  const totalAllocated = payrollBudget.reduce((a, b) => a + b.allocated, 0);
  const totalSpent = payrollBudget.reduce((a, b) => a + b.spent, 0);
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

  const rows = payrollBudget.map(b => {
    const pct = Math.round((b.spent / b.allocated) * 100);
    const barGrad = pct > 85 ? "linear-gradient(90deg,#FF5C5C,#FF9B8A)" : "linear-gradient(123deg,#063927,#00C48C,#7CD859,#FFD400)";
    return `<div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px">
        <div><span style="font-weight:700;color:#D7E2EA;font-size:13.5px">${b.site}</span>
        <span class="region-tag" style="margin-left:10px;color:${officeAccents[b.office]};border-color:${officeAccents[b.office]};background:${officeAccents[b.office]}22;font-size:10.5px">${b.office}</span></div>
        <div style="text-align:right;font-size:12.5px;color:var(--text-dim)"><span style="color:#D7E2EA;font-weight:700;font-family:var(--mono)">${fmt(b.spent)}</span> / ${fmt(b.allocated)}
        <span style="margin-left:10px;color:${pct > 80 ? "#FFB3AC" : "#7CD859"};font-weight:700;font-family:var(--mono)">${pct}%</span></div>
      </div>
      <div style="height:8px;background:rgba(255,255,255,0.08);border-radius:999px;overflow:hidden">
        <div class="progress-fill" data-w="${pct}" style="background:${barGrad};height:100%;transition-delay:.3s"></div>
      </div>
    </div>`;
  }).join('<div style="height:18px"></div>');

  return `
    <section class="stats-grid">${statsHtml}</section>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Payroll Budget by Department</h2><p class="card-sub">Allocation vs spend</p></div></div>
    <div>${rows}</div></div>
  `;
}

function renderTraining() {
  const stats = [
    { icon: "book-open", value: policyLibrary.length, label: "Policies & Guides", bar: 80, accent: true },
    { icon: "download", value: policyLibrary.reduce((a, p) => a + p.downloads, 0).toLocaleString(), label: "Total Downloads", bar: 90 },
    { icon: "file-text", value: policyLibrary.reduce((a, p) => a + p.pages, 0).toLocaleString(), label: "Total Pages", bar: 65 },
    { icon: "calendar-days", value: "2025", label: "Latest Year", bar: 100 }
  ];
  const statsHtml = stats.map(s =>
    `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
      <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
      <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
      <div class="stat-bar"><div class="stat-bar-fill" data-w="${s.bar}"></div></div>
    </div>`
  ).join("");

  const cards = policyLibrary.map(pub =>
    `<div class="pub-card">
      <div style="width:30px;height:30px;color:var(--accent-2);margin-bottom:12px"><i data-lucide="file-text" style="width:26px;height:26px"></i></div>
      <div style="font-weight:700;color:#D7E2EA;font-size:14px;margin-bottom:6px;line-height:1.4">${pub.title}</div>
      <div style="font-size:12px;color:var(--text-dimmer);margin-bottom:14px">${pub.type} · ${pub.year} · ${pub.pages} pages</div>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <span style="font-family:var(--mono);font-size:11.5px;color:#7CD859;font-weight:700">${pub.downloads.toLocaleString()} downloads</span>
        <button class="btn-outline" style="padding:5px 12px;font-size:10.5px" onclick="go404()">View</button>
      </div>
    </div>`
  ).join("");

  return `
    <section class="stats-grid">${statsHtml}</section>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Policy Library</h2><p class="card-sub">Handbooks, playbooks, and reference guides</p></div></div>
    <div class="pub-grid">${cards}</div></div>
  `;
}

function toggleHtml(id, value) {
  return `<div class="toggle-switch" data-toggle="${id}" style="background:${value ? "#00C48C" : "rgba(255,255,255,0.14)"}">
    <div class="toggle-knob" style="left:${value ? "20px" : "3px"}"></div></div>`;
}

function renderSettings() {
  const s = state.settings;
  const displayName = currentUsername || currentEmail || "Signed out";
  const displayEmail = currentEmail || "No account signed in";
  return `
    <div class="card"><div class="card-header"><div><h2 class="card-title">Account</h2><p class="card-sub">Signed-in profile — shown wherever your account appears in the console</p></div></div>
      <div style="display:flex;align-items:center;gap:18px;margin-bottom:20px;flex-wrap:wrap">
        <div style="width:64px;height:64px;border-radius:50%;border:2px solid rgba(0,196,140,0.4);background:var(--accent-soft);color:var(--accent-2);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:24px;text-transform:uppercase;flex-shrink:0">${currentInitial}</div>
        <div><div style="font-weight:700;color:#D7E2EA;font-size:16px;text-transform:capitalize">${displayName}</div>
        <div style="font-size:13px;color:var(--text-dim);margin-top:2px">${displayEmail}</div>
        <div style="font-family:var(--mono);font-size:12px;color:#7CD859;margin-top:4px">${currentUser ? (currentUser.role === 'admin' ? 'HR Admin account' : 'Team member account') : 'Not signed in'}</div></div>
      </div>
      <button class="btn-outline" style="border-color:#00C48C;color:#7CD859" onclick="go404()">Edit Profile</button>
    </div>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Preferences</h2><p class="card-sub">Notifications and display</p></div></div>
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
          <div><div style="font-weight:700;color:#D7E2EA;font-size:13.5px">Push Notifications</div><div style="font-size:12.5px;color:var(--text-dim);margin-top:2px">Receive alerts for stage changes and deadline shifts</div></div>
          ${toggleHtml("notifications", s.notifications)}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
          <div><div style="font-weight:700;color:#D7E2EA;font-size:13.5px">Weekly Email Digest</div><div style="font-size:12.5px;color:var(--text-dim);margin-top:2px">Summary of hiring activity sent every Monday</div></div>
          ${toggleHtml("emailDigest", s.emailDigest)}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
          <div><div style="font-weight:700;color:#D7E2EA;font-size:13.5px">Dark Mode</div><div style="font-size:12.5px;color:var(--text-dim);margin-top:2px">Use dark colour scheme across the console</div></div>
          ${toggleHtml("darkMode", s.darkMode)}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:18px">
          <div><div style="font-weight:700;color:#D7E2EA;font-size:13.5px">Language</div><div style="font-size:12.5px;color:var(--text-dim);margin-top:2px">Interface display language</div></div>
          <select class="pref-select" id="lang-select">${["English", "Hindi", "French", "Spanish", "Portuguese"].map(l => `<option ${s.language === l ? "selected" : ""}>${l}</option>`).join("")}</select>
        </div>
      </div>
    </div>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Session</h2><p class="card-sub">Sign out of this account on this device</p></div></div>
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px">
        <div style="font-size:12.5px;color:var(--text-dim)">Signed in as <strong style="color:#D7E2EA">${displayEmail}</strong>. Logging out will clear this session and return you to the sign-in screen.</div>
        <button class="btn-outline" style="border-color:rgba(255,92,92,0.4);color:#FFB3AC;flex-shrink:0" id="settings-logout-btn">Logout</button>
      </div>
    </div>
    <div class="card"><div class="card-header"><div><h2 class="card-title">Danger Zone</h2><p class="card-sub">Irreversible account actions</p></div></div>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <button class="btn-outline" style="border-color:rgba(255,92,92,0.4);color:#FFB3AC" onclick="go404()">Reset Password</button>
        <button class="btn-outline" style="border-color:rgba(255,92,92,0.4);color:#FFB3AC" onclick="go404()">Delete Account</button>
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
  document.body.classList.add("no-scroll");
}
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("sidebar-open");
  document.getElementById("sidebar-overlay").classList.remove("show");
  document.body.classList.remove("no-scroll");
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

// Close mobile sidebar automatically if the viewport is resized back to desktop
window.addEventListener("resize", function() {
  if (window.innerWidth > 1024) closeSidebar();
});

paintUserChrome();
renderPage();
if (window.lucide) lucide.createIcons();