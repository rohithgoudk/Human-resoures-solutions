// ------------------- STACKLY ADMIN THEME DATA --------------------
const officeAccents = {
    "New York, NY": "#C0923F",
    "Austin, TX": "#6E93B0",
    "London, UK": "#8FAE7C",
    "Toronto, CA": "#B98CA3",
    "Singapore": "#E3B463",
    "Sydney, AU": "#9AA5B1"
  };
  const teamSnapshot = [
    { src: "../assets/i4.webp", tag: "Payroll", title: "Payroll Ops Review — New York HQ" },
    { src: "../assets/b4.webp", tag: "Talent", title: "Search Pipeline Sync — London" },
    { src: "../assets/S4.webp", tag: "Benefits", title: "Carrier Negotiation — Toronto" },
    { src: "../assets/A4.webp", tag: "Onboarding", title: "New Admin Orientation — Austin" },
    { src: "../assets/S8.webp", tag: "Analytics", title: "Platform Reporting Review — Singapore" }
  ];
  
  // ---------- STACKLY ADMIN DATA ----------
  const adminUsers = [
    { name: "Elena Marsh", email: "e.marsh@stackly.com", role: "Onboarding Ops Lead", facility: "New York, NY", status: "Active", lastLogin: "1h ago", joined: "Jan 2021" },
    { name: "Diego Torres", email: "d.torres@stackly.com", role: "Payroll Ops Lead", facility: "Austin, TX", status: "Active", lastLogin: "30m ago", joined: "Mar 2019" },
    { name: "Amara Osei", email: "a.osei@stackly.com", role: "Talent Ops Lead", facility: "London, UK", status: "Active", lastLogin: "2h ago", joined: "Jun 2020" },
    { name: "Ben Whitfield", email: "b.whitfield@stackly.com", role: "Benefits Ops Lead", facility: "Toronto, CA", status: "Active", lastLogin: "4h ago", joined: "Sep 2022" },
    { name: "Noah Kessler", email: "n.kessler@stackly.com", role: "Performance Coach Lead", facility: "Singapore", status: "Active", lastLogin: "1d ago", joined: "Dec 2023" },
    { name: "Lucia Ferreira", email: "l.ferreira@stackly.com", role: "Analytics Lead", facility: "Sydney, AU", status: "Active", lastLogin: "3h ago", joined: "Feb 2024" },
    { name: "Priya Kapoor", role: "Account Director", email: "p.kapoor@stackly.com", facility: "New York, NY", status: "Invited", lastLogin: "Never", joined: "Pending" },
    { name: "Maya Chen", email: "m.chen@stackly.com", role: "Support Specialist", facility: "Austin, TX", status: "Suspended", lastLogin: "20d ago", joined: "Nov 2020" },
    { name: "Dev Sharma", email: "d.sharma@stackly.com", role: "Super Admin", facility: "All Offices", status: "Active", lastLogin: "8m ago", joined: "Aug 2015" },
    { name: "Ritu Agarwal", email: "r.agarwal@stackly.com", role: "Client Success Rep", facility: "London, UK", status: "Active", lastLogin: "5h ago", joined: "Apr 2023" }
  ];
  
  const facilitiesData = [
    { name: "Stackly HQ — New York", facility: "New York, NY", manager: "Priya Kapoor", status: "Online", lines: 8, uptime: 99.2, floor: "180 seats" },
    { name: "Stackly Austin", facility: "Austin, TX", manager: "Diego Torres", status: "Online", lines: 6, uptime: 98.6, floor: "140 seats" },
    { name: "Stackly London", facility: "London, UK", manager: "Amara Osei", status: "Maintenance", lines: 5, uptime: 89.7, floor: "110 seats" },
    { name: "Stackly Toronto", facility: "Toronto, CA", manager: "Ben Whitfield", status: "Online", lines: 4, uptime: 97.1, floor: "90 seats" },
    { name: "Stackly Singapore", facility: "Singapore", manager: "Noah Kessler", status: "Online", lines: 3, uptime: 98.8, floor: "75 seats" },
    { name: "Stackly Sydney", facility: "Sydney, AU", manager: "Lucia Ferreira", status: "Offline", lines: 2, uptime: 0, floor: "60 seats" }
  ];
  
  const rolesData = [
    { name: "Super Admin", users: 1, permissions: 42, description: "Full platform access — billing, users, offices, and system settings." },
    { name: "Platform Admin", users: 1, permissions: 28, description: "Manage client accounts, program catalog, and account provisioning." },
    { name: "Payroll Ops Lead", users: 1, permissions: 22, description: "Oversee payroll runs, filings, and compliance across client accounts." },
    { name: "Talent Ops Lead", users: 1, permissions: 16, description: "Manage search pipelines, candidate data, and interview scheduling." },
    { name: "Benefits Ops Lead", users: 1, permissions: 14, description: "Plan design records, carrier data, and open enrollment access." },
    { name: "Support Specialist", users: 2, permissions: 6, description: "Read-only access to client tickets and account status." }
  ];
  
  const ticketsData = [
    { id: "TCK-2042", subject: "Northlight Robotics — onboarding portal access issue", requester: "Elena Marsh", facility: "New York, NY", priority: "Urgent", status: "In Progress", created: "1h ago" },
    { id: "TCK-2041", subject: "Fieldstone Health — payroll batch flagged for review", requester: "Diego Torres", facility: "Austin, TX", priority: "High", status: "Open", created: "3h ago" },
    { id: "TCK-2039", subject: "Ashgrove SaaS — global payroll filing delayed", requester: "Diego Torres", facility: "Austin, TX", priority: "Medium", status: "Open", created: "5h ago" },
    { id: "TCK-2035", subject: "Bellcrest Analytics — dashboard missing headcount data", requester: "Lucia Ferreira", facility: "Sydney, AU", priority: "Low", status: "Resolved", created: "2d ago" },
    { id: "TCK-2028", subject: "Harborview Retail — benefits enrollment link broken", requester: "Ben Whitfield", facility: "Toronto, CA", priority: "High", status: "In Progress", created: "1d ago" }
  ];
  
  const invoicesData = [
    { id: "INV-2025-024", period: "Jun 2025", plan: "Enterprise", amount: "$24,800", status: "Paid", date: "Jun 30, 2025" },
    { id: "INV-2025-023", period: "May 2025", plan: "Enterprise", amount: "$24,800", status: "Paid", date: "May 31, 2025" },
    { id: "INV-2025-022", period: "Apr 2025", plan: "Enterprise", amount: "$23,400", status: "Overdue", date: "Apr 30, 2025" },
    { id: "INV-2025-021", period: "Mar 2025", plan: "Enterprise", amount: "$23,400", status: "Paid", date: "Mar 31, 2025" }
  ];
  
  const auditLog = [
    { time: "11:12 AM", user: "Dev Sharma", action: "Updated Talent Ops role permissions", target: "Talent Ops Lead", ip: "203.0.113.21" },
    { time: "10:03 AM", user: "Priya Kapoor", action: "Approved client engagement renewal", target: "Ashgrove SaaS retainer", ip: "198.51.100.11" },
    { time: "09:45 AM", user: "System", action: "Suspended account after 5 failed logins", target: "m.chen@stackly.com", ip: "—" },
    { time: "Yesterday", user: "Amara Osei", action: "Marked office under maintenance", target: "Stackly London", ip: "192.0.2.77" },
    { time: "Yesterday", user: "Dev Sharma", action: "Invited new user", target: "p.kapoor@stackly.com", ip: "203.0.113.21" }
  ];
  
  const systemServices = [
    { name: "Stackly Core Platform API", status: "ok", uptime: "99.99%", latency: "82ms" },
    { name: "Payroll Processing Engine", status: "ok", uptime: "99.87%", latency: "124ms" },
    { name: "Client Portal Auth & SSO", status: "ok", uptime: "99.98%", latency: "71ms" },
    { name: "Reporting & Analytics", status: "warn", uptime: "96.40%", latency: "410ms" },
    { name: "Billing Service", status: "ok", uptime: "99.92%", latency: "156ms" },
    { name: "Sydney Office Gateway", status: "down", uptime: "88.10%", latency: "—" }
  ];
  
  const liveFeed = [
    { text: "New client program registered (Payroll & Compliance, Ashgrove SaaS)", time: "15m ago", type: "milestone" },
    { text: "Sydney office gateway flagged — ops notified", time: "32m ago", type: "alert" },
    { text: "Invoice INV-2025-022 marked overdue", time: "1h ago", type: "billing" },
    { text: "Talent Ops Lead permissions updated by Dev Sharma", time: "2h ago", type: "security" },
    { text: "Q3 client renewal ROI report ready", time: "4h ago", type: "system" },
    { text: "Nightly account reconciliation completed", time: "6h ago", type: "system" }
  ];
  
  const navIcons = {
    dashboard: "layout-dashboard", users: "users", facilities: "building-2", roles: "shield-check",
    tickets: "life-buoy", billing: "credit-card", audit: "history", system: "activity", settings: "settings"
  };
  const navItems = [
    { icon: navIcons.dashboard, label: "Dashboard", id: "dashboard" },
    { icon: navIcons.users, label: "Users", id: "users" },
    { icon: navIcons.facilities, label: "Offices", id: "facilities" },
    { icon: navIcons.roles, label: "Roles & Access", id: "roles" },
    { icon: navIcons.tickets, label: "Support Tickets", id: "tickets" },
    { icon: navIcons.billing, label: "Billing", id: "billing" },
    { icon: navIcons.audit, label: "Audit Log", id: "audit" },
    { icon: navIcons.system, label: "System Health", id: "system" },
    { icon: navIcons.settings, label: "Settings", id: "settings" }
  ];
  
  // ---------- THEME ADAPTER (same engine) ----------
  const statusColors = { "Active": "status-active", "Online": "status-active", "Invited": "status-field", "Maintenance": "status-field", "Completed": "status-complete", "Resolved": "status-complete", "Review": "status-review", "In Progress": "status-review", "Open": "status-field", "Suspended": "status-danger", "Offline": "status-danger", "Overdue": "status-danger", "Paid": "status-active" };
  const priorityColor = { "Low": "#9AA5B1", "Medium": "#E3B463", "High": "#D9A26C", "Urgent": "#C97B63" };
  const pageMap = {
    dashboard: { title: "Dashboard", sub: "Stackly platform overview" },
    users:     { title: "Users", sub: "Accounts across all offices" },
    facilities:{ title: "Offices", sub: "Regional offices & status" },
    roles:     { title: "Roles & Access", sub: "Permission groups" },
    tickets:   { title: "Support Tickets", sub: "Requests from client accounts" },
    billing:   { title: "Billing", sub: "Plan, invoices, and usage" },
    audit:     { title: "Audit Log", sub: "System and account activity" },
    system:    { title: "System Health", sub: "Live service status" },
    settings:  { title: "Settings", sub: "Admin account & preferences" }
  };
  
  function getCurrentUser() {
    try {
      const raw = localStorage.getItem('user');
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      if (!raw || !isAuthenticated) return null;
      return JSON.parse(raw);
    } catch (e) { return null; }
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
    userFilter: "All",
    ticketFilter: "All",
    userSearch: "",
    settings: { notifications: true, emailDigest: false, darkMode: true, language: "English" }
  };
  
  function go404() { window.location.href = "404.html"; }
  function regionTag(facility) {
    const c = officeAccents[facility] || "#C0923F";
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
      <div class="card-header"><div><h2 class="card-title">Team Snapshot</h2><p class="card-sub">Live views across Stackly offices</p></div></div>
      <div class="fleet-scroll">${imgs}</div>
    </div>`;
  }
  
  // ---------- RENDER FUNCTIONS ----------
  function renderDashboard() {
    const stats = [
      { icon: "users", delta: "+3 this month", value: adminUsers.length, label: "Total Users", bar: 78, accent: true },
      { icon: "building-2", delta: "5 of 6 online", value: "6", label: "Offices", bar: 84 },
      { icon: "life-buoy", delta: "2 urgent", value: ticketsData.filter(t => t.status !== "Resolved").length, label: "Open Tickets", bar: 46 },
      { icon: "activity", delta: "1 degraded", value: "99.1%", label: "Platform Uptime", bar: 99 }
    ];
    const statsHtml = stats.map(s =>
      `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
        <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span><span class="stat-delta ${s.icon === 'building-2' ? 'warn' : 'up'}">${s.delta}</span></div>
        <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
        <div class="stat-bar"><div class="stat-bar-fill" data-w="${s.bar}"></div></div>
      </div>`
    ).join("");
  
    const rows = adminUsers.slice(0, 5).map(u =>
      `<tr>
        <td><div class="t-name">${u.name}</div><div class="t-sub">${u.email}</div></td>
        <td>${regionTag(u.facility)}</td>
        <td class="type-col">${u.role}</td>
        <td><span class="status-badge ${statusColors[u.status]}">${u.status}</span></td>
        <td class="date-col">${u.lastLogin}</td>
        <td class="date-col">${u.joined}</td>
      </tr>`
    ).join("");
  
    const feedIcons = { milestone: "trophy", performance: "trending-up", complete: "check-circle-2", alert: "alert-triangle", billing: "credit-card", security: "shield-alert", system: "server", update: "sparkles" };
    const feedHtml = liveFeed.map(a =>
      `<li class="activity-item">
        <span class="act-icon"><i data-lucide="${feedIcons[a.type] || 'circle'}"></i></span>
        <div class="act-body"><p class="act-text">${a.text}</p><span class="act-time">${a.time}</span></div>
      </li>`
    ).join("");
  
    const facilityHtml = facilitiesData.slice(0, 5).map(f =>
      `<li class="team-item">
        <div class="member-avatar">${f.facility.slice(0,2).toUpperCase()}<span class="online-dot ${f.status === 'Online' ? 'dot-active' : f.status === 'Maintenance' ? 'dot-away' : 'dot-suspended'}"></span></div>
        <div class="member-info"><div class="member-name">${f.name}</div><div class="member-role">${f.manager} · ${f.lines} teams</div></div>
        <div class="member-projects"><span class="proj-count">${f.uptime}%</span><span class="proj-label">uptime</span></div>
      </li>`
    ).join("");
  
    const ticketPreview = ticketsData.slice(0, 5).map(t =>
      `<li class="milestone-item">
        <div class="ms-date"><span>${t.id.split('-')[1].slice(0,2)}</span><span>#${t.id.split('-')[1].slice(2)}</span></div>
        <div class="ms-line"><div class="ms-dot" style="background:${priorityColor[t.priority]}"></div></div>
        <div class="ms-body"><div class="ms-event">${t.subject}</div><div class="ms-project">${t.requester} · ${t.facility}</div></div>
        <span class="ms-tag" style="background:${priorityColor[t.priority]}22;color:${priorityColor[t.priority]}">${t.priority}</span>
      </li>`
    ).join("");
  
    const legend = [
      { color: "#8FAE7C", label: "Active users", count: adminUsers.filter(u=>u.status==="Active").length },
      { color: "#E3B463", label: "Invited", count: adminUsers.filter(u=>u.status==="Invited").length },
      { color: "#C97B63", label: "Suspended", count: adminUsers.filter(u=>u.status==="Suspended").length },
      { color: "#9AA5B1", label: "Other", count: 1 }
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
          <div class="card-header"><div><h2 class="card-title">Recent Users</h2><p class="card-sub">Latest account activity</p></div></div>
          <div class="table-wrapper"><table class="runs-table"><thead><tr><th>User</th><th>Office</th><th>Role</th><th>Status</th><th>Last Login</th><th>Joined</th></tr></thead><tbody>${rows}</tbody></table></div>
        </div>
        <div class="card">
          <div class="card-header"><div><h2 class="card-title">Live Feed</h2><p class="card-sub">Platform-wide events</p></div></div>
          <ul class="activity-list">${feedHtml}</ul>
        </div>
      </section>
      <section class="bottom-grid">
        <div class="card">
          <div class="card-header"><div><h2 class="card-title">Offices</h2><p class="card-sub">Status &amp; uptime</p></div></div>
          <ul class="team-list">${facilityHtml}</ul>
        </div>
        <div class="card">
          <div class="card-header"><div><h2 class="card-title">Open Tickets</h2><p class="card-sub">By priority</p></div></div>
          <ul class="milestone-list">${ticketPreview}</ul>
        </div>
        <div class="card">
          <div class="card-header"><div><h2 class="card-title">User Status</h2><p class="card-sub">Across the platform</p></div></div>
          <div class="donut-chart">
            <svg viewBox="0 0 120 120" class="donut-svg">
              <circle cx="60" cy="60" r="48" fill="none" stroke="#1E1A11" stroke-width="16"/>
              <circle cx="60" cy="60" r="48" fill="none" stroke="#8FAE7C" stroke-width="16" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 60 60)"/>
              <circle cx="60" cy="60" r="48" fill="none" stroke="#E3B463" stroke-width="16" stroke-dashoffset="-96" stroke-linecap="round" transform="rotate(-90 60 60)"/>
              <circle cx="60" cy="60" r="48" fill="none" stroke="#C97B63" stroke-width="16" stroke-dashoffset="-154" stroke-linecap="round" transform="rotate(-90 60 60)"/>
              <circle cx="60" cy="60" r="48" fill="none" stroke="#9AA5B1" stroke-width="16" stroke-dashoffset="-188" stroke-linecap="round" transform="rotate(-90 60 60)"/>
              <text x="60" y="56" text-anchor="middle" class="donut-num">${adminUsers.length}</text>
              <text x="60" y="68" text-anchor="middle" class="donut-label">Users</text>
            </svg>
          </div>
          <ul class="legend-list">${legendHtml}</ul>
        </div>
      </section>
    `;
  }
  
  function renderUsers() {
    const filters = ["All", "Active", "Invited", "Suspended"];
    const q = state.userSearch.toLowerCase();
    let filtered = state.userFilter === "All" ? adminUsers : adminUsers.filter(u => u.status === state.userFilter);
    if (q) filtered = filtered.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.facility.toLowerCase().includes(q));
    const stats = [
      { icon: "users", value: adminUsers.length, label: "Total Users", accent: true },
      { icon: "user-check", value: adminUsers.filter(u => u.status === "Active").length, label: "Active" },
      { icon: "mail", value: adminUsers.filter(u => u.status === "Invited").length, label: "Pending Invites" },
      { icon: "user-x", value: adminUsers.filter(u => u.status === "Suspended").length, label: "Suspended" }
    ];
    const statsHtml = stats.map((s,i) => {
      const bar = [100, 80, 25, 10][i];
      return `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
        <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
        <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
        <div class="stat-bar"><div class="stat-bar-fill" data-w="${bar}"></div></div>
      </div>`;
    }).join("");
  
    const filterHtml = filters.map(f =>
      `<button class="btn-outline user-filter-btn ${state.userFilter === f ? "btn-active" : ""}" data-filter="${f}">${f}</button>`
    ).join("");
  
    const rows = filtered.map(u =>
      `<tr>
        <td><div class="t-name">${u.name}</div><div class="t-sub">${u.email}</div></td>
        <td>${regionTag(u.facility)}</td>
        <td class="type-col">${u.role}</td>
        <td><span class="status-badge ${statusColors[u.status]}">${u.status}</span></td>
        <td class="date-col">${u.lastLogin}</td>
        <td class="date-col">${u.joined}</td>
        <td><button class="btn-outline" style="padding:5px 12px;font-size:10.5px" onclick="go404()">Manage</button></td>
      </tr>`
    ).join("");
  
    return `
      <section class="stats-grid">${statsHtml}</section>
      <div class="card">
        <div class="card-header">
          <div><h2 class="card-title">All Users</h2><p class="card-sub">Every account across every office</p></div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
            <div class="search-box" style="flex:0 0 auto"><span class="search-icon"><i data-lucide="search"></i></span><input id="user-search-input" placeholder="Search users…" value="${state.userSearch}"></div>
            <button class="btn-outline" style="border-color:#C0923F;color:#E3B463" onclick="go404()">+ Invite User</button>
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${filterHtml}</div>
        <div class="table-wrapper"><table class="runs-table"><thead><tr><th>User</th><th>Office</th><th>Role</th><th>Status</th><th>Last Login</th><th>Joined</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
      </div>
    `;
  }
  
  function renderFacilities() {
    const stats = [
      { icon: "building-2", value: facilitiesData.length, label: "Total Offices", accent: true },
      { icon: "check-circle-2", value: facilitiesData.filter(f => f.status === "Online").length, label: "Online" },
      { icon: "wrench", value: facilitiesData.filter(f => f.status === "Maintenance").length, label: "Maintenance" },
      { icon: "power-off", value: facilitiesData.filter(f => f.status === "Offline").length, label: "Offline" }
    ];
    const statsHtml = stats.map((s,i) => {
      const bar = [100, 83, 17, 17][i];
      return `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
        <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
        <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
        <div class="stat-bar"><div class="stat-bar-fill" data-w="${bar}"></div></div>
      </div>`;
    }).join("");
  
    const cards = facilitiesData.map(f =>
      `<div class="team-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
          <div style="font-weight:700;color:#EDE6D8;font-size:15px">${f.name}</div>
          <span class="status-badge ${statusColors[f.status]}">${f.status}</span>
        </div>
        <div style="font-size:12.5px;color:var(--text-dim);line-height:1.9">
          <div>${f.facility}</div>
          <div>Manager: ${f.manager}</div>
          <div>${f.lines} active teams · ${f.floor}</div>
        </div>
        <div style="margin-top:14px">
          <div style="display:flex;justify-content:space-between;font-family:var(--mono);font-size:11px;color:var(--text-dim);margin-bottom:6px"><span>Uptime</span><span>${f.uptime}%</span></div>
          <div class="progress-bar"><div class="progress-fill" data-w="${f.uptime}" style="background:${f.uptime > 95 ? 'linear-gradient(90deg,#8FAE7C,#B7CBA9)' : f.uptime > 0 ? 'linear-gradient(90deg,#E3B463,#D9A26C)' : 'linear-gradient(90deg,#C97B63,#E0A18F)'}"></div></div>
        </div>
      </div>`
    ).join("");
  
    return `
      <section class="stats-grid">${statsHtml}</section>
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">All Offices</h2><p class="card-sub">Status, managers, and live teams</p></div>
        <button class="btn-outline" style="border-color:#C0923F;color:#E3B463" onclick="go404()">+ Add Office</button></div>
        <div class="team-grid">${cards}</div>
      </div>
    `;
  }
  
  function renderRoles() {
    const stats = [
      { icon: "shield-check", value: rolesData.length, label: "Role Types", accent: true },
      { icon: "users", value: rolesData.reduce((a,r)=>a+r.users,0), label: "Assigned Users" },
      { icon: "key", value: Math.max(...rolesData.map(r=>r.permissions)), label: "Max Permissions" },
      { icon: "crown", value: "1", label: "Super Admins" }
    ];
    const statsHtml = stats.map((s,i) => {
      const bar = [100, 90, 70, 15][i];
      return `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
        <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
        <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
        <div class="stat-bar"><div class="stat-bar-fill" data-w="${bar}"></div></div>
      </div>`;
    }).join("");
  
    const cards = rolesData.map(r =>
      `<div class="research-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap">
          <div style="flex:1;min-width:180px">
            <div style="font-weight:700;color:#fff;font-size:14px;margin-bottom:4px">${r.name}</div>
            <div style="font-size:12.5px;color:var(--text-dim);margin-bottom:6px">${r.description}</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0">
            <span style="background:rgba(192,146,63,0.18);color:#E3B463;border-radius:999px;padding:3px 10px;font-family:var(--mono);font-size:10.5px;font-weight:700">${r.permissions} perms</span>
            <span style="font-size:12px;color:var(--text-dim)">${r.users} user${r.users !== 1 ? "s" : ""}</span>
          </div>
        </div>
      </div>`
    ).join("");
  
    return `
      <section class="stats-grid">${statsHtml}</section>
      <div class="card"><div class="card-header"><div><h2 class="card-title">Roles &amp; Permissions</h2><p class="card-sub">Access groups across the platform</p></div>
      <button class="btn-outline" style="border-color:#C0923F;color:#E3B463" onclick="go404()">+ New Role</button></div>
      <div style="display:flex;flex-direction:column;gap:14px">${cards}</div></div>
    `;
  }
  
  function renderTickets() {
    const filters = ["All", "Open", "In Progress", "Resolved"];
    const filtered = state.ticketFilter === "All" ? ticketsData : ticketsData.filter(t => t.status === state.ticketFilter);
    const stats = [
      { icon: "life-buoy", value: ticketsData.length, label: "Total Tickets", accent: true },
      { icon: "inbox", value: ticketsData.filter(t=>t.status==="Open").length, label: "Open" },
      { icon: "loader", value: ticketsData.filter(t=>t.status==="In Progress").length, label: "In Progress" },
      { icon: "check-circle-2", value: ticketsData.filter(t=>t.status==="Resolved").length, label: "Resolved" }
    ];
    const statsHtml = stats.map((s,i) => {
      const bar = [100, 50, 33, 33][i];
      return `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
        <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
        <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
        <div class="stat-bar"><div class="stat-bar-fill" data-w="${bar}"></div></div>
      </div>`;
    }).join("");
  
    const filterHtml = filters.map(f =>
      `<button class="btn-outline ticket-filter-btn ${state.ticketFilter === f ? "btn-active" : ""}" data-filter="${f}">${f}</button>`
    ).join("");
  
    const rows = filtered.map(t =>
      `<tr>
        <td class="type-col" style="font-family:var(--mono);font-size:11.5px">${t.id}</td>
        <td><div class="t-name">${t.subject}</div><div class="t-sub">${t.requester}</div></td>
        <td>${regionTag(t.facility)}</td>
        <td><span class="status-badge" style="background:${priorityColor[t.priority]}22;color:${priorityColor[t.priority]}">${t.priority}</span></td>
        <td><span class="status-badge ${statusColors[t.status]}">${t.status}</span></td>
        <td class="date-col">${t.created}</td>
      </tr>`
    ).join("");
  
    return `
      <section class="stats-grid">${statsHtml}</section>
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Support Tickets</h2><p class="card-sub">Requests from client accounts &amp; teams</p></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">${filterHtml}</div></div>
        <div class="table-wrapper"><table class="runs-table"><thead><tr><th>ID</th><th>Subject</th><th>Office</th><th>Priority</th><th>Status</th><th>Created</th></tr></thead><tbody>${rows}</tbody></table></div>
      </div>
    `;
  }
  
  function renderBilling() {
    const stats = [
      { icon: "credit-card", value: "Enterprise", label: "Current Plan", accent: true },
      { icon: "banknote", value: "$24,800", label: "This Month" },
      { icon: "calendar-clock", value: "Aug 1", label: "Next Renewal" },
      { icon: "alert-circle", value: invoicesData.filter(i=>i.status==="Overdue").length, label: "Overdue Invoices" }
    ];
    const statsHtml = stats.map((s,i) => {
      const bar = [100, 90, 60, 20][i];
      return `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
        <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
        <div class="stat-value" style="font-size:22px">${s.value}</div><div class="stat-label">${s.label}</div>
        <div class="stat-bar"><div class="stat-bar-fill" data-w="${bar}"></div></div>
      </div>`;
    }).join("");
  
    const rows = invoicesData.map(i =>
      `<tr>
        <td class="type-col" style="font-family:var(--mono);font-size:11.5px">${i.id}</td>
        <td class="date-col">${i.period}</td>
        <td class="type-col">${i.plan}</td>
        <td class="budget-col">${i.amount}</td>
        <td><span class="status-badge ${statusColors[i.status]}">${i.status}</span></td>
        <td class="date-col">${i.date}</td>
        <td><button class="btn-outline" style="padding:5px 12px;font-size:10.5px" onclick="go404()">Download</button></td>
      </tr>`
    ).join("");
  
    return `
      <section class="stats-grid">${statsHtml}</section>
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Current Plan</h2><p class="card-sub">Enterprise — all offices, unlimited users</p></div>
        <button class="btn-outline" style="border-color:#C0923F;color:#E3B463" onclick="go404()">Change Plan</button></div>
        <div style="font-size:13px;color:var(--text-dim);line-height:1.8">
          Includes all 6 offices, unlimited users, priority support, and full audit log retention.
          Billed monthly based on active client accounts and platform usage.
        </div>
      </div>
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Invoice History</h2><p class="card-sub">Last 4 billing periods</p></div></div>
        <div class="table-wrapper"><table class="runs-table"><thead><tr><th>Invoice</th><th>Period</th><th>Plan</th><th>Amount</th><th>Status</th><th>Date</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
      </div>
    `;
  }
  
  function renderAudit() {
    const rows = auditLog.map(a =>
      `<div class="schedule-row">
        <div style="width:78px;flex-shrink:0;font-family:var(--mono);font-size:11px;color:var(--text-dimmer)">${a.time}</div>
        <div style="width:3px;align-self:stretch;border-radius:999px;background:#C0923F;opacity:0.6;flex-shrink:0"></div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;color:#EDE6D8;font-size:13.5px">${a.action}</div>
          <div style="font-size:12px;color:var(--text-dim);margin-top:3px">${a.user} · ${a.target}${a.ip !== "—" ? " · " + a.ip : ""}</div>
        </div>
      </div>`
    ).join("");
  
    return `<div class="card"><div class="card-header"><div><h2 class="card-title">Audit Log</h2><p class="card-sub">Account, permission, and system events</p></div>
      <button class="btn-outline" onclick="go404()">Export CSV</button></div>
      <div style="display:flex;flex-direction:column;gap:4px">${rows}</div></div>`;
  }
  
  function renderSystem() {
    const okCount = systemServices.filter(s=>s.status==="ok").length;
    const stats = [
      { icon: "activity", value: systemServices.length, label: "Services Monitored", accent: true },
      { icon: "check-circle-2", value: okCount, label: "Operational" },
      { icon: "alert-triangle", value: systemServices.filter(s=>s.status==="warn").length, label: "Degraded" },
      { icon: "octagon-x", value: systemServices.filter(s=>s.status==="down").length, label: "Down" }
    ];
    const statsHtml = stats.map((s,i) => {
      const bar = [100, Math.round(okCount/systemServices.length*100), 20, 20][i];
      return `<div class="stat-card ${s.accent ? "stat-accent" : ""}">
        <div class="stat-top"><span class="stat-icon"><i data-lucide="${s.icon}"></i></span></div>
        <div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>
        <div class="stat-bar"><div class="stat-bar-fill" data-w="${bar}"></div></div>
      </div>`;
    }).join("");
  
    const rows = systemServices.map(s =>
      `<div class="service-row">
        <div class="service-dot ${s.status}"></div>
        <div class="service-info">
          <div class="service-name">${s.name}</div>
          <div class="service-meta">Uptime ${s.uptime} · Latency ${s.latency}</div>
        </div>
        <span class="status-badge ${s.status === 'ok' ? 'status-active' : s.status === 'warn' ? 'status-field' : 'status-danger'}">${s.status === 'ok' ? 'Operational' : s.status === 'warn' ? 'Degraded' : 'Down'}</span>
      </div>`
    ).join("");
  
    return `
      <section class="stats-grid">${statsHtml}</section>
      <div class="card"><div class="card-header"><div><h2 class="card-title">Service Status</h2><p class="card-sub">Live monitoring across core systems</p></div></div>
      <div style="display:flex;flex-direction:column;gap:4px">${rows}</div></div>
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
      <div class="card"><div class="card-header"><div><h2 class="card-title">Admin Account</h2><p class="card-sub">Signed-in profile for this console</p></div></div>
        <div style="display:flex;align-items:center;gap:18px;margin-bottom:20px;flex-wrap:wrap">
          <div style="width:64px;height:64px;border-radius:50%;border:2px solid rgba(192,146,63,0.4);background:var(--accent-soft);color:var(--accent-2);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:24px;text-transform:uppercase;flex-shrink:0">${currentInitial}</div>
          <div><div style="font-weight:700;color:#EDE6D8;font-size:16px;text-transform:capitalize">${displayName}</div>
          <div style="font-size:13px;color:var(--text-dim);margin-top:2px">${displayEmail}</div>
          <div style="font-family:var(--mono);font-size:12px;color:#E3B463;margin-top:4px">${currentUser ? (currentUser.role === 'admin' ? 'Super Admin' : 'Admin') : 'Not signed in'}</div></div>
        </div>
        <button class="btn-outline" style="border-color:#C0923F;color:#E3B463" onclick="go404()">Edit Profile</button>
      </div>
      <div class="card"><div class="card-header"><div><h2 class="card-title">Preferences</h2><p class="card-sub">Notifications and display</p></div></div>
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
            <div><div style="font-weight:700;color:#EDE6D8;font-size:13.5px">Push Notifications</div><div style="font-size:12.5px;color:var(--text-dim);margin-top:2px">Alerts for tickets, incidents, and account changes</div></div>
            ${toggleHtml("notifications", s.notifications)}
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
            <div><div style="font-weight:700;color:#EDE6D8;font-size:13.5px">Weekly Digest</div><div style="font-size:12.5px;color:var(--text-dim);margin-top:2px">Summary of platform activity every Monday</div></div>
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
      <div class="card"><div class="card-header"><div><h2 class="card-title">Danger Zone</h2><p class="card-sub">Platform-wide irreversible actions</p></div></div>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <button class="btn-outline" style="border-color:rgba(201,123,99,0.4);color:#F0BDAE" onclick="go404()">Reset Admin Password</button>
          <button class="btn-outline" style="border-color:rgba(201,123,99,0.4);color:#F0BDAE" onclick="go404()">Revoke All Sessions</button>
        </div>
      </div>
    `;
  }
  
  const pageRenderers = {
    dashboard: renderDashboard,
    users: renderUsers,
    facilities: renderFacilities,
    roles: renderRoles,
    tickets: renderTickets,
    billing: renderBilling,
    audit: renderAudit,
    system: renderSystem,
    settings: renderSettings
  };
  
  function renderNav() {
    const mainItems = navItems.slice(0, 6);
    const mgmtItems = navItems.slice(6);
    function itemHtml(item) {
      let badge = "";
      if (item.id === "tickets") badge = `<span class="nav-badge">${ticketsData.filter(t=>t.status!=="Resolved").length}</span>`;
      if (item.id === "system") badge = `<span class="nav-badge warn">1</span>`;
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
    const userFilterBtn = e.target.closest(".user-filter-btn");
    if (userFilterBtn) { state.userFilter = userFilterBtn.getAttribute("data-filter"); renderPage(); return; }
    const ticketFilterBtn = e.target.closest(".ticket-filter-btn");
    if (ticketFilterBtn) { state.ticketFilter = ticketFilterBtn.getAttribute("data-filter"); renderPage(); return; }
    const toggle = e.target.closest("[data-toggle]");
    if (toggle) {
      const key = toggle.getAttribute("data-toggle");
      state.settings[key] = !state.settings[key];
      renderPage();
      return;
    }
  });
  
  document.addEventListener("input", function(e) {
    if (e.target && e.target.id === "user-search-input") {
      state.userSearch = e.target.value;
      const caretPos = e.target.selectionStart;
      renderPage();
      const input = document.getElementById("user-search-input");
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