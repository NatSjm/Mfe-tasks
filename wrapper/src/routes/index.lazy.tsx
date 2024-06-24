import { createLazyFileRoute, } from '@tanstack/react-router'
export const Route = createLazyFileRoute('/')({
    component: Index
})

function Index() {
        return (
            <div className="page-container flex flex-col items-center justify-center min-h-screen py-2">
                <h2 className="text-3xl font-bold text-gray-700 mb-4">Welcome to Task management application</h2>
                <p className="mt-4 text-xl text-gray-600 mb-1">This application allows you to manage your tasks effectively.</p>
            </div>
        )
    };
