const buttonSelect = document.querySelector(".button-select");
const countdownDisplay = document.getElementById("countdown");
let countdown;

function updateCountdown(seconds) {
    countdownDisplay.innerText = `Tempo restante: ${seconds} segundos`;
}

function clickprees() {
    const min = Math.ceil(parseFloat(document.querySelector(".input-min").value));
    const max = Math.floor(parseFloat(document.querySelector(".input-max").value));

    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.");
        return;
    }
    countdown = 5; 

    
    updateCountdown(countdown);
    const countdownInterval = setInterval(function() {
        countdown--;
        updateCountdown(countdown);

        if (countdown === 0) {
            clearInterval(countdownInterval);

            
            const result = Math.floor(Math.random() * (max - min + 1)) + min;
            countdownDisplay.innerText = `Número Sorteado: ${result}`;

            
            buttonSelect.remove();
        }
    }, 1000);
}

buttonSelect.addEventListener("click", clickprees)