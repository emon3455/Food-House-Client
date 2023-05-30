/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCarts = () => {
    const {user, loading} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const {  refetch, data: cart=[] } = useQuery({

        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res= await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;
        },
    })

    return [cart, refetch];
};

export default useCarts;