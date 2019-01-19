import React from 'react';
import classes from './Card.module.scss';
import classNames from 'classnames';

const Card = () => {
  const cardClasses = classNames('box', 'm-bd-xt', 'm-rd-xt', classes.Card);
  const headerClasses = classNames('m-tx-c');
  const bodyClasses = classNames('side__header', 'm-fx-cl-c-c', classes.Kanji);
  const lectureClasses = classNames('m-tx-c', classes.Lecture);

  return (
    <div className={cardClasses}>
      <div className="side m-fx-cl">
        <div className={headerClasses}>
          <span>(extend)</span>
        </div>
        <div className={bodyClasses}>
          <span>&#x4e00;</span>
        </div>
        <div className="side__footer m-fx-sh-c">
          <div className={lectureClasses}>ON</div>
          <div className={lectureClasses}>KUN</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
