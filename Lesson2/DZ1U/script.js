let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"];
let today = "Monday";
for (let i = 0; i < week.length; i++) {
    let day = week[i];
    if (day == "Sunday" && day == "Saturday") {
        console.log(day.bold(), '\n'); // .bold() method
    } else if (day == today) {
        console.log(day.italics(), '\n'); // .italics() method
    } else {
        console.log(day, '\n'); // + "<br />" for html
    }
};