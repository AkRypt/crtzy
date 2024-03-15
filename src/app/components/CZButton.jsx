export default function CZButton({children, className, ...props}) {
    return (
        <button className={`text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-500 ${className}`} {...props}>
            {children}
        </button>
    )
}