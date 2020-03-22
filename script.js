var name = 'Lilian Ovrawah';
var courses = ['HTML', 'CSS', 'JAVASCRIPT', 'Node.js'];
console.log(name);
console.log(courses);

	function displayEvenNumbersA(arr){
    		if(arr.length % 2 === 0 ) {
	    		for(let i = 2; i<=200; i+=2 ){
	    			console.log(i);
	    		}
    		}else{
    			console.log("Sorry, the length of the array is odd");
    		}
    	}
displayEvenNumbersA(courses);

