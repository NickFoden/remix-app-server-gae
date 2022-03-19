import { Link, useLoaderData } from "remix";

export async function loader() {
  const data = await fetch("https://swapi.dev/api/people")
    .then((R) => R.json())
    .catch((e) => {
      console.error(e);
      return e;
    });
  //@ts-expect-error
  return data?.results || [{ name: "fail", error: e }];
}

export default function Dashboard() {
  const data = useLoaderData<{ name: string }[]>();
  console.dir(data);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Fetched Swapi people in loader</h1>
      <ul>
        {data.map((d) => (
          <li key={d.name}>{d.name}</li>
        ))}
      </ul>
    </div>
  );
}
