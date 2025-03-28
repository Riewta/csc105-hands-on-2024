import Navbar from "../components/Navbar";

function HomePage() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
            </div>
        </div>
    );
}

export default HomePage;