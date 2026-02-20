import { getCandidate } from "../api/candidates.api";
import { useEffect, useState } from "react";

export function useCandidate() {
    const [candidate, setCandidate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCandidate().then(setCandidate).catch(setError).finally(() => setLoading(false));
    }, []);

    return { candidate, loading, error };
}
