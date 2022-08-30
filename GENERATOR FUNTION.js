 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./script.js"></script>
</head>
<body>
    <h5>hello</h5>
    <span id="newId"></span>
    <button onclick="getNewId()">click</button>
</body>
</html>       


// script.js fill----------------

function* simpleGenerator() {
    let i = 100;
    while (true) {
        i++
        yield i
    }
}

let sG = simpleGenerator();

function getNewId() {
    console.log(sG.next());
    document.getElementById('newId').innerText = 10
}
