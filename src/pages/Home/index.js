import { useGetAllUserProjectsQuery } from "../../graphql/hooks";

export default function Home() {

 const { loading, error, userProjects } = useGetAllUserProjectsQuery();


  if (loading) return <p>...Loading</p>
  if (error) return <p>Something went wrong</p>

  return (
    <>

      <h1>Home</h1>
      <ul>
        {userProjects.map(userProject => (
          <li key={userProject._id}>
            <h2>{userProject.title}</h2>
            <p>{userProject.description}</p>
          </li>
        ))}
      </ul>

    

   </>
    
  )
}
