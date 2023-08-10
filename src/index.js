const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const arr = [];
  const arrStr = [];

  const toParts = (str, num, arr) => {

    for (let i = 0; i < str.length; i += num) {
      arr.push(str.substr(i, num));
    };

  }

  const toMorse = (num) => {
    switch (num) {
      case '00':
        return '';
      case '10':
        return '.';
      case '11':
        return '-'
    }
  }

  const toStr = (morse) => {
    if (morse == ' ') {
      return ' '
    } else {
      return MORSE_TABLE[morse]
    }
  }

  toParts(expr, 10, arr);
  
  arr.forEach (item => {
    const arrMorse = [];
    let strMorse;

    if(item == '**********') {
      arrStr.push(' ');
    } else {
      toParts(item, 2, arrMorse);
      strMorse = arrMorse.map(toMorse).join('')
      arrStr.push(strMorse);
    }

  })


  return arrStr.map(toStr).join('');

}

module.exports = {
    decode
}