function foo(x,y,z,...rest){
    return [ x, ...rest ];
}
function bar() {
    var a = [ 2, 4];
    var b = [ 6, 8, 10, 12];
    return foo(...a, ...b);
}console.log(
    bar().join("") === "281012"
);
