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
    else{window.alert('Nope, try again')}
}

function filterHeavy() {
    // debugger
    let stout = packages.find(packages => packages.heavy == true)
    currentPackages = currentPackages.filter(packages => packages.heavy == stout.heavy)
    console.log(' heavy package', currentPackages)
    drawPackage()
}

function filterPriority() {
    // debugger
    let important = packages.find(packages => packages.priority == true)
    currentPackages = currentPackages.filter(packages => packages.priority == important.priority)
    console.log(' priority package', currentPackages)
    drawPackage()
}

function filterFragile() {
    let soft = packages.find(packages => packages.fragile == true)
    currentPackages = currentPackages.filter(packages => packages.fragile == soft.fragile)
    console.log(' Fragile Package', currentPackages)
    drawPackage()
}



