import Navbar from "./components/Navbar";
import Container from "./components/Container";
// import FilterBox from "./components/FilterBox/FilterBox";
import ShopFrontApp from "./components/ShopFront/ShopFrontApp";

function App() {
  return (
    <>
      <Navbar />
      <ShopFrontApp />
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-4"></div>
      </Container>
    </>
  );
}

export default App;
