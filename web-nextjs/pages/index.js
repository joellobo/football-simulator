import React from 'react';
import Link from 'next/Link';

const Home = ({repositories}) => (
    <div>
        <Link href="/">
            <a>Página Inicial</a>
        </Link>
        <Link href="/simulador">
            <a>Simulador</a>
        </Link>
        <Link href="/teste">
            <a>Teste</a>
        </Link>
    </div>
);
      //  {repositories.map(repo => <h1 key={repo.id}>{repo.name}</h1>)}

export default Home;