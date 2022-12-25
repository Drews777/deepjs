let ourString = prompt('Введите произвольную строку');

const formattedString = function(string){
    if (typeof string != 'string') alert('Неверный тип данных');
    let spaceless = string.trim();
    if (spaceless.length > 30) {
        return spaceless.substr(0,30) + '...';
    }
    return spaceless;
}
console.log(formattedString(ourString));