//get all videos
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
blob_link = "https://vidflix.blob.core.windows.net"

const container = document.querySelector("#ul")

  fetch("https://prod-10.centralus.logic.azure.com:443/workflows/541551bc84bb4afeac6375004cc13acc/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SeQBWUxyGi2xb6GMTAUHBZqdW-at54HblIK-dhLjSBw", requestOptions)
    .then(response => response.json())
    .then(result => {
        let data = result
        console.log(data)
        data.forEach(function (item, index) {
            console.log(item, index)
            
            vid = data[index].filepath
            const list = document.createElement('li')
            list.classList.add('lst')
            container.appendChild(list)
            media = document.createElement('video')
            media.classList.add('vid')
            list.appendChild(media)
            const contents = document.createElement('div')
            contents.classList.add('add')

            list.appendChild(contents)
        
            document.querySelector('.lst')
            media.setAttribute('src',blob_link+vid)
            media.setAttribute('controls', true)
            console.log(media)

            title = data[index].title
            producer = data[index].producer
            publisher = data[index].publisher
            rating = data[index].rating
            genre = data[index].genre
            console.log(title, producer, publisher, rating, genre)

            const titles = document.createElement('p')//element p
            theading = document.createTextNode('Title:')
            titles.appendChild(theading)
            titles.classList.add('prod')
            contents.appendChild(titles)
            const cont = document.createElement('small')//element s
            cont.classList.add('content')
            const tcont = document.createTextNode(title)
            cont.appendChild(tcont)
            contents.appendChild(cont)

            const prod = document.createElement('p')// prod
            pheading = document.createTextNode('Producer:')
            prod.appendChild(pheading)
            contents.appendChild(prod)
            const prodcont = document.createElement('small')
            const pcont = document.createTextNode(producer)
            prodcont.appendChild(pcont)
            contents.appendChild(prodcont)
            prod.classList.add('prod')


            const pub = document.createElement('p')// elemet p
            puheading = document.createTextNode('Publisher:')
            pub.appendChild(puheading)
            const pubC = document.createElement('small')
            pubcont = document.createTextNode(publisher)
            pubC.appendChild(pubcont)
            contents.appendChild(pubcont)


            const ratings = document.createElement('p')// elemet p
            rheading = document.createTextNode('PG:')
            ratings.appendChild(rheading)
            contents.appendChild(prod)
            const rc = document.createElement('small')
            rcont = document.createTextNode(rating)
            rc.appendChild(rcont)
            contents.appendChild(rc)


            const gen = document.createElement('p')
            gheading = document.createTextNode('Genre:')
            gen.appendChild(gheading)
            contents.appendChild(gen)
            const gr = document.createElement('small')
            gcont = document.createTextNode(genre)
            gr.appendChild(gcont)
            contents.appendChild(gr)
        
        });
        // data.forEach(function => {
        //     for(i=0;i<=data.length;i++) {
        //         vid = data[i].filepath  
        //     }
        //     const list = document.createElement('li')
        //     list.classList.add('lst')
        //     container.appendChild(list)

        //     // vid = data[0].filepath
        //     console.log(vid)
            
        // });
        
        // const container = document.querySelector("#ul")
        // const list = document.createElement("li")
        // list.appendChild(document.createElement('video').attributes('src'))
    })
    .catch(error => console.log('error', error));


