import {sculptureList} from '@/data/article';
import { useEffect, useState } from 'react';

export default function Gallery(){
    const [index, setIndex] = useState(0);
    const [disabledUp, setDisabledUp] = useState(false);
    const [disabledDown, setDisabledDown] = useState(false);

    useEffect(() => {
        setDisabledUp(index === sculptureList.length - 1);
        setDisabledDown(index === 0);
    }, [index]);

    function handleClickUp(){
        setIndex(index +1);
    }

    function handleClickDown() {
        setIndex(index - 1);
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button
                onClick={handleClickDown}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"
                disabled={disabledDown}
            > Artikel Sebelumnya
            </button>
            <button 
                onClick={handleClickUp}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"
                disabled={disabledUp}
                > Artikel Selanjutnya
            </button>
            <h2><i>{sculpture.name}</i> oleh {sculpture.artist}</h2>
            <h3>({index +1} dari {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    )
}