import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl my-8 mx-auto px-4 grid grid-cols-4 gap-8 items-start">
        <Sidebar />
        <main className="col-span-3 flex flex-col gap-y-8">
          <Post 
            author="Vinícius Wallauer" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam temporibus, laborum incidunt veniam enim sunt debitis tempore natus, repellendus fugiat, consectetur id at? Possimus tenetur vitae in est! Excepturi." 
          />
          <Post 
            author="Lucas Pope"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo ullam reiciendis asperiores illo ratione beatae delectus, aut sed quod? Modi cum doloribus fuga repellat alias consectetur molestias ab odit!"
          />
        </main>
      </div>
    </div>
  );
}