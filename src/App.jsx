import React, { useState } from 'react';
import './App.scss';

import {getMovies} from '../api/api';


export const App = () => {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const callback = (event) => {
    setTitle(event.target.value);
  }

  const findMovie = async() => {
    try {
      const movies = await getMovies(title);
    }
    catch {
    }
  }

  return(
    <>
      <input 
        type='text'
        placeholder='Enter title'
        value={value}
        onChange={callback}
      />

      <button
        name='find'
        type='submit'
        //onClick={}
      >
        Find movie
      </button>

      <button
        name='add'
        type='submit'
        //onClick={}
      >
        Add movie
      </button>
    </>
  )
};
