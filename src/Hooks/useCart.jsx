import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useCart = () => {
    const { user } = useAuth()
    
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, refetch ,data: cart = [] } = useQuery({
        queryKey: ['carts', user?.emil],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,
        //     {headers:{
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },
    })

    return [cart, isLoading, refetch]

}
export default useCart  