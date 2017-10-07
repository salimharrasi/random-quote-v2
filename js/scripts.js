//-----------------------------------------------//
//-------------- START PROGRAM ------------------//
//-----------------------------------------------//

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// The quotes array
var quotes = [
  { quote : 'An investment in knowledge always pays the best interest.',
    source : 'Benjamin Franklin',
    category : 'inspiration'
  },
  { quote : 'It\'s not the load that breaks you down, it\'s the way you carry it.',
    source : 'Lena Horne',
    category : 'inspiration'
  },
  { quote : 'If today is the last day of your life, would you want to do what you are about to do today',
    source : 'Steve Jobs',
    year : '1955-2011',
    category : 'inspiration',
  },
  { quote : 'Do not take life too seriously. You will never get out of it alive.',
    source : 'Elbert Hubbard',
    category : 'humour'
  },
  { quote : 'The simple things are also the most extraordinary things, and only the wise can see them.',
    source : ' Paulo Coelho',
    citation : ' The Alchemist novel',
    year : '1988',
    category : 'wisdom'
  },
  { quote : 'By all means, marry. If you get a good wife, you\'ll become happy; if you get a bad one, you\'ll become a philosopher.' ,
    source : ' Socrates',
    category : 'marriage'
  }
];


var displayedQuotes = []; // an array to store displayed quotes

// function that will generate a random non-repeated quote from the quotes array
function getRandomQuote(){
var pickObject = Math.floor(Math.random()*quotes.length);
var theQuote = quotes.splice(pickObject, 1)[0];//selected quote shall be remove from the original array once displayed and stored to a new array
displayedQuotes.push(theQuote);
if (quotes.length == 0){
  quotes = displayedQuotes;
  displayedQuotes = [ ]; // here the cylce goes back again
}
return theQuote;
}

// function to print the selected quote to the HTML file
function printQuote(){
var selectedObject = getRandomQuote();
var quote = selectedObject.quote;
var source = selectedObject.source;
var citation = selectedObject.citation;
var year = selectedObject.year;
var category = selectedObject.category;

var  printToHTML =   '<p class="quote">' + quote + '</p>';

// this conditional statement is needed in case 'citation' and/or 'year' objects are not available in 'quotes' array.
if (citation === undefined && year === undefined) {
  printToHTML +=  '<p class="source">' + source + '</p>';
} else if (citation === undefined){
  printToHTML +=  '<p class="source">' + source + '<span class="year">' + year + '</span>' + '</p>';
} else if (year === undefined) {
  printToHTML +=  '<p class="source">' + source + '<span class="citation">' + citation+'</span>' + '</p>';
} else {
  printToHTML += '<p class="source">' + source + '<span class="citation">' + citation+'</span>'+ '<span class="year">' + year + '</span>' + '</p>';
}
  printToHTML += '<p class="category">' + category +'</p>'

var outPutDiv = document.getElementById('quote-box');// the printed quote to HTML is taking place by this function
outPutDiv.innerHTML = printToHTML;
getRandomColor();
}

// function to generate a random background color once the 'printQuote' fuction is called.
function getRandomColor(){
red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')';
  }

//function to triger the next quote in case 'show another quote' button is not pressed in 30 seconds!
function timedQuote() {
    printQuote();
  }
var switchQuote = window.setInterval(timedQuote, 30000);

//-----------------------------------------------//
//--------------  END PROGRAM  ------------------//
//-----------------------------------------------//
