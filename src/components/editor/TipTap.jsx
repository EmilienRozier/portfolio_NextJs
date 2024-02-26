'use client'

import { EditorProvider, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// Tiptap component
const Tiptap = ({id}) => {

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🌎️</p>',
    editable: true
  })

  return (
    <>
      <EditorContent editor={editor} />
      {id}
      {/* Additional UI components like FloatingMenu, BubbleMenu can be added here */}
    </>
  )
}

export default Tiptap