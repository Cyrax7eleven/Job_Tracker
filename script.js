const jobs = [
  {
    id: 1,
    companyName: 'Bluewave Analytics',
    position: 'Front-End Engineer',
    location: 'Remote / USA',
    type: 'Full Time',
    salary: '$95,000 - $110,000',
    description: 'Build polished UI for data dashboards with strong accessibility and UI performance.',
    status: 'all'
  },
  {
    id: 2,
    companyName: 'Horizon Retail',
    position: 'E-commerce Product Developer',
    location: 'Austin, TX',
    type: 'Contract',
    salary: '$52 / hour',
    description: 'Develop checkout flows, catalog pages, and mobile-first shopping experiences.',
    status: 'all'
  },
  {
    id: 3,
    companyName: 'GreenLeaf Energy',
    position: 'UX Research Associate',
    location: 'Denver, CO',
    type: 'Part Time',
    salary: '$38,000 / year',
    description: 'Interview customers and help synthesize product research reports for the design team.',
    status: 'all'
  },
  {
    id: 4,
    companyName: 'Nimble Finance',
    position: 'JavaScript Software Developer',
    location: 'Seattle, WA',
    type: 'Full Time',
    salary: '$120,000 - $135,000',
    description: 'Support a modern client portal, build reusable components, and improve app reliability.',
    status: 'all'
  },
  {
    id: 5,
    companyName: 'Atlas Logistics',
    position: 'Mobile App Engineer',
    location: 'Hybrid - Chicago, IL',
    type: 'Full Time',
    salary: '$102,000 / year',
    description: 'Ship map visualizations, background sync, and refined onboarding for drivers and dispatchers.',
    status: 'all'
  },
  {
    id: 6,
    companyName: 'Elevate Health',
    position: 'Customer Success Specialist',
    location: 'Remote / Europe',
    type: 'Contract',
    salary: '$45,000 - $50,000',
    description: 'Assist care coordinators, manage client intake, and keep health program materials on schedule.',
    status: 'all'
  },
  {
    id: 7,
    companyName: 'Pioneer Studios',
    position: 'Digital Marketing Coordinator',
    location: 'New York, NY',
    type: 'Part Time',
    salary: '$28 / hour',
    description: 'Create campaign briefs, run social media experiments, and optimize advertising performance.',
    status: 'all'
  },
  {
    id: 8,
    companyName: 'Vertex Security',
    position: 'Technical Support Analyst',
    location: 'Boston, MA',
    type: 'Full Time',
    salary: '$68,000 / year',
    description: 'Handle escalation tickets, collaborate with engineering, and produce internal troubleshooting guides.',
    status: 'all'
  }
];

let activeTab = 'all';

const jobsContainer = document.getElementById('jobs-container');
const dashboardAll = document.getElementById('dashboard-all');
const dashboardInterview = document.getElementById('dashboard-interview');
const dashboardRejected = document.getElementById('dashboard-rejected');
const sectionCount = document.getElementById('section-count');
const tabButtons = document.querySelectorAll('.tab-btn');
const emptyTemplate = document.getElementById('empty-state-template');

function getStatusCounts() {
  const interview = jobs.filter((job) => job.status === 'interview').length;
  const rejected = jobs.filter((job) => job.status === 'rejected').length;
  const all = jobs.length;
  return { all, interview, rejected };
}

function getJobsForTab(tab) {
  if (tab === 'all') return jobs;
  return jobs.filter((job) => job.status === tab);
}



function renderTabCount(tab) {
  const jobsForTab = getJobsForTab(tab);
  const label = tab === 'all' ? `${jobsForTab.length} jobs` : `${jobsForTab.length} ${tab === 'interview' ? 'interview' : 'rejected'} job${jobsForTab.length !== 1 ? 's' : ''}`;
  sectionCount.textContent = label;
}

function setActiveTab(tab) {
  activeTab = tab;
  tabButtons.forEach((btn) => {
    btn.classList.toggle('btn-active', btn.dataset.tab === tab);
  });
  renderJobs();
}

function removeJob(jobId) {
  const index = jobs.findIndex((job) => job.id === jobId);
  if (index !== -1) {
    jobs.splice(index, 1);
    renderJobs();
    updateDashboard();
  }
}

function changeJobStatus(jobId, status) {
  const job = jobs.find((item) => item.id === jobId);
  if (!job) return;
  if (job.status === status) {
    job.status = 'all';
  } else {
    job.status = status;
  }
  renderJobs();
  updateDashboard();
}

function renderJobs() {
  jobsContainer.innerHTML = '';
  const filteredJobs = getJobsForTab(activeTab);
  renderTabCount(activeTab);

  if (filteredJobs.length === 0) {
    const clone = emptyTemplate.content.cloneNode(true);
    jobsContainer.appendChild(clone);
    return;
  }

  filteredJobs.forEach((job) => {
    const card = document.createElement('article');
    card.className = 'rounded-[32px] border border-slate-700/90 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1';
    card.innerHTML = `
      <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div class="space-y-2">
          <p class="text-xs uppercase tracking-[0.30em] text-slate-400">${job.companyName}</p>
          <h3 class="text-xl font-semibold text-white">${job.position}</h3>
          <p class="text-slate-400">${job.location} • ${job.type}</p>
        </div>
        <div class="flex items-center gap-2 text-right">
          <p class="text-lg font-semibold text-slate-200">${job.salary}</p>
          <button class="btn btn-square btn-ghost btn-sm text-slate-400 hover:text-rose-400" data-action="delete" aria-label="Delete job">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M9.5 9.5L12 12l2.5-2.5 1 1L13 13l2.5 2.5-1 1L12 14l-2.5 2.5-1-1L11 13 8.5 10.5z"/><path fill="currentColor" d="M6 5h12v2H6z" opacity="0.5"/></svg>
          </button>
        </div>
      </div>
      <div class="mt-5 space-y-4">
        <p class="text-slate-300">${job.description}</p>
        <div class="flex flex-wrap items-center gap-3">
          <div class="badge badge-outline badge-sm text-slate-300">${job.type}</div>
          <div class="badge badge-outline badge-sm text-slate-300">${job.location}</div>
          <div class="badge badge-outline badge-sm text-slate-300">${job.salary}</div>
        </div>
      </div>
      <div class="mt-6 flex flex-wrap gap-3">
        <button class="status-btn btn btn-sm rounded-full ${job.status === 'interview' ? 'btn-success' : 'btn-ghost btn-outline'}" data-action="status" data-status="interview">Interview</button>
        <button class="status-btn btn btn-sm rounded-full ${job.status === 'rejected' ? 'btn-error' : 'btn-ghost btn-outline'}" data-action="status" data-status="rejected">Rejected</button>
      </div>
    `;

    card.querySelector('[data-action="delete"]').addEventListener('click', () => removeJob(job.id));
    const statusButtons = card.querySelectorAll('[data-action="status"]');
    statusButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const status = button.dataset.status;
        changeJobStatus(job.id, status);
      });
    });
    jobsContainer.appendChild(card);
  });
}

Object.values(tabButtons).forEach((button) => {
  button.addEventListener('click', () => setActiveTab(button.dataset.tab));
});

setActiveTab('all');
updateDashboard();
