const day = document.querySelector("#day");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const btn = document.querySelector("#btn");
const spans = document.querySelectorAll("span");
btn.addEventListener("click", calc);

function calc() {
    const inputDate = new Date(parseInt(year.value), parseInt(month.value) - 1, parseInt(day.value));
    const currentDate = new Date();
    if (((
    !(
        (day.value >= 1 && day.value <= 30) && (month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11)
    ) &&
    !(
        (day.value >= 1 && day.value <= 31) && (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12)
    ) &&
    !((month.value == 2) && (day.value >= 1 && day.value <= 28))) ||
    (day.value == '' || month.value == '' || year.value == '')
)||(year.value>currentDate.getFullYear())) {
        day.style.border = '1px solid red';
        month.style.border = '1px solid red';
        year.style.border = '1px solid red';
        spans[0].innerText = '--';
        spans[1].innerText = '--';
        spans[2].innerText = '--';
    } else {



        day.style.border = '1px solid grey';
        month.style.border = '1px solid grey';
        year.style.border = '1px solid grey';
      

        // Calculate the difference in milliseconds between the dates
        const diffInMilliseconds = currentDate - inputDate;

        // Calculate the approximate difference in years
        const diffInYears = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

        // Calculate the remaining milliseconds after subtracting years
        const remainingMilliseconds = diffInMilliseconds - (diffInYears * 1000 * 60 * 60 * 24 * 365.25);

        // Estimate the difference in months and days based on the remaining milliseconds
        const diffInMonths = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * 30.4375));
        const diffInDays = Math.floor((remainingMilliseconds / (1000 * 60 * 60 * 24)) % 30.4375);

        spans[0].innerText = diffInDays;
        spans[1].innerText = diffInMonths;
        spans[2].innerText = diffInYears;

    }
}
