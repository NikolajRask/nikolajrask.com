import { Body } from './consts/DOM'

export function Render(tsc : string, into : Element = Body) {
    into.innerHTML = into.innerHTML + tsc
}

export function Element(element : string) : Element {
    const elem = document.querySelector(element) as Element || null 
    return elem as Element;
}

export function usePage(page : string) : any {
    fetch(page).then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    }).then(function (text) {
        localStorage.setItem('usePage',text)
    });
    return localStorage.getItem('usePage');
}

export function useSelector(selector : string) : Element {
    return document.querySelector(selector) as Element
}

export const App = useSelector("App")