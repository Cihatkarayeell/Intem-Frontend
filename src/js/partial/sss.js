document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    if (accordionHeaders.length > 0) {  // Eğer accordion-header varsa kodu çalıştır
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const isActive = content.classList.contains('show');

                // Tüm açık accordion içeriklerini kapat
                document.querySelectorAll('.accordion-content').forEach(item => {
                    if (item.classList.contains('show')) {
                        item.classList.remove('show');
                        item.classList.add('hide');
                        // Tıklanan header harici tüm başlıkları pasif hale getir
                        item.previousElementSibling.classList.remove('active');
                    }
                });

                // Eğer tıklanan item aktif değilse aç
                if (!isActive) {
                    content.classList.remove('hide');
                    content.classList.add('show');
                    header.classList.add('active');  // Tıklanan başlığı aktif yap
                }
            });
        });
    } else {
    }
});
