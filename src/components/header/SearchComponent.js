import React, { useState } from 'react';
import search from '../../assets/icons/search.png';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [artistData, setArtistData] = useState(null);

  const searchInputHandler = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === '') {
      setArtistData(null);
      return;
    }

    requestApi(value);
  };

  const requestApi = (searchTerm) => {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => setArtistData(result))
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <img src={search} alt="Buscar"/>
      <input
        type="text"
        id="search-input"
        maxLength="800" 
        autoCorrect="off" 
        autoCapitalize="off" 
        spellCheck="false"
        placeholder="O que você quer ouvir?"
        value={searchTerm}
        onChange={searchInputHandler}
      />

    {artistData && artistData.length > 0 && (
      <div>
        {artistData.map((element, index) => (
          <div key={index}>
            <p>{element.name}</p>
            <img src={element.urlImg} alt={element.name} />
          </div>
        ))}
      </div>
    )}
    </div>
  );
};

export default SearchComponent;
