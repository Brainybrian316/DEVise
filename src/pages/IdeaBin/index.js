
import IdeaClick from './IdeaClick'
import IdeaBin from './IdeaBin'
import {useState} from 'react'



export default function DevProjects() {

  const [ideaBinOpen, setIdeaBinOpen] = useState(true)
  const [devId, setDevId] = useState('')
  
  
  function openIdeaClick(id){
    setIdeaBinOpen(!ideaBinOpen)
    setDevId(id)
    console.log(devId)
  }


function Page(){
  if(ideaBinOpen) {
    return (
      <IdeaBin 
      openIdeaClick={openIdeaClick}/>)
  } else {
    return <IdeaClick
    devId={devId}
    closeIdeaBin={openIdeaClick}
    />
  }
}

  return (
   Page()
  );
}
