import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className="2xl:max-w-6xl 2xl:grid-cols-4 xl:max-w-6xl xl:grid-cols-4 lg:max-w-6xl lg:grid-cols-4 md:max-w-none md:grid-cols-1 sm:max-w-none sm:grid-cols-1 my-8 mx-auto px-4 grid gap-8 items-start">
        <Sidebar />
        <main className="2xl:col-span-3 xl:col-span-3 lg:col-span-3 flex flex-col gap-y-8">
          <Post 
            author="Vinícius Wallauer" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam temporibus, laborum incidunt veniam enim sunt debitis tempore natus, repellendus fugiat, consectetur id at? Possimus tenetur vitae in est! Excepturi." 
          />
          <Post 
            author="Douglas Rafael"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo ullam reiciendis asperiores illo ratione beatae delectus, aut sed quod? Modi cum doloribus fuga repellat alias consectetur molestias ab odit!"
          />
        </main>
      </div>
    </div>
  );
}