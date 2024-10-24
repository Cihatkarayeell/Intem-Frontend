document.addEventListener('DOMContentLoaded', function() {
    // .news-from-us elementi varsa devam et
    const newsFromUs = document.querySelector('.news-from-us');
    
    if (newsFromUs) {
        // Tüm "Read more" linklerini seçiyoruz
        const readMoreLinks = document.querySelectorAll('.read-more');
        const modals = document.querySelectorAll('.news-detail-modal');
        const body = document.querySelector('body');

        if (modals.length > 0 && readMoreLinks.length > 0) {
            // Modal dışına tıklandığında modalı kapatmak için olay dinleyici ekliyoruz
            window.addEventListener('click', function(event) {
                modals.forEach(modal => {
                    if (event.target === modal) {
                        modal.classList.remove('active');
                        body.classList.remove('overflow');
                    }
                });
            });

            // Her modal için kapatma butonuna olay dinleyici ekliyoruz
            modals.forEach(modal => {
                const closeModalBtn = modal.querySelector('.close-modal');
                if (closeModalBtn) {
                    closeModalBtn.addEventListener('click', function() {
                        modal.classList.remove('active');
                        body.classList.remove('overflow');
                    });
                }
            });

            // Her bir "Read more" linkine tıklama olayı ekliyoruz
            readMoreLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();

                    // Data attribute'den modal id'sini alıyoruz
                    const modalId = this.getAttribute('data-modal');
                    const modal = document.getElementById(modalId);

                    if (modal) {
                        // Modalı açmak için active sınıfı ekliyoruz
                        modal.classList.add('active');
                        body.classList.add('overflow');
                    } else {
                        console.error(`Modal with id "${modalId}" not found.`);
                    }
                });
            });
        } else {
            //console.error('No ".read-more" links or ".news-detail-modal" elements found.');
        }
    } else {
        //console.error('No ".news-from-us" element found.');
    }
});
