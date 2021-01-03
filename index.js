const boxes = document.querySelectorAll('div').length;

for (var i = 0; i < boxes; i++) {
    document.querySelectorAll('div')[i].addEventListener('mouseenter', function () {
        this.classList.add('moused');
    });
}

