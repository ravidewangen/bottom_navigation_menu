
const list = document.querySelectorAll('.list');
const activeTab = document.querySelector('.active-tab');

let activeIndex;


list.forEach((ele) => ele.addEventListener('mouseover', addActiveClass));


function addActiveClass() {
    list.forEach(link => link.className = 'list');
    this.className = 'list active';
    activeIndex = this.dataset.active;
    moveActiveTab();
}

function moveActiveTab() {
    let position = activeIndex * 70 + 25;
    activeTab.style.left = `${position}px`
}

window.onload = () => {
    activeTab.style.left = `25px`
    list[0].className = 'list active'
}