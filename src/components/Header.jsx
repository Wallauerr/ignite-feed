import igniteLogo from "../assets/ignite-simbol.svg"

export function Header () {
    return (
        <div className="bg-PlatformGrey flex justify-center items-center p-5 gap-4">
            <img 
                src={igniteLogo} 
                alt="Logotipo do Ignite"
                className="h-12"
            />
            <strong className="text-white text-2xl font-bold">Ignite Feed</strong>
        </div>
    );
}