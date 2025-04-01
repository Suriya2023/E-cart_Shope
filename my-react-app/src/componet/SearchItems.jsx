import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Page from './Page'

function SearchItems() {
    const { Suraj } = useParams("")
    const [Data, setItem] = useState([]);

    useEffect(() => {
        const Data = () => {
            const data = items.filter((e) => e.title.toLowerCase().includes(Suraj.toLowerCase()));
            setItem(data);
        }
        Data();
    }, [Suraj])

    return (
        <div>
            <Page items={Data} />
        </div>
    )
}

export default SearchItems

