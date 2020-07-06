var numbers = {
    *[Symbol.iterator]({
        start =1,
        step= 1,
        max = 100
    } = {}) {
        for (let num = start; num <= max; num += step){
            yield num ;
        }
    }
};
 for (let num of numbers){
     console.log(num);
 }

 for (let num of numbers[Symbol.iterator]({
     start: 6,
     max: 30,
     step: 4,
 })) {
     console.log(num);
 }