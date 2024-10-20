// DOM tamamen yüklendiğinde çalışması için event listener
document.addEventListener('DOMContentLoaded', function() {
    // GDPR checkbox için click event listener
    const gdprCheckbox = document.getElementById('gdpr');
    if (gdprCheckbox) {
      gdprCheckbox.addEventListener('click', function() {
        if (gdprCheckbox.checked) {
          gdprCheckbox.classList.add('active');
        } else {
          gdprCheckbox.classList.remove('active');
        }
      });
    } else {
      console.error('GDPR checkbox bulunamadı.');
    }
  
    // Privacy checkbox için click event listener
    const privacyCheckbox = document.getElementById('privacy');
    if (privacyCheckbox) {
      privacyCheckbox.addEventListener('click', function() {
        if (privacyCheckbox.checked) {
          privacyCheckbox.classList.add('active');
        } else {
          privacyCheckbox.classList.remove('active');
        }
      });
    } else {
      console.error('Privacy checkbox bulunamadı.');
    }
  });
  