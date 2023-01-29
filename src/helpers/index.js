export const fetcher = async (API) => {
    console.log()
    try {
        const res = await fetch(`http://localhost:3001/${API}`);
        return await res.json();
    } catch (err) {
        throw new Error(err);
    }
}
