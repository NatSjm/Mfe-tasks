import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import React from "react";


const EditorLazy = React.lazy(() => import("editor/Editor"));

const Editor = () => {
  const navigate = useNavigate();
  return <EditorLazy
      onNavigate={(to: string) =>
          navigate({
            to,
          })
      }
  />
}

export const Route = createLazyFileRoute('/editor')({
  component: Editor,
})
