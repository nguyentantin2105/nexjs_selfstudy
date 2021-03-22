import {useRouter} from 'next/router'

export default function AdminPage(){
    const router = useRouter();

    console.log("router", router);

    return(
        <h1>This is AdminPage</h1>
    )
}