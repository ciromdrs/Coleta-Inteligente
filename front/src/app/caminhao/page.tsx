// import '@/app/globals.css'

export default function Page() {
    const itens = [
        {placa: "12345F", motorista:"juninho"},
        {placa: "12345A", motorista:"juninho"},
        {placa: "12345B", motorista:"juninho"},
        {placa: "12345Z", motorista:"juninho"},
        {placa: "12345V", motorista:"juninho"},
        {placa: "12345F", motorista:"juninho"},
        {placa: "12345A", motorista:"juninho"},
        {placa: "12345B", motorista:"juninho"},
        {placa: "12345Z", motorista:"juninho"},
        {placa: "12345V", motorista:"juninho"},
        {placa: "12345F", motorista:"juninho"},
        {placa: "12345A", motorista:"juninho"},
        {placa: "12345B", motorista:"juninho"},
        {placa: "12345Z", motorista:"juninho"},
        {placa: "12345V", motorista:"juninho"},
        {placa: "12345F", motorista:"juninho"},
        {placa: "12345A", motorista:"juninho"},
        {placa: "12345B", motorista:"juninho"},
        {placa: "12345Z", motorista:"juninho"},
        {placa: "12345V", motorista:"juninho"},
        {placa: "12345F", motorista:"juninho"},
        {placa: "12345A", motorista:"juninho"},
        {placa: "12345B", motorista:"juninho"},
        {placa: "12345Z", motorista:"juninho"},
        {placa: "12345V", motorista:"juninho"},
        {placa: "12345F", motorista:"juninho"},
        {placa: "12345A", motorista:"juninho"},
        {placa: "12345B", motorista:"juninho"},
        {placa: "12345Z", motorista:"juninho"},
        {placa: "12345V", motorista:"juninho"},
        {placa: "12345F", motorista:"juninho"},
        {placa: "12345A", motorista:"juninho"},
        {placa: "12345B", motorista:"juninho"},
        {placa: "12345Z", motorista:"juninho"},
        {placa: "12345V", motorista:"juninho"},
        {placa: "12345F", motorista:"juninho"},
        {placa: "12345A", motorista:"juninho"},
        {placa: "12345B", motorista:"juninho"},
        {placa: "12345Z", motorista:"juninho"},
        {placa: "12345V", motorista:"juninho"}
    ]
    return(
        <div className="p-12 w-full h-screen">
            <div className="w-full h-full flex flex-row flex-wrap bg-background2 p-4 rounded-xl gap-5 overflow-scroll">
                {itens.map((el, ind) => (
                    <div key={ind} className="bg-background3 text-xl text-foreground h-55 w-45 rounded-xl p-2 flex flex-col justify-between">
                        <div>
                            <h1 className="font-bold">Placa: {el.placa}</h1>
                            <h3>Motorista: {el.motorista}</h3>
                        </div>
                        <div className="flex flex-row justify-between font-bold">
                            <div className="flex items-center justify-center rounded hover:cursor-pointer text-2xl bg-botaoapagar w-9 h-9 ">X</div>
                            <div className="flex items-center justify-center rounded hover:cursor-pointer text-2xl bg-botaoedit w-9 h-9 ">🖉</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}