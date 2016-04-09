var photoItemsArray = ['north-america', 'europe', 'asia', 'south-america', 'africa', 'australia'];
var photoFormatArray = ['col-xs-12', 'col-xs-6', 'col-xs-4'];


var selectNextItem = function(array, currentItem) {
  arrayLength = array.length ;
  stateIndex = array.indexOf(currentItem) + 1;
  setState = '';
  if (arrayLength === stateIndex) {
    setState = array[0];
  } else {
    setState = array[stateIndex];
  }
  return setState;
};

var selectPreviousItem = function(array, currentItem) {
  arrayLength = array.length - 1 ;
  stateIndex = array.indexOf(currentItem);
  setState = '';
  if (stateIndex === 0) {
    setState = array[arrayLength];
  } else {
    setState = array[stateIndex - 1];
  }
  return setState;
};

// selectNextItem(photoFormatArray, 'col-xs-12');
// selectNextItem(photoFormatArray, 'col-xs-6');
// selectNextItem(photoFormatArray, 'col-xs-4');


console.log(selectNextItem(photoItemsArray, 'north-america'));
// selectNextItem(photoItemsArray, 'europe');
// selectNextItem(photoItemsArray, 'asia');
// selectNextItem(photoItemsArray, 'south-america');
// selectNextItem(photoItemsArray, 'africa');
// selectNextItem(photoItemsArray, 'australia');

console.log(selectPreviousItem(photoItemsArray, 'north-america'));
// selectPreviousItem(photoItemsArray, 'europe');
// selectPreviousItem(photoItemsArray, 'asia');
// selectPreviousItem(photoItemsArray, 'south-america');
// selectPreviousItem(photoItemsArray, 'africa');
// selectPreviousItem(photoItemsArray, 'australia');







// var cycleItems = function(item) {
//   // console.log(photoItemsArray.indexOf(item))
//     switch(photoItemsArray.indexOf(item)) {
//         case 1:
//             return 2;
//             break;
//         case 'europe':
//             return 'asia';
//             break;
//         case 'asia':
//             return 'south-america';
//             break;
//         case 'south-america':
//             return 'africa';
//             break;
//         case 'africa':
//             return 'australia';
//             break;
//         case 'australia':
//             return 'north-america';
//             break;
//         default:
//             return 'error';
//     }
// };

