import React from "react";

class Quote {
    render() {
        return(
            
        )
    }
}



// const Quote = () => {
//     const [qt, setQuote] = useState([]);
//     useEffect(() => {
//       const x = Math.floor(Math.random()*29);
//       const url = "https://dummyjson.com/quotes/"+x;
//       fetch(url)
//       .then(response => response.json())
//       .then(data => setQuote(data))
//     }, [])
//     const likeClicked = () => console.log(qt);
//     return (
//       <div>
//         <h1>Quotes That Can Change Your Life</h1>
//         <h2>{qt.quote}</h2>
//         <h3>---{qt.author}</h3>
//         <button onClick = {likeClicked}>Like</button>
//         <button>Dislike</button>
//       </div>
//     )
//   }
  
//   export default App;