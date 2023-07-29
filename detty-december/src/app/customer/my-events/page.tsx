'use client';
import { useEffect, useState } from 'react';
import TopAppBar from '../../../../components/AppBar';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const url_keyword = parts.pop();
  const [data, setData] = useState();
  const [userId, setUserId] = useState<string | null>(null); // Explicitly set the type to 'string | null'

  useEffect(() => {
    let localUserId = localStorage.getItem('userId');
    if (localUserId !== null){
      setUserId(localUserId);
    } else {
      const uuid = uuidv4();
      localStorage.setItem('userId', uuid);
    }
  }, []);

  return (
    <div>
      <TopAppBar
        location={url_keyword}
      />
    </div>
  );
}
