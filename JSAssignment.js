//1
function nReverse(num){
	num = num+""
	var x=num.split('');
	return parseInt(x.reverse().join(""));
}
//console.log(nReverse(34223));

/*
 * 2
 */
function palindrome(string){
	return string==string.split("").reverse().join("")
}
//console.log(palindrome('madam'))

//3

//4
function stringSort(string){
	return string.split("").sort().join("")
}
//console.log(stringSort('webmaster'))

//5
function capaWord(string){
	var x =string.split(" ");
	var list=''
		for(let word of x){
			//console.log(word)
			word=word.charAt(0).toUpperCase()+word.substring(1)
			//console.log(word)
			list=list+word+' '
		}
		return list
}
//console.log(capaWord("i like that shirt."))


//6
function findLongestWord(string)
{
	var x = string.split(" ");
	var word=x[0]
	console.log(x)
	for(var index = 0; index < (x.length-1); index++){
		if(word.length<x[index+1].length){
			word=x[index+1]
		}
	}
	return word;
}
//console.log(findLongestWord('I wish I can fly'))

//7
function countVowels(string)
{
	var count = 0;
	var vowel ='aeiouAEIOU'
	for(var i =0;i<string.length;i++)
		{
			if(vowel.indexOf(string[i]) !== -1)
				{
					count++;
				}
		
		}
	return count
}
//console.log(countVowels("How many Apples are here"))

//8
function isPrime(num)
{
	var count=0;
	for(var i=2;i<Math.sqrt(num)+1;i++){
		if(num%i ==0)
			{
				return false;
			}
	}
	return true;
}
//console.log(isPrime(31))

//9
function typeOf(){}

//10
function iMatrix(num){
	var mat=[];
	for(var i=0;i<num;i++)
		{
			var col=[];
			for(var j=0;j<num;j++)
				{
					if(i==j)
						{
							col[j]=1;
						}
					else{
						col[j]=0;
					}
				}
			mat[i]=col
		}
	return mat
}
//console.log(iMatrix(4))

//11
function secondsandg(list){
	sortlist=list.sort()
	return [sortlist[1],sortlist[list.length-2]]

}
//console.log(secondsandg([1,2,3,4,5,6,7]))

//12
function isPerfect(num){
	var sum=0;
	for(var i=1;i<=Math.sqrt(num);i++){
		if(num%i == 0){
			if(i==Math.sqrt(num))
				{
					sum = sum+i
				}
			sum = sum+i+num/i
		}
	}
	if(sum==2*num){
		return true;
	}
	return false;
}
//console.log(isPerfect(8128))

//13
function factors(num){
	var factor = 1 
	for(var i=num;i>0;i--){
		factor*=i
	}
	return factor
}
//console.log(factors(5))

//14
function amountTocoins(num,list){
	var value=list.sort(function(a, b){return b-a})
	console.log(value)
	var coin=[]
	var remain=num;
	while(remain >0){
		for(var i=0;i<value.length;i++)
			{
				for(var j=0;j<parseInt(remain/value[i]);j++)
				{
					coin.push(value[i])
				}
				remain=remain%value[i]
			}
		
	}
	return coin
}
//console.log(amountTocoins(46,[25,10,5,2,1]))

//15
function expo(b,n){
	var result=1
	for(var i=0;i<n;i++){
		result*=b
	}
	return result
}
//console.log(expo(2,10))

//16
function uniquel(string){
	list=""
	for(var i=0;i<string.length;i++)
		{
			if(list.indexOf(string[i])== -1)
				{
					list=list+string[i]
				}
			if(list.length == 26){
				break
			}
		}
	return list	
}
//console.log(uniquel('thequickbrownfoxjumpsoverthelazydog'))

//17

function amountOfLetters(string){
	string=string.toLowerCase()
	list=""
	var letterCount=[]
	for(var i=0;i<string.length;i++)
	{
		if(list.indexOf(string[i])== -1)
		{
			list=list+string[i]
		}
		if(list.length == 26){
			break
		}
	}
	for(var j=0;j<list.length;j++){	
		var count=0
		for(var i=0; i< string.length;i++)
		{
			if(string[i]==list[j])
				{
					count++
				}
		}
		letterCount.push([list[j],count])
	}
	return letterCount
}
//console.log(amountOfLetters('A apple arise in arena'))

//18
function binarySearch(array,num){
	var list=array
	while(list.length>1){
		//console.log(list[Math.floor(list.length/2)])
		if(list[Math.floor(list.length/2)]==num){
			return true;
		}
		else if(list[Math.floor(list.length/2)]<num){
			list=list.slice(Math.floor(list.length/2),list.length)			
		}
		else{
			list=list.slice(0,Math.floor(list.length/2))
		}
	}
	if(list[0]==num){
		return true;
	}
	return false
}
//console.log(binarySearch([1,3,5,7,9,14,15,17,19,23,25,26,29,31,35,38,41,43],28))

//19
function larger(array,number){
	var list=[]
	for(var i=0;i<array.length;i++){
		if(array[i]>number){
			list.push(array[i])
		}
	}
	return list
}
//console.log(larger([1,3,5,7,9,2,4,6,8],5))

//20
function randomStr(length){
	var randomList=''
	var list ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	for(var i=0;i<length;i++)
		{
			randomList+=list.charAt(Math.floor(Math.random()*list.length))
		}
	return randomList
}
//console.log(randomStr(10))

//21
function subsetOfLen(set,length){
	
}

//22

function amountOfLetter(letter,string){
	string=string.toLowerCase()
	var count=0
	for(var i=0; i< string.length;i++)
		{
			if(string[i]==letter)
				{
					count++
				}
		}
	return count
}
//console.log(amountOfLetter('a','A apple arise in arena'))

//23

function firstNotRepeat(string){
	string=string.toLowerCase()
	list=""
	var letterCount=[]
	for(var i=0;i<string.length;i++)
	{
		if(list.indexOf(string[i])== -1)
		{
			list=list+string[i]
		}
		if(list.length == 26){
			break
		}
	}
	for(var j=0;j<list.length;j++){	
		var count=0
		for(var i=0; i< string.length;i++)
		{
			if(string[i]==list[j])
				{
					count++
				}
		}
		letterCount.push([list[j],count])
	}
	return letterCount.find(function(element) {
		  return element[1] == 1
	})[0]
}
//console.log(firstNotRepeat('abacddbec'))

//24
function bubbleSort(numList)
{
	var sorted = false
	while(sorted==false){
		sorted=true
		for(var i=0;i<numList[i]-1;i++){
			if(numList[i]>numList[i+1]){
				var temp=numList[i]
				numList[i]=numList[i+1]
				numList[i+1]=temp
				sorted=false
			}
		}
	}
	return numList.reverse()
}
//console.log(bubbleSort([12, 345, 4, 546, 122, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

//25
function findLongestObj(list)
{
	country=list[0]
	for(var index = 0; index < (list.length-1); index++){
		if(list[index].length<list[index+1].length){
			country=list[index+1]
		}
	}
	return country;
}
//console.log(findLongestObj(["Australia", "Germany", "United States of America"]))

//26
function longSubString(){
	
}

//27
function longPalindrome(){
	
}

//28
function callBack(){
	
}

//29
function getFunctionName(){
	
	
}
