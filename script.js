const tabLinks = document.querySelectorAll('.tab-link');
const tabItems = document.querySelectorAll('.tab-item');

tabLinks.forEach((link) => {
  link.addEventListener('click', () => {
    tabLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');

    tabItems.forEach((item) => {
      item.classList.remove('show'); // Hide all
    });

    const target = link.getAttribute('data-target');
    const content = document.getElementById(target);
    if (content) {
      content.classList.add('show'); // Show selected
    }
  });
});
