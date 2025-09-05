// (Contains all JavaScript logic for events, router, rendering.)
// ---- Data ----
const events = [
  {
    id: 'techfest-2025',
    title: 'TechFest 2025',
    date: '2025-09-15',
    time: '10:00 AM - 6:00 PM',
    venue: 'San Francisco Convention Center, CA',
    short: 'Annual technology festival featuring startups, AI talks, and networking.',
    long: 'Join global innovators, developers, and founders at TechFest 2025...',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
    mapQuery: 'San+Francisco+Convention+Center',
    tags: ['Technology','Conference']
  },
  // ... (add the rest of the 5 events from earlier code)
];

// ---- Routing ----
const app = document.getElementById('app');
function setActiveNav(){
  const path = location.hash || '#/';
  document.querySelectorAll('nav.links a').forEach(a=>a.classList.remove('active'));
  if(path.startsWith('#/events/')) document.getElementById('nav-events').classList.add('active');
  else if(path === '#/contact') document.getElementById('nav-contact').classList.add('active');
  else document.getElementById('nav-home').classList.add('active');
}

function route(){
  const hash = location.hash || '#/';
  setActiveNav();
  if(hash === '#/' || hash === '') return renderHome();
  if(hash.startsWith('#/events/')){
    const id = decodeURIComponent(hash.split('/')[2] || '');
    return renderEventDetail(id);
  }
  if(hash.startsWith('#/events')) return renderEvents();
  if(hash === '#/contact') return renderContact();
  renderNotFound();
}
window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', () => { 
  document.getElementById('year').textContent = new Date().getFullYear(); 
  route(); 
});

// ---- Renderers ----
function renderHome(){ /* same code as before */ }
function renderEvents(){ /* same code as before */ }
function renderEventDetail(id){ /* same code as before */ }
function renderContact(){ /* same code as before */ }
function renderNotFound(){ /* same code as before */ }

// ---- Helpers ----
function fmtDate(str){
  try{
    return new Date(str + 'T00:00:00').toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric'});
  }catch{return str}
}
function eventCard(ev){ /* same as before */ }
