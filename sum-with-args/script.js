// Написать функцию суммирования,
// которая выводит в консоль результаты таким видом
// sum(1)
// 1

//sum(1)(2)(3)
// 1
// 3
// 6

function sum(num) {
  let result = num;
  function f(s) {
    result += s
    console.log(result)
    return f
  }
  console.log(result)
  return f
}

sum(1)(2)(3)

// функция довызывает сама себя



// разработка через тестирование