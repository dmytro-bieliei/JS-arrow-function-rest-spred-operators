// Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве.

// const func = (...string) => string.length;
const quantityOfLine = (...string) => string.filter((element) => typeof element === 'string').length;

// Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию. 

const calcFunc = function(operator, ...number){
  switch(operator){
    case '*' : {
      return number.reduce((num1, num2) => num1 * num2);
    }
    case '/' : {
      return number.reduce((num1, num2) => num1 / num2);
    }
    case '+' : {
      return number.reduce((num1, num2) => num1 + num2);
    }
    case '-' : {
      return number.reduce((num1, num2) => num1 - num2);
    }
  }
}

// Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.