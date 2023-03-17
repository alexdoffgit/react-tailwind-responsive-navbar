import Navbar from "./Navbar";

function Logo() {
  return <div>Logo</div>;
}

function NavItems() {
  return (
    <>
      <a href="/">Home</a>
      <a href="/login">Sign In</a>
      <a href="/register">Sign Up</a>
    </>
  );
}

function Hero() {
  return (
    <div className="bg-green-500 flex justify-center items-center">
      <div className="flex flex-col my-4">
        <h1 className="text-white text-2xl text-center">Logo</h1>
        <p className="text-white text-center">Bottom text here</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="h-screen">
      <div className="flex flex-col">
        <Navbar logo={<Logo />} navitems={<NavItems />} />
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
