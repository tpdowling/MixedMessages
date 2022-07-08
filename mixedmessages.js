//                   Portfolio Project: Mixed Messages
//                          Variable Declarations
//Empty Array To Store End Message Result
let jumbleMessage = [];

//Dictionary Of Possible Terms
const messageDict = {
    key1: ['pen', 'monkey', 'albatross', 'african folk tale'],
    key2: ['horse', 'squib', 'richard aoyade', 'penis burger'],
    key3: ['congo', 'motion sickness', 'waffle iron', 'pizza'],
    key4: ['fifteen letters', 'gibaltar', 'cranky', 'mousse']
}
//                              Functions
//Generates Random Number from 0 to (num-1)
function generateRandomNumber(num){
    return Math.floor(Math.random() * num);
}

//                              Main Code
for (let word in messageDict) {
    let randomDict = generateRandomNumber(word.length);

    switch (word) {
        case 'key1':
            jumbleMessage.push(`You have a ${messageDict[word][randomDict]}.`);
            break;
        case 'key2':
            jumbleMessage.push(`Honestly, it makes me want to ${messageDict[word][randomDict]} `);
            break;
        case 'key3':
            jumbleMessage.push(`right between my ${messageDict[word][randomDict]}, `);
            break;
        case 'key4':
            jumbleMessage.push(`and I can't believe I ever saw ${messageDict[word][randomDict]} in you.`);
            break;
        default:
            jumbleMessage.push('Something went wrong.')
            break;
    }
}
let formatted = jumbleMessage.join('');
console.log(formatted);