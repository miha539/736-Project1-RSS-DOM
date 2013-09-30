var linky='';
var isEmailValid=false;
var isNameValid=false;
 
 var subset=0;
 
function macIE5()
{

	macie5 = navigator.userAgent.indexOf("mac") > -1;
	var browser = navigator.userAgent;'Mozilla/4.0 (compatible; MSIE 5.0; Mac OS X)'
	var version = browser.substr(browser.indexOf("MSIE ")+("MSIE ").length, 1);
	if(macie5)
	{
		if(version == 5 || version<5)
		
		{	
			window.location="http://www.mozilla.org/en-US/firefox/new/";
		}
	}
	
}
 
function move(elem, toShift) 
{

	var left = 0

	function frame() 
	{
    
		left++  // update parameters 
    
		elem.style.left = left + 'px' // show frame 

		if (left == toShift)
		{// check finish condition
			clearInterval(id)
		}
  }

	var id = setInterval(frame, 10) // draw every 10ms
	
}
 
 
function $(which)
{
	return document.getElementById(which);
}//end function $

function welcome(n,e)
{
	var msg="Hello! "+n+". "+" Your email is: "+e;
	var tEle=document.createTextNode(msg);
	$('welcome').appendChild(tEle);
}

/*this fucntion is generic enough */
function generate(which)
{ 
	
 if(myoption[which] == undefined )
 {//checkin undefined
 
	remove('result');
	remove('details');
	remove('feedControl');
	var optionArray=new Array();
	
	for(var k=0; k<document.getElementsByTagName('select').length; k++)
	{
		optionArray[k]="sel"+parseInt(parseInt(k)+1);		
	}
		 
	setlink(optionArray);
	
	var result='';
	for (var i=0,len=optionArray.length; i<len; i++)
	{
		var ch=$(optionArray[i]).value;
		result+="Choice "+parseInt(i+1)+": "+ch+" ";
	}
  
  var rTextEle = document.createTextNode(result);
  var brEle=document.createElement('br');
  
  var resultsdiv = document.getElementById("result");
  
  resultsdiv.appendChild(rTextEle);
  resultsdiv.appendChild(brEle);
  resultsdiv.appendChild(brEle);
  
  move(document.getElementById('result'),250);


  var h3Ele = document.createElement('h3');
  
  var deTextEle = document.createTextNode('Enter the following details');
  var detailsdiv = document.getElementById("details");
  
  h3Ele.appendChild(deTextEle);
	
  detailsdiv.appendChild(h3Ele);
  
  
  var formEle=document.createElement('form');
  formEle.setAttribute('name','form1');
  
  formEle.setAttribute('id','lastForm');
	if(ie7>0)
	{
		formEle.setAttribute('onsubmit',function(){ return storeInfo($('tname'),$('e_mail'));});
	}
	else
	{
		formEle.setAttribute('onsubmit',"return storeInfo($('tname'),$('e_mail'))");
	}
	
	//textbox for name
	var TextEle = document.createTextNode('Name: ');
	formEle.appendChild(TextEle);
		
	var tbEle = document.createElement('input');
	
	tbEle.setAttribute('type','text');
	tbEle.setAttribute('id','tname');
	tbEle.setAttribute('name','tname');
	tbEle.setAttribute('value','Enter your name');
	if(ie7>0)
	{
		tbEle.setAttribute('onfocus',function(){ this.value=''; });		
	}
	else
	{
		tbEle.setAttribute('onfocus',"this.value=''");
	}
	formEle.appendChild(tbEle);
	
	var spanEle=document.createElement('span');
	spanEle.setAttribute('id', 'nameSpan');
	spanEle.setAttribute('class', 'errorMsg');
	formEle.appendChild(spanEle);
		
	var brEle = document.createElement('br');
	formEle.appendChild(brEle);
		
	//textbox for email
	
	var TextEle = document.createTextNode('Email: ');
	formEle.appendChild(TextEle);
		
	var tbEle = document.createElement('input');
	tbEle.setAttribute('type','text');
	tbEle.setAttribute('id','e_mail');
	tbEle.setAttribute('name','e_mail');
	tbEle.setAttribute('value','Enter your email ID');
	if(ie7>0)
	{
		tbEle.setAttribute('onfocus',function(){ this.value=''; });
	}
	else
	{
		tbEle.setAttribute('onfocus',"this.value=''");
	}
	formEle.appendChild(tbEle);
	
	var spanEle=document.createElement('span');
	spanEle.setAttribute('id', 'emailSpan');
	spanEle.setAttribute('class', 'errorMsg');
	formEle.appendChild(spanEle);
	
	var brEle = document.createElement('br');
	formEle.appendChild(brEle);
	
	//submit button
	var subEle = document.createElement('input');
	subEle.setAttribute('type','submit');
	subEle.setAttribute('id','sub');
	subEle.setAttribute('name','submitVal');
	subEle.setAttribute('value','Store Info');

	formEle.appendChild(subEle);
	
	//reset button
	
	var resetEle = document.createElement('input');
	resetEle.setAttribute('type','reset');
	resetEle.setAttribute('id','res');
	resetEle.setAttribute('name','resetVal');
	resetEle.setAttribute('value','Clear form');

	formEle.appendChild(resetEle);
	
	detailsdiv.appendChild(formEle);	
    
 }//end if to check undefined
 else
 {
	remove('result');
	remove('details');
	remove('feedControl');
	
	var x = document.getElementsByTagName('select').length;
	
	for(var i=parseInt(myoption[which]["0"]);i<=x;i++)
	{
	kill('sel'+i); 
	}//end for
	
			
	var sEle = document.createElement('select');
	if(ie7>0)
	{
		sEle.setAttribute('onchange',function() { generate(this.value); });
	}
	else
	{
		sEle.setAttribute('onchange',"generate(this.value);");
	}
	
	sEle.setAttribute('id','sel'+myoption[which][0]);
		
	var oEle = document.createElement('option');
	  
	var text = document.createTextNode(myoption[which]["1"]);
	oEle.appendChild(text);
	sEle.appendChild(oEle);
	  
	for(var i=2,len=myoption[which].length;i<len;i++)
	{
		var oEle = document.createElement('option');
	    oEle.setAttribute('value', myoption[which][i]);
	    var text = document.createTextNode(myoption[which][i]);
	
	    oEle.appendChild(text);
	    sEle.appendChild(oEle);
	}//end for
	  sEle.firstChild.setAttribute("selected","selected");
	  sEle.firstChild.setAttribute("disabled","disabled");
	  
	  document.getElementById('content').appendChild(sEle);
	  
	  subset++;

}//end else
}//end fucntion generate
	
	function kill(which)
	{
		//parent.removeChild(ele)
		var ele=document.getElementById(which);
		if(ele!=null)
		ele.parentNode.removeChild(ele);
		
	}//end function kill
	
	function remove(which)
	{
		var x=$(which);
	
		if(x.hasChildNodes())
		{
			while (x.lastChild) 
			{
				x.removeChild(x.lastChild);
			}

		}
	
	}
	
	function validateName(u_name)
	{ 
		var nameToVal = u_name;
		
		var alphaRegex = /^[A-Za-z]+$/;
		
		if(nameToVal.match(alphaRegex))
		{
			if($('nameSpan').hasChildNodes())
			{
				remove('nameSpan');
			}
			isNameValid=true;
		}
		else if(nameToVal=='' || nameToVal=='Enter your name')
		{
			//document.getElementById('tname').style.border = "solid 2px red";
			//alert('Name field is required and cannot be left blank');
			//u_name.focus();			
			//document.getElementById('tname').style.border="2px inset #999";
			isNameValid=false;
		}
		else
		{
			//alert('That does not look like a name. Enter a valid name.');
			//u_name.focus();
			isNameValid=false;
		}
	}//end validateName
	
	function validateEmail(uemail)
	{	
		
		var emailToVal=uemail;
		
		var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		
		if(emailToVal.match(emailRegex))
		{
			if($('emailSpan').hasChildNodes())
			{
				remove('emailSpan');
			}

			isEmailValid=true;
		}
		else if(emailToVal=='' || emailToVal=='Enter your email ID')
		{
			//alert("Email address cannot be left blank!");
			//uemail.focus();
			isEmailValid=false;
		}
		else
		{
			//alert("You have entered an invalid email address!");
			//uemail.focus();
			isEmailValid=false;
		}
	}

	
	function storeInfo(name,email)
	{	
		var uname=name.value;
		var uemail=email.value;
		
		validateName(uname);
		validateEmail(uemail);
		
		if(isNameValid && isEmailValid)
		{			
			if(window.localStorage)
			{
				if(uname || uemail)
				{
					window.localStorage.setItem('uname', uname);
					window.localStorage.setItem('uemail', uemail);
				}

			}

			if(GetCookie('uname') == null || GetCookie('uname') == undefined)
			{

				SetCookie('uname',uname);
				SetCookie('uemail',uemail);

			}
		
			return true;
		}
		else
		{
		
			if(isNameValid==false)
			{
				var errorNode=document.createTextNode("Name not valid");
				if($('nameSpan').hasChildNodes())
				{
					remove('nameSpan');
				}
				$('nameSpan').appendChild(errorNode);
				$('tname').focus();			
				
			}
			else if(isEmailValid==false)
			{
				var errorNode=document.createTextNode("Email not valid");
				if($('emailSpan').hasChildNodes())
				{
					remove('emailSpan');
				}
				$('emailSpan').appendChild(errorNode);
				$('e_mail').focus();			
			}
			return false;
		} 
				
		
	}
	
	function setlink(optArray)
	{
		var choice=optArray;
		
		var ss='';
		for(var i=0,len=choice.length; i<len; i++)
		{
			ss+=$(choice[i]).value+"_";
		}
			
		//alert("set "+mychoices[ss]);
		window.linky=mychoices[ss];   // 'http://rss.people.com/web/people/rss/topheadlines/index.xml';
		if(ie7==0)
		{
		google.load("feeds", "1", {"callback" : load});
		move($("rsscontent"));
		}
		
	}
	
	function load() {
	if(ie7==0)
	{
      var feed = window.linky;
      new GFdynamicFeedControl(feed, "feedControl");
	}

    }
	
	function doLoad()
	{

	if(localStorage.getItem('uname') || localStorage.getItem('uemail'))
	{
		welcome(localStorage.getItem('uname'),localStorage.getItem('uemail'));
	}
	else if(GetCookie('uname') || GetCookie('uemail'))
	{
		if(ie7>0)
		{
			welcome(GetCookie('uname'),GetCookie('uemail'));
		}
	}
	else
	{
		welcome("Guest", "Unknowm");
	}
	
	}
