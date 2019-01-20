import React from 'react';
import classes from './Card.module.scss';
import classNames from 'classnames';

const Card = ({ id, character, meaning, kunyomi, onyomi }) => {
  const cardClasses = classNames('box', 'm-bd-xt', 'm-rd-xt', classes.Card);
  const headerClasses = classNames('m-tx-c');
  const bodyClasses = classNames('side__header', 'm-fx-cl-c-c', classes.Kanji);
  const lectureClasses = classNames('m-fx-cl m-tx-c m-bd-xt-t', classes.Lecture);
  const spellingClasses = classNames('m-wt-900', classes.Spelling);

  const kunLength = kunyomi.length;
  const onLength = onyomi.length;

  const kunyomiDisplay = kunyomi.map((spelling, i) => (
    <div className={spellingClasses} key={i}>
      <span>{spelling}</span>
    </div>
  ));

  const onyomiDisplay = onyomi.map((spelling, i) => (
    <div className={spellingClasses} key={i}>
      <span>{spelling}</span>
    </div>
  ));

  return (
    <div className={cardClasses}>
      <div className="side m-fx-cl">
        <div className={headerClasses}>
          <span>{meaning}</span>
        </div>
        <div className={bodyClasses}>
          <span>{character}</span>
        </div>
        <div className="side__footer m-fx-sh-c">
          <div className={lectureClasses}>
            <div className="m-bd-xt-b">KUN</div>
            <div className="m-fx-sh-c">{kunyomiDisplay}</div>
          </div>
          <div className={lectureClasses}>
            <div className="m-bd-xt-b">ON</div>
            <div className="m-fx-sh-c">{onyomiDisplay}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
