const journeyText = document.getElementById('journeyText')

const journeyTabs = {
    "1": {
        text: "I started my coding life when I was 12 years old and a friend showed me HTML and CSS. After that I got hooked and started making many different websites using only HTML and CSS.",
        btn: document.getElementById('journeyTab1')
    },
    "2": {
        text: "Hello World 2",
        btn: document.getElementById('journeyTab2')
    },
    "3": {
        text: "Hello World 3",
        btn: document.getElementById('journeyTab3')
    },
    "4": {
        text: "Hello World 4",
        btn: document.getElementById('journeyTab4')
    },
    "5": {
        text: "Hello World 5",
        btn: document.getElementById('journeyTab5')
    },
    "6": {
        text: "Hello World 6",
        btn: document.getElementById('journeyTab6')
    },
}

journeyTabs["1"].btn.addEventListener('click', () => {
    journeyText.innerHTML = journeyTabs["1"].text
})

journeyTabs["2"].btn.addEventListener('click', () => {
    journeyText.innerHTML = journeyTabs["2"].text
})

journeyTabs["3"].btn.addEventListener('click', () => {
    journeyText.innerHTML = journeyTabs["3"].text
})

journeyTabs["4"].btn.addEventListener('click', () => {
    journeyText.innerHTML = journeyTabs["4"].text
})

journeyTabs["5"].btn.addEventListener('click', () => {
    journeyText.innerHTML = journeyTabs["5"].text
})

journeyTabs["6"].btn.addEventListener('click', () => {
    journeyText.innerHTML = journeyTabs["6"].text
})