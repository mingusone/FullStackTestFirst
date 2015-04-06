function largestTriplet(num){
	//I'm going to rename everything to a,b,c for readability.
	var a=1; 
	var b=1; 
	var c = num;
	var answerA = 0;
	var answerB = 0;
	var answerC = 0;
	var largest = 0;
	var answer = [];
	//no side can be 0 or identical to another side
	for ( c ; c > 1 ; c--){
		for (a = 1; a < c; a++){
				for(b = 1; b < c; b++){
					//Did we find pathyTheo?
			    if (((a*a)+(b*b))===(c*c)){ 
			    	//And is it the biggest one we found so far?
			    	if(a > largest){ 
			    	//If so, save the numbers and remember that it's the largest
				    //'a' we've found so far. The example cases actually have 'b' as 
				    //largest, but we fix that below.
				    	answerA = a;
				    	answerB = b;
				    	answerC = c;
				    	largest = a;   		
			    	}
			    }		
				}
				b = 1;
			}
	}
	// The test seems to have B always be the bigger int.
	// A appears to be the inner loop and B appears to be the outer loop.
	// Instead of rewriting the above a's and b's, I'm just going to
	// reverse their push order, a and b. 
	answer.push(answerB);
	answer.push(answerA);
	answer.push(answerC);
	return answer;
}
//This entire for loop is just ugly. There's got to be a better way
//But I'm not sure how to get rid of the commas from the inner
//array, otherwise.
	for (var i = 0; i < int; i++)
	{
		arr[i] = arr[i].join(''); 
	}

	//Now that the commas in the inner-arrays are gone, let's link
	//them all up with "\n"
	var finalString = arr.join('\n'); 
	
	//The join won't add a \n to the end so.. we do it here at the end.
	//We can do arr[int][int+1] and just manually add a \n to the last
	//element of every inner array but that's... just as ugly. 
	return finalString.replace(',','') + '\n';
}