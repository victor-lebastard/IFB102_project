import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <input
        aria-labelledby="search-button"
        type="search"
        name="search"
        id="search"
        onChange={(e) => setInnerSearch(e.target.value)}
        
      />
      <button 
          id="search-button" 
          type="button" 
          onClick={() => navigate('/Forecast?city='+ innerSearch )}
          
        >
        Search
      </button>
    </div>
  );
}

// onClick={() => props.onSubmit(innerSearch)}
// onClick={() => navigate('/Weather?city='+ innerSearch )}