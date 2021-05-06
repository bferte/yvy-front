import Link from 'next/link'

const LinkMenu = ({children,...props}) => {

    return (
        <>
        <style jsx> {`
        a {color : ${props.activeKey === props.name ? 'var(--yellow)' : null}

        }
        `}</style>

        <div onClick={props.onClick}>
            <Link href={props.href}><a>{children}</a></Link>

        </div>
    
        
        </>

    )
}

export default LinkMenu