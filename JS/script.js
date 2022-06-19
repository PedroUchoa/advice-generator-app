const adviceId = document.getElementById('advice-id');
const advice = document.getElementById('advice');
document.getElementById('button').addEventListener('click', getAdvice)

window.onload= () =>{
    getAdvice()
}

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            return response.json()
        }).then(data => {
            const adviceData = data.slip
            adviceId.innerHTML = `advice #${adviceData.id}`  
            advice.innerHTML = adviceData.advice 
        }).catch(error => {
            console.log(error)
        })
}

