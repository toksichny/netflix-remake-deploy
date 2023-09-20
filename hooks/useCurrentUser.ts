import useSwr from 'swr'

import fatcher from '@/lib/fatcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/current', fatcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  }
};

export default useCurrentUser;