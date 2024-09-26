function customeRendor(reactElement, container) { 
    let element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;  
    for (const prop in reactElement.props) {
        if (prop == 'children') {
            continue;
        } else {
            element.setAttribute(prop, reactElement.props[prop]);
        }
    }
    container.appendChild(element);
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
        style : 'color:red'
    },
    children : 'click me to visit'
}

const root = document.querySelector("#root");

customeRendor(reactElement, root);
