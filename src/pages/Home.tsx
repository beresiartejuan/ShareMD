import { FaMarkdown } from "react-icons/fa";


export default function Home(){
    return (
    <>
        <header className="flex flex-col justify-center text-center h-screen gap-5">
            <div className="flex flex-row gap-3 flex-wrap justify-center text-center items-center">
                <FaMarkdown className="inline text-[5rem] text-blue-700"></FaMarkdown>
                <h1 className="font-bold font-mono text-[3rem]">ShareMD</h1> 
            </div>
            
            <span>Edit your markdown document with your colleagues in real time</span>
            <button className="bg-blue-600 px-4 py-2 max-w-fit inline mx-auto text-gray-100 rounded-lg">📝 New Document</button>
        </header>
    </>
    )
}