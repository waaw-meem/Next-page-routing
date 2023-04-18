import { useRouter } from "next/router"


function ExperienceSection(){
    const router = useRouter();

    console.log(router.query)

    return(
      <div>This is Experience Section Page</div>
    )

  }
  
  export default ExperienceSection