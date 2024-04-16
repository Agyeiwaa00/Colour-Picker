
function Colour ({hex,name,setBackgroundColor}){
    return(
        <div className=" flex flex-cols sm:inline-flex sm:flex-row">
        <button className=" mx-2 my-4 p-10 border-2" style={{backgroundColor:hex}} onClick={()=>setBackgroundColor(hex)}>
          <h2 className="text-xl font-bold text-white">{name}</h2>
        </button>
        </div>
    )
}
export default Colour;