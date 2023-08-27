import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [hideMessage, showEmailMessage] = useState(true);
    const [emailMessage, setEmailMessage] = useState("");
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs.sendForm('service_bqg0g2o', 'template_s1vzvxh', form.current!, '-vuNXR0q1i9rrWoX6')
        .then(() => {
            showEmailMessage(false);
            setEmailMessage("Thanks for contacting us. We'll get back to you as soon as possible.")
        }, () => {
            showEmailMessage(false);
            setEmailMessage("Unable to sen email, please try again.")
        });
    };

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 2 }}>
            <section>
                <div className='container mx-auto px-4 lg:px-24 pt-4 lg:pt-12 h-fit '>
                    <div>
                        <div className='font-bold text-2xl md:text-5xl py-4'>
                            Contact.
                        </div>
                        <div className="space-y-6">
                            <h1>Get in touch or shoot me an email directly on 
                                <a href="mailto:iamgokull10@gmail.com" className="font-bold"> iamgokull10@gmail.com</a>
                            </h1>
                            {!hideMessage && <div className="bg-green-700 border border-green-800 inline-flex md:w-10/12 p-2">
                                <p>{emailMessage}</p>
                            </div>}
                            <form ref={form} id="contact-form" className="space-y-8" onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        required
                                        minLength={5}
                                        type="text"
                                        name="user_name"
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
                                        required
                                        type="email"
                                        name="user_email"
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
                                        required
                                        name="message"
                                        rows={4}
                                        minLength={10}
                                        id="comment"
                                        placeholder="Type your comments here"
                                        className='bg-transparent p-2 focus:outline-none border-2 border-gray-500 w-full md:w-10/12'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
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