function a(x){
    function b(y){
        return x+y;
    }
    return b;
}
console.log(a(3)(4));