import React from 'react';
import Card from '../Card';

import classes from './CardList.module.scss';

const CardList = ({ kanjis }) => {
  return (
    <section className="l-section l-section--simple">
      <div className={[classes['Cardlist__content'], 'm-fx-c-sh', 'm-pd-xt'].join(' ')}>
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
    </section>
  );
};

export default CardList;
