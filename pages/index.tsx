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

      <main className="mx-auto max-w-3xl px-4 pt-16">
        <div className="flex flex-row items-center mb-8">
          <div>
            <h1 className="w-full text-4xl font-bold">jaja generator</h1>
          </div>
          <div className="flex-1"></div>
          <div>
            <a
              className="text-md font-bold text-cyan-300 hover:text-cyan-500"
              href={`/api?times=${count}&prefix=${prefix}`}
            >
              api request jaja
            </a>
          </div>
        </div>

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
      <div className="max-w-[1200px] mx-auto w-full mt-10 p-6 break-all overflow-scroll text-5xl font-mono">
        {output}
      </div>
    </div>
  )
}

export default Home
