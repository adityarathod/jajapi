import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import generator from '../jaja-engine'

const Home: NextPage = () => {
  const [count, setCount] = useState<number>(2)
  const [prefix, setPrefix] = useState<string>('ja')
  const [output, setOutput] = useState<string>('')

  useEffect(() => {
    setOutput(generator(prefix, count))
  }, [prefix, count])

  return (
    <div>
      <Head>
        <title>jaja generator</title>
      </Head>

      <main className="mx-auto max-w-3xl px-4 pt-8">
        <h1 className="p-8 w-full text-4xl font-bold text-center">
          jaja generator
        </h1>
        <div className="py-1">
          <p className="text-lg mb-2 font-semibold">
            Number of repetitions: {count}
          </p>
          <input
            type="range"
            name="repetitions"
            className="w-full"
            min="1"
            max="500"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
        </div>
        <div className="py-1">
          <p className="text-lg mb-2 font-semibold">Prefix</p>
          <input
            type="text"
            placeholder="ja"
            className="text-lg p-1 outline-none bg-transparent border-b"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
          />
        </div>
      </main>
      <div className="w-full mt-10 py-6 px-10 break-all overflow-scroll text-5xl font-mono">
        {output}
      </div>
    </div>
  )
}

export default Home
