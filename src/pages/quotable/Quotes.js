import React, { useEffect, useState } from "react";
import Quote from "../../components/quote/Quote";
import "./quote.css";

import axios from "axios";

export default function Quotes() {
  let [quote, setQuote] = useState({});
  let getQuote = () => {
    axios.get("http://api.quotable.io/random").then((res) => {
      console.log(res.data);
      setQuote(res.data);
    });
  };

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div>
      <div>
        <Quote quote={quote.content} author={quote.author} />
      </div>

      <div className="button-row">
        <a
          href="#!"
          onClick={getQuote}
          className="waves-effect waves-deep-purple btn-flat"
        >
          More Quotes...
        </a>
      </div>
    </div>
  );
}
