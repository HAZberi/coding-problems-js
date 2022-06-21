const intersection = (nums1=[], nums2=[]) => {
    // if(nums1.length === 0 || nums2.length === 0)
    //     throw new Error("Array inputs does not contain data.")

    let arr1HashMap = {};
    const resultSet = new Set();
    for (let el in nums1){
        arr1HashMap[nums1[el]] = true;
    }
    
    for (let el in nums2){
        if(arr1HashMap[nums2[el]]){
            resultSet.add(nums2[el]);
        }
    }

    return [...resultSet];

}

console.log(intersection([9,4,9,8,4],[4,9,5]));
console.log(intersection([1,2,2,1],[2,2]));