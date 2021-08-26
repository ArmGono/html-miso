// const htmm = "arinj";
// console.log(htmm)		


// function calculateage(year){
// 	return 2020 - Year
// }


// const Year = prompt('Введите ващ возраст')
// alert (Year)
// const a = 1;
// const b = 3;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
	


// const name = prompt('Введите ваше Имя');	
// const surname = prompt('Введите ваше Фамилия');	
// const age = prompt('Введите ваш Возраст');	
// console.log('Имя: '+ name + ' Фамилия ' + surname + ' Возраст ' + age);
	

// const a = 15
// const b = 45
// const c = 60

// const isnums = a - b >= c
//  console.log(isnums)
// const yeas = true;
//  if (a + b === c){
//  	console.log(yeas)
//  }else{
//  	console.log('ХУЕТА')
//  }



// function usage(year) {
// 	return 2021 - year
// }

// function users(name, surname, year) {
// 	const age = usage(year)
// 	console.log('Имя: ' + name + ' Фамилия: ' + surname + ' Возраст: ' + age)
// }



// users('Мис', 'Минасян', 2001)




// Задача 1

    // Объявите две переменные: admin и name.
    // Запишите строку "Джон" в переменную name.
    // Скопируйте значение из переменной name в admin.
    // Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

// МОе решение

// let admin = 'Джон';
// let name = 'Джон';
// alert(admin)



// решение

// let admin, name; // можно объявить две переменные через запятую

// name = "Джон";

// admin = name;

// alert( admin ); // "Джон"



// 4/10


// Задача 2


    // Создайте переменную для названия нашей планеты. Как бы вы её назвали?
    // Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?

// мой

// const planet = 'world';
// let username = 'Andrey';



// решение
// let ourPlanetName = "Земля";
// let currentUserName = "Джон";
// Обратите внимание, мы могли бы использовать короткое имя planet,
// но тогда будет непонятно, о какой планете мы говорим.
// Лучше описать содержимое переменной подробнее, по крайней мере,
// до тех пор, пока имя переменной неСтанетСлишкомДлинным.


// Задача 3:Какие буквы (заглавные или строчные) использовать для имён констант?

// const birthday = '18.04.1982';

// const age = someCode(birthday);

// const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?

// const AGE = someCode(BIRTHDAY); // а здесь?

// мой 
// да можно потому что констант


// Ответ 
// Обычно мы используем буквы в верхнем регистре для констант,
// которые «жёстко закодированы». Или, другими словами, 
// когда значение известно до выполнения скрипта и записывается непосредственно в код.
// В нашем примере, birthday именно такая переменная. Поэтому мы можем использовать заглавные буквы.
// В отличие от предыдущей, переменная age вычисляется во время выполнения скрипта. Сегодня у нас один возраст,
// а через год уже совсем другой. Она является константой,
// потому что не изменяется при выполнении кода. Но она является «менее константной», чем birthday: она вычисляется, 
// поэтому мы должны сохранить её в нижнем регистре.


// let name = prompt('Как зовут?')
// alert(name)

// let a = 1, b = 1;

// let c = ++a;
// let d = b++;
// console.log(c)
// console.log(d)


// let question = prompt('Какое «официальное» название JavaScript?')
// if (question === 'ECMAScript'){
// 	alert( 'правильно' )
// }else{
// 	alert( 'не знаете ECMAScript?' )
// }



// let question = prompt('Введите число')
// if(question > +0){
// 	alert('1')
// }else if(question < +0){
// 	alert('-1')
// }else{
// 	alert('0')
// }

// result = (a + b < 4) ? 'Мало'; : 'Много';


// let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ?  'Нет логина' : '';


// let myName = prompt('Кто там?');

// if(myName == 'admin'){
// 	let password = prompt('Пароль?');

// 	if(password == "hayastanm0m"){

// 		alert('привет!');
// 	}else if(password == '' || password == null){

// 		alert('Отмена');
// 	}else{

// 		alert('Неверный Пароль');
// 	}
// }else if(myName == '' || myName == null){

// 	alert('Отмена');
// }else{

// 	alert('Я вас не знаю!');
// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// for (let i = 2; i < 10; i++){
// 	if(i % 2 == 0){
// 		alert( i )
// 	}
// }



// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
// 	alert(`number ${i}!`)
// 	i++
// }











let value = prompt('Больше 100!')

If(value >= 100){
	alert('ok')
}