import { Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="BubbleSort">BubbleSort</Link>
        <Link to="isArray">isArray</Link>
      </nav>
    </div>
  );
}
