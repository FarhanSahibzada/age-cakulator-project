
function calculate() {



    let day = document.getElementById("days").value;
    let month = document.getElementById("months").value;
    let year = document.getElementById("years").value;
    //  value stored
    console.log(day);


    let todate = new Date();
    /// today value

    let tyear2 = todate.getFullYear();
    let tmonth2 = 1 + todate.getMonth();
    let tday2 = todate.getDate();
    // today dates values

    let month3 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // last dates of month


    if (day > tday2) {
        tday2 = month3[tmonth2 - 1]
        tmonth2 = tmonth2 - 1;

    }

    if (month > tmonth2) {
        tmonth2 = tmonth2 + 12;
        tyear2 = tyear2 - 1;

    }

    var d = tday2 - day;
    var m = tmonth2 - month;
    var y = tyear2 - year;



    document.getElementById("display").innerHTML = `you are ${y} years old and ${m} months and ${d}days`
}








let date = new Date();

let today = date.getDate();

console.log(today);









