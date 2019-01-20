import React from 'react';
import classes from './Card.module.scss';
import classNames from 'classnames';

const Card = ({ id, character, meaning, kunyomi, onyomi }) => {
  const cardClasses = classNames('box', 'm-bd-xt', 'm-rd-xt', 'm-mg-xt', classes.Card);
  const headerClasses = classNames('m-tx-c', 'm-wt-700', 'm-tertiary');
  const bodyClasses = classNames('side__header', 'm-fx-cl-c-c', 'm-tx-primary', classes.Kanji);
  const lectureClasses = classNames('m-fx-cl m-tx-c m-bd-xt-t', classes.Lecture);
  const spellingClasses = classNames('m-wt-900', classes.Spelling);
  const meaningClasses = classNames(classes.Meaning);

  const meaningDisplay = meaning.map((meaning, i) => (
    <span className={meaningClasses} key={i}>
      {meaning}
    </span>
  ));

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
          <span>{meaningDisplay}</span>
        </div>
        <div className={bodyClasses}>
          <span>{character}</span>
        </div>
        <div className="side__footer m-fx-sh-c">
          <div className={lectureClasses}>
            <div className="m-bd-xt-b m-primary">KUN</div>
            <div className="m-fx-sh-c m-tx-primary">{kunyomiDisplay}</div>
          </div>
          <div className={lectureClasses}>
            <div className="m-bd-xt-b m-secondary">ON</div>
            <div className="m-fx-sh-c m-tx-secondary">{onyomiDisplay}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
