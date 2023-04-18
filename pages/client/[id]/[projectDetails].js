import { useRouter } from "next/router"

function ProjectDetails(){

    const router = useRouter();

    console.log(router.query)
    return(
      <div>This is Client Projects Detail Page</div>
    )
  }
  
  export default ProjectDetails