import wikiPage from 'wiki-page';
import { wiki } from '../stores';
import Axios from "axios";

/* const wikiFetch = () => {wikiPage.fetch({
    section: 'page',
    type: 'html',
    title: 'Pony',
    }, (data) => {;
        wiki.WikiHtml = data;
})}; */

const wikiFetch = () => {
    Axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=pony&prop=text`,{
/*         username: username, 
        password: password */
    }).then(function (response) {
        // handle success
        wiki.wikiHtml = response;
    });
}

export default wikiFetch;