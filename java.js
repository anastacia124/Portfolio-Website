const counter = 0;
const elem = document.getElementsByClassName("#everything");
const inst = setInterval(everything, 2000);
const quotes = {
       " -A curious Software Developer" : ''
       ," -An affluent Web Developer" : ''
       ," -A lover of UX/UI Design" : ''
       
       
    };

    document.querySelector("#everything") ,document.addEventListener("load", () => {
        generate();
    });

    function everything() {
        const authors = Object.keys(quotes);
        const author = authors[Math.floor(Math.random() * authors.length)];
        const quoteLoop = quotes[author]
       
        document.querySelector("#quoteLoop").textContent = quoteLoop;
        document.querySelector("#author").textContent = author;
    }

    function quoteLoop() {
        elem.innerHTML = quotes[counter++];
        counter++;
        if (counter >= quotes.length) {
          counter = 0;  
        }  
    }

    window.onload = function() {
        everything()
    }
    
