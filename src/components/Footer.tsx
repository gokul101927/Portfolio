import { useNavigate } from "react-router-dom"

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='container mx-auto px-4 md:px-24 py-8 flex items-end justify-end gap-8 '>
            <img src='https://ik.imagekit.io/dpkmzcpsk/Portfolio/linkedin.png' onClick={() => navigate("https://www.linkedin.com/in/iamgokull/")} className='hover:scale-105 h-6 w-6 opacity-50 hover:opacity-100 cursor-pointer'></img>
            <img src='https://ik.imagekit.io/dpkmzcpsk/Portfolio/github.png' onClick={() => navigate("https://github.com/iamgokull10")} className='hover:scale-105 h-6 w-6 opacity-50 hover:opacity-100 cursor-pointer'></img>
            <img src='https://ik.imagekit.io/dpkmzcpsk/Portfolio/gmail.png' onClick={() => navigate("mailto:iamgokull10@gmail.com")} className='hover:scale-105 h-6 w-6 opacity-50 hover:opacity-100 cursor-pointer'></img>
        </div>
    )
}

export default Footer