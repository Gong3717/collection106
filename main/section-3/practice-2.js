'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var result=[];
  //collection.sort();
  var isRepeat;
  for(var i=0;i<collectionA.length;i++)
  {
      isRepeat = false;
      for(var j =0;j<objectB.value.length;j++)
      {
        if(collectionA[i].key===objectB.value[j])
        {
          isRepeat = true;
          collectionA[i].count= collectionA[i].count-parseInt(collectionA[i].count/3)
          result.push({key: collectionA[i].key,count: collectionA[i].count}) ;
          break;
        }
      }
     if(!isRepeat ){
      result.push({key: collectionA[i].key,count: collectionA[i].count});
    }
  }
   return result;
}
