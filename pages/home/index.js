import { useState, useEffect } from 'react'

import HeadDevter from '../../components/HeadDevter'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import Devit from '../../components/Devit'

const api = 'http://localhost:3000/api'

const useFetchData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const fetchData = async endpoint => {
        setLoading(true)
        const res = await fetch(`${api}${endpoint}`)
        const data = await res.json()
        try {
            setLoading(false)
            setData(data)
        } catch (err) {
            setLoading(false)
            console.error(err)
            setError(err)
        }
    }
    return { fetchData, data, loading, error }
}

const Home = () => {
    const { fetchData, data, loading, error } = useFetchData()
    useEffect(() => {
        fetchData('/statuses/home_timeline')
    }, [])
    return(
        <>
			<HeadDevter>
				<title>Home – Devter</title>
			</HeadDevter>
			<div className="wrapper">
                <Header currentPage="Home" />
                <NavBar currentPage="Home" />
                <div className="home">
                    {data.map(devit => (
                        <Devit
                            key={devit.id}
                            name={devit.name}
                            username={devit.username}
                            avatar={devit.avatar}
                            message={devit.message}
                        />
                    ))}
                </div>
			</div>
		</>
    )
}

export default Home