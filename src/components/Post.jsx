import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { useState } from 'react';

export function Post ({ author, publishedAt, content }) {
    const [ comment, setComment ] = useState('')

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const isButtonEnable = comment.length >= 3

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className="bg-PlatformGrey rounded-lg p-10">

            <header className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <Avatar 
                        hasBorder={true} 
                        src={author.avatarURL}
                    />

                    <div>
                        <strong className="text-MainColorText leading-6 block">{author.name}</strong>

                        <span className="text-[0.875rem] text-SpanTextColor leading-6 block">{author.role}</span>
                    </div>
                </div>

                <time 
                    className="text-SpanTextColor text-sm"
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className="mt-6 space-y-4 text-PostTextColor">
                {content.map(line => {
                   if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                   } else if (line.type === 'link') {
                        return <p>
                                    <a 
                                        className="font-bold text-BrandGreenIgnite hover:text-BrandGreenIgniteLight focus:outline outline-1 outline-BrandGreenIgnite" 
                                        href="#"
                                    >
                                        {line.content}
                                    </a>
                                </p>
                   }
                })}
            </div>

            <form className="max-h-none border-t border-BorderGrey w-full mt-6 pt-6 space-y-4">
                <strong className="text-MainColorText leading-6">Deixe seu feedback</strong>

                <textarea
                    className={`w-full h-24 bg-NeutralGrey border-none resize-none p-4 rounded-lg text-PostTextColor leading-[1.4rem] focus:outline outline-1 outline-BrandGreenIgnite`}
                    placeholder="Escreva um comentário..."
                    value={comment}
                    onChange={handleCommentChange}
                />
                
                <footer className={`${isButtonEnable ? 'block' : 'invisible max-h-0'}`}>
                    <button
                        className="py-4 px-6 rounded-lg font-bold bg-BrandGreenIgnite hover:bg-BrandGreenIgniteLight transition duration-100 cursor-pointer focus:outline outline-1 outline-BrandGreenIgnite"
                        type="submit"
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div>
                <Comment />
            </div>

        </article>
    );
}