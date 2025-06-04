import{Linkedin,Instagram,Facebook} from "lucide-react"

function Footer() {
    return (
        <footer className="bg-navy-blue text-white mt-40 ">
            <h1 className="flex flex-row justify-center text-4xl text-bolder gap-2 "><span>Event</span><span className="text-blue-800">Hive</span></h1>
            <form className="flex justify-center flex-row mb-10 gap-3">
                <input className="border bg-white text-gray-600 px-20 py-3" type="email" placeholder="Enter your mail" name="email  " />
                <button className="border-line-purple bg-purple-700 text-white px-10 py-2" type="sumbit">Subscribe</button>
            </form>
            <div className="flex  flex-row justify-center gap-6 mb-5 mt-5"> 
                <span>Home</span>
                <span>About</span>
                <span>service</span>
                <span>Get in touch</span>
                <span>FAQs</span>
            </div>
            <hr />
            <div className="flex  flex-row gap-10 justify-center   ">
                <div className="flex flex-row gap-4 absolute left-1 py-4 ">
                    <button>English</button>
                    <button>French</button>
                    <button>Hindi</button>
                </div>
                <div className="flex flex-row gap-2 mt-4 justify-center text-center ">
                    <Linkedin />
                    <Instagram />
                    <Facebook />
                </div>
                <div className=" flex flext-row py-4 absolute right-1">
                    <p>Non Copyrighted© 2025 upload by EventHive</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
