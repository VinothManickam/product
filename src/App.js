import './App.css'; // Import the existing styles
import ProductList from './Component/ProductList'; // Import the ProductList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Product Showcase</h1>
      </header>
      <main>
        <ProductList /> {/* Render the ProductList component here */}
      </main>
    </div>
  );
}

export default App;
