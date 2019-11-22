import React, { useState } from 'react';

function Primes() {
  const [randomNr, setRandomNr] = useState(Math.random());
  const primes = useMemo(() => calculatePrimes(randomNr), [randomNr]);
  return (
    <>
      <p>primes: {primes}</p>
      <p>random: {randomNr}</p>
      <button onClick={() => setRandomNr(Math.random())}>New Random</button>
    </>
  );
}

// edited from https://developer.mozilla.org/
function calculatePrimes(random) {
  var primes = [];
  for (var i = 0; i < 5000; i++) {
    var candidate = Math.round(i * (1000000000 * random));
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
        // not prime
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  return primes;
}
