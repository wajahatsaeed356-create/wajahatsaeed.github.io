// Nav toggle for small screens
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  if(toggle && links){
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('show');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        window.scrollTo({top: target.getBoundingClientRect().top + window.scrollY - 64, behavior:'smooth'});
        // close nav on mobile after click
        if(links.classList.contains('show')){
          links.classList.remove('show');
          toggle.setAttribute('aria-expanded','false');
        }
      }
    });
  });
});
