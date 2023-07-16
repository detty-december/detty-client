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
            let requestData = {"userId" : localStorage.getItem('usedId')}
            const response = await fetch('http://localhost:8000/api/v1/getEvents/', {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                },
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(requestData),
            });
            setData(await response.json());
        } catch (error) {
            console.error(error)
        }
    };
    fetchData().then(()=>{});
    return (
        <div>
           <TopAppBar
               location={url_keyword}
           />
        </div>
    )
}
