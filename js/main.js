let aviceText = document.querySelector('#aviceText');
let btnAvice = document.querySelector('#btnAdvice');

getAvice();
btnAvice.addEventListener('click', () => {
    getAvice();
});

function getAvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())    // a fetch le llega una respuesta en string que tiene que ser parseada a JSON
        .then(data => {
            aviceText.innerText = `“${data.slip.advice}”`;
        })
        .catch(error => console.error(error));
}