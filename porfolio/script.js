// script.js

let tablink = document.getElementsByClassName('tab-link');
let tabcont = document.getElementsByClassName('tab-cont');

function opentab(tabname, event) {
    for (let tablinks of tablink) {
        tablinks.classList.remove('active');
    }
    for (let tabconts of tabcont) {
        tabconts.classList.remove('active-cont');
    }
    event.currentTarget.classList.add('active');
    document.getElementById(tabname).classList.add('active-cont');
}

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < tablink.length; i++) {
        tablink[i].addEventListener('click', function (event) {
            let tabName = this.innerText.toLowerCase();
            opentab(tabName, event);
        });
    }
});

