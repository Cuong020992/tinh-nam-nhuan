
var year = prompt("nhập số năm cần xem: ");

if(year % 4 ==0 && year % 100 != 0) {
    alert("năm " + year + " là năm nhuận");
}

    else if(year % 100 == 0 && year % 400 == 0) {
        alert("năm "+year+" là năm nhuận");
}


       else if(year % 100 == 0 && year % 400 !=0) {
            alert("năm " + year + " là năm không nhuận");
        }

    else {
    alert("năm " + year + " là năm không nhuận");
}

