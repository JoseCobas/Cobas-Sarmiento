 async function fetchallpuns(){
    try{
        let response = await fetch('http://localhost:3000/posts');
        let data     = await response.json();

        /* 
                <li><strong>Title</strong> </li>
                <li><strong>Author</strong></li>
                <li><strong>Datum</strong>  </li>
                <li><strong>Content</strong>
        */

        console.log(data);

         let punsHtml = "";
        for(let pun of data){
            console.log(pun.author);
            console.log(pun);

            punsHtml += `<li>Title: ${pun.title} </li> <br> `;

            let fullDatum = new Date(pun.date);                
            punsHtml += `<li>Author: ${pun.author} | <span style= "color: lila;" > ${fullDatum.getFullYear()}-${fullDatum.getMonth()}-${fullDatum.getDate()} </span> </li> <br>`;
            punsHtml += `<li>Content: ${pun.content} </li>`;
            punsHtml += `<li>tags: ${pun.tags} </li>`;
        }
 
        // I am jut adding somee message to try the new branch

        document.getElementById('ul').innerHTML = punsHtml;
        
    }catch(message){
        throw new Error(message);
    }
    
} 
fetchallpuns();