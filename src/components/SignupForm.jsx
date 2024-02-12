import { useState, forwardRef, useEffect } from 'react'

const SignupForm = forwardRef((props, ref ) => {
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		ref.current.focus();
	}, [])

	return (
		<div>
			<div>
				<input type="email" ref={ref} value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
			</div>
			<div>
				<input type="text" value={username} placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
			</div>
			<div>
				<input type="password" value={password} placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
			</div>
			<button>Submit</button>
		</div>
	)
})

export default SignupForm