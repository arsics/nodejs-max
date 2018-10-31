const hobbies = ['Sports', 'Cooking'];
hobbies.push('WatchingTv');
console.log(hobbies);

// instead of modifying the original array, we can 'copy then modify'
const sliceCopiedArray = hobbies.slice(); // can have start and end index
const spreadCopiedArray = [...hobbies]; // like new ArrayList(list)
// works for objects also (const copiedPerson = {...person})

// modify copies
sliceCopiedArray.push('Swimming');
spreadCopiedArray.push('Programming');

// original is unmodified
console.log(hobbies);
console.log(sliceCopiedArray);
console.log(spreadCopiedArray);

// *** rest operator

// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// }

const toArray = (...args) => {
    return args;
}