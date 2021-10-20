import React from 'react';
import ava from '../modules/ava.jpg';
import back from '../modules/back.jpg'
import styles from "../modules/index.scss"

function Card({user:{name, tagline, imgSrc, fol, post}}) {
    return (<>
    <div className='card'>
        <div>
            <div>
                <img className='Ava' src={imgSrc} alt={'Ava'}/>
            </div>
            <div className='info'>
                <div className='name'>
                    <div>{name}</div>
                    <div>{tagline}</div>
                </div>
                <div className='Button'>+</div>
            </div>
        </div>
        <div className='fol'>
            <div className='about'>
                <div>Followers</div>
                <div>{fol}</div>
            </div>
            <div className='about'>
                <div>Posts</div>
                <div>{post}</div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Card
