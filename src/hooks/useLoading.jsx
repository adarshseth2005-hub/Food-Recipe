import { useState } from "react"
import { renderToStaticMarkup } from "react-dom/server";

function useLoading() {
    const [loading, setLoading] = useState(true);

    const startLoading= ()=> setLoading(true);
    const stopLoading= ()=> setLoading(false);

    return (
        loading,
        startLoading,
        stopLoading
    );
}

export default useLoading