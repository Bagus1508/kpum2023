// Ambil elemen tombol dan menu
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

// Tambahkan event listener untuk toggle menu saat tombol ditekan
mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});



const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    tabContents.forEach(content => {
      if (content.id === tab) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });
    tabButtons.forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
    button.classList.add('bg-blue-500', 'text-white');
  });

// Set tab pertama sebagai default aktif
document.getElementById('tab-1').classList.remove('hidden');
document.querySelector('.tab-button[data-tab="tab-1"]').classList.add('bg-blue-500', 'text-white');
});