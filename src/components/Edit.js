import React from 'react';
import UpdateArea from "./UpdateArea";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
    const params = useParams();
    const navigate = useNavigate()
    async function passInfo(titleSubmitted, contentSubmitted) {
        let editedPerson = {
            title: titleSubmitted,
            content: contentSubmitted
        }
        await fetch(`${process.env.BACKEND_URI}${params.id}`, {
            method: "POST",
            body: JSON.stringify(editedPerson),
            headers: {
              'Content-Type': 'application/json'
            },
          });
        
          navigate("/");
        }
        return(
            <div id="updates">
                <UpdateArea prevT={params.title} prevC={params.content} infoRelay={passInfo}/>
            </div>
        )
};
