import { Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <h1>ALG!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link style={{margin: '0 2rem'}} to="BubbleSort">1. Bubble Sort</Link>
        <Link style={{margin: '0 2rem'}} to="quickSort">1. Quick Sort</Link>
      </nav>
      <h1>Others</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link style={{margin: '0 2rem'}} to="isArray">isArray</Link>
      </nav>
    </div>
  );
}
