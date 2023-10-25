import Routes from './routes'

const iframe : any = document.getElementById("page-iframe") 
const js : any = document.getElementById('js');

var routeLoaded = new CustomEvent('routeLoaded', {
    detail: { message: 'Route Loaded' }
  });

window.addEventListener('load', () => {
    if (getRoute().target === "") {
        iframe.setAttribute('src',Routes["index"].html)  
        return
    }
    console.log(Routes[getRoute().target].html)
    iframe.setAttribute('src', Routes[getRoute().target].html)  
})

class Route {

    address : string;
    target : string;

    constructor(location) {
        this.address = location.href
        this.target = location.href.replace(location.origin+"/","");
    }


}

export function getRoute() {
    const route = new Route(window.location )
    return route 
}

window.addEventListener('message', function(event : any) {
    // Handle the message received from the iframe
    window.location.href = event.data.url
});
