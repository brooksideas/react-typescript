type GreetProps = {
    name: string
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome {props.name} ! It was long awaited.</h2>
        </div>
    )
}