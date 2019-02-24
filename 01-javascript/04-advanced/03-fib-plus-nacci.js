function fib() {
  let previous = 0;
  let current = 1;

  function nacci() {
    const temp = previous;

    console.log(current);

    previous = current;
    current = current + temp;
  }

  return nacci
}
const fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"