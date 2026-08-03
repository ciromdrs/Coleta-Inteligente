// import "@/app/globals.css"

export default function SideBar({children}: {children: React.ReactNode}) {
    return (
    <div className="w-40 h-9/10 p-4 mr-0 bg-background2 text-foreground flex flex-col gap-[1em] items-center rounded-r-4xl">
        {children}
    </div>    
    )
}