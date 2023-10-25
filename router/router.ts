import Routes from './routes'

const iframe : any = document.getElementById("page-iframe") 

var routeLoaded = new CustomEvent('routeLoaded', {
    detail: { message: 'Route Loaded' }
  });

window.addEventListener('load', () => {
    console.log(getRoute().target == "")
    if (getRoute().target === "") {
        iframe.setAttribute('src',Routes["index"])
        return  
    }
    iframe.setAttribute('src',Routes[getRoute().target])
    /*fetch(Routes[getRoute().target]).then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    }).then(function (text) {
        
        document.dispatchEvent(routeLoaded);
    });*/

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
