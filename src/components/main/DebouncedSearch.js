import { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import {fetchCountries} from './countries';
import useDebouncedState from './useDebouncedState';

function DebouncedSearch() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedState(query, 1_000);
  const [countries, setCountries] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSearching(true);
    fetchCountries(debouncedQuery).then((countries) => {
      setCountries(countries);
      setSearching(false);
    });
  }, [debouncedQuery]);

  return (
    <>
      <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} />
      {/* <SearchResults countries={countries} searching={searching} /> */}
    </>
  );
}
export default DebouncedSearch