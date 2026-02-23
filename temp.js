
    if (localStorage.getItem('madrasa_theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    if (localStorage.getItem('madrasa_uid')) {
      document.body.classList.add('auto-logging-in');
      document.getElementById('global-loader').style.display = 'flex';
    }
  