

import UserClick from './UserClick'
import UserProject from './UserProject'
import {useState} from 'react'



export default function UserProjects() {

  const [userProjectsOpen, setUserProjectsOpen] = useState(true)
  const [projectId, setprojectId] = useState('')
  
  
  function openUserClick(id){
    setUserProjectsOpen(!userProjectsOpen)
    setprojectId(id)

  }


function Page(){
  if(userProjectsOpen) {
    return (
      <UserProject
      openUserClick={openUserClick}/>)
  } else {
    return <UserClick
    projectId={projectId}
    closeUserProject={openUserClick}
    />
  }
}

  return (
   Page()
  );
}
