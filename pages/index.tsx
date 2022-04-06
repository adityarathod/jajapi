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

      <main className="mx-auto max-w-5xl px-4 pt-8">
        <h1 className="p-8 w-full text-5xl font-bold text-center">
          jaja generator
        </h1>
        <div className="flex flex-row">
          <div className="w-2/3 p-4 mr-8">
            <p className="text-2xl mb-8 font-semibold">
              Number of repetitions: {count}
            </p>
            <input
              type="range"
              name="repetitions"
              className="w-full"
              min="1"
              max="200"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
          </div>
          <div className="w-1/3 p-4">
            <p className="text-2xl mb-3 font-semibold">Prefix</p>
            <input
              type="text"
              placeholder="ja"
              className="text-2xl p-1 outline-none bg-transparent border-b-4 "
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
            />
          </div>
        </div>
      </main>
      <div className="mx-auto max-w-[2000px] bg-graeen-200 mt-10 p-6 break-all text-9xl">
        {output}
      </div>
    </div>
  )
}

export default Home
