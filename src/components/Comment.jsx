import { ThumbsUp, Trash } from "phosphor-react";

export function Comment () {
    return (
        <div>
            <img 
                className="w-12 h-12 rounded-lg"
                src="https://avatars.githubusercontent.com/u/142635021?v=4" 
                alt="" 
            />
            <div>
                <div>
                    <header>
                        <div>
                            <strong>Douglas Rafael</strong>
                            <time 
                                className="text-SpanTextColor text-sm"
                                title="15 de Novembro às 23:21" 
                                dateTime="2023-11-15 23:21"
                            >
                                    Cerca de 2h atrás
                            </time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom Wallauer, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}