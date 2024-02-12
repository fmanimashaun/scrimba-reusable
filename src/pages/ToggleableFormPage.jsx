import React from 'react';
import ToggleableForm from '../components/ToggleableForm';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function ToggleableFormPage() {
  let data = [
    { name: 'Log in', component: LoginForm },
    { name: 'Sign up', component: SignupForm }
  ]
  return (
    <div>
         <h2>Log in / Sign up</h2>
         <ToggleableForm options={data} />
    </div>
  )
}

export default ToggleableFormPage