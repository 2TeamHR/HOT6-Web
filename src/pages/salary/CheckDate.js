import { useEffect, useState } from "react";

export function CheckYear() {

    var startYear="2015";// 시작할 년도
    var today = new Date();
    var todayYear= today.getFullYear();
    var index = 0;
    
    for(var y=startYear; y<=todayYear; y++){ //start_year ~ 현재 년도
        document.getElementById('selectYear').options[index] = new Option(y, y);
        index++;
    }
}

export function CheckMonth() {

    var index = 0;

    for(var m=1; m<=12; m++){
        document.getElementById('selectMonth').options[index] = new Option(m, m);
        index++;
    }

    return 
}

/*
export function CheckYear() {

    var startYear="2015";// 시작할 년도
    var today = new Date();
    var todayYear= today.getFullYear();
    var index = 0;
    
    for(var y=startYear; y<=todayYear; y++){ //start_year ~ 현재 년도
        document.getElementById('selectYear').options[index] = new Option(y, y);
        index++;
    }
}

export function CheckMonth() {

    var index = 0;

    for(var m=1; m<=12; m++){
        document.getElementById('selectMonth').options[index] = new Option(m, m);
        index++;
    }

    return 
}


*/