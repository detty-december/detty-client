'use client'
import {useEffect, useState} from "react";
import AppBar from "../../../../components/AppBar";
import TopAppBar from "../../../../components/AppBar";
import { usePathname, useSearchParams } from 'next/navigation'


export default  function Home() {
    const pathname = usePathname()
    const parts = pathname.split('/');
    const url_keyword = parts.pop();
    const [data, setData] = useState();
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/');
            const data = await response.json();
            setData(data);
        } catch (error) {}
    };
    return (
        <div>
           <TopAppBar
               location={url_keyword}
           />
        </div>
    )
}
