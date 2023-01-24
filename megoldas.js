
/*Készítő*/

const file = {
    name: "Teszt Elek",
    group: "Junior Frontend",
    groupId: 11
};

function keszito (file){
    document.write(`A fájl készítője ${file.name}, aki a ${file.group} képzésre jár a ${file.groupId}-es csoportba`)
}
keszito(file)

/*Hatványozó*/

function hatvanyozo(base,exponent){
    document.write(Math.pow(base,exponent))
}
document.write('<br>')

hatvanyozo(10,1)

function parosLetrehoz(also,felso){
    let number =  Math.round(Math.random() * (felso - also)) + also

    if (number % 2 === 0){
        number = number
    }else {
        number = number +1
    }
    return number
}
document.write('<br>')

document.write(parosLetrehoz(10,50))

document.write('<br>')

function testTomegIndex(suly,magassag){

    let tablazat = ["súlyos soványság", "mérsékelt soványság", "enyhe soványság", "normális testsúly", "túlsúlyos", "I. fokú elhízás", "II. fokú elhízás", "III. fokú (súlyos) elhízás"]
    let bmi = suly/(magassag * magassag)
    document.write(bmi)
    if (bmi < 16) {
        return tablazat[0];
    } else if (bmi >= 16 && bmi <= 16.99) {
        return tablazat[1];
    } else if (bmi >= 17 && bmi <= 18.49) {
        return tablazat[2];
    } else if (bmi >= 17 && bmi <= 18.49) {
        return tablazat[3];
    }else if (bmi >= 17 && bmi <= 18.49) {
        return tablazat[4];
    }else if (bmi >= 18.5 && bmi <= 24.99) {
        return tablazat[5];
    }else if (bmi >= 30 && bmi <= 34.99) {
        return tablazat[6];
    }else if (bmi >= 35 && bmi <= 39.99) {
        return tablazat[7];
    }else if (bmi >= 40 ) {
        return tablazat[8];
    }
    }


document.write(testTomegIndex(79,1.99))

function egeszOsztoE(szam, oszto) {
    return szam % oszto === 0 ? 'egész osztó' : 'nem egyész osztó';
}
