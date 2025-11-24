import "./Chat.css";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

// react-markdown
// rehype-highlight

function Chat() {
  const { newChat, prevChats, reply } = useContext(MyContext);
  const [latestReply, setLatestReply] = useState(null); // We are creating this state variable to store the last reply and display only that with typing effect

  useEffect(() => {
    // LatestReply separate => typing effect create
    if(!prevChats?.length) return; // if previous chat doesn't exist then return stop the function immediately

    const content = reply.split(" "); // individual words

    // Now we will display individual words with a regular delay
    let idx = 0;
    const interval = setInterval(() => {
      setLatestReply(content.slice(0, idx+1).join(" "));

      idx++;
      if(idx >= content.length) clearInterval(interval); // simply stops a running interval that was created using setInterval()
    }, 40);

    return () => clearInterval(interval); // simply stops a running interval that was created using setInterval()
  }, [prevChats, reply])
  
  return (
    <>
      {newChat && <h1>Start a New Chat!</h1>}
      <div className="chats">
        {
          prevChats?.slice(0, -1).map((chat, idx) =>  // -1 because we want to remove the last element 1st from end
            <div className={chat.role === "user" ? "userDiv" : "gptDiv"} key={idx}>
              {
                chat.role == "user" ? 
                <p className="userMessage">{chat.content}</p> : 
                <ReactMarkdown rehypePlugins={rehypeHighlight}>{chat.content}</ReactMarkdown>
              }
            </div>
          )
        }

        { // to print the latest reply with typing effect 
          prevChats.length > 0 && latestReply !== null &&
          <div className="gptDiv" key={"typing"}>
            <ReactMarkdown rehypePlugins={rehypeHighlight}>{latestReply}</ReactMarkdown>
          </div>
        }
      </div>
    </>
  )
}

export default Chat;