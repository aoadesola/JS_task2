let data = [{principal: 2500, time: 1.8}, {principal: 1000, time: 5}, {principal: 3000, time: 1}, {principal: 2000, time: 3}];

function interestCalculator(array) {
    let x = array.length;

    for(let i = 0;i < x; i++) {
        if ( array[i].principal >= 2500 && (array[i].time > 1 && array[i].time < 3)) {
            array[i].rate = 3;
        } else if ( array[i].principal >= 2500 && array[i].time >= 3 ){
            array[i].rate = 4;
        } else if ( array[i].principal < 2500 || array[i].time <= 1 ){
            array[i].rate = 2;
        } else {
            array[i].rate = 1;
        };

        array[i].interest = ( array[i].principal * array[i].rate * array[i].time) / 100;

    };
    let interestData = array;
    console.log(interestData);
    
    return interestData;
}

interestCalculator(data);