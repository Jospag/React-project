import {Fragment} from "react";

function Message(){
    // @ts-ignore
    const name = "Emmanuel";
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World
    </h1>
}
export default Message