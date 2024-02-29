import Tiptap from "@/components/editor/TipTap"

export default function WorkPage({ params }) {

    return (
        <Tiptap id={params.id} />
    )
}