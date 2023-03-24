import React, { useState } from 'react'
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

function RepositoriesList() {

  const [term, setTerm] = useState('');

  const { searchRepositories } = useActions();

  const { data, error, loading } = useTypedSelector(state => state.repositories);


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setTerm(e.target.value);

  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    console.log('Searching')
    searchRepositories(term);


  }


  return (
    <div>

      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={term} />
        <button type='submit'>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {
        !error && !loading && <ul>{data.map(el => <li key={el}> {el}</li>)}</ul>
      }
    </div>
  )
}

export default RepositoriesList;