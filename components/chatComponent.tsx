"use client"
import { useChat, Message} from "ai/react"
import {useState} from "react"

export default function ChatComponent() {

    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
    
  
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
                                Chatbot
                            </h3>
                            :
                            <h3 className="text-lg font-semibold mt-2">
                                User
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
                    className="mt-2 w-full bg-slate-500 p-2 rounded-xl"
                    placeholder={"MAKE SURE TO ADD A NEW API KEY!!!!"}
                    value={input}
                    onChange={handleInputChange}
                />
                <button className="rounded-md bg-black p-2 mt-2">
                    Send message
                </button>
            </form>
        </div>
    )
}