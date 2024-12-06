const lampOn = document.getElementById(`lampOn`)
const lampOff = document.getElementById(`lampOff`)
const toggleBtn = document.getElementById(`toggleBtn`)
 toggleBtn.addEventListener(`click`, function () {
    if (lampOn.classList.contains(`hidden`)) {
    lampOn.classList.remove(`hidden`)
    lampOff.classList.add(`hidden`)
    toggleBtn.textContent = 'Spegni';
    } else {
        lampOff.classList.remove(`hidden`)
        lampOn.classList.add(`hidden`)
        toggleBtn.textContent = 'Accendi';
    }
 })
