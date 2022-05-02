const buttonStart = document.getElementById('start-button')
const listSubject = ['Lida', 'Denis', 'Bebyrishvili', 'GID', 'Chernaya Marina']
const resultElementDom = document.getElementsByClassName('resultElem')
const listClassesResultElem = ['resultElem', 'resultElem1', 'resultElem2', 'resultElem3']
// let randomIndex = Math.floor(Math.random() * listSubject.length)

function generateNewEx() {
    let randomIndex = Math.floor(Math.random() * listSubject.length)
    let randomClasses = Math.floor(Math.random() * listClassesResultElem.length)
    
    let choiceClass = document.getElementsByClassName(listClassesResultElem[randomClasses])
    choiceClass[0].innerHTML = listSubject[randomIndex]

    // resultElementDom[0].innerHTML = listSubject[randomIndex]
    console.log(listClassesResultElem[randomClasses])
    // console.log(choiceClass)

    // for (let i = 0; i < resultElementDom.length; i++) {
    //     resultElementDom[i].innerHTML = listSubject[randomIndex]
    // } 
    // resultElementDom.innerHTML = listSubject[randomIndex]
}



buttonStart.onclick = generateNewEx
// Ниже аналогичная запись, только через стрелочную функцию
// buttonStart.onclick = () => {
//     alert('Нажатие на кнопку работает!')
// }


// console.log(resultElementDom)

