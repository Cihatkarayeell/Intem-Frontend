// Sayfada .form sınıfına sahip bir element olup olmadığını kontrol et
if (document.querySelector('.form-element')) {
    // Modal açma
    document.querySelector('.submit-button').addEventListener('click', function(event) {
        event.preventDefault(); // Linkin varsayılan davranışını engeller
        event.stopPropagation(); // Tıklama olayının yukarıya yayılmasını durdurur
        document.querySelector('.modal-dialog').classList.add('active');
    });

    // Modal kapatma - close butonuna tıklama
    document.querySelector('.modal-dialog .close-button').addEventListener('click', function() {
        document.querySelector('.modal-dialog').classList.remove('active');
    });

    // Modal kapatma - modal-box dışında bir yere tıklama
    document.addEventListener('click', function(event) {
        const modal = document.querySelector('.modal-dialog');
        const modalBox = document.querySelector('.modal-box');

        if (modal.classList.contains('active') && !modalBox.contains(event.target)) {
            modal.classList.remove('active');
        }
    });

    // Modal içindeki tıklamaların dışarıya yayılmasını önle
    document.querySelector('.modal-box').addEventListener('click', function(event) {
        event.stopPropagation(); // modal-box içindeki tıklamaların dışarıya yayılmasını durdurur
    });
}
