import { GetStaticPropsResult } from 'next';
import { StringifyOptions } from 'querystring';
import Image from 'next/image'
import React from 'react';

interface Props {
  characters: {
    results: {
      id: number;
      name: string;
      status: string;
      species: string;
      gender: string;
      image: string;
    }[];
  };
}

const Posts = ({ characters }: Props) => {
  return (
    <div className='bg-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5'>
      {characters.results.map((character) => (
        <div key={character.id} className='ml-36'>
          <Image src={character.image} width={150} height={150} alt="characterimage"/>
          <h1 className='text-white text-2xl'>Name: {character.name}</h1>
          <p className='text-white text-2xl'>{character.status}</p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: any = async (context: any) => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const results = await res.json();

  return {
    props: {
      characters: results,
    }, // will be passed to the page component as props
  };
};

export default Posts;
