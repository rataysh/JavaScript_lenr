const buttonStart = document.getElementById('start-button')
const listSubject = ['Lida', 'Denis', 'Bebyrishvili']

function generateNewEx() {
    alert('Нажатие на кнопку работает!')
}

buttonStart.onclick = generateNewEx
// Ниже аналогичная запись, только через стрелочную функцию
// buttonStart.onclick = () => {
//     alert('Нажатие на кнопку работает!')
// }