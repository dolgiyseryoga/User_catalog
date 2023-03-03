/*Контакты. Возм. методы: добавление нового контакта
 (ввод ФИО, возраст, телефон, эл.
почта), проверка введенной информации, 
например: проверить возраст – должен быть
целым неотрицательным числом больше 18,
 вывод информации о конкретном
контакте, вывод всех контактов.*/

// Конструктор Создать пользователя
let User = function(name,age,tel,mail){
    this.name = name;
    this.age = age;
    this.tel = tel;
    this.mail = mail;
};

// Проверка возраста пользователя
function examination(num){
if ((Number.isInteger(num) == true) && (num > 0)) {
    return num;
   } else {
       console.log('Был введен возраст меньше 18 или не целое число!');
   }
}



let Arr = [];

// Показать пользователя
let user;
let num;

function NewUser() {
user = new User(
    this.name = prompt('Введите имя'),
    num = +prompt('Введите возраст'),
    this.age  = examination(num),
    this.tel  = prompt('Введите телефон'),
    this.mail = prompt('Введите mail'),  
);
}

// Добавить пользователяв список
function AddArr() {
    Arr.push(user); 
};

// Показать всех пользователя
function ShowListUser(){
    console.log(Arr);
}

// Показать пользователя
function ShowUser() {
    console.log(user)
};

// Очистить список пользователей
function CleanListUser() {
    Arr = [];
};



function Find() {
var FindName =  document.getElementById("search").value;
var userMail;
var userAge;
var userTel;

for(var i = 0; i < Arr.length; i++) {
  if(Arr[i].name == FindName ) {
    userAge   = Arr[i].age;
    userTel   = Arr[i].tel;
    userMail  = Arr[i].mail;
    break;
  }
}

console.log('Имя пользователя: '+ FindName + userMail,userAge,userTel);
}


// Удалить пользователя
function Delete() {
    for (i = 0; i <= Arr.length; i++) {
      if (this.name == document.getElementById("search").value) {
        Arr.splice(i, 1);
        console.log("Пользователь удален");
      } else {
        console.log("Такого пользователя не существует");
      }
    }
  }
  
  console.log(typeof document);