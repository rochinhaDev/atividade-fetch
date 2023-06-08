/* 
END POINT: https://dummyjson.com/quotes
Rendereizar os campos: quote, author
Não esqueça de criar o botão para mostrar e sumir com a lista (como exemplo em aula)
*/
import { useState, useEffect } from "react";
import axios from "axios";
export default function QuotesList() {
  const [quotes, setQuotes] = useState([]);
  const [showQuotes, setShowQuotes] = useState(true);
  useEffect(() => {
    async function fetchQuotes() {
      const response = await axios.get("https://dummyjson.com/quotes");
      console.log(response);
      setQuotes(response.data.quotes);
    }
    fetchQuotes();
  }, []);
  //  console.log(products);
  function handleQuotes() {
    setShowQuotes(!showQuotes);
  }
  return (
    <div>
      <h2>Quotes</h2>
      <button onClick={handleQuotes}>Mostrar Quotes</button>
      {showQuotes === true && (
        <div>
          {quotes.map((quote) => {
            return (
              <div key={quote.id}>
                <h3>{quote.quote}</h3>
                <p>{quote.author}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
