interface TooltipProps {
    message: string;
    children: React.ReactNode;
}

export default function Tooltip({ message, children}: TooltipProps) {
    return (
    <div className="group relative flex">
        {children}
        <span className="absolute scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{message}</span>
    </div>
    )
}