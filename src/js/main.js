document.querySelectorAll('.photos > div > div').forEach((e, i) => {
  e.style.backgroundImage = `url(./imgs/img${i + 1}.png)`;
});
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});

document.querySelector('.wrapper').children[1].addEventListener('click', () => {
  if (sessionStorage.getItem('jwt')) {
    location.href = '/pages/mypage.html';
  } else {
    location.href = '/pages/signin.html';
  }
})