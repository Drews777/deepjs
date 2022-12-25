// let lang = prompt('Выберите язык');

switch (lang) {
    case 'ru':
        alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case 'eng':
        alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
}

// if (lang === 'ru') alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
// if (lang === 'eng') alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');

// let map = new Map();
// map.set("ru", "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
// map.set("eng", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
// console.log(map);
// alert(map.get(lang));

let namePerson = prompt('Введите имя');

let message = (namePerson === 'Артем') ? 'Ученик' :
    (namePerson === 'Максим') ? 'Преподаватель' :
            'Студент';
console.log( message );