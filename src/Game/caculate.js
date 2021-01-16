const constraint = require('../constraint')

class Caculate{
    constructor(num1 =0, num2=0, caculator, level=1,result =0, results = []){
        this.num1 = num1 ;
        this.num2 = num2 ;
        this.caculator = caculator
        this.level = level 
        this.result = result
        this.results = results
        this.init()
    }

    init(){
     this.num1 = Math.floor(Math.random() * constraint.MAX_NUMBER_INPUT_BY_LEVER[this.level].largestNumber)
     this.num2 = Math.floor(Math.random() * constraint.MAX_NUMBER_INPUT_BY_LEVER[this.level].largestNumber)  
     const randomCaculator = Math.floor(Math.random(constraint.MAX_NUMBER_INPUT_BY_LEVER[this.level].caculators.length-1))
     this.caculator = constraint.MAX_NUMBER_INPUT_BY_LEVER[this.level].caculators[randomCaculator]
     this.result = this.caculatorByStringCaculate()
     
    }

    caculatorByStringCaculate(){
        switch (this.caculator){
            case '+':
                return this.num1+this.num2;
                break;
            case '-':
                return this.num1+this.num2;
                break;
            case '*':
                return this.num1+this.num2;
                break;
            case '/':
                return this.num1+this.num2;
                break;
        }
    }

    getFakeResult() {
        const indexOfResult = Math.floor(Math.random() * 4);
        for(let i = 0; i<4; i ++){
            if(i===indexOfResult){
                this.results[i] = this.result;
            }else{
                this.results[i] = Math.floor(Math.random() * constraint.MAX_NUMBER_INPUT_BY_LEVER[this.level].resultMax)
            }

        }
    }
}

module.exports = {
    Caculate
}