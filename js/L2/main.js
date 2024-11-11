    //- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

    let arr =   [0,1,2,3,4,5,6,7,8,9]
    arr.forEach(value => console.log(value))


    //- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.


    let a = {
        title:"name1",
        pageCount:100,
        genre:"random"
    }
    let b = {
        title:"name2",
        pageCount:200,
        genre:"random1"
    }
    let c ={
        title:"name3",
        pageCount:300,
        genre:"random2"
    }

    //- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

        let a1 = {
        title:"name1",
        pageCount:100,
        genre:"random",
        authors:[{name:"name1",age:20},{name:"name2",age:21},{name:"name3",age:22},]
    }
    let b1 = {
        title:"name2",
        pageCount:200,
        genre:"random1",
        authors:[{name:"name11",age:20},{name:"name12",age:21},{name:"name13",age:22},]

    }
    let c1 ={
        title:"name3",
        pageCount:300,
        genre:"random2",
        authors:[{name:"name21",age:20},{name:"name22",age:21},{name:"name23",age:22}]
}


      //      - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
    //      Вивести в консоль пароль кожного користувача
    let usersArr = [
        {name:"admin", username:"admin",password:"adminpass1"},
        {name:"admin2", username:"admin",password:"adminpass2"},
        {name:"admin3", username:"admin",password:"adminpass3"},
        {name:"admin4", username:"admin",password:"adminpass4"},
        {name:"admin5", username:"admin",password:"adminpass5"},
        {name:"admin6", username:"admin",password:"adminpass6"},
        {name:"admin7", username:"admin",password:"adminpass7"},
        {name:"admin8", username:"admin",password:"adminpass8"},
        {name:"admin9", username:"admin",password:"adminpass9"},
        {name:"admin10", username:"admin",password:"adminpass10"}
    ]
    usersArr.forEach(value => console.log(value.password))


//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив
// - вам потрібно подумати. Нормальних варіантів опису -
// 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
  let temperature =  [
        [0,10,7],
        [0,10,7],
        [0,10,7],
        [0,10,7],
        [0,10,7],
        [0,10,7],
        [0,10,7],
        ]




  //- Є змінна х, якій ви надаєте довільне числове значення.
 // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
    // Перевірте  скрипт при a, що дорівнює 1, 0, -3

    let x = 10;
    let aa = 1;
    if (x != 0) {console.log("Вірно")} else {console.log("Невірно")}
    if (aa != 0) {console.log("Вірно")} else {console.log("Невірно")}
    aa=0
    if (aa !== 0) {console.log("Вірно")} else {console.log("Невірно")}
    aa=-3
    if (aa != 0) {console.log("Вірно")} else {console.log("Невірно")}

    //- Дано змінну time яка рівна числу від 0 до 59.
    // Потрібно написати код, який перевірить, до якої четверті години попадає число
    // (в першу, другу, третю или четверту частину години).

    let time;
    if (time>0 && time<15) console.log("першу");
    if (time>15 && time<30) console.log("другу");
    if (time>30 && time<45) console.log("третю");
    if (time>45 && time<60) console.log("четверту");


    //- У змінній day дано якесь число від 1 до 31.
    // Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
    let day;
    let maxDays = 31;
    if ( day<(maxDays/3)) console.log("першу");
    if (day>(maxDays/3) && day<(maxDays/3*2)) console.log("другу");
    if (day>(maxDays/3*2) && day<=(maxDays)) console.log("третю");

//- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
    // Запит у користувача порядкового номера дня
    const dayNumber = parseInt(prompt("Введіть порядковий номер дня тижня (1-7):"));

    let schedule;

    switch (dayNumber) {
        case 1:
            schedule = "Monday: Study German, Gym at 6 PM.";
            break;
        case 2:
            schedule = "Tuesday: Team meeting, Project work.";
            break;
        case 3:
            schedule = "Wednesday: Presentation preparation, Networking event.";
            break;
        case 4:
            schedule = "Thursday: Client call, Cooking class.";
            break;
        case 5:
            schedule = "Friday: Relaxation, Movie night.";
            break;
        case 6:
            schedule = "Saturday: Hiking trip, Family dinner.";
            break;
        case 7:
            schedule = "Sunday: Grocery shopping, Planning for the next week.";
            break;
        default:
            schedule = "Invalid input! Please enter a number between 1 and 7.";
            break;
    }

    alert(schedule);


//Користувач вводить або має два числа.
    // Потрібно знайти та вивести максимальне число з тих двох .
    // Також потрібно врахувати коли введені рівні числа.
    // Запитуємо у користувача два числа

    const num1 = parseFloat(prompt("Введіть перше число:"));
    const num2 = parseFloat(prompt("Введіть друге число:"));

    if (num1 > num2) {
        alert(`Максимальне число: ${num1}`);
    } else if (num1 < num2) {
        alert(`Максимальне число: ${num2}`);
    } else {
        alert("Числа рівні.");
    }

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
    let x = 0;
    x = x || "default";
    console.log(x); // Виведе: "default"


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    for (let course of coursesAndDurationArray) {
        if (course.monthDuration > 5) {
            console.log(`${course.title}: Супер`);
        }
    }