import NextLink from 'next/link';

interface Props {
    children: string
    href: string
}

export default function Link({ children, href, ...props }: Props) {
    return (
        <NextLink href={href} {...props} passHref>
           {children}
        </NextLink>
    );
}
