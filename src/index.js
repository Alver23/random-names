const names = [
    "Alver",
    "Angie",
    "Emma",
    "Sofia",
    "Marina",
    "Jose"
];

const randomName = () => names[Math.floor(Math.random() * names.length)];

module.exports = {
    randomName
}
