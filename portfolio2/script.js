const btns = document.querySelectorAll('nav button[data-tab]');
const pages = document.querySelectorAll('.tab-content');

function page(id) {
    pages.forEach(page => {
        page.classList.remove('active');
    }),
    btns.forEach(btn => {
        btn.classList.remove('active');
    })
    const page = document.getElementById(id);
    if (!page) {
        return;
    }
    page.classList.add('active');
    const button = document.querySelector(`nav button[data-tab="${id}"]`);
    if (button) {
        button.classList.add('active');
    }
}
btns.forEach(button => {
    button.addEventListener("click", () => {
        page(button.dataset.tab);
    });
});
page('aboutme');