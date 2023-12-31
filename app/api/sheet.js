export default async function handler() {
    try{
        const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1tKKw7tt-UHf931EXR3kGzF0LYLxlyKUIuOMX8AxB3Bc/values/Internationals!222:236?key=AIzaSyCeWpXqYforECJmNFDNOxg0jYO4gtHo1r8');
       if (!response.ok) {
              throw new Error(response.statusText);
       }
        const data = await response.json();
        const cleanedData = data.values.map((row) => (
            row.filter((cell) => cell !== ''))
        )
        console.log(cleanedData)
        return cleanedData;
    }
    catch(error){
        console.error('Error fetching data: ', error);
    }
    
}
