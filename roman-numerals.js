const values = {
  M:	1000,
  D:	500,
  C:	100,
  L:	50,
  X:	10,
  V:	5,
  I:	1,
}

const patterns = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" ];
const numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

const RomanNumerals = {
  toRoman: (num) => {
    /* */console.log('num', num)
    let roman = "";
    const digits = num.toString().split('').reverse();
    /* */console.log('digits', digits)
    
    for (let i=0; i<digits.length; i++) {
      let digit = digits[i];
      const base = 2*i;
      let digitString = patterns[digit];
      /* */console.log('digitString 1', digitString)
      if (base + 2 < numerals.length) { 
        digitString = digitString.replace(/X/g, numerals[base+2]); 
        /* */console.log('digitString 2', digitString)
      }
      if (base + 1 < numerals.length) {
        digitString = digitString.replace(/V/g, numerals[base+1]);
        /* */console.log('digitString 3', digitString)
      }
      digitString = digitString.replace(/I/g, numerals[base]);
      /* */console.log('digitString 4', digitString)
      
      roman = digitString + roman;
      /* */console.log('roman', roman)
    }
   
    return roman;
  },
  
  fromRoman: (roman) => {
    /* */console.log('roman', roman)
    const numerals = roman.split('').reverse();
    /* */console.log('numerals', numerals)
    let number = 0;
    prevNValue = 0;
    for (n of numerals) {
      let nValue = values[n];
      /* */console.log(`${n}: ${nValue}`)
      if (nValue < prevNValue) {
        /* */console.log("nValue, prevNValue, number", [nValue, prevNValue, number]);
        nValue *= -1;
      }
      number += nValue;
      /* */console.log('number', number)
      
      prevNValue = values[n];
    }
    return number;
  },
}
