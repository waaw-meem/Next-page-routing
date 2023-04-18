import { useRouter } from "next/router"

function blogListPage(){
  const router = useRouter();

  console.log(router.query)
    return(
      <div>This is Blog List Page</div>
    )
  }
  
  export default blogListPage