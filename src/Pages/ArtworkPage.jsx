import React from 'react'
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery"
import Last from "../components/Last"

export default function ArtworkPage() {
  return (
    <div>
      <Navbar/>
      <Gallery/>
      <Last/>
    </div>
  )
}
