import { useQuery } from "@tanstack/react-query"
import { formatHttpUrl } from "../util/formatUrl";

async function getTrack(id: number) {
    const res = await fetch("http://localhost:3000/tracks/" + id)
    return await res.json()
}

function TrackDetailsPage() {

    const id: number = 1;
    const idKey: string = "track" + id;

    // const { isPending, error, data } = useQuery({
    //     queryKey: [idKey],
    //     queryFn: () => getTrack(id),
    // })

    // if (isPending) return <div>Track details page: loading...</div>
    // if (error instanceof Error) return <div>Track details page: an error has occurred: {error.message}</div>
    // if (!data || data.length === 0) return <div>Track details page: track not found.</div>

    const a = "purpexe";
    const t = "deep";
    const img = formatHttpUrl("example.com");

    return (
        <div>
            <div>
                <img src={img} alt={("cover of" + a + " - " + t)} />
                <h1>title:{t}</h1>
                <h2>srtistsString:{a}</h2>
            </div>
            <div className="edit-track">
                <input type="text" />
            </div>
        </div>
    )
}

export default TrackDetailsPage

