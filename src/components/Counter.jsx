import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	const increase = () => {
		setCount(count + 1)
	}

	const decrease = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}
	return (
		<section>
			<h2>Counter: The Most Novel Example I Could Come Up With</h2>
			<div className="counter">
				<button onClick={decrease}>-</button>
				<input
					type="number"
					aria-label="count"
					value={count}
					onChange={(e) => { setCount(parseInt(e.target.value)) }}
				/>
				<button onClick={increase}>+</button>
			</div>
		</section>
	)
}

export default Counter