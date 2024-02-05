import React, { useState } from "react";

// Save in Emoji.jsx
function EmojiChanger() {
  const [emoji, setEmoji] = useState('happy');

  return (
    <div className='emojiChanger componentBox'>
      Current emoji: {emoji}
      <button onClick={() => setEmoji('cool')}> Set cool emoji</button>
      <button onClick={() => setEmoji('sick')}> set sick emoji </button>
    </div>
  );
}

  

export default EmojiChanger;
