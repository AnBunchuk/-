const myPicture = ["pic01.png", "pic02.png", "pic03.png", "pic04.png", "pic05.png", "pic06.png", "pic07.png", "pic08.png"]
const pictureHost = 'img'
let calc = 0;

let sectionSmall = document.getElementsByClassName('small'),
    sectionBig = document.getElementsByClassName('big'),
    spanCalc = document.getElementById('calc');

myPicture.forEach(v => {
    // let newDiv = document.createElement('div');
    // section.append(newDiv);
    let newImg = document.createElement('img');
    newImg.setAttribute('src', `${pictureHost}/${v}`);
    newImg.setAttribute('width', '90%');
    sectionSmall[0].append(newImg);
})

// делегирование///////////////////////////////////
sectionSmall[0].addEventListener('click', function (e) {
    let element = e.target;
    console.dir(element)
    if (element.localName == 'img') {
        console.log(e.target)
        ++calc
        sectionBig[0].append(element);// добавляем в большое поле
        spanCalc.innerText = calc
    }
})
sectionBig[0].addEventListener('click', function (f) {
    let product = f.target;
    if (product.localName == 'img') {
    --calc
    sectionSmall[0].append(product);
    spanCalc.innerText = calc
    }
})




