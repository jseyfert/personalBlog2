

var obj = {
    '1': 'a',
    '2': 'b',
    '3': 'c'  
};

var arr = [];

for (var value in obj) {
    if (obj.hasOwnProperty(value)) {
      arr.push(obj[value]);  
    }
}

console.log(arr);