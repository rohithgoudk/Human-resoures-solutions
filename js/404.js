/* ---------- Org-chart node network background ---------- */
const canvas = document.getElementById('orgchart-canvas');
const ctx = canvas.getContext('2d');
let w, h, nodes;

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const NODE_COUNT = Math.min(34, Math.floor((window.innerWidth * window.innerHeight) / 42000));

function initNodes(){
  nodes = Array.from({length: NODE_COUNT}, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    r: Math.random() * 1.6 + 1.2
  }));
}
initNodes();

let mouseX = w/2, mouseY = h/2;
window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

function draw(){
  ctx.clearRect(0, 0, w, h);

  for(const n of nodes){
    n.x += n.vx;
    n.y += n.vy - 0.02; /* gentle upward drift */

    if(n.x < 0) n.x = w;
    if(n.x > w) n.x = 0;
    if(n.y < -20) n.y = h + 20;
    if(n.y > h + 20) n.y = -20;
  }

  for(let i = 0; i < nodes.length; i++){
    for(let j = i + 1; j < nodes.length; j++){
      const a = nodes[i], b = nodes[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 150){
        ctx.strokeStyle = `rgba(217,164,65,${0.09 * (1 - dist/150)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  for(const n of nodes){
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(243,239,230,0.5)';
    ctx.fill();
  }

  requestAnimationFrame(draw);
}
draw();

/* ---------- Card mouse-parallax tilt ---------- */
const card = document.getElementById('card');
document.querySelector('.hero').addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  const dx = (e.clientX - cx) / rect.width;
  const dy = (e.clientY - cy) / rect.height;
  card.style.transform = `rotateY(${dx*4}deg) rotateX(${-dy*4}deg)`;
});
document.querySelector('.hero').addEventListener('mouseleave', () => {
  card.style.transform = 'rotateY(0) rotateX(0)';
});