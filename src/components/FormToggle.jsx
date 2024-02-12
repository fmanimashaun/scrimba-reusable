const FormToggle = ({ children, currentIndex }) => {
	if (Array.isArray(children)) {
		return <div>{children[currentIndex]}</div>
	}
	return null
}

export default FormToggle;