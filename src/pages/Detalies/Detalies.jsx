import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { searchByCountry } from '../../config';

import { Info } from './../../components/Info/Info';
import { Button } from './../../components/Button/Button';
const Detalies = () => {
  const { name } = useParams();
  const [currentCountry, setCurrentCountry] = useState(null);
  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCurrentCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button to={'/'}>
        <IoArrowBack />
        Back
      </Button>
      {currentCountry && <Info {...currentCountry} />}
    </div>
  );
};

export default Detalies;
