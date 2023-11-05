import React from 'react'
import { useLoaderData } from 'react-router-dom'

const FoodDetails = () => {
    const food = useLoaderData()

  return (
    <div>FoodDetails</div>
  )
}

export default FoodDetails