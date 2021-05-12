export default function Timeline({ username }) {
	return (
		<h1>This is the timeline of {username}</h1>
	)
}

Timeline.getInitialProps = () => {
	const location = 'http://localhost:3000'
	return fetch(`${location}/api/hello`)
		.then(res => res.json())
		.then(res => {
			const { username } = res
			return { username }
		})
}