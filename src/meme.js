import { useState, useEffect } from "react";

const Meme = () => {
    const [memes, setMemes] = useState(null)

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: '/assets/shiba.jpeg'
    })

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
                .then(data => {
                    setMemes(data.data.memes) 
                    // console.log(data.data.memes)
                })
                    .catch(err => console.log(err))
    }, [])

    const handleChange = (event) => {
        const {name, value} = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    const getMeme = (event) => {
        event.preventDefault()
        const randomIndex = Math.floor(Math.random() * memes.length)
        console.log('random index', randomIndex)

        const memeUrl = memes[randomIndex].url

        console.log(memeUrl)

        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImg: memeUrl
            }
        ))
    }

    return ( 
        <main>
            <div className="container-fluid">
                <form>
                    <div className="row">
                        <input 
                            type="text" 
                            placeholder='Top Text'
                            className="col-3 mx-auto my-5"
                            name='topText'
                            value={meme.topText}
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            placeholder='Bottom Text'
                            className="col-3 mx-auto my-5"
                            name='bottomText'
                            value={meme.bottomText}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <button 
                            className="btn btn-warning" 
                            style={{width:200}}
                            onClick={getMeme}
                        >
                            click to create image
                        </button>
                    </div>
                
                </form>
                <div className="row mt-3 position-relative justify-content-center">
                    <div className="card border-0" style={{width:500}}>
                        <img src={meme.randomImg} alt="meme" className='meme-image'/>
                        <h2 className='meme-text top'>{meme.topText}</h2>
                        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
                    </div>
                </div>
            </div>
        </main>
        
     );
}
 
export default Meme;