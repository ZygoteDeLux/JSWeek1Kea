  //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}


const sub = function(n1,n2){
  return n1 - n2
} 

const f1 = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

console.log(add(1,2))

console.log(f1(3,3,add));


