import { useState } from 'react'
import Counter from '../components/Counter'
import CharacterCounterInput from '../components/CharacterCounterInput'

const CounterPage = () => {
	let defaultMoods = ["Great", "Okay", "Bad"]
	return (
		<>
			<Counter />
			<br />
			<section>
				<h2>Mood Tracker</h2>
				<CharacterCounterInput text={"How was your day?"} defaults={defaultMoods} />
			</section>
		</>
	)
}

export default CounterPage