import { PencilSimpleLine } from "phosphor-react"
import { Avatar } from "./Avatar";

export function Sidebar () {
    return (
        <aside className="2xl:w-64 bg-PlatformGrey rounded-lg overflow-hidden">
            <img 
                className="w-full h-[72px] object-cover"
                src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className="flex flex-col items-center -mt-8">
                <Avatar
                    hasBorder={true} 
                    src="https://avatars.githubusercontent.com/u/79984765?v=4"
                />
                <strong className="text-MainColorText mt-4 leading-6">Vinícius Wallauer</strong>
                <span className="text-[0.875rem] text-SpanTextColor leading-6">Web Developer</span>
            </div>
            
            <footer className="border-t border-BorderGrey mt-6 pt-6 px-8 pb-8">
                <a 
                    className="bg-transparent text-BrandGreenIgnite border border-BrandGreenIgnite rounded-lg px-6 h-[50px] font-bold flex items-center justify-center gap-1 hover:bg-BrandGreenIgnite hover:text-white transition duration-300 focus:outline outline-1 outline-BrandGreenIgnite"
                    href="#"
                >
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}