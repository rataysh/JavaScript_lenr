const buttonStart = document.getElementById('start-button')
const listSubject = ['Lida', 'Denis', 'Bebyrishvili', 'GID', 'Chernaya Marina']


function generateNewEx() {
    let randomIndex = Math.floor(Math.random() * listSubject.length)
    alert(listSubject[randomIndex])
}

buttonStart.onclick = generateNewEx
// Ниже аналогичная запись, только через стрелочную функцию
// buttonStart.onclick = () => {
//     alert('Нажатие на кнопку работает!')
// }

console.log(listSubject[randomIndex])