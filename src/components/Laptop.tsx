import './Laptop.css'

interface Props {
  src: string;
}

const Laptop:React.FC<Props> = ({src}) => {
  return (
    <div className="macbook w-full">
      <div className="screen">
        <div className={`viewport bg-[url('${src}')]`}>
        </div>
      </div>
      <div className="base"></div>
      <div className="notch"></div>
    </div>
  )
}

export default Laptop