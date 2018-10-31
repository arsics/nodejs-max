const person = {
    name: 'Sasha',
    age: 38,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    }
}

person.greet(); // 'Hi, I am undefined' because 'this' refers to the global node runtime scope

/** proper:
 * 
 * greet: function() {  - old
 * greet() {            - modern
 * 
 */

 // *** arrays and the 'map' method:
 const hobbies = ['Sports', true, {name: 'Gaming'}];

 for (let hobby of hobbies) {
     console.log('Hobby: ' + hobby);
 }

 
 console.log(hobbies);
 console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
 
 // *** hobbies is a constant, but the array can be modified
 hobbies.push('Programming');
 console.log(hobbies);