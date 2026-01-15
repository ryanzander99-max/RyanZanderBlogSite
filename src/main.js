let inverted = false;

function switchTheme() {
    inverted = !inverted;

    if (inverted) {
        document.documentElement.style.filter = 'invert(1)';
    } else {
        document.documentElement.style.filter = 'none';
    }
}

function sortPosts(by) {
    const blogList = document.querySelector('.blog ul');
    const items = Array.from(blogList.querySelectorAll('li'));
    items.sort((a, b) => {
        if (by === 'date') {
            return b.dataset.date.localeCompare(a.dataset.date);
        } else {
            return a.dataset.name.localeCompare(b.dataset.name);
        }
    });
    items.forEach(item => blogList.appendChild(item));

    const sortDateBtn = document.getElementById('sort-date');
    const sortNameBtn = document.getElementById('sort-name');

    if (by === 'date') {
        sortDateBtn.classList.add('active');
        sortNameBtn.classList.remove('active');
    } else {
        sortNameBtn.classList.add('active');
        sortDateBtn.classList.remove('active');
    }
}