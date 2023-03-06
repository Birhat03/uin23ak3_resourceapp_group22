import React from 'react';
import resources from '../resources/resources';
import UrlList from './UrlList';

export default function HandleSources(cat) {
    let title = ""
    let text = ""
    let urls = []

    resources.forEach(res => {
        if (res.category == cat.name) {
            title = res.category;
            text = res.text;
            res.sources.forEach(link => {urls.push(
            <UrlList source={link}/>
            )})
        }
    })

    return (<article>
                <h1> {title} </h1>
                <p> {text} </p>
                <ul>{urls}</ul>
            </article>)
}
