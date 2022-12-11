let aviceText = document.querySelector('#aviceText');
let btnAvice = document.querySelector('#btnAdvice');

getAvice();
btnAvice.addEventListener('click', () => {
    getAvice();
});

function getAvice() {
    axios.get('https://api.adviceslip.com/advice')
        .then(function (response) {
            // función que se ejecutará al recibir una respuesta
            aviceText.innerText = `“${response.data.slip.advice}”`;
        })
        .catch(function (error) {
            // función para capturar el error
            console.log(error);
        })
        .then(function () {
            // función que siempre se ejecuta
        });
}