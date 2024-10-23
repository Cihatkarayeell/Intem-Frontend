const cookieModalSelect = document.querySelector('#cookieModal'); 

if (cookieModalSelect){
  // DOM tamamen yüklendiğinde 10 saniye sonra modali göster
  window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const modal = document.getElementById('cookieModal');
        modal.classList.add('show');
      }, 10000); // 10 saniye bekle
    });
    
    // Modalı kapatma işlemleri
    const closeModal = document.getElementById('closeModal');
    const cookieModal = document.getElementById('cookieModal');
    
    // Kapatma butonuna tıklanırsa modalı kapat
    closeModal.addEventListener('click', () => {
      cookieModal.classList.remove('show');
    });
    
    // Kabul et veya reddet butonlarına tıklanırsa modalı kapat
    document.querySelector('.accept-btn').addEventListener('click', () => {
      cookieModal.classList.remove('show');
    });
    
    document.querySelector('.reject-btn').addEventListener('click', () => {
      cookieModal.classList.remove('show');
    });
}
  