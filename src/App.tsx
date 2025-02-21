import { useEffect, useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from '@/pages/NotFound'
import { Button } from '@mui/material'
import ThemeToggleButton from '@/components/ThemeToggleButton'
import firebase from './services/firebase'

const Vite = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		console.debug('firebase.config', firebase.options)
	}, [])

	return (
		<>
			<div>
				<a href='https://vite.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<Button variant='contained' onClick={() => setCount(count + 1)}>
					Count is {count}
				</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
			<ThemeToggleButton />
		</>
	)
}

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Vite />} />
			<Route path='/login' />
			<Route path='/register' />
			<Route path='/get-started' />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
