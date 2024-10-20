const BASE_URL = window.location.protocol + '//' + window.location.host;
const PATH_URL = window.location.pathname;
const FULL_URL = window.location.href;
const app = {};
const GET_PARAM = (key) => {
	return new URL(FULL_URL).searchParams.get(key);
};



// PARTIALS
@@include('partial/header.js') 
@@include('partial/watermark.js')


// UTILS
@@include('util/fade-out.js')
@@include('util/smooth-scroll.js')
@@include('util/replace-broken-image.js')

document.addEventListener('DOMContentLoaded', () => {
	// PARTIALS
	@@include('partial/format-tel-link.js')
	@@include('partial/external-link-norefer.js')
	@@include('partial/protect-image.js')
	/*@@include('partial/responsive-table.js') */
});
 


@@include('partial/init.js') 
@@include('partial/hero-slider.js')
@@include('partial/sidebar-menu.js')
@@include('partial/loading-page.js')
@@include('partial/references-slider.js')
@@include('partial/newsletter.js')
@@include('partial/news-slider.js')
@@include('partial/sss.js')
@@include('partial/cookie-modal.js')
@@include('partial/video-modal.js')
@@include('partial/news-detail-modal.js')
@@include('partial/block-multiple-slider.js')
@@include('partial/file-input.js')


