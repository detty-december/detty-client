'use client';
import {useEffect, useState} from 'react';
import AppBar from '../../../../components/AppBar';
import TopAppBar from '../../../../components/AppBar';
import { usePathname, useSearchParams } from 'next/navigation';
import {v4 as uuidv4} from 'uuid';


export default  function Home() {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const url_keyword = parts.pop();
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const userId = '01a45099-e08d-49a4-a06c-315f0bf54c63';
      const userResponse = await fetch('http://localhost:8000/api/v1/business/users/',{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        credentials: 'include',
        body: JSON.stringify({'userId': userId})
      }).then((data)=>{console.log(data);});
      localStorage.setItem('userId', userId);
      const ownerId = localStorage.getItem('userId');
      const eventsResponse = await fetch(`http://localhost:8000/api/v1/business/events?ownerid=${ownerId}`,{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        credentials: 'include',
      });
      setData(await eventsResponse.json());
    }
    catch (error) {
      console.error(error);
    }
  };
  fetchData().then(()=>{console.log(data);});
  return (
    <div>
      <TopAppBar
        location={url_keyword}
      />
    </div>
  );
}
