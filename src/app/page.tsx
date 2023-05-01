'use client'
import { Presets } from "userop";

// @ts-ignore
import config from "../../config.json";
import { useState } from "react";

export default async function main() {
  const simpleAccount = await Presets.Builder.SimpleAccount.init(
    config.signingKey,
    config.rpcUrl,
    config.entryPoint,
    config.simpleAccountFactory
  );
  const[Addr,setAddr]=useState("")
  const handler=()=>{
    const address = simpleAccount.getSender();
    setAddr(address);
    console.log(`SimpleAccount address: ${Addr}`);
  }
 

  return(
    <div>
      <button onClick={handler}></button>
      <h1>{Addr}</h1>
    </div>
  )
}