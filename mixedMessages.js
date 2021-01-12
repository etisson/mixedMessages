// functions
const generateRandomNumber = (num) => {
    return Math.floor(Math.random()*num);
}

const formatQuote = (array) => {
    const formatted = array.join('\n');
    console.log(formatted);
}

const generateQuote = (object) => {
    let returnArray = [];
    
    for(let key in object){
        let randomIndex = generateRandomNumber(object[key].length);
    
        switch(key){
            case 'symbol':
                returnArray.push(`You're personal symbol is ${object[key][randomIndex]}.`);
                break;
            case 'quoteOutput':
                returnArray.push(`You are in ${object[key][randomIndex]}.`);
                break;
            case 'advice':
                returnArray.push(`You should ${object[key][randomIndex]}.`);
                break;
            default:
                returnArray.push('Not enough mojo to comply');            
        }
    }

    return returnArray;
}

// quote objects
const wisdomQuote = {
    symbol: ['star', 'milky way', 'moon', 'sun', 'earth', 'commet'],
    quoteOutput: ['terrible luck', 'good luck', 'great luck','so so luck','no luck'],
    advice: ['play more','go left, then right', 'look up, then look down', 'always say: perhaps']
}

const murphyQuote = {
    symbol:['red','green','blue','purple','brown','pink'],
    quoteOutput: [],
    advice: ['try again tomorrow','chillax','have coffee','eat apple','meditate']
}

// return arrays
let newWisdom = generateQuote(wisdomQuote);
let newMurmphy = [];

// generate wisdom quote
formatQuote(newWisdom);
