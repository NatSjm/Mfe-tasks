function Fallback({ error, resetErrorBoundary }) {

    return (
        <div role="alert" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <h2 className="font-bold">Something went wrong: </h2>{' '}
            <span className="block sm:inline">Please, contact our support and show this message</span>
            <pre className="mt-2 text-sm text-red-600">{error.message}</pre>
            <button onClick={resetErrorBoundary} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Try again</button>
        </div>
    );
};

export default Fallback;
