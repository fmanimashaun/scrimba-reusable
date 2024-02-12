const ButtonToggle = ({ children, toggleForm }) => {
	return (
		<button onClick={() => {
			toggleForm();
		}}
		>
			{children}
		</button>
	)
}

export default ButtonToggle;