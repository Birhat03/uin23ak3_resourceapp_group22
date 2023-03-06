export default function UrlList(list) {

    let source = list.source
    let urlTitle = source.title
    let url = source.url
    return (
    <li>
        <a href={url}>{urlTitle}</a>
    </li>
    )}

 