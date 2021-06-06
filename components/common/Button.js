

const Button = ({children,...props}) => {


    return (
        <>
            <style jsx>{`
            button {
                border-radius: 24px;
                margin: ${props.margin ? props.margin : '0px'};
                width: ${props.width ? props.width : '185px'};
                height: 42px;
                font-family: "hero-new";
                color: ${props.color ? props.color : 'white' };
                background: ${props.backgroundColor ? props.backgroundColor : 'var(--lightGreen)'};
                border: none;
                
            }

            `}</style>

            <button onClick={props.clickEvent}>{children}</button>
        </>
        
    )
}

export default Button
