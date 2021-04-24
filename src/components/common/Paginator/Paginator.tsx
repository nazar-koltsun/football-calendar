import React, {useState} from 'react';
import styles from './Paginator.module.css';

type PropsType = {
    pageSize: number 
    currentPage: number 
    totalItemsCount: number 
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}
let Paginator: React.FC<PropsType> = ({pageSize, currentPage, totalItemsCount, onPageChanged, portionSize = 3}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionsCount = pagesCount / portionSize;
    let [portionNumber, setportionNumber] = useState(1);

    let portionLeftPosition = (portionNumber - 1) * portionSize + 1;
    let portionRightPosition = portionNumber * portionSize;

    return (
        <div className={styles.Pagination}>
            {
                portionNumber > 1 && 
                
                <button 
                    className = {styles.PaginationBtn  + ' ' + styles.PaginationLeftBtn}
                    onClick = {() => 
                        {
                            setportionNumber(portionNumber - 1);
                            onPageChanged((portionNumber - 1) * portionSize - (portionSize - 1));
                        }
                    }
                >
                {'<'}
                </button>
            }

            {
                pages.filter(page => 
                    page >= portionLeftPosition && page <= portionRightPosition
                ).map(page => {
                    return (
                        <button 
                            className = {currentPage === page 
                                ? styles.PaginationItem  + ' ' + styles.currentPage  
                                : styles.PaginationItem  }
                            key={page} 
                            onClick={() => onPageChanged(page)}>
                            {page}
                        </button>
                    )
                })
            }

            {
                portionNumber < portionsCount && 
                
                <button 
                    className = {styles.PaginationBtn  + ' ' + styles.PaginationRightBtn}
                    onClick = {() =>
                        {
                            setportionNumber(portionNumber + 1);
                            onPageChanged((portionNumber + 1) * portionSize - (portionSize - 1));
                        }
                    }
                >
                {'>'}
                </button>
            }
        </div>
    ) 
}

export default Paginator;