import AddTodos from "./components/AddTodos"
import Todolists from "./components/Todolists"


function App() {

  return (
    <main className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-slate-400 rounded drop-shadow-lg text-zinc-700">
     <AddTodos />
     <Todolists />
    </main>
  )
}

export default App
