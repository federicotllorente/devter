import HeadDevter from '../../components/HeadDevter'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'

const Home = () => {
    return(
        <>
			<HeadDevter>
				<title>Home – Devter</title>
			</HeadDevter>
			<div className="wrapper">
                <Header currentPage="Home" />
                <NavBar currentPage="Home" />
                <div className="home">
                    <h1>This is a title</h1>
                </div>
			</div>
		</>
    )
}

export default Home