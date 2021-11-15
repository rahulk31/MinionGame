const engtxt = document.querySelector('#engtxt');
const miniontxt = document.querySelector('#miniontxt');
const btn = document.querySelector('#button');


const url = 'https://api.funtranslations.com/translate/minion.json?text=';

const clickHandler = () => {
    console.log('clicked');
    const txt = engtxt.value;
    fetch(url+txt)
        .then(res => res.json())
        .then(obj => {
           let translatedTxt = obj.contents.translated;
           miniontxt.innerText = translatedTxt;
        })
}

btn.addEventListener('click', clickHandler);