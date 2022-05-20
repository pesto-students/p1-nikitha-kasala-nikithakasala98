//Question
function createStack() {
    return {
      items: [],
      push(item) {
        this.items.push(item);
      },
      pop() {
        return this.items.pop();
      }
    };
  }
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); 
  stack.items;  
  stack.items = [10, 100, 1000]; 


console.log(stack.items);
/* Issue with encapsulation - only push() and pull() should be public,
 items should not be public as there should not be direct access to the data.*/

 function createStack() {
    const items = [];
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); 
  stack.items; 
  stack.items = [10, 100, 1000];
  console.log(stack.items);

  /* Now the items are private variables and the stack is encapsulated.*/