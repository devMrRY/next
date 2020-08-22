  import {useRouter} from "next/router"

  export default function Person(){
    const router=useRouter()
  return <h3>{router.query.vehicle}'s {router.query.person}</h3>
  }