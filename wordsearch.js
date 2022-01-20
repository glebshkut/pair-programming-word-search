const wordSearch = (letters, word) => { 
    
    let result = false;

    // check empty word input
    if (word.length === 0) {
        return result;
    }
    
    // check word horizontally
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            result = true;
        }
    }

    // check word vertically
    let string = '';
    for (let column = 0; column < letters[0].length; column++) {
        for (let row = 0; row < letters.length; row++) {
            string += letters[row][column];
        }
        if (string === word) {
            result = true;
        }
        string = '';
    }

    return result;
}

module.exports = wordSearch