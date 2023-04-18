import { useRouter } from "next/router"

function ClientProjectName(){
    const router = useRouter();

    console.log(router.query)
    return(
      <div>This is Client Projects Page</div>
    )
  }
  
  export default ClientProjectName