function Greeting({name, children}) {
    const greetingText = name ? `Hello ${name}` : "Hello World"
    return (
        <div>
            <p>{greetingText}</p>
            {children && <div>{children}</div>}
        </div>
    )
}

export default Greeting;