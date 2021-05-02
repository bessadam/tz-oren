let data = [
  {
    status: "Подключено", 
    statusClass: "connected",
    animal: "icons/animals/chicken.svg", 
    packets: "24", 
    state: "&quot;Федеральный&quot;", 
    prom: "Птицеводческая промышленность",
    district: "Приволжский ФО РФ",
  },
  {
    status: "Отключено", 
    statusClass: "disabled",
    animal: "icons/animals/fish.svg", 
    packets: "47", 
    state: "&quot;Профессиональный&quot;", 
    prom: "Рыбная промышленность",
    district: "Речная рыба Россия",
  },
  {
    status: "Тест", 
    statusClass: "test",
    animal: "icons/animals/pig.svg", 
    packets: "4", 
    state: "&quot;Федеральный&quot;", 
    prom: "Мясная промышленность",
    district: "Мясо свинины Приволжского ФО РФ",
  },
  {
    status: "Подключено", 
    statusClass: "connected",
    animal: "icons/animals/cow.svg", 
    packets: "91", 
    state: "&quot;Федеральный&quot;", 
    prom: "Мясная промышленность",
    district: "Мясо КРС Россия",
  },
  {
    status: "Подключено", 
    statusClass: "connected",
    animal: "icons/animals/duck.svg", 
    packets: "51", 
    state: "&quot;Профессиональный&quot;", 
    prom: "Птицеводческая промышленность",
    district: "Мясо утки Россия",
  },
]

let status = [
  {
    sstatus: "Подключено", 
    statusClass: "connected",
  },
  {
    sstatus: "Тест", 
    statusClass: "test",
  },
  {
    sstatus: "Отключено",
    statusClass: "disabled",
  }
]

export {data, status}