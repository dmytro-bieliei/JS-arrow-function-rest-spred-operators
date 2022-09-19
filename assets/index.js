// Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве.

// const func = (...string) => string.length;
const quantityOfLines = (...string) => string.filter((element) => typeof element === 'string').length;

// Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию. 

const calcFunc = function(operator, ...numbers){
  switch(operator.trim()){
    case '*' : {
      return numbers.reduce((num1, num2) => num1 * num2);
    }
    case '/' : {
      return numbers.reduce((num1, num2) => num1 / num2);
    }
    case '+' : {
      return numbers.reduce((num1, num2) => num1 + num2);
    }
    case '-' : {
      return numbers.reduce((num1, num2) => num1 - num2);
    }
    default: return NaN;
  }
}


// Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.

const largestNumber = function