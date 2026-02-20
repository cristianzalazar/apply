import { getPositions } from "../api/positions.api";
import { useEffect, useState } from "react";

export function usePositions() {
    const [positions, setPositions] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPositions().then(setPositions).catch(setError).finally(() => setLoading(false));
    }, []);

    return { positions, loading, error };
}