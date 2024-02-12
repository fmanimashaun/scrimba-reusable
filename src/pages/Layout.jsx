import { Outlet, Link } from "react-router-dom"

const Layout = () => {
	return (
		<>
			<header>
				<nav>
					<ul>
					<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/counter">Counter</Link>
						</li>
						<li>
							<Link to="/toggle-form">Toggleable form</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default Layout