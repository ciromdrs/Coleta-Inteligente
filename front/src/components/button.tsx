// import '@/app/globals.css'

export default function Button({children}: {children: React.ReactNode}) {
    return (
        <div className="w-25 h-11 text-xl bg-background3 text-foreground p-2 rounded text-center hover:bg-background2">
            {children}
        </div>
    )
}