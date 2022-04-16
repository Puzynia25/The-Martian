/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();


//document.querySelector('.promo__adv-title').remove();

const add = document.querySelectorAll('.promo__adv img'),
      img = document.querySelector('.promo__bg'),
      genre = img.querySelector('.promo__genre'),
      filmList = document.querySelector('.promo__interactive-list');
     


add.forEach(item => {
    item.remove();
});

genre.innerHTML = 'Драма';

img.style.backgroundImage = 'url("/img/bg.jpg")';

filmList.innerHTML = '';

movieDB.movies.forEach(function (film, i) {
    filmList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
                            <div class="delete"></div>
                        </li> `;
});
