import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import search from './components/search-bar/search'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({});
  const [IsLoading, setIsLoading] = useState(true);
  return (
    <div className='flex flex-col gap-5 h-screen w-full justify-center items-center bg-dark-bg'>
      <div>
        <search setIsLoading={setIsLoading} setData={setData} />
      </div>
      <div>
        <preview
          avatarUrl={data.avatar_url}
          followers={data.followers}
          following={data.following}
          location={data.location}
          login={data.login}
          user={data.user}
          public_repos={data.public_repos}
          twitter={data.twitter}
          isLoading={IsLoading}
          data={data.created_at?.split("T")[0]}
        />
      </div>
    </div>
  )
}

export default App
