import React from 'react'
import { MovieGrid } from '../PastorGrid/BiografiaPastoral';
import Navegador from '../Navegador/Navegador';

const Home = () => {
  return (
    <div>
        <Navegador />
        <MovieGrid />
    </div>
  )
}

export default Home;