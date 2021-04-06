function arrayAnalysis(array){
    let average=array.reduce((a,b)=> a+b,0) / array.length;
    let min=Math.min(...array);
    let max=Math.max(...array);
    return {
        average,
        min,
        max,
        length: array.length
    }
}


module.exports=arrayAnalysis;