import {useState} from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [newsList, setNewsList] = useState
  ([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setNewsList (data.results);
    });
  });



  return (
    <div className="App">
      <div className='title'>
      <h1>Space News</h1>
      </div>
      <div className='newsContainer'>
        {newsList.map((article, key) => {
          return <div key ={key} className='article' onClick={() => {window.location.href= article.url}}> 
          <h3>{article.title}</h3>
          <img src={article.image_url} alt=''/>
          <p>{article.summary}</p>
          <h4>{article.updated_at}</h4> 
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;