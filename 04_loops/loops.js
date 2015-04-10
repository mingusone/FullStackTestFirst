function repeat(str,int)
{
	var sum = "";
	for( var i = 0; i < int; i++)
	{
		sum += str;
	}
	return sum;
}

function sum(arr)
{
	total = 0;
	for (var i = 0; i < arr.length; i++)
	{
		total += arr[i];
	}
	return total;
}

function gridGenerator(int)
{
	if (int === 0){
		return "";
	}
	arr = [];
	for (var x = 0; x < int; x++) // Filling out the grid
	{
		arr[x] = [];
		for (var y = 0; y < int; y++)
		{
			if((x+y)%2 === 0) //If it's even
			{
				arr[x][y] = "#";
			}
			else
			{
				arr[x][y] = " ";
			}
		}
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


//This code is horribly unoptimized/inefficient; optimize later. I
//still have no idea what a big pythoThagoTripo is supposed to be
//but I assume it's the area of the sqaure created by forming 4
//of the triangles together. 
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
	//no side can be 0 or identical to another side. And we're
	//going to count down from the given C in case C is a failure. 
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

function join(arr,delim){
	var leString = "";
	for (var i = 0; i < arr.length;i++)
	{
		if (delim && i < arr.length-1)
		{
			leString += arr[i] + delim;
		}
		else
		{
			leString += arr[i];
		}
		
	}
	return leString;

}

function paramify(obj){
	//{} can't be sorted but [] can.
	sortedKeys = [];
	for (var key in obj){
		sortedKeys.push(key);
	}
	sortedKeys.sort();

	//Prepare to write it all down into theStr
	theStr = "";
	//Oh boy... this is some jury rigged duct tape code
	//below if I've ever seen it. Not elegant but working. 
	for (var i in sortedKeys){
		//SortedKeys is the array of the actual keys within obj.
		//i here is the index of the key we're trying to locate
		//so sortedKeys[i] returns the actual key itself. 
		if(obj.hasOwnProperty(sortedKeys[i])) //<--check if key is not __proto__
		{
			theStr += sortedKeys[i] + "=" + obj[sortedKeys[i]] + '&';
		}		
	}
	return theStr.slice(0,theStr.length-1);
}



