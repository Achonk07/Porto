
document.getElementById('darkToggle').onclick = () => {
  document.body.classList.toggle('dark-mode');
};

const search = document.getElementById('search');
const projects = document.querySelectorAll('.project');
search.addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  projects.forEach(p => {
    p.style.display = p.textContent.toLowerCase().includes(term) ? '' : 'none';
  });
});

document.querySelectorAll('#filters button').forEach(btn => {
  btn.onclick = () => {
    const category = btn.dataset.filter;
    projects.forEach(p => {
      p.style.display = (category === 'all' || p.dataset.category === category) ? '' : 'none';
    });
  };
});
