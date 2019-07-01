

$('#text').append('<p id="author">David Allen <span class="citation">, Making It All Work</span><span class="year">,2009 </span></p>');
var found;
var prevQuoteId;
var quoteindex;
let quote_text;
//var selected_quote=document.querySelector('#text');
//var current_quote = selected_quote.textContent;
function getRandomQuote()
{
	found=0;
	//get a random no.
 let ranNum = Math.floor(Math.random() * quotes.length);


 while(found==0)//document.querySelector("body").style.backgroundColor = Color;
 {
	 //If prevQuoteId is not equal to randomly selected quote id
 if(quotes[ranNum].id!=prevQuoteId)
 {
	 //Assign to prevQuoteId the randomly selected quote id
	 prevQuoteId=quotes[ranNum].id;
	 found=1;
	  return ranNum;
 }
  if(quotes[ranNum].id==prevQuoteId) //if the prevQuoteId is equal to random quote id
  {
	  ranNum = Math.floor(Math.random() *8); //generate a random no. again  & repeat the loop until prevQuoteId is not equal to randomly selected quote id
  }
 
 }

 }
 

function printQuote(){

  quoteindex= getRandomQuote();
 quote_text= quotes[quoteindex].quote;
 current_quote = quotes[quoteindex].quote;
 //document.querySelector('.quote').textContent= quote_text;
 let source_text= quotes[quoteindex].source;
// document.querySelector('.source').textContent= source_text;
  let citation_text= quotes[quoteindex].citation;
  let year_text= quotes[quoteindex].year;
  var html="";

  
   if((citation_text.length!=0) && (year_text.length!=0))
  {
	  html+=`<p id="text">${quote_text}</p>`;
  html+=`<p id="author">-${source_text}`;
	html+=`<span class="citation">${citation_text}</span><span class="year">${year_text}</span></p>`;
	document.querySelector('#text').innerHTML=html;
  }
  
   if((citation_text.length!=0)&& (year_text.length==0))
  {
	   html+=`<p id="text">${quote_text}</p>`;
  html+=`<p id="author">-${source_text}`;
	html+= `<span class="citation">${citation_text}</span></p>`
	document.querySelector('#text').innerHTML=html;
	  //console.log(year_text);
	 
  }
  if((citation_text.length==0)&& (year_text.length!=0))
  {
	   html+=`<p id="text">${quote_text}</p>`;
  html+=`<p id="author">-${source_text}`;
	 html+=`<span class="year">${year_text}</span></p>`;
	 document.querySelector('#text').innerHTML=html;
  }
	 if((citation_text.length==0)&& (year_text.length==0))
	 {
		  html+=`<p id="text">${quote_text}</p>`;
  html+=`<p id="author">-${source_text}</p>`;
	 }
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var  blue = Math.floor(Math.random() * 256 );
	var colour= "rgb(" + red + ',' + green + ','+ blue + ")";
	document.querySelector('body').style.backgroundColor =  "rgb(" + red + ',' + green + ','+ blue + ")" ;
	document.querySelector('#text').style.color =  "rgb(" + red + ',' + green + ','+ blue + ")" ;
	document.querySelector('a').addEventListener("click",()=>
{
	window.open('https://twitter.com/intent/tweet?text='+ quote_text);
	console.log(quote_text);
});
}



document.getElementById('new-quote').addEventListener("click", printQuote);
