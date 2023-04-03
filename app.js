
function calculateHoroscope(day, month) {
    
    if ((day >= 22 && month === 12) || (day <= 21 && month === 1)) {
        return "Oğlak";
    } else if ((day >= 22 && month === 1) || (day <= 19 && month === 2)) {
        return "Kova";
    }else if ((day >= 20 && month === 2) || (day <= 20 && month === 3)) {
        return "Balik";
    }else if ((day >= 21 && month === 3) || (day <= 20 && month === 4)) {
        return "Koç";
    }else if ((day >= 21 && month === 4) || (day <= 21 && month === 5)) {
        return "Boğa";
    }else if ((day >= 22 && month === 5) || (day <= 21 && month === 6)) {
        return "İkizler";
    }else if ((day >= 22 && month === 6) || (day <= 22 && month === 7)) {
        return "Yengeç";
    } else if ((day >= 23 && month === 7) || (day <= 22 && month === 8)) {
        return "Aslan";
    }else if ((day >= 23 && month === 8) || (day <= 22 && month === 9)) {
        return "Başak";
    }else if ((day >= 23 && month === 9) || (day <= 22 && month === 10)) {
        return "Terazi";
    }else if ((day >= 23 && month === 10) || (day <= 21 && month === 11)) {
        return "Akrep";
    }else if ((day >= 22 && month === 11) || (day <= 21 && month=== 12)) {
        return "Yay";
    }
}


 console.log(calculateHoroscope(4,6));