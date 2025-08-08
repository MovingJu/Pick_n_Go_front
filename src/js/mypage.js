document.querySelectorAll('.photos > div > div').forEach((e, i) => {
    e.style.backgroundImage = `url(/imgs/img${i + 1}.png)`;
    console.log(e);
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

const tourList = [
    {
        name: "모름",
        geography: "부산 해운대",
        description: "이거 마우스 올리면 이렇게 커짐 클릭하면 관광지 세부 페이지로 ㄱㄱ"
    },
    {
        name: "광화문",
        geography: "서울 종로",
        description: "이거 마우스 올리면 이렇게 커짐 클릭하면 관광지 세부 페이지로 ㄱㄱ"
    },
    {
        name: "롯데 월드타워",
        geography: "서울 송파",
        description: "이거 마우스 올리면 이렇게 커짐 클릭하면 관광지 세부 페이지로 ㄱㄱ"
    },
    {
        name: "마린시티 호텔",
        geography: "부산 해운대",
        description: "이거 마우스 올리면 이렇게 커짐 클릭하면 관광지 세부 페이지로 ㄱㄱ"
    },
];

const tourListLoad = () => {
    document.querySelectorAll('.wrapper > div').forEach((e, i) => {
        e.style.flex = '1';
        e.style.display = 'flex';
        e.style.alignItems = 'center';
        e.style.padding = '20px';
        if (i < 3) {
            e.style.backgroundImage = `url(/imgs/img${i + 1}.png)`;
        } else {
            e.style.backgroundImage = `url(/imgs/tourList${i + 1}.png)`;
        }
        e.style.backgroundSize = '100%';
        e.style.backgroundPosition = 'center';
        e.innerHTML = `${tourList[i].name}, ${tourList[i].geography}`;
    });
}
tourListLoad();

document.querySelectorAll('.wrapper > div').forEach((e) => {
    e.addEventListener('mouseenter', () => {
        tourListLoad();
        e.style.flex = '5';
    });
});