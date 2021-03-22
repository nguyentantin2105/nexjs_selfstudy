import {useRouter} from 'next/router'
import Link from 'next/link'

export default function UserPage(){
    const router = useRouter();

    console.log("router", router.query.id);

    function handleOnClick(){
        router.push('/login')
    }
    return(
        <>
            <h1>Admin - User Page {router.query.id}</h1>
            <Link href="/login"><a>Go to homepate by Link tag</a></Link>
            <button onClick={handleOnClick}>Go to homepage</button>
        </>
    )
}