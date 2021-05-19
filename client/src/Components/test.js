import wikiPage from 'wiki-page';
import { wiki } from '../stores';


const wikiFetch = () => {wikiPage.fetch({
    section: 'page',
    type: 'html',
    title: 'Pony',
    }, () => {;
        wiki.wikiHtml = 'hello world';
       
})};

export default wikiFetch;