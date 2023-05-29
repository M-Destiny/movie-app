import { useEffect, useState } from "react";


function Apihook(APIPATH) {
    const [Api, setApi] = useState([])
    useEffect(() => {
        fetch(APIPATH)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setApi(data)
            }
            )
    },[])
    return Api;
}
export default Apihook;