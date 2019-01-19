import React from 'react';
import Card from '../Card';

const CardList = ({ kanjis }) => {
  return (
    <div>
      {kanjis.map((kanji, i) => {
        return (
          <Card
            key={i}
            id={kanjis[i].id}
            meaning={kanjis[i].meaning.english}
            character={kanjis[i].character}
            kunyomi={kanjis[i].kunyomi}
            onyomi={kanjis[i].onyomi}
          />
        );
      })}
    </div>
  );
};

export default CardList;
