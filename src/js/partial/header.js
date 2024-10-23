const searchButton = document.getElementById('searchButton');
const searchBox = document.getElementById('searchBox');

// searchButton'a tıklandığında searchBox'a active sınıfını ekle
searchButton.addEventListener('click', (event) => {
    searchBox.classList.add('active');
    event.stopPropagation(); // Olayın dışa yayılmasını engelle
});

// document üzerindeki tıklamaları dinle
document.addEventListener('click', (event) => {
    // Eğer tıklanan öğe searchButton veya searchBox değilse, active sınıfını kaldır
    if (!searchButton.contains(event.target) && !searchBox.contains(event.target)) {
        searchBox.classList.remove('active');
    }
});

    
    

function moveLanguageButton() {
    const languageButton = document.querySelector('.language-button');
    const sidebarMenuUl = document.querySelector('.sidebar-menu-ul');

    // Eğer genişlik 414 piksel veya daha küçükse
    if (window.innerWidth <= 414) {
        // Eğer buton zaten sidebar içinde değilse, taşı
        if (languageButton.parentNode !== sidebarMenuUl) {
            sidebarMenuUl.appendChild(languageButton);
        }
    } else {
        // Genişlik 414 pikselden büyükse, butonu orijinal yerine geri alabilirsin
        const originalParent = document.querySelector('.navbar-right-section'); // Orijinal ebeveyn
        if (languageButton.parentNode === sidebarMenuUl) {
            originalParent.appendChild(languageButton);
        }
    }
}

// Pencere boyutu değiştiğinde kontrol et
window.addEventListener('resize', moveLanguageButton);

// Sayfa ilk yüklendiğinde de kontrol et
moveLanguageButton();



