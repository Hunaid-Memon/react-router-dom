import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/hunaid-memon')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Name: {data.name}
    <img className='rounded-full p-4' src={data.avatar_url} alt="Git picture" width={300} />
    <p>{data.bio && data.bio}</p>
    </div>
  )
}

export default Github;

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }