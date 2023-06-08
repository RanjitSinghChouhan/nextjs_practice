import useSWR from "swr";

async function fetchData() {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
}

function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetchData);
  if (error) return "Some error has occured";
  if (!data) return "Loading";
  return (
    <div>
      <h1>About User</h1>
      <h2>Posts: {data.posts}</h2>
      <h2>Likes: {data.likes}</h2>
      <h2>Following: {data.following}</h2>
      <h2>Followers: {data.followers}</h2>
    </div>
  );
}

export default DashboardSWR;
