const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise; // we return the promise immediately, before it's run
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
    }) // now we can chain then promises ()
}, 2000);


// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData()
//     .then(text => {
//         console.log(text);
//         return fetchData();
//     })
//     .then(text2 => {
//         console.log(text2);
//     });
// }, 2000);