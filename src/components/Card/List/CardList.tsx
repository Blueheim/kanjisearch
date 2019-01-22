import React from 'react';
import Card from '../Card';
import { IKanji } from '../../../types/kanji';

import classes from './CardList.module.scss';

const CardList = ({ kanjis }: { kanjis: IKanji[] }) => {
  return (
    <section className="l-section l-section--simple">
      <div className={[classes.Cardlist__content, 'm-fx-c-sh', 'm-pd-xt'].join(' ')}>
        {kanjis.map((kanji, i) => {
          return (
            <Card
              key={i}
              id={kanji.id}
              meaning={kanji.meaning.english}
              character={kanji.character}
              kunyomi={kanji.kunyomi}
              onyomi={kanji.onyomi}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CardList;
