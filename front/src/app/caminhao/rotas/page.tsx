import MapPoints from "@/components/MapPoints"

export default function Page() {
  return(
    <div className="p-12 w-full h-screen">
      <div className="w-full h-full flex flex-row flex-wrap bg-background2 p-4 rounded-xl gap-5 ">
        <MapPoints position={[-6.455410, -37.094683]} zoom={15}/>
      </div>
    </div>
  )
}
