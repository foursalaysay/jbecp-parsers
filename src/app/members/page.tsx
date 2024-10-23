'use client'

import React, { useEffect,useState } from 'react'

interface Member {
    name : string;
    email : string;
    bio : string;
    school : string;
    memberDate : string;
}

export default function MemberPage() {

    const [data, setData] = useState<Member []>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch('YOUR_API_ENDPOINT', {
              method: 'GET', // or 'POST', depending on your needs
              headers: {
                'Content-Type': 'application/json', // adjust as necessary
              },
            });
    
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
    
            const result = await res.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Call the async function
      }, []); // Empty dependency array to run only once on mount
    

  return (
    <div>
        {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
