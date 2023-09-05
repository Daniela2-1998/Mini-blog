import React from 'react';
import posts from '../data/post';
import {NavLink} from 'react-router-dom';
import {ContextoTema} from '../contextos/ContextoTema';
import Controles from './Controles';

const Blogs = () => {

    //const {nombre}= useContext(ContextoTema);

    return (
        <div>
            <h2>Blog</h2>
            <ul>
                {posts.map( (post) => {
                    return <li key={post.id}><NavLink to={`/post/${post.id}`}>{post.titulo}</NavLink></li>
                })}
            </ul>
            <Controles />
        </div>
    );
}

export default Blogs;