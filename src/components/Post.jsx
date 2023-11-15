export function Post () {
    return (
        <article className="bg-PlatformGrey rounded-lg p-10">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <img 
                        className="box-content w-12 h-12 rounded-lg border-4 border-PlatformGrey outline outline-2 outline-BrandGreenIgnite"
                        src="https://avatars.githubusercontent.com/u/79984765?v=4"
                    />
                    <div>
                        <strong className="text-MainColorText leading-6 block">Vinícius Wallauer</strong>
                        <span className="text-[0.875rem] text-SpanTextColor leading-6 block">Web Developer</span>
                    </div>
                </div>
                <time 
                    className="text-SpanTextColor text-sm"
                    title="13 de Novembro às 22:07" 
                    dateTime="2023-11-13 22:07"
                >
                        Públicado há 1h
                </time>
            </header>
            <div className="mt-6 space-y-4 text-PostTextColor">
                <p>Fala Dev!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, iusto? Enim animi accusamus ducimus aliquam iure laborum sed, cum nulla ullam tenetur commodi possimus dolor asperiores error repudiandae id libero.</p>
                <p>👉 <a className="font-bold text-BrandGreenIgnite hover:text-BrandGreenIgniteLight focus:outline outline-1 outline-BrandGreenIgnite" href="">wallauer@protonmail.com</a></p>
                <p className="flex gap-1">
                    <a className="font-bold text-BrandGreenIgnite hover:text-BrandGreenIgniteLight focus:outline outline-1 outline-BrandGreenIgnite" href=""> #novoprojeto</a>
                    <a className="font-bold text-BrandGreenIgnite hover:text-BrandGreenIgniteLight focus:outline outline-1 outline-BrandGreenIgnite" href="">#nlw</a>
                    <a className="font-bold text-BrandGreenIgnite hover:text-BrandGreenIgniteLight focus:outline outline-1 outline-BrandGreenIgnite" href="">#rocketseat</a>
                </p>
            </div>
            <form className="max-h-none border-t border-BorderGrey w-full mt-6 pt-6 space-y-4">
                <strong className="text-MainColorText leading-6">Deixe seu feedback</strong>
                <textarea
                    className="w-full h-24 bg-NeutralGrey border-none resize-none p-4 rounded-lg text-PostTextColor leading-[1.4rem] focus:outline outline-1 outline-BrandGreenIgnite"
                    placeholder="Escreva um comentário..."
                />
                <footer id="formButton">
                    <button
                        className="py-4 px-6 rounded-lg font-bold bg-BrandGreenIgnite hover:bg-BrandGreenIgniteLight transition duration-100 cursor-pointer focus:outline outline-1 outline-BrandGreenIgnite" 
                        type="submit"
                    >
                        Pulbicar
                    </button>
                </footer>
            </form>
        </article>
    );
}