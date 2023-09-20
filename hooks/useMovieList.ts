import useSWR from 'swr';
import fatcher from '@/lib/fatcher';

const useMovieList = () => {
    const {data,error, isLoading} = useSWR('api/movies',fatcher,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return{
        data,
        error,
        isLoading
    }
};

export default useMovieList;