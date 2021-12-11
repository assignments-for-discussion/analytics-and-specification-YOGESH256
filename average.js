
function average(numbers){



    if(numbers.length == 0){
        return NaN;
    }

    let result = numbers.filter(function(number){
        if(!isNaN(number)){
            return true;
        }
    });


    let values = result.concat();


    let mean = result.reduce((a, b) => a + b) / result.length

    let standardDeviation = Math.sqrt(result.map(x => Math.pow(x - mean, 2))
        .reduce((a, b) => a + b) / result.length)

    let cutOff = standardDeviation * 2
    let lower = mean - cutOff;
    let upper = mean + cutOff;

    let filteredValues = values.filter(function(x) {
        return (x <= upper) && (x >= lower);
    });




    let sum = 0
    filteredValues.forEach(function(number){
        sum += number;
    });


    return sum / filteredValues.length;

}

module.exports = {average};
