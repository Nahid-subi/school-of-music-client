import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const usePayment = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const isEnabled = !loading && Boolean(user?.email);

    const { isLoading, refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: isEnabled,
        queryFn: async () => {
            const res = await axiosSecure(`/payment/${user?.email}`);
            return res.data;
        },
    });

    return [classes, isLoading, refetch];
}
export default usePayment;
