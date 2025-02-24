import Link from "next/link";

type props = {
    href: string;
    label: string;
    classname: any;
}

export const NavItem = ({href, label, classname} : props) => {
    return (
        <Link href={href} className={classname}>
            {label}
        </Link>
    )
}