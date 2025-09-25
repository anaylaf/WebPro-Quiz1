// small script to set active nav link based on current path
(function(){
  const links = document.querySelectorAll('nav a');
  const path = location.pathname.replace(/\/$/, ''); // no trailing slash
  links.forEach(a => {
    const href = a.getAttribute('href');
    // compare last part
    if (href === path || (href !== '/' && path.endsWith(href))) {
      a.classList.add('active');
    }
  });
})();
