const BASE_URL = window.location.protocol + '//' + window.location.host;
const PATH_URL = window.location.pathname;
const FULL_URL = window.location.href;
const app = {};
const GET_PARAM = (key) => {
	return new URL(FULL_URL).searchParams.get(key);
};



// PARTIALS
document.querySelector('#searchButton').addEventListener('click', function() {
    this.querySelector('.search-box').classList.add('active');
});
 
console.log('%cMade by passion', 'background:#da4648;color:#fff;padding:10px;font-weight:bold;')



// UTILS
function fadeOut(element, soft = false, callback = null) {
	if(!element) {
		return false;
	}

	element.style.opacity = 1;

	(function fade() {
		if((element.style.opacity -= 0.1) < 0) {
			if(soft) {
				element.style.display = "none";
			} else {
				element.remove();
			}

			if(callback instanceof Function) {
				callback();
			} else if(window[callback] instanceof Function) {
				window[callback]();
			}
		} else {
			requestAnimationFrame(fade);
		}
	})();

}

function smoothScroll(element) {
	if(element) {
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

function smoothScrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

document.addEventListener('click', event => {
	if(event.target.tagName !== 'A') {
		return false;
	}
	const anchor = event.target;
	const anchor_href = anchor.getAttribute('href');

	if(anchor_href === '#') {
		event.preventDefault();
		smoothScrollToTop();
	}
	else if(anchor_href.charAt(0) === '#' || (anchor_href.charAt(0) === '/' && anchor_href.charAt(1) === '#')) {
		if(!anchor.hash) {
			return false;
		}

		const target = document.querySelector(anchor.hash);
		if(target) {
			event.preventDefault();
			smoothScroll(target);
		}
	}
});

window.onload = () => {
	document.querySelectorAll('img').forEach(image => {
		if(image.complete && typeof image.naturalWidth != 'undefined' && image.naturalWidth <= 0) {
			image.src = BASE_URL + '/img/no-image.jpg';
		}
	});
};


document.addEventListener('DOMContentLoaded', () => {
	// PARTIALS
	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('href') && anchor.href.startsWith('tel:')) {
		anchor.href = 'tel:' + anchor.href.replaceAll(/[^\d+]/g, '');
	}
});

	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('target') && anchor.getAttribute('target') === '_blank') {
		anchor.setAttribute('rel', 'noopener noreferrer nofollow');
	}
});

	document.addEventListener('contextmenu', event => {
	if(event.target.nodeName === 'IMG') {
		event.preventDefault();
	}
});

	/*document.querySelectorAll('table').forEach(table => {
	if(!table.parentElement.classList.contains('table-responsive')) {
		table.outerHTML = '<div class="table-responsive">' + table.outerHTML + '</div>';
	}
});
 */
});
 


 
var swiper = new Swiper(".mySwiper-pagination", {
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

// Modalı açmak için butona tıklama eventi
document.querySelector('#menuOpenToggle').onclick = function() {
    document.querySelector('#sidebar').classList.toggle('active');
    document.querySelector('body').classList.add('after');
    
    // Tıklanan butona 'active' sınıfı ekle
    this.classList.add('active');
};

// Modalı kapatmak için butona tıklama eventi
document.querySelector('#menuCloseToggle').onclick = function() {
    document.querySelector('#sidebar').classList.remove('active');
    document.querySelector('body').classList.remove('after');
    document.querySelector('#menuOpenToggle').classList.remove('active');
    
    // Tıklanan butondan 'active' sınıfını çıkar
};

/* 
// Eğer animasyon bittiğinde başka bir aksiyon almak istiyorsanız buraya ekleyebilirsiniz
document.querySelector('.loading-progress').addEventListener('animationend', () => {
  
  const loadingPage = document.getElementById('loadingPage');
  const bodyElement = document.body;
  
  loadingPage.classList.add('removed');
  bodyElement.classList.remove('overflow');
});
*/

const loadingProgressElement = document.querySelector('.loading-progress');

if (loadingProgressElement) {
  loadingProgressElement.addEventListener('animationend', () => {
    const loadingPage = document.getElementById('loadingPage');
    const bodyElement = document.body;

    loadingPage.classList.add('removed');
    bodyElement.classList.remove('overflow');
  });
}

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
  
var swiper = new Swiper(".mySwiper-news", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next-news",
      prevEl: ".swiper-button-prev-news",
    },
  });
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
  
const videoModalCheck = document.querySelector('.video-modal');

if (videoModalCheck){
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  
  // Modalı açmak için butona tıklama eventi
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Modalı görünür yap
    modal.classList.add('show');  // Modal içeriğini aşağı indir
  });
  
  // Modalı kapatmak için butona tıklama eventi
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none'; // Modalı tamamen gizle
    }, 500); // Animasyon süresi kadar bekleyerek kapanış işlemi
  });
  
  // Modalın dışına tıklandığında kapatma
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 500);
    }
  });
}

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
            console.error('No ".read-more" links or ".news-detail-modal" elements found.');
        }
    } else {
        console.error('No ".news-from-us" element found.');
    }
});

app.sectionSlider = {
    options: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            loop: false,
        },
        720: {
            slidesPerView: 2.2,
            spaceBetween: 10,
            loop: false,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
            loop: true,
        }
    },
    _2_options: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: false,
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: false,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
            loop: true,
        }
    },
    set: function () {
        document.querySelectorAll(".section-slider").forEach((item, index) => {
            app.sectionSlider.setSwiper(item, index);
        })
    },
    setSwiper: function (slider, index) {
        // .section-slider class'ı olan sliderlar otomatik olarak app.sectionSlider.options breakpoint ayarı ile set ediliyor
        // .section-slider da data-options değeri olursa aşağıdaki if koşuluna göre dinamik slider yapılabilir.
        // app.sectionSlider._2_options ayarı about sayfasındaki "Değerlerimiz" slider'ı için kullanılıyor. Diğerinden farkı 3 lü olması.

        let opt = null;

        if (slider.dataset.options == '2') {
            opt = app.sectionSlider._2_options;
        } else {
            opt = app.sectionSlider.options;
        }

        new Swiper(slider.querySelector(".swiper"), {
            navigation: {
                prevEl: slider.querySelector(".btn-nav.prev"),
                nextEl: slider.querySelector(".btn-nav.next"),
            },
            pagination: {
                clickable: true,
                el: slider.querySelector(".slider-pagination")
            },
            breakpoints: opt
        })
    },
    init: function () {
        if (document.querySelector(".section-slider")) {
            app.sectionSlider.set();
        }
    }
}

function initFileUpload() {
    const fileInput = document.getElementById('upload-file');
    const fileNameLabel = document.getElementById('file-name');

    if (fileInput && fileNameLabel) { // Öğelerin var olup olmadığını kontrol edin
        fileInput.addEventListener('change', function() {
            // Seçilen dosyanın adını alıyoruz
            const files = fileInput.files;
            const fileName = files.length > 0 ? files[0].name : "Select file";

            // Dosya adını label içinde güncelliyoruz
            fileNameLabel.textContent = fileName;
        });
    } else {
        console.error('fileInput veya fileNameLabel bulunamadı.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // .section-career-form elementi var mı kontrol ediliyor
    const careerFormSection = document.querySelector('.section-career-form');
    
    if (careerFormSection) {
        // Eğer element varsa fonksiyon çalıştırılıyor
        initFileUpload();
    } else {
        console.log('.section-career-form bulunamadı, initFileUpload çalıştırılmadı.');
    }
});



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG5jb25zdCBQQVRIX1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuY29uc3QgRlVMTF9VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuY29uc3QgYXBwID0ge307XHJcbmNvbnN0IEdFVF9QQVJBTSA9IChrZXkpID0+IHtcclxuXHRyZXR1cm4gbmV3IFVSTChGVUxMX1VSTCkuc2VhcmNoUGFyYW1zLmdldChrZXkpO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBQQVJUSUFMU1xyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvaGVhZGVyLmpzJykgXHJcbkBAaW5jbHVkZSgncGFydGlhbC93YXRlcm1hcmsuanMnKVxyXG5cclxuXHJcbi8vIFVUSUxTXHJcbkBAaW5jbHVkZSgndXRpbC9mYWRlLW91dC5qcycpXHJcbkBAaW5jbHVkZSgndXRpbC9zbW9vdGgtc2Nyb2xsLmpzJylcclxuQEBpbmNsdWRlKCd1dGlsL3JlcGxhY2UtYnJva2VuLWltYWdlLmpzJylcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblx0Ly8gUEFSVElBTFNcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvZm9ybWF0LXRlbC1saW5rLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvZXh0ZXJuYWwtbGluay1ub3JlZmVyLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvcHJvdGVjdC1pbWFnZS5qcycpXHJcblx0LypAQGluY2x1ZGUoJ3BhcnRpYWwvcmVzcG9uc2l2ZS10YWJsZS5qcycpICovXHJcbn0pO1xyXG4gXHJcblxyXG5cclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2luaXQuanMnKSBcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2hlcm8tc2xpZGVyLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL3NpZGViYXItbWVudS5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9sb2FkaW5nLXBhZ2UuanMnKVxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvcmVmZXJlbmNlcy1zbGlkZXIuanMnKVxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvbmV3c2xldHRlci5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9uZXdzLXNsaWRlci5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9zc3MuanMnKVxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvY29va2llLW1vZGFsLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL3ZpZGVvLW1vZGFsLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL25ld3MtZGV0YWlsLW1vZGFsLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2Jsb2NrLW11bHRpcGxlLXNsaWRlci5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9maWxlLWlucHV0LmpzJylcclxuXHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
