const box = document.querySelector('.box');
const previousBtn = document.querySelector('.b1');
const nextBtn = document.querySelector('.b2');

const colors = ['blue', 'black', 'orange', 'green', 'red'];
const nums = ['1', '2', '3', '4', '5'];

let index = -1;

nextBtn.onclick = function () {

    index++;
    if (index >= colors.length) {
        index = 0
    }

    box.style.background = colors[index];
    box.innerHTML = nums[index];

}

previousBtn.onclick = function () {
    index--
    if (index < 0) {
        index = colors.length - 1;
    }
    box.innerHTML = nums[index];
    box.style.background = colors[index];
}

const main = document.querySelector('main');

const mainElements = {
    title: 'This is Title',
    content: 'This is content',
    button: 'CLick me',
    hideContent: 'Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
};

const mainItems = `<h1>${mainElements.title}</h1>
                <p>${mainElements.content}</p>
                <button class="btn">${mainElements.button}</button>
                <div class= "hide-content">${mainElements.hideContent}</div>
                `

main.innerHTML = mainItems;

const hideContent = document.querySelector('.hide-content');
const btn = document.querySelector('.btn');

let flag = false;

btn.onclick = function () {

    if (flag === false) {
        hideContent.style.display = 'block';
        flag = true
    } else if (flag === true) {
        hideContent.style.display = 'none'
        flag = false;
    }


}