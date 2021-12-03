// Task 1 js start
function reverseText(text) {
	let splitText = text.split('');
	let reverseText = splitText.reverse();
	let joinText = reverseText.join('');

	return joinText;
}
let text1 = 'Baki gozel seherdir';
console.log(reverseText(text1));
let text2 = 'Hello World';
console.log(reverseText(text2));
// Task 1 js end

//Task 2 js start
class MatchNumber {
	constructor(number, plusnum, minusnum, multiplynum, divadednum) {
		this.number = number;
		this.plusnum = plusnum;
		this.minusnum = minusnum;
		this.multiplynum = multiplynum;
		this.divadednum = divadednum;
	}
	plus() {
		this.number = this.number + this.plusnum;
		return this.number;
	}
	minus() {
		this.number = this.plus();
		this.number = this.number - this.minusnum;
		return this.number;
	}
	multiply() {
		this.number = this.minus();
		this.number = this.number * this.multiplynum;
		return this.number;
	}
	divaded() {
		this.number = this.multiply();
		this.number = this.number / this.divadednum;
		return this.number;
	}
}
var result = new MatchNumber(50, 6, 30, 3, 2);
console.log(result.divaded());
