// Task 1
let person = null;
person = prompt("Введите ваше имя: ");
alert("Привет, " + person);

// Task 2
let year = +prompt("Введите ваш год рождения: ")
const present_year = 2022
alert("Вам " + (present_year - year) + " лет")

// Task 3
let side = +prompt("Введите длину стороны квадрата: ")
alert("Периметр = " + 4 * side + " см")

// Task 4
let radius = +prompt("Введите радиус окружности: ")
const pi = 3.14
alert("Площадь = " + (pi * radius**2) + " см^2")

// Task 5
let spacing = +prompt("Введите расстояние в км между двумя городами: ")
let time = +prompt("Введите за сколько часов вы хотите добраться: ")
alert("Cкорость, с которой необходимо двигаться, чтобы успеть вовремя = " + (spacing / time) + " км/ч")

// Task 6
let dollars = +prompt("Введите вашу сумму в долларах: ");
const euros = 1.00288;
alert((dollars + " долларов = " + (dollars * euros) + " евро"));

// Task 7
let volume = +prompt("Введите объем флешки в Гб: ")
const file_size = 820
alert("На флешку помещается " + (volume * 1024 / file_size) + " файлов размером в 820 Мб")

// Task 8
let money = +prompt("Введите сумму денег в кошельке: ")
let price = +prompt("Введите цену одной шоколадки: ")
amount = money / price
alert("Вы можете купить " + amount + " шоколадок")
if(money % price == 0){
    alert("Спасибо за покупку")
}
else{
    alert("Сдача: " + money / Math.floor(price) * price - money)
}

// Task 9
let three_figit_number = +prompt("Введите трехзначное число: ");
result = 0;
 
while(three_figit_number) {
    result *= 10;
    result += three_figit_number % 10;
    three_figit_number = Math.floor(three_figit_number / 10);
}

alert(result)

// Task 10
let number = +prompt("Введите целое число: ")
number % 2 == 0 ? alert('Четное') : alert('Нечетное');
