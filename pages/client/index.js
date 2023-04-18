import { useRouter } from "next/router"

function ClientsPage(){
    const router = useRouter();

    console.log(router.query)
    return(
      <div>This is Client Main Page</div>
    )
  }
  
  export default ClientsPage