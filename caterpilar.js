let arr=[];

// console.log(arr);


// let isKosong = arr=>{
//   return arr.reduce(())
// }


let count = arr=>{
  let a=0;
  arr.map((element,index,array)=>{
    a++
  })

  return a
}


let isKosong = arr=>{
  if(count(arr)===0){
    return true;
  }else{
    return false;
  }
}

let head = arr=>{
  let elem;
  arr.map((element,index)=>{
    if(index==0){
      elem =element
    }
  })
  return elem
}

let tailTest = arr=>{
  let elem=[];
  elem = arr.map((element,index)=>{
    // if(index!==0){
    //   elem.push(element)
    // }
    return index>0
  })
  return elem
}

let tail = arr=>{
  let elem=[];
  arr.map((element,index)=>{
    if(index!==0){
      elem.push(element)
    }
  })
  return elem
}

function tailFilter(array){
  return array.filter(function(dota,index){
    return index>0
  })
}


function flatten(array){
  let flattened = array.reduce(function(previousResult,curval){
    if(Array.isArray(curval)){
      return previousResult.concat(flatten(curval))
    }else{
      return previousResult.concat(curval)
    }
  },[])
  return flattened
}

console.log(isKosong(arr));
arr = [6,2,3]
console.log(head(arr));
console.log(tailFilter(arr));
console.log(tailTest(arr));
console.log(tail(arr));
arr= [1,[2,3],4,[5,[6,7]]]
console.log(flatten(arr));




// var total = [].reduce(function (previous, current, index) {
//     var val = previous + current;
//     console.log("The previous value is " + previous +
//                 "; the current value is " + current +
//                 ", and the current iteration is " + (index + 1));
//                 console.log(index);
//     return val;
// }, 0);

// console.log(total);
// console.log(arr[0]);








// console.log(isKosong(arr));
