export default function Icon({tag, className=""}: {tag: string, className?: string}) {
    return (
        <span className={`material-symbols-outlined ${className}`}>{tag}</span>
    )
}