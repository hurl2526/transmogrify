

const biggify = function (num){
  return num + 9000;
};

const nasafy = function (num){
  let numArray = [];
  for (let i = num; i > 0; i-- ){
  numArray.push(i);

  }
  numArray.push('Blast off!');
  return numArray;
};

const reversify = function(str){
  let newString = '';
  for (let i = str.length - 1; i >= 0; i-- ){
    newString = newString + str[i];
  }
  return newString;
};

const titleify = function(str){
  let newString = '';
  for (let i = 0; i < str.length; i++ ){
    if(str[i-1] === ' ' || i === 0){
      newString = newString + str[i].toUpperCase();
    } else {
    newString = newString + str[i].toLowerCase();
    }
  }
return newString;
};

const crazify = function(str){
  let answer = '';
  let counter = 1;
    for (let i = 0; i < str.length; i++){
    if (str[i] !== ' '){
        counter++;
      }
    if(counter % 2 === 1){
        answer = answer + str[i].toUpperCase();
  } else {
        answer = answer + str[i].toLowerCase();
      }
    }
    return answer; 
  };


if (typeof biggify === 'undefined') {
  biggify = undefined;
}

if (typeof nasafy === 'undefined') {
  nasafy = undefined;
}

if (typeof reversify === 'undefined') {
  reversify = undefined;
}

if (typeof titleify === 'undefined') {
  titleify = undefined;
}

if (typeof crazify === 'undefined') {
  crazify = undefined;
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}
