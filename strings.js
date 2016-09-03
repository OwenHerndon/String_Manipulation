document.getElementById('click').addEventListener('click', getString);


function getString(){
	var testString = document.getElementById("text").value;
	if(validate(testString) == true){
		testString = reverse(testString);
	    document.getElementById("output").innerHTML = "<div>" + testString + "</div>";
	    if(palindrome(testString) == true){
	    	document.getElementById("output").innerHTML += "<div>" + testString + " is a palindrome.</div>";
	    }
	}
	
}

function validate(str) {
     if (!/^[a-zA-Z]*$/g.test(str)) {
        alert("Invalid characters, Only enter letters!");
        return false;
    }
    return true;
}

function reverse(str) {
  return str.split('').reverse().join('');
  //return stringToArray.reverse().join('');
}

function palindrome(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}


