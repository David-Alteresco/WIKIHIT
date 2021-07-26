import { wiki } from '../stores';

const wikiFetch =  async (title) => {
    try{
      let url = null;
        url = `https://en.wikipedia.org/w/api.php?action=parse&page=${title}&origin=*&prop=text&formatversion=2&format=json`;
      
         // site that doesn’t send Access-Control
          const response = await fetch(url);
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const json = await response.json();
          if(!json.error){
             let text = json.parse.text
             text = text.replace(/href="(.*?)"/gi, 'href="#/Main" onclick="goDoSomething(this);"');
             
             text = text + '<script type="text/javascript">function goDoSomething(d){document.getElementById("changeUrlWIKIProject").innerHTML = d.getAttribute("title");document.getElementById("changeUrlWIKIProject").click();}</script>';
             //console.log(text);
             wiki.wikiHtml = text;
          }
         else{
           console.log(json.error)
 
         }
    }catch(e){
        console.log(e);
    }
};

export default wikiFetch;