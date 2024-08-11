import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import React from "react";

const ListLazy = React.lazy(() => import("list/List"));

export const List = () => {
    const navigate = useNavigate();
  return (
      <div className="movies-container">
        <ListLazy
            onNavigate={(to: string) =>
                navigate({
                    to,
                })
            }
        />
      </div>
  );
};

export const Route = createLazyFileRoute("/list")({
  component: List,
});

