function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  
  return [increment, log];
}
const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log();

/* 1. Debugger goes to line no 2 and then line no 6, at line number 6 the value of count is stored as zero.
   2. Now the increment function increments the count to 3 times.
   3. but the output wont be 3 as there no condition that when we increment the count in increment function
   it should change the value of message.
   4. from the begining the message value is 0 and it printed the same.
   5. if we have declared the message next after the count the it would print 3 */
   