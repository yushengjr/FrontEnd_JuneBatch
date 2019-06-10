// Question 1
function js_style(){
	if(q1.style.fontSize=="30px"){
		q1.style.fontSize="15px";
		q1.style.fontFamily="Times New Roman Georgia";
		q1.style.color="black";
	}
	else{
		q1.style.fontSize="30px";
		q1.style.fontFamily="Comic Sans MS";
		q1.style.color="blue";
	}
}

// Question 2
function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
	  console.log(x.elements[i].value);
     }  
   }
  alert("Firstname:"+x.fname.value+"  Lastname:" + x.lname.value)
}

//Question 3
function changePColor(){
	if(q3.style.backgroundColor=="blue"){
		q3.style.backgroundColor="white"
	}
	else{
		q3.style.backgroundColor="blue"
	}
}

//Question 4
function getAttributes(){
	alert("type:"+ w3r.type+"  href:"+w3r.href+"  hreflang:"+w3r.hreflang+"  rel:"+w3r.rel+"  target:"+w3r.target)
	  
	
}

//Question 5
function insert_Row(){
	var newRow = sampleTable.insertRow(sampleTable.rows.length)
	var cell1 = newRow.insertCell(0)
	var cell2 = newRow.insertCell(1)
	cell1.innerHTML = "Row"+sampleTable.rows.length+" cell1"
	cell2.innerHTML = "Row"+sampleTable.rows.length+" cell2"
	
}

//Question 6
function  changeContent(){
	var rn=parseInt(window.prompt("the row's number(please enter a number that smaller than "+(myTable.rows.length+1)+")","1"),10)
	var cn=parseInt(window.prompt("the column's number(please enter a number that smaller than "+(myTable.rows[0].cells.length+1)+")","1"),10)
	var content=window.prompt("the content you want to change")
	if(rn>myTable.rows.length || cn>myTable.rows[0].cells.length)
		{
			alert("Input number out of bounds!")
		}
	else{
			myTable.rows[rn-1].cells[cn-1].innerHTML=content
	}
}

//Question 7
function createTable(){
	var rn=parseInt(window.prompt("the number of rows"),10)
	var cn=parseInt(window.prompt("the number of columns"),10)
for(var i=0;i<rn;i++)
	{
		var newRoll = myTable1.insertRow(myTable1.rows.length)
		for(var j=0;j<cn;j++){
			var newCell = newRoll.insertCell(j)
			newCell.innerHTML="Row-"+i+" Colunmn-"+j
		}
	}
}

//Question 8
function removecolor(){
	colorSelect.remove(colorSelect.selectedIndex);
	
}

//Question 9
function getOptions(){
	var opt=''
	for(var i=0;i<mySelect.length;i++){
		opt += mySelect[i].value+" "
	}
	alert("There are "+mySelect.length+" options:"+opt)
	
}

//Question 10
function sphereArea(){
	var out = parseFloat(form2.rad.value)
	console.log(out)
	var area=out*out*Math.PI
	console.log(area)
	form2.vol.value=area.toFixed(4)
}

//Question 11
function randomIMG(){
	var imglist=[["http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",240,160],
		["http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", 320, 195],
		["http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",500, 343]]
	var random = Math.floor(Math.random() * 3)
	var img=document.createElement("img")
	img.src=imglist[random][0]
	img.width=imglist[random][1]
	img.height=imglist[random][2]
	img.alt="random picture"
		
	document.body.appendChild(img)
}

//Question 12
function highlightBold(){
	var bold = demo.getElementsByTagName('strong'); 
	for (var i=0; i<bold.length; i++)
	   {                                                    
	    bold[i].style.color = "yellow";
	   }
}

function normaling(){
	var bold = demo.getElementsByTagName('strong'); 
	for (var i=0; i<bold.length; i++)
   {                                                    
    bold[i].style.color = "black";
   }
}

//Question 13
function getSize(){
	alert("The window size is "+window.innerWidth+"*"+window.innerHeight)
}



