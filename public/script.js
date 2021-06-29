const date = document.getElementById('currentdate');

let detail= document.getElementById("detail");
let icon= document.getElementById("weathercon");

let cdate = new Date();

var month = new Array();
month[0] = "JAN";
month[1] = "FEB";
month[2] = "MAR";
month[3] = "APR";
month[4] = "MAY";
month[5] = "JUNE";
month[6] = "JUL";
month[7] = "AUG";
month[8] = "SEP";
month[9] = "OCT";
month[10] = "NOV";
month[11] = "DEC";

window.onload = function () {
    let d = cdate.getDate();
    let m = month[cdate.getMonth()];
    let da;

    if (d == 1) {
        da = "1st"
    }
    else if (d == 2) {
        da = "2nd"
    }
    else if (d == 3) {
        da = "3rd"
    }
    else {
        da = `${d}th`
    }

    date.innerHTML = da + " " + m;

    console.log(detail)
    if(detail.innerHTML.toLowerCase() == "sunny")
    {
        icon.innerHTML = "<i class='fas fa-sun icon' style='color: #FDB813;'></i>";
    }
    else if(detail.innerHTML.toLowerCase() == "clouds")
    {
        icon.innerHTML = "<i class='fas fa-cloud icon' style='color: #aba4a4;'></i>";
    }
    else if(detail.innerHTML.toLowerCase() == "rainy")
    {
        icon.innerHTML = "<i class='fas fa-cloud-rain icon' style='color: #c0e1e4;'></i>";
    }
    else if(detail.innerHTML.toLowerCase() == "----"){
        
    }
    else
    {
        icon.innerHTML = "<i class='fas fa-sun icon' style='color: #FDB813;'></i>";
    }

}