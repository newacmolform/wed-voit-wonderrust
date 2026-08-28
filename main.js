```javascript
// Начальные голоса
let votes = {
    "map-1": 0,
    "map-2": 0,
    "map-3": 0
};


// Загружаем сохранённые голоса
let savedVotes = localStorage.getItem("rustVotes");

if (savedVotes) {
    votes = JSON.parse(savedVotes);
}


// Проверяем, голосовал ли пользователь
let alreadyVoted = localStorage.getItem("alreadyVoted");


// Показываем голоса на странице
function updateVotes() {

    document.getElementById("votes-map-1").textContent = votes["map-1"];

    document.getElementById("votes-map-2").textContent = votes["map-2"];

    document.getElementById("votes-map-3").textContent = votes["map-3"];
}


// Функция голосования
function vote(mapId) {

    // Запрещаем второй голос
    if (alreadyVoted) {

        document.getElementById("message").textContent =
            "Ты уже проголосовал!";

        return;
    }


    // Добавляем один голос
    votes[mapId]++;


    // Сохраняем голоса в браузере
    localStorage.setItem(
        "rustVotes",
        JSON.stringify(votes)
    );


    // Запоминаем, что пользователь голосовал
    localStorage.setItem(
        "alreadyVoted",
        "true"
    );


    // Обновляем цифры
    updateVotes();


    // Показываем сообщение
    document.getElementById("message").textContent =
        "Голос принят!";


    // Отключаем кнопки
    document.querySelectorAll(".vote-button").forEach(button => {
        button.disabled = true;
    });
}


// Запускаем обновление при открытии сайта
updateVotes();
```
