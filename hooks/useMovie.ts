import useSwr from 'swr'
import fatcher from '@/lib/fatcher';

const useMovie = (id?: string) => {
  const { data, error, isLoading } = useSwr(id ? `/api/movies/${id}` : null, fatcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useMovie;