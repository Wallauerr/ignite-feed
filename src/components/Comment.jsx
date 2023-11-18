import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment () {
    return (
        <div className="flex gap-4 mt-6">
            <Avatar 
                hasBorder={false} 
                src="https://avatars.githubusercontent.com/u/142635021?v=4"
            />
            <div className="flex-1">
                <div className="bg-CommentBoxGray rounded-lg p-4">
                    <header className="flex items-start justify-between">
                        <div className="flex flex-col">
                            <strong className="text-MainColorText">Douglas Rafael</strong>
                            <time 
                                className="text-SpanTextColor text-sm"
                                title="15 de Novembro às 23:21" 
                                dateTime="2023-11-15 23:21"
                            >
                                    Cerca de 2h atrás
                            </time>
                        </div>
                        <button 
                            className="focus:outline outline-1 text-SpanTextColor outline-BrandGreenIgnite hover:text-red-400"
                            title="Deletar comentário"
                        >
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p className="mt-4 text-MainColorText">Muito bom Wallauer, parabéns!! 👏👏</p>
                </div>
                <footer className="mt-4">
                    <button className="flex items-center text-SpanTextColor cursor-pointer focus:outline outline-1 outline-BrandGreenIgnite hover:text-BrandGreenIgnite transition duration-100">
                        <ThumbsUp className="mr-2"/>
                        Aplaudir <span className="px-2">20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}