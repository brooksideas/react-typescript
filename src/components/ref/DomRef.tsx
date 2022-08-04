import { useRef , useEffect } from 'react'

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!) // we are sure it will not be null

    useEffect(()=> {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text" ref={ inputRef }/>
        </div>
    )
}