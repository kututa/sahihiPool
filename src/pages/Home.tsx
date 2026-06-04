import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import '../App.css'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Helmet>
        <title>Sahihi Pools — Home</title>
        <meta name="description" content="Sahihi Pools — professional pool construction, repair and maintenance across Kenya." />
        <meta property="og:title" content="Sahihi Pools — Home" />
        <meta property="og:description" content="Professional pool construction and maintenance — domestic & commercial." />
        <meta property="og:image" content="/images/hero1.jpg" />
        <link rel="canonical" href="https://sahihipools.example/" />
      </Helmet>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}
