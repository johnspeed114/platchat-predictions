export default async function handler() {
    const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1tKKw7tt-UHf931EXR3kGzF0LYLxlyKUIuOMX8AxB3Bc/values/Internationals!222:236?key=AIzaSyCeWpXqYforECJmNFDNOxg0jYO4gtHo1r8');
    const data = await response.json();
    console.log(data);
}
