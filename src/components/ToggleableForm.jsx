import { useRef, createElement, useState } from 'react';
import ButtonToggle from './ButtonToggle';
import FormToggle from './FormToggle';

function ToggleableForm({ options }) {
  const [currentForm, setCurrentForm] = useState(0);
  let focusRef = useRef(null);

  return (
    <>
      {options.map((el, index) => {
        return (
          <ButtonToggle key={`button${index}`} toggleForm={() => {setCurrentForm(index)}}>
            {el.name}
          </ButtonToggle>
        )
      })}
      <FormToggle currentIndex={currentForm}>
        {options.map((el, index) => {
          return <div key={`form${index}`}>
            {createElement(el.component, { ref: focusRef})}
          </div>
        })}
      </FormToggle>
    </>
  )
}

export default ToggleableForm