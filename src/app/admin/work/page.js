import Link from "next/link";

const getWorks = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/works", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};

export default async function AdminPanel() {

    const { works } = await getWorks();

    return (
        <>
            Admin panel
            {works.map((w) => (
                <div key={w._id}>
                    <h2>{w.title}</h2>
                    <Link href={`/admin/work/${w._id}`}>modifier / supprimer</Link>
                </div>
            ))}
        </>
    )
}