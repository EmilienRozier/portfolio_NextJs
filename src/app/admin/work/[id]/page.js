export default async function Work({ params }) {
    let res = await fetch(`http://localhost:3000/api/works/${params.id}`);
    res = await res.json();
    const works = res.works;
    return (
        <>
            title : {works.title}
        </>
    )
}
