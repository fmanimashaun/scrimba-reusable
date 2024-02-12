import { useState, forwardRef, useEffect } from 'react'

const LoginForm = forwardRef((props, ref) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		ref.current.focus();
	}, [])

	return (
		<div>
			<div>
				<input type="text" ref={ref} value={username} placeholder="Username"  onChange={(e) => {setUsername(e.target.value)}} />
			</div>
			<div>
				<input type="password" value={password} placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
			</div>
			<button>Submit</button>
		</div>
	)
})

export default LoginForm