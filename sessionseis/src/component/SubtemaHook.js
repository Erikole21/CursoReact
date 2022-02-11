import React from 'react'
import { useParams } from 'react-router-dom';

const SubtemaHook = () => {

    const { subtema } = useParams();
    return (
        <div>
            <h1>{subtema}</h1>
        </div>
    );
}

export default SubtemaHook;

