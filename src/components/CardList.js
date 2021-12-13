import React, { useEffect, useState } from 'react'

function CardList(props) {
    const [github, setGithub] = useState('')

    useEffect(() => {
        setGithub(props.cards.map((item, index) => 
            <div key={index} style={{ margin: '1em' }}>
              <img alt="avatar" style={{ width: '70px' }} src={item.avatar_url} />
              <div>
                <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                <div>{item.blog}</div>
              </div>
            </div>
        ))
    }, [props])

    return (
        <div>
            {github}
        </div>
    )
}

export default CardList
