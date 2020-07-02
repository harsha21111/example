// usage of var, let, const keywords to limit the scope of variables appropriately

const x = 2;
var fns = [];

{ 
    const x = 5;
	for (let i=0; i<x; i++) {
		fns[i] = function num() {
			return i;
		};
	}
}
console.log(
	(x * 2) === fns[x*2]()
);