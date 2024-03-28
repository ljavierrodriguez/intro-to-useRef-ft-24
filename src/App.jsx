import React, { useRef, useState } from 'react'
import './App.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>Count: {count}</p>
                        <button className='btn btn-sm btn-info' onClick={increment}>Increment</button>
                    </div>
                </div>
            </div>

        </>
    )
}

const CounterRef = () => {

    const counter = useRef(0)

    const increment = () => {
        counter.current += 1
    }

    const mostrarValor = () => {
        console.log(counter.current)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>Count: {counter.current}</p>
                        <button className='btn btn-sm btn-info' onClick={increment}>Increment</button>
                        <button className='btn btn-sm btn-warning' onClick={mostrarValor}>Mostrar Counter</button>
                    </div>
                </div>
            </div>

        </>
    )
}


const FormExample = () => {

    const [name, setName] = useState("")

    const inputRef = useRef(null)

    const enviar = () => {
        console.log(inputRef.current.value)
    }
    return (
        <>
            <div className="w-75 mx-auto">
                <p className="text-primary">Nombre: {name}</p>
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="w-75 mx-auto">
                <p className="text-primary">Email: {inputRef.current?.value}</p>
                <input ref={inputRef} type="text" className="form-control" />
                <button className='btn btn-sm btn-primary' onClick={enviar}>Enviar</button>
            </div>
        </>
    )
}


const Gallery = () => {

    const [images] = useState([
        { id: 1, title: 'Image 1', url: 'https://picsum.photos/id/180/800/800'},
        { id: 2, title: 'Image 2', url: 'https://picsum.photos/id/250/800/800'},
        { id: 3, title: 'Image 3', url: 'https://picsum.photos/id/350/800/800'},
        { id: 4, title: 'Image 4', url: 'https://picsum.photos/id/450/800/800'},
        { id: 5, title: 'Image 5', url: 'https://picsum.photos/id/550/800/800'},
    ])

    const loader = useRef(null)

    const selectImage = e => {
        const img = e.target;
        loader.current.src = img.src
    }

    return (
        <>
            <div className="w-75 mx-auto d-flex gallery">
                {
                    images.length > 0 &&
                    images.map((img) => {
                        return (
                            <img key={img.id} src={img.url} alt={img.title} className='rounded-circle m-1 shadow' onClick={selectImage} />
                        )
                    })
                }
            </div>
            <div className="w-75 mx-auto my-5">
                <img className='loader' ref={loader}/>
            </div>
        </>
    )

}



const App = () => {

    return (
        <>
            <Counter />
            <CounterRef />
            <FormExample />
            <Gallery />
        </>
    )
}

export default App