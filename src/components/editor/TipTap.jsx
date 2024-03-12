'use client'

import styles from "./tiptap.module.css"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const Tiptap = ({ id }) => {

  const [content, setContent] = useState()
  const [newContent, setNewContent] = useState()
  const [title, setTitle] = useState("")

  const { data: session, status } = useSession()

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    editable: false,
  })

  const editable = () => {
    if (editor.isEditable === false) {
      editor.setEditable(true)
      console.log(JSON.stringify(editor.getJSON()))
    } else {
      editor.setEditable(false)
    }
  }

  useEffect(() => {
    async function getContent() {
      const res = await fetch(`http://localhost/api/works/${id}`, {mode: 'no-cors'});
      const { works } = await res.json();

      setTitle(works.title)

      setContent(works.content)
      // const content = JSON.parse(works.content)
      console.log(content)
      if (editor && editor.commands) {
        editor.commands.setContent(JSON.parse(works.content));
      }
    }

    getContent()
  }, [id, content])

  const UpdateContent = () => {
    console.log('tes')
    const json = editor.getJSON()
    setNewContent(JSON.stringify(json))
  }

  useEffect(() => {

    async function saveContent() {

      const res = await fetch(`http://localhost/api/works/${id}`, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newContent }),
      });
    }

    saveContent()
    console.log(newContent)
  }, [newContent])

  return (
    <div className={styles.tiptap}>
      <h1>{title}</h1>
      <EditorContent editor={editor}/>
      {status === "authenticated" && (
        <div className={styles.edit}>
          <button onClick={editable}>editor mode</button>
          <button onClick={UpdateContent}>save</button>
        </div>
      )}
      {/* Additional UI components like FloatingMenu, BubbleMenu can be added here */}
    </div>
  )
}

export default Tiptap