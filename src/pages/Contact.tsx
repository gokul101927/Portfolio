import { motion } from "framer-motion"
import { useState } from "react"

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 3 }}
    >
            <section>
                <div className='container mx-auto px-4 lg:px-24 pt-4 lg:pt-12 h-fit '>
                    <div>
                        <div className='font-bold text-2xl md:text-5xl py-4'>
                            Contact.
                        </div>
                        <div className="space-y-6">
                            <h1>Get in touch or shoot me an email directly on 
                                <a href="mailto:iamgokull10@gmail.com" className="font-bold"> iamgokull10@gmail.com</a></h1>
                            <form className="space-y-8 ">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter your name"
                                        maxLength={32}
                                        className={`bg-transparent p-2 focus:outline-none border-2 border-gray-500 w-full md:w-10/12 `}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email address"
                                        maxLength={32}
                                        className={`bg-transparent p-2 focus:outline-none border-2 border-gray-500 w-full md:w-10/12`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <textarea
                                        name="comment"
                                        rows={4}
                                        id="comment"
                                        placeholder="Type your comments here"
                                        className='bg-transparent p-2 focus:outline-none border-2 border-gray-500 w-full md:w-10/12'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <button
                                    className="middle none center rounded-lg bg-white py-3 px-6 font-sans text-sm font-bold uppercase text-primary shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-primary-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    Contact me
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Contact