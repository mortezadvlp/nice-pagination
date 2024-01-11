import React, { useEffect, useState } from 'react';
import DotsButton from './dots-button';
import NextButton from './next-button';
import PageButton from './page-button';
import PreButton from './pre-button';
import { calcButtons } from '../features/controller';
import styles from '../styles.module.css';
import SelectedButton from './selected-button';

export default function PaginationBody({ initialPage, totalPages, minButtonsToDots, dotsButtonStep = 3, settings = {}, onPageChanged, className = '', style }) {

  const {
    CustomPreButton = PreButton, 
    CustomNextButton = NextButton,
    CustomDotsButton = DotsButton,
    CustomNumberButton = PageButton,
    CustomSelectedButton = SelectedButton
  } = settings;


  const [page, setPage] = useState(Math.min(Math.max(initialPage, 1), totalPages));
  const [buttons, setButtons] = useState([])

  const pageChangeHandler = (value) => {
    var newPage = 0;
    if(value === '-') {
      newPage = page - 1;
    }
    else if(value === '+') {
      newPage = page + 1;
    }
    else if(value === '--') {
      newPage = page - dotsButtonStep;
    }
    else if(value === '++') {
      newPage = page + dotsButtonStep;
    }
    else {
      newPage = value;
    }
    newPage = Math.max(newPage, 1);
    newPage = Math.min(newPage, totalPages);
    setPage(newPage);
    onPageChanged(newPage);
  }

  useEffect(() => {
    const tempButtons = calcButtons(page, totalPages, minButtonsToDots);
    setButtons(tempButtons);
  }, [page, totalPages, minButtonsToDots]);

  return (
    <div className={`${styles.all} ${styles.container} ${className}`} style={style}>
      <div className={`${styles.subcontainer}`}>
        {(totalPages >= 3) &&
          <CustomPreButton data-testid="prebutton" onClick={() => pageChangeHandler('-')} />
        }

        {buttons.map((btn, index) => 
          btn === '-...' 
          ?
          <CustomDotsButton key={index} data-testid="dotsbutton_n" onClick={() => pageChangeHandler('--')} />
          :
          btn === '+...' 
          ?
          <CustomDotsButton key={index} data-testid="dotsbutton_p" onClick={() => pageChangeHandler('++')} />
          :
          page === Number(btn)
          ?
          <CustomSelectedButton key={index} data-testid="selectedbutton" text={btn} />
          :
          <CustomNumberButton key={index} data-testid="pagebutton" text={btn} onClick={() => pageChangeHandler(btn)} />
        )}

        {(totalPages >= 3) &&
          <CustomNextButton data-testid="nextbutton" onClick={() => pageChangeHandler('+')} />
        }
      </div>
    </div>
  );
}
