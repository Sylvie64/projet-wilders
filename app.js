// process.stdin.resume()
// process.stdin.setEncoding('utf8')

// console.log('What\'s your name ? ')
// process.stdin.on('data', (text) => {
//   console.log('Hello ' + text)
//   process.exit()
// })


process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('What\'s your age ? ') 
process.stdin.on('data', (age) => {
  if (age > 99 || isNaN(age)) {
    console.log('We ask your age')
  }
  else{
    let birthYear = 2019 - age;
    console.log(birthYear)
  }
    process.exit()
  })

