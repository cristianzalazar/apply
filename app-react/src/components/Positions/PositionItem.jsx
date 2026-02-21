export default function PositionItem({ position, onSubmit }) {
    return (
        <li
        key={position.id}
        className="
            bg-white
            border border-slate-200
            rounded-xl
            p-4
            shadow-sm
            hover:shadow-md
            transition"
        >
        <h3 className="text-lg font-semibold text-slate-800 mb-3">
            {position.title}
        </h3>

        <form
            onSubmit={(e) => onSubmit(e, position.id)}
            className="flex flex-col sm:flex-row gap-2"
        >
            <input
            name="repoUrl"
            type="url"
            placeholder="https://github.com/tu-user/tu-repo"
            className="
                w-full
                rounded-lg
                border
                border-slate-300
                px-3
                py-2
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
            "
            required
            />

            <button
            type="submit"
            className="
                rounded-lg
                bg-indigo-600
                px-4
                py-2
                text-sm
                font-medium
                text-white
                hover:bg-indigo-700
                transition
                whitespace-nowrap
            "
            >
            Enviar
            </button>
        </form>
        </li>
    )
}