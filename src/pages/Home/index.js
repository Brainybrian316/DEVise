import { useGetUserProjectsQuery, } from "../../graphql/hooks"


export default function Home() {

  const { loading, error, userProject } = useGetUserProjectsQuery('62db3d006c3c25609f5a9ff6');


  if (loading) return <p>...Loading</p>
  if (error) return <p>Something went wrong</p>

  return (
    <>

      <h1>Home</h1>
      <p>{userProject.title}</p>
      <p>{userProject.description}</p>
      <p>{userProject.summary}</p>
      <p>{userProject.contributors}</p>
      <p>{userProject.mainImage}</p>
      <p>{userProject.images}</p>
      <p>{userProject.videos}</p>
      <p>{userProject.tags}</p>
      <p>{userProject.rating}</p>
      <p>{userProject.numReviews}</p>
      <p>{userProject.price}</p>
      


   </>
    
  )
}
