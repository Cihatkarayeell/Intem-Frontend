const videoModalCheck = document.querySelector('.video-modal');

if (videoModalCheck){
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const bodyElement = document.querySelector('body');
  
  // Modalı açmak için butona tıklama eventi
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Modalı görünür yap
    modal.classList.add('show');  // Modal içeriğini aşağı indir
    bodyElement.style.overflow = 'hidden'; 
  });
  
  // Modalı kapatmak için butona tıklama eventi
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none'; // Modalı tamamen gizle
      bodyElement.style.overflow = 'auto'; 
      
    }, 500); // Animasyon süresi kadar bekleyerek kapanış işlemi
  });
  
  // Modalın dışına tıklandığında kapatma
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('show');
      bodyElement.style.overflow = 'auto'; 
      setTimeout(() => {
        modal.style.display = 'none';
      }, 500);
    }
  });
}
