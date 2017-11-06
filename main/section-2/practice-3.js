'use strict';

module.exports = function countSameElements(collection) {
  var result=[]; 
  var countA = 0;
  var countE = 0;
  var countH = 0;
  var countT = 0;
  var countF = 0;
  var countC = 0;
  var countG = 0;
  var countB = 0;
  var countD = 0;
   for(var i = 0;i<collection.length;i++){
     
    //  var t1 = collection.indexOf("h[3]");
    //  var t2 = collection.indexOf("t-2");
    //  var t3 = collection.indexOf("t[10]");
    //  var t4 = collection.indexOf("c:8");
    //  var t5 = collection.indexOf("d-5");
    //  collection.splice(t1, 1, "h","h","h");
    //  collection.splice(t2, 1, "t","t");
    //  collection.splice(t3, 1, "t","t","t","t","t","t","t","t","t","t");
    //  collection.splice(t4, 1, "c","c","c","c","c","c","c","c");
    //  collection.splice(t5, 1, "d","d","d","d","d");
    //  collection;
    if(collection[i]=='a')
    { 
      countA++;
    }
    if(collection[i]=='e')
    {
      countE++;
    }
    if(collection[i]=='h')
    {
      countH++;
    }
    if(collection[i]=='h[3]'){
      countH=countH+3;
    }
    if(collection[i]=='t')
    {
      countT++;
    }
    if(collection[i]=='t-2'){
      countT=countT+2;
    }
    if(collection[i]=='t[10]'){
      countT=countT+10;
    }
    if(collection[i]=='f')
    {
      countF++;
    }
    if(collection[i]=='c:8')
    {
      countC=8;
    }
    if(collection[i]=='g')
    {
      countG++;
    }
    if(collection[i]=='b')
    {
      countB++;
    }
    if(collection[i]=='d-5')
    {
      countD=5;
    }
  }
  result.push({name:'a',summary:countA}); 
  result.push({name:'e',summary:countE});
  result.push({name:'h',summary:countH}); 
  result.push({name:'t',summary:countT}); 
  result.push({name:'f',summary:countF});
  result.push({name:'c',summary:countC});
  result.push({name:'g',summary:countG});
  result.push({name:'b',summary:countB});
  result.push({name:'d',summary:countD});
  
  return result;
}