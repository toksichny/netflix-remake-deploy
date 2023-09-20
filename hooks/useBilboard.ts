import useSWR from "swr";
import fatcher from "@/lib/fatcher";

const useBilboard = () => {
    const {data, error, isLoading} = useSWR('/api/random', fatcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
}

export default useBilboard;