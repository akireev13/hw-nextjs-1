"use client";

import Button from "./Button/button";
import { useRouter } from "next/navigation";

const NavBar = () => {

    const router = useRouter();

    return ( 
        <div className="bg-secondary text-primary border-b flex justify-end gap-x-3 items-center p-4">
            <div>
                <Button onClick={() => router.push('/1')}  >Page 1</Button>
            </div>
            <div>
                <Button onClick={() => router.push('/2')}  >Page 2</Button>
            </div>
            <div>
                <Button onClick={() => router.push('/3')}  >Page 3</Button>
            </div>
            <div>
                <Button onClick={() => router.push('/')}>Home</Button>
            </div>
        </div>
     );
}
 
export default NavBar;