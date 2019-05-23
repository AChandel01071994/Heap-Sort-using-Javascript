{
    // using min binary heap to sort the array in ascending order - O (n * log n)
    // reommended to not use array as queue
   function heapify(arr){
       let swap = 1, startIdx = 0, q = [];
       // keep heapifying until heapified
       while(swap > 0) {
           // reset swap and initiate queue
           swap = 0;
            q.unshift(startIdx);
            // until q is empty
            while(q.length > 0){
                // fetch first index from queue and find left and right index
                let idx = q.pop(), swapIdx = null;
                let leftIdx = 2 * idx + 1;
                let rightIdx = 2 * idx + 2;

                // set swap index with index having minimum value
                if(leftIdx < arr.length) {
                    if(arr[leftIdx] < arr[idx]) swapIdx = leftIdx;
                    q.unshift(leftIdx);
                }
                if(rightIdx < arr.length) {
                    if(
                        (swapIdx === null && arr[rightIdx] < arr[idx]) ||
                        (swapIdx !== null && arr[rightIdx] < arr[leftIdx])
                    ){ swapIdx = rightIdx;  }
                    q.unshift(rightIdx);
                }
                // finally swap
                if(swapIdx !== null){
                      swap++;
                      let temp = arr[idx];
                      arr[idx] = arr[swapIdx];
                      arr[swapIdx] = temp;      
                }
           }
       }

   }

   function heapSort(arr){
       // heapify array
       heapify(arr);
       const result = [];
          while(arr.length > 0) {
              // take first (min) element,replace it with last and push first in result
              let min = arr.shift();
              // if more than one item left in array, then only pop last item and unshift it
              if(arr.length > 1){
                  let last = arr.pop();
                  arr.unshift(last);    
                  heapify(arr); 
              }
              result.push(min); 
          }
       return result;
   }

   // main
   const input = [3,2,1];
   heapSort(input)
}
