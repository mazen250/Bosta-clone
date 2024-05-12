import React from 'react'
import { Link } from 'react-router-dom'
function Index() {
  return (
    <section className="bg-white">
    <div className="mx-auto px-4 py-8 lg:px-6 lg:py-16">
      <div className="mx-auto text-center">
        <h1 className="dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight text-red-600 lg:text-9xl">500</h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Internal Server Error.</p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry something went wrong.</p>
        <Link to="/" className="text-red-600 hover:text-red-800 bg-red-100 p-2 rounded-md mt-4">Go back to home</Link>
      </div>
    </div>
  </section>
  )
}

export default Index