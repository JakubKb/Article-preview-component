const bottom_menu = document.getElementById('bottom');
const share_btn = document.getElementById('share');
const share_menu = document.getElementById('mobile-share');
const back_btn = document.getElementById('mobile-share-btn');
const share_text = document.getElementById('share-text');

const dropdown = document.getElementById('dropdown');

if(window.innerWidth < 758) {
    share_btn.addEventListener('click', () => {
        bottom_menu.style.display = 'none';
        share_menu.style.display = 'flex';
    }); 
    back_btn.addEventListener('click', () => {
        bottom_menu.style.display = 'flex';
        share_menu.style.display = 'none';
   
    }) 
} else if (window.innerWidth > 758) {
    share_btn.removeEventListener('click');
    back_btn.removeEventListener('click');
}
