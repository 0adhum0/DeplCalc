function main(wells, fans){
    let wells = parseInt(document.getElementById('wells').value)
    let wlpers = fanswls(fans);
    
}
//scr = Standard combination rule
var scr = {
    0: 0,
    1: 1,
    2: 1.5,
    3: 2,
    4: 2.5,
    5: 3,
    6: 3.5,
    7: 4,
    8: 4.5,
    9: 5,
    10: 5.5,
    11: 6,
    12: 6.5,
    13: 7,
    14: 7.5,
    15: 8,
    16: 8.5,
    17: 9,
    18: 9.5,
    19: 10,
    20: 10.5,

}

function fanswls(fans){
    var numof = parseInt(document.getElementById('fans').value);
    var wlpers = 0.156 * scr[numof];
    console.log(wlpers);
    return wlpers;
}
