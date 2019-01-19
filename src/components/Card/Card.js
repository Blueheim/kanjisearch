import React from 'react';
import classes from './Card.module.scss';
import classNames from 'classnames';

const Card = ({ id, character, meaning, kunyomi, onyomi }) => {
  const cardClasses = classNames('box', 'm-bd-xt', 'm-rd-xt', classes.Card);
  const headerClasses = classNames('m-tx-c');
  const bodyClasses = classNames('side__header', 'm-fx-cl-c-c', classes.Kanji);
  const lectureClasses = classNames('m-tx-c', classes.Lecture);

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
          <div className={lectureClasses}>{kunyomi}</div>
          <div className={lectureClasses}>{onyomi}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
