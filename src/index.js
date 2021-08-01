const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    MORSE_TABLE['*****'] = ' '
    let b = Array.from(expr)
    let bar = []
    let a = []
    let c = []
    let v = []
    let g = []
    for (let i = 0; i < expr.length; i = i + 10) {
        c.push(b.splice(0, 10))
    }

    bar = Object.entries(MORSE_TABLE)
    g = c.map(el => el.join('').replace(/10/g, '.').replace(/00/g, '').replace(/11/g, '-').replace(/\*\*/g, '*'))
    // console.log(g)
    for (let i = 0; i < g.length; i++) {
        a = bar.filter((value, index, array) => {
            return (value[0] === g[i] || g[i] === ['**********'])
        })
        v.push(a)

    }
    // console.log(v)
    return v.map(value => value.map(value => value = value[1])).join('')//.replace(/0/g, ' ')
}
module.exports = {
    decode
}