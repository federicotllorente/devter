import GitHubLogo from './Icons/GitHubLogo'

const ButtonDark = ({ children, onClick, GitHub }) => (
	<button className="button--dark" onClick={onClick}>
		{GitHub ? (
			<>
				<GitHubLogo fill="#f1f1f1" width="30" height="30" />
				{children}
			</>
		) : (children)
		}
	</button>
)

const ButtonDarkAlt = ({ children, onClick, GitHub }) => (
	<button className="button--dark_alt" onClick={onClick}>
		{GitHub ? (
			<>
				<GitHubLogo fill="#f1f1f1" width="30" height="30" />
				{children}
			</>
		) : (children)
		}
	</button>
)

export {
	ButtonDark,
	ButtonDarkAlt
}