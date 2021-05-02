import {data} from './data.js'

function generateCard() {
  let main = document.querySelector(".main")

  for(let i = 0; i<35; i++) {
    let rand = Math.floor(0 + Math.random() * (4 + 1 - 0))
  
    main.insertAdjacentHTML("afterbegin", `
    <div class="card">
    <div class="status">
      <span class=${data[rand].statusClass}>${data[rand].status}</span>
    </div>
    <div class="ico"><img alt="chicken" src=${data[rand].animal}></div>
    <div class="number">
      <span>Пакет №${data[rand].packets}</span>
      <span class="state">${data[rand].state}</span>
    </div>
    <div class="title">
      <span class="prom">${data[rand].prom}</span>
      <span class="district">${data[rand].district}</span>
    </div>
    <div class="more">
      <span class="more-button">Подробнее</span>
    </div>
    </div>
    `)
  }  
}

generateCard()





