import useSwr from 'swr'
import fatcher from '@/lib/fatcher';

const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/favorites', fatcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useFavorites;