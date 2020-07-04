function upper(strings,...values) {
	var s = "";
	for (let i=0; i<strings.length; i++) {
		if (i > 0) {
			s += values[i-1].toUpperCase();
		}
		s += strings[i];
	}
	return s;
}

var name = "harsha",
	twitter = "harsha21",
	classname = "es6 example";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
	"Hello HARSHA (@HARSHA21), welcome to the ES6 EXAMPLE!"
);
