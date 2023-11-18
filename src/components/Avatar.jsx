export function Avatar (props) {

    const hasBorder = props.hasBorder;

    const avatarClass = hasBorder
        ? "box-content w-12 h-12 rounded-lg border-4 border-PlatformGrey outline outline-2 outline-BrandGreenIgnite"
        : "w-12 h-12 rounded-lg";

    return (
        <img 
            className={avatarClass}
            src={props.src}
        />
    );
}