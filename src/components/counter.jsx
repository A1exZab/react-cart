import React from 'react'

export default function Counter({ value, id, name, onDelete, onPlus, onMinus }) {
	return (
		<div>
			<span>{name}</span>
			<span className={`badge ${value !== 0 ? 'bg-primary' : 'bg-warning'} m-1`}>{value}</span>
			<button onClick={() => onPlus(id)} className='btn btn-primary btn-sm m-1'>
				+
			</button>
			<button onClick={() => onMinus(id)} className='btn btn-primary btn-sm m-1'>
				-
			</button>
			<button onClick={() => onDelete(id)} className='btn btn-danger btn-sm m-1'>
				Удалить
			</button>
		</div>
	)
}
