import React from "react";

function Nav(props) {
    const lis = [];
    for(let i=0; i<props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(
            <li key={t.id}>
                <a id={t.id} href={'/page/'+t.id} onClick={event=>{
                    event.preventDefault();
                    props.onChangeMode(Number(event.target.id));
                }}>{t.title}</a>
            </li>
        );
    }
    return (
        <nav>
            <ul>
                {lis}
            </ul>
        </nav>
    )
}

export default Nav;