let array1 = ["1","2","3"];

const root = document.getElementById('root');

const div1 = document.createElement('div');

    for (let i = 0; i < array1.length; i++) {
        const elementP = document.createElement('p');
        let text = ` Ini document ke ${i}`
        const textP = document.createTextNode(text);
        elementP.append(textP);
        root.appendChild(elementP);
        
    }
