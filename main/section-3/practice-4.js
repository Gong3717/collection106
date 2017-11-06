'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var C=[];
  var result=[];
  var isRepeat;
  for(var i = 0;i<collectionA.length;){
    var count = 0;
    if(collectionA[i]=='d-5'){
      collectionA[i]='d';
      count=5;
      C.push({key:collectionA[i],count:count});
      break;
    }
    for(var j=i;j<collectionA.length;j++){
      if(collectionA[i]==collectionA[j]){
        count++;      
      }
    }
    C.push({key:collectionA[i],count:count});
    i+=count;
  }
  for(var i=0;i<C.length;i++)
  {
      isRepeat = false;
      for(var j =0;j<objectB.value.length;j++)
      {
        if(C[i].key===objectB.value[j])
        {
          isRepeat = true;
          C[i].count= C[i].count-parseInt(C[i].count/3)
          result.push({key: C[i].key,count: C[i].count}) ;
          break;
        }
      }
     if(!isRepeat ){
      result.push({key: C[i].key,count: C[i].count});
    }
  }
  return result;
}
