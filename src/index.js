module.exports = function toReadable (n) {
  
  let s = '';
  let l = n.toString();
  
  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
             'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = new Map ([
          [0, ''],
          [2, 'twenty'],
          [3, 'thirty'],
          [4, 'forty'],
          [5, 'fifty'],
          [6, 'sixty'],
          [7, 'seventy'],
          [8, 'eighty'],
          [9, 'ninety'],
    ]);

  if( n === 0) {
    return 'zero';
  }

  // For 100,...900
  if(n > 99) {
    s = arr[l[0]] + ' hundred ';
    n = +(l[1] + l[2]);
    l = n.toString();
  }

  // For 99+ and 1-99 
  if(n > 19) {
    s += l[1] === '0' ? dozens.get(+l[0]) : dozens.get(+l[0]) + ' ' + arr[l[1]];
  } else if(n > 0) {
    s += arr[n];
  }
    
  return s.trim();
}
