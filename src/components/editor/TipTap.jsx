'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'

// Tiptap component
const Tiptap = ({ id }) => {

  const [editMode, setEditMode] = useState(false)

  const { data: session, status } = useSession()

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: {"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Hello World! 🌎️"}]}]},
    editable: false
  })

  const editable = () => {
    if(editor.isEditable === false) {
      editor.setEditable(true)
      console.log(JSON.stringify(editor.getJSON()))
    } else {
      editor.setEditable(false)
    }
  }

  return (
    <>
      {status === "authenticated" && (
        <button onClick={editable}>editor mode</button>
      )}

      <EditorContent editor={editor} />
      {id}
      {/* Additional UI components like FloatingMenu, BubbleMenu can be added here */}
    </>
  )
}

export default Tiptap