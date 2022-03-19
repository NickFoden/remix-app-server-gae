import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <nav>
        <Link to="/swapi-people">Swapi People</Link>
      </nav>
      <h1>Welcome to Remix</h1>
    </div>
  );
}
