"use client"
import { useChat, Message} from "ai/react"
import {useState} from "react"

export default function ChatComponent() {

    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
    
    const[initialText, setInitalText] = useState<string>("Teach me about SHA256");
    console.log(messages);
    console.log(input);


    return (
        <div className = "flex flex-col justify-end" style = {{height: "70vh"}}>
            <div className ="overflow-auto mt-6">
            {messages.map((message : Message) => {
                return (
                    <div className = "my-6">
                    
                    <div key={message.id} className = "leading-loose bg-slate-500 p-4 rounded-xl">

                        {
                            message.role === "assistant"
                            ?
                            <h3 className="text-lg font-semibold mt-2 text-orange-800">
                                Theya the Bitcoin Bot
                            </h3>
                            :
                            <h3 className="text-lg font-semibold mt-2">
                                Bitcoin-oisseur
                            </h3>
                        }

                        {message.content.split("\n").map((currentTextBlock: string, index : number) => {
                            if(currentTextBlock === "") {
                                return <p key={message.id + index} className = "">&nbsp;</p> 
                            } else {
                                return <p key={message.id + index}>{currentTextBlock}</p> 
                            }
                        })}
                    </div>
                    </div>
                )
            })}

            </div>
           

            <form className="mt-12" onSubmit={handleSubmit}>
                <p>User Message</p>
                <textarea
                    className="mt-2 w-full bg-indigo-900 p-2 rounded-xl"
                    placeholder={"What is the best Bitcoin wallet?"}
                    value={input}
                    onChange={handleInputChange}
                />
                <button className="rounded-md bg-orange-800 p-2 mt-2">
                    Send message
                </button>
                <button className = "bg-orang-800 rounded-md p-2 mt-2">
                    {initialText}
                </button>
            </form>
        </div>
    )
}