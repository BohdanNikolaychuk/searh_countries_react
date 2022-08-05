import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ALL } from '../../config';
import { Controls } from '../../components/Controls/Controls';
import List from '../../components/List/List';
import Card from '../../components/List/Card';

const Home = ({ setCountries, countries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) axios.get(ALL).then(({ data }) => setCountries(data));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);
  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((element) => {
          const contryInfo = {
            img: element.flags.png,
            name: element.name,
            info: [
              { title: 'Population', description: element.population.toLocaleString() },
              { title: 'Region', description: element.region },
              { title: 'Capital', description: element.capital },
            ],
          };
          return <Card key={element.name} {...contryInfo} />;
        })}
      </List>
    </>
  );
};

export default Home;
