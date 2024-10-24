// Sayfada .form sınıfına sahip bir element olup olmadığını kontrol et
if (document.querySelectorAll('.form-element').length > 0) {
    // Tüm submit butonlarını seç
    const submitButtons = document.querySelectorAll('.submit-button');

    // Her submit butonuna tıklama olayını ekle
    submitButtons.forEach((button) => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Butonun varsayılan davranışını engeller
            event.stopPropagation(); // Tıklama olayının yukarıya yayılmasını durdurur
            document.querySelector('.modal-dialog').classList.add('active'); // Modal açılır
        });
    });

    // Modal kapatma - close butonuna tıklama
    document.querySelector('.modal-dialog .close-button').addEventListener('click', function() {
        document.querySelector('.modal-dialog').classList.remove('active'); // Modal kapanır
    });

    // Modal kapatma - modal-box dışında bir yere tıklama
    document.addEventListener('click', function(event) {
        const modal = document.querySelector('.modal-dialog');
        const modalBox = document.querySelector('.modal-box');

        if (modal.classList.contains('active') && !modalBox.contains(event.target)) {
            modal.classList.remove('active'); // Modal kapanır
        }
    });

    // Modal içindeki tıklamaların dışarıya yayılmasını önle
    document.querySelector('.modal-box').addEventListener('click', function(event) {
        event.stopPropagation(); // modal-box içindeki tıklamaların dışarıya yayılmasını durdurur
    });
}
