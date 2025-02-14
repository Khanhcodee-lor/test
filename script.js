function toggleLED(state) {
    fetch("/led?state=" + state)
        .then(response => response.text())
        .then(data => console.log(data));
}
