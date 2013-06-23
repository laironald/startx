#!/usr/bin/env node

var fs = require('fs');
var outfile = "primes.txt";

var primes = []
var number = 2
var prime_num = 100

while(primes.length < prime_num) {
  prime = true
  for(i = 0; i < primes.length; i++) {
    if (number % primes[i] === 0) {
       prime = false
       break
    }
  }
  if (prime) primes.push(number)
  number += 1
}

fs.writeFileSync(outfile, primes.join(","));  
