const packages = [{
        heavy: true,
        priority: false,
        fragile: false,
        to: 'Harrington',
        trackingNumber: '1324kjs',
        lost: false
    },
    {
        heavy: false,
        priority: true,
        fragile: true,
        to: 'Mark',
        trackingNumber: '1325sdk',
        lost: false,
    },
    {
        heavy: true,
        priority: false,
        fragile: true,
        to: 'Mick',
        trackingNumber: 'jffd147',
        lost: false
    },
    {
        heavy: false,
        priority: false,
        fragile: false,
        to: 'Jake',
        trackingNumber: 'acdc145',
        lost: false,
    },
    {
        heavy: true,
        priority: true,
        fragile: true,
        to: 'Brittany',
        lost: false,
    },
    {
        heavy: false,
        priority: true,
        fragile: false,
        to: 'Zach',
        trackingNumber: '8081baz',
        lost: false
    },
    {
        heavy: true,
        priority: false,
        fragile: true,
        to: 'Jeremy',
        trackingNumber: 'suz2367',
        lost: false
    }
]

function losePackage() {
    let randomPackage = packages[Math.floor(Math.random() * packages.length)]
    console.log('random', randomPackage)
    randomPackage.lost = true
}
losePackage()

let currentPackages = packages
let to= packages.to

function drawPackage() {
    let template = ''
    currentPackages.forEach(package => template += `<div class="col-4 rounded-pill btn btn-info" onclick="accuse('${package.to}')">${package.to}</div>`)
    let packageElm = document.getElementById('packages')
    console.log(packageElm, template)
    packageElm.innerHTML = template
}

drawPackage()

function accuse(name) {
    console.log(name);
    let accused = packages.find(package => package.to == name)
    console.log('package: ', accused)
    if (accused.lost == true) { window.alert('congratulations, you found it') }
    else { window.alert('Nope, try again') }
    currentPackages = packages
    drawPackage()
}





function filterFragile() {
    currentPackages = currentPackages.filter(package => package.fragile == true)
    drawPackage()
}

function filterHeavy() {
    currentPackages = currentPackages.filter(package => package.heavy == true)
    drawPackage()
}
function filterPriority() {
    currentPackages = currentPackages.filter(package => package.priority == true)
    drawPackage()
}