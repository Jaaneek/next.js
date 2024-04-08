'use client'

import Link from 'next/link'
import { action } from './actions'
import { useContext } from 'react'
import { DataContext } from './context'

export default function Page() {
  const { setData } = useContext(DataContext)
  const handleClick = async () => {
    await new Promise((res) => setTimeout(res, 1000))

    const result = await action()

    setData(result)
  }

  return (
    <>
      <div>
        <Link href="/delayed-action/other">Navigate to Other Page</Link>
      </div>
      <div>
        <button onClick={handleClick} id="run-action">
          Run Action
        </button>
      </div>
    </>
  )
}
