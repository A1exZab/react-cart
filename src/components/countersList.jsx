import React from 'react'
import { useState } from 'react'
import Counter from './Counter'
export default function CountersList() {
	const initialState = [
		{ id: 0, value: 0, name: 'Ненужная вещь' },
		{ id: 1, value: 0, name: 'Ложка' },
		{ id: 2, value: 0, name: 'Вилка' },
		{ id: 3, value: 0, name: 'Тарелка' },
		{ id: 4, value: 0, name: 'Набор минималиста' }
	]
	const [counters, setCounters] = useState(initialState)

	const handleDelete = (id) => {
		setCounters(counters.filter((item) => item.id !== id))
	}

	const handleIncrement = (id) => {
		const newCounters = counters.map((item) => {
			return item.id === id ? { ...item, value: item.value + 1 } : item
		})

		setCounters(newCounters)
	}
	const handleDecrement = (id) => {
		const newCounters = counters.map((item) => {
			return item.id === id ? { ...item, value: item.value - 1 } : item
		})

		setCounters(newCounters)
	}

	const handleReset = () => {
		setCounters(initialState)
	}

	return (
		<div>
			{counters.map((count) => (
				<Counter
					key={count.id}
					onDelete={handleDelete}
					onPlus={handleIncrement}
					onMinus={handleDecrement}
					{...count}
				/>
			))}
			<button className='btn btn-danger btn-sm m-1' onClick={handleReset}>
				Раньше было лучше
			</button>
		</div>
	)
}
