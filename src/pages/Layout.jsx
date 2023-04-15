import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="container">
            <div className="top">
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
                <main className="flex">
                    <Outlet />
                </main>
            </div>
            <footer className="flex">
                <h3>Hi this is my footer</h3>
                <div className="flex">
                    <Link to='/'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </footer>
        </div>
    )
}

export default Layout