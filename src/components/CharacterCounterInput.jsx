import React from 'react'
import PropTypes from 'prop-types'

import { useState } from 'react';

const CharacterCounterInput = ({ text, defaults }) => {
  const [msg, setMsg] = useState('');
  const [charLength, setCharLength] = useState(msg.length);
  const maxLength = 280;

  const addWord = (str) => {
    if (msg === '') {
      setMsg(str)
    }
    const characters = `${msg} ${str}`
    setMsg(characters);
    setCharLength(characters.length)
  }
  return (
    <div className={charLength > maxLength ? 'counterInput tooLong' : 'counterInput'}>
      <div>
        {defaults.map((b) => {
          return <button key={b} onClick={() => addWord(b)}>{b}</button>
        })}
      </div>
      <textarea
        placeholder={text}
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value)
          setCharLength(e.target.value.length)
        }}
      />
      <div>{charLength}/{maxLength}</div>
    </div>
  )
}

CharacterCounterInput.propTypes = {
  text: PropTypes.string.isRequired,
  defaults: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CharacterCounterInput