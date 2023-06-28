import React, { useState } from 'react';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { FaQuoteRight } from 'react-icons/fa';
import './App.css';
const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content);
    alert('Copied!');
  };


  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.content)}`;
    window.open(url, '_blank');
  };

  const shareOnWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(quote.author + " once said: " + quote.content)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <header>
        <div className="top-strip" />
      </header>
      <div className="container">
        <div className="quotation-box ">
          <span className='faQuote'><FaQuoteRight /></span>
          <div className="quote">
            <p>{quote.content}</p>
            <span>- {quote.author}</span>
          </div>
          <div className="bottom-navigation">
          <div className="btns">
              <button onClick={copy}>Copy</button>
              <button onClick={generateQuote}>Generate Another Quote</button>
            </div>
            <div className="share">
              <span>Share At:</span>
              <div className='social-icons'>
                <a href="#!" onClick={shareOnTwitter}>
                  <BsTwitter title="Post this quote on twitter!" />
                </a>
                <a href="#!" onClick={shareOnWhatsApp}>
                  <BsWhatsapp title="Post this quote on WhatsApp!" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-strip" />
    </>
  );
};

export default App;