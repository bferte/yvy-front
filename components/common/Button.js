

const Button = ({children,...props}) => {


    return (
        <>
            <style jsx>{`
            button {
                border-radius: 24px;
                width: 185px;
                height: 42px;
                font-family: "hero new";
                color: ${props.color ? props.color : 'white' };
                background: ${props.backgroundColor ? 'var(--lightGreen)' : 'var(--lightGreen)'};
                border: none
                
            }

            `}</style>

            <button><a href="">{children}</a></button>
        </>
        
    )
}

export default Button