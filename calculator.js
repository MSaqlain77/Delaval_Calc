function calculateLinerChange() {
    const numCows = document.getElementById('numCows').value;
    const numClusters = document.getElementById('numClusters').value;
    const resultElement = document.getElementById('result');
    const maxDays = 180;  // 6 months

    if (numCows > 0 && numClusters > 0) {
        const cowsPerCluster = numCows / numClusters;
        const daysToReplace = 2500 / cowsPerCluster;
        const replacementTimeInDays = Math.min(daysToReplace, maxDays);
        const replacementTimeInMonths = replacementTimeInDays / 30;

        const replacementTimeMessage = (replacementTimeInDays === daysToReplace)
            ? `${replacementTimeInDays.toFixed(2)} days (${replacementTimeInMonths.toFixed(2)} months)`
            : `180 days (6 months)`;

        resultElement.innerText = `Number of cows milked per cluster: ${cowsPerCluster.toFixed(2)}
        \nYou need to replace the liner in ${replacementTimeMessage}.`;
    } else {
        resultElement.innerText = 'Please enter valid numbers for cows and clusters.';
    }
}
