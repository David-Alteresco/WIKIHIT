import wikiPage from 'wiki-page';
import { wiki } from '../stores';


const wikiFetch = () => {wikiPage.fetch({
    section: 'page',
    type: 'html',
    title: 'Pony',
    }, (data) => {;
        wiki.WikiHtml = data;
})};

export default wikiFetch;