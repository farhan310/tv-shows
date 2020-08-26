import React from 'react';
import ReactDOM from 'react-dom';

import tvShows from './componants/tvShows';

const App = () => {
  const [titles, setTitles] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  const fetchGames = async () => {
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    const data = await response.json();
    setTitles(data.results);
  };

  React.useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <>
      <main>
        {titles.map(title => (
          <tvShows key={title.name} {...title} />
        ))}
      </main>
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
