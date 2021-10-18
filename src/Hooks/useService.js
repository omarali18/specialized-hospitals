import { useEffect, useState } from "react";

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("fakeServices.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])
    console.log(services);
    return {
        services
    }
}

export default useService;