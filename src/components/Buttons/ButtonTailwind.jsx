export default function ButtonTailwind({ children, ...props }) {
    return (
        <button
            className="px-4 py-2 font semi-bold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-600"
            {...props}
        >
            {children}
        </button>
    );
}
