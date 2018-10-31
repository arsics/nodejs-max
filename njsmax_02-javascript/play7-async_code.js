// setTimeout(() => {
//     console.log('Timer is done!')
// }, 2000);

// console.log('Hello');

// in node.js there is a problem with setTimeout 
// if there are depending async operations:

// fetchData receives a callback function and executes it after 1.5s
const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
}

// setTimeout calls fetchData with a 2s delay
setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

console.log('Hello'); // 3.5s delay of printing 'Done!', this can create a lot of lag

// we can use promises!