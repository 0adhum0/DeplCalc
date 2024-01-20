function main(wells, fans, flame, frost, shock, beam, hydrant, bigWheel, smallWheel, stabilizer, hoverstone, light, constructHead, homingCart){
    let wellscount = parseInt(document.getElementById('wells').value)

    let wlpers = fanswls(fans) + flamewls(flame) + frostwls(frost) + shockwls(shock) + beamwls(beam) /*+ hydrantwls(hydrant) + bigWheelwls(bigWheel) + smallWheelwls(smallWheel) + stabilizerwls(stabilizer) + hoverstonewls(hoverstone) + lightwls(light) + constructHeadwls(constructHead) + homingCart(homingCart)*/; 

    if (wlpers == 0){
        //give alert
    }else{
    //console.log(wellscount)
    //console.log(wlpers)
    let timefl = wellscount / wlpers ;
    let timeint = parseInt(timefl);
    console.log(timeint + " s");
    document.getElementById('ausgabe').innerHTML = timeint + " s" 
    }

}
//scr = Standard Combination ule
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

//wcr = Wheel Combination Rule
var wcr = {
    0: 0,
    1: 1,
    2: 1.47,
    3: 2,
    4: 2.4,
    5: 3,
    6: 3.6,
    7: 4.2,
    8: 4.3,
    9: 4.8,
    10: 5.4,

}

//mcr = Miscellaneous Combination Rule

var mcr = {
    0: 0,
    1: 1,
    2: 1.53,
    3: 2, 
    4: 2.53,
    5: 3,
    6: 3.6,
    7: 4,
    8: 4.53,
    9: 5.1,
    10: 5.67

}

function fanswls(fans){
    var numoffans = parseInt(document.getElementById('fans').value);
    var wlpers = 0.156 * scr[numoffans];
    console.log(wlpers);
    return wlpers;
}

function flamewls(flame){
    var numofflame = parseInt(document.getElementById('flame').value);
    var wlpers = 0.180 * scr[numofflame];
    console.log(wlpers);
    return wlpers;
}

function frostwls(frost){
    var numoffrost = parseInt(document.getElementById('frost').value);
    var wlpers = 0.180 * scr[numoffrost];
    console.log(wlpers);
    return wlpers;
}

function shockwls(shock){
    var numofshock = parseInt(document.getElementById('shock').value);
    var wlpers = 0.180 * scr[numofshock];
    console.log(wlpers);
    return wlpers;
}

function beamwls(beam){
    var numofbeam = parseInt(document.getElementById('beam').value);
    var wlpers = 0.180 * scr[numofbeam];
    console.log(wlpers);
    return wlpers;
}
/*
function hydrantwls(hydrant){
    var numofhydrant = parseInt(document.getElementById('hydrant').value);
    var wlpers = 0.030 * scr[numofhydrant];
    console.log(wlpers);
    return wlpers;
}

function bigWheelwls(bigWheel){
    var numofbigWheel = parseInt(document.getElementById('bigwheel').value);
    var wlpers = 0.030 * wcr[numofbigWheel];
    console.log(wlpers);
    return wlpers;
}

function smallWheelwls(smallWheel){
    var numofsmallWheel = parseInt(document.getElementById('smallWheel').value);
    var wlpers = 0.015 * wcr[numofsmallWheel];
    console.log(wlpers);
    return wlpers;
}

function smallWheelwls(smallWheel){
    var numofsmallWheel = parseInt(document.getElementById('smallWheel').value);
    var wlpers = 0.015 * wcr[numofsmallWheel];
    console.log(wlpers);
    return wlpers;
}

function stabilizerwls(stabilizer){
    var numofstabilizer = parseInt(document.getElementById('stabilizer').value);
    var wlpers = 0.030 * mcr[numofstabilizer];
    console.log(wlpers);
    return wlpers;
}

function hoverstonewls(hoverstone){
    var numofhoverstone = parseInt(document.getElementById('hoverstone').value);
    var wlpers = 0.030 * mcr[numofhoverstone];
    console.log(wlpers);
    return wlpers;
}

function lightwls(light){
    var numoflight = parseInt(document.getElementById('light').value);
    var wlpers = 0.030 * mcr[numoflight];
    console.log(wlpers);
    return wlpers;
}

function constructHeadwls(constructHead){
    var numofconstructHead = parseInt(document.getElementById('constructHead').value);
    var wlpers = 0.030 * mcr[numofconstructHead];
    console.log(wlpers);
    return wlpers;
}

function homingCartwls(homingCart){
    var numofhomingCart = parseInt(document.getElementById('homingCart').value);
    var wlpers = 0.030 * mcr[numofhomingCart];
    console.log(wlpers);
    return wlpers;
}

*/







