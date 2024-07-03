import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserPage() {
    const {userName} = useParams();
  return (
    <div>UserPage {userName}</div>
  )
}
