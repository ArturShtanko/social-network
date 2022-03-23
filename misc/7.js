
let elem = document.querySelector('#elem');
            
function func(surname, name) {
    alert(this.value + ', ' + surname + ' ' + name);
}

let wrapFunc = func.bind(elem);
wrapFunc('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
wrapFunc('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'
