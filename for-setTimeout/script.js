// 5555555555
for (var i1 = 0; i1 < 5; i1++) {
  setTimeout(function () {
    console.log(i1)
  })
}
// 0 1 2 3 4
for (let i2 = 0; i2 < 5; i2++) {
  setTimeout(function () {
    console.log(i2)
  })
}
// 0 1 2 3 4
for (var i3 = 0; i3 < 5; i3++) {
  setTimeout(function (i3) {
    return function () {
      console.log(i3)
    }
  }(i3))
}
