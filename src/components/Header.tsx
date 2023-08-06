

const Header= () => {

  const Link = (value: string) => {
    return <a href={`#${value}`} className="transition-transform uppercase hover:scale-125 hover:text-primary">{value}</a>
  }

  return (
    <div className="animate-out bg-transparent container flex items-end justify-end sticky top-0 z-50 p-4 py-8">
        <div className="flex gap-6">
            {Link('about')}
            {Link('projects')}
            {Link('contact')}
        </div>
    </div>
  )
}

export default Header