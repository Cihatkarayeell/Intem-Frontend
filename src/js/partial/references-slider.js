app.ourClientsSection = { 
    swiper: null,
    
    setSwiper: function (slider) {

        app.ourClientsSection.swiper = new Swiper(slider.querySelector(".swiper-references"), {
            speed: 3000,
            lazy: true,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: true,
                waitForTransition: true,
                reverseDirection: false,
            },
            direction: 'horizontal',
            breakpoints: {
                0: {
                    slidesPerView: 6.8,
                    slidesPerGroup: 1,
                    spaceBetween: 70,
                },
            }
        });

    },

    init: function () {
        
        const clientSection = document.getElementById("our-clients-section");
        if (clientSection) {
            app.ourClientsSection.setSwiper(clientSection);
        } else {
        }
    }
}

// init fonksiyonunu çağırarak işlemi başlatıyoruz
app.ourClientsSection.init();
