//<input id = "age" value= "30">
let age = document.getElementById('age');

function showUser(surname, name) {
    this.surname = surname;
    this.name = name;
    this.value = age;

    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser();