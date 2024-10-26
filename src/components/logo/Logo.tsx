import {Icon} from "../icon/Icon";

type LogoProps = {
    icon?: string;
    height?: string;
    width?: string;
    viewBox?: string;
    href: string;
}

export const Logo = (props: LogoProps) => {
    return (
        <a href={props.href}>
            <Icon
                iconId={props.icon || ""}
                height={props.height || ""}
                width={ props.width || ""}
                viewBox={props.viewBox || ""}/>
        </a>
    )
}