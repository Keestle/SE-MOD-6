import React from 'react'
import EmojiChanger from './context/EmojiV2'
import { EmojiProvider } from './context/EmojiContext'

function App() {
  return (
  <div>
  <EmojiProvider>
    <EmojiChanger />
  </EmojiProvider>
  </div>
  )
}

export default App
