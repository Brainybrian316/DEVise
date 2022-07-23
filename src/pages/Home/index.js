import { useGetDevProjectsQuery } from "../../graphql/hooks";


export default function Home() {

  
  const { loading, error, devProjects } = useGetDevProjectsQuery();

  if (loading) return <p>...Loading</p>
  if (error) return <p>Something went wrong</p>

  return (
    <>

      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <p>Here are some projects that we have created:</p>
      <ul>
      {devProjects.map(Project => (
          <li key={Project._id}>
            <h2>{Project.title}</h2>
            <p>{Project.description}</p>
          </li>
        ))}
      </ul>
   </>
  )
}