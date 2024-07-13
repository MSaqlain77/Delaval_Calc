/* script.js */

// Function to toggle between calculators
function toggleCalculator() {
    const selectedCalculator = document.getElementById('calculatorSelect').value;
    const milkingCalculator = document.getElementById('milkingCalculator');
    const averageTimeCalculator = document.getElementById('averageTimeCalculator');

    if (selectedCalculator === 'milking') {
        milkingCalculator.style.display = 'block';
        averageTimeCalculator.style.display = 'none';
    } else {
        milkingCalculator.style.display = 'none';
        averageTimeCalculator.style.display = 'block';
    }
}

// Function to calculate results for the first calculator
function calculateMilking() {
    const numCows = document.getElementById('numCows').value;
    const numClusters = document.getElementById('numClusters').value;
    const cowsPerCluster = numCows / numClusters;
    const usesPerCluster = Math.min(2500, (2500 * 6) / cowsPerCluster);
    const resultElement = document.getElementById('resultMilking');
    resultElement.innerHTML = `Each cluster milks ${cowsPerCluster.toFixed(2)} cows. You should change the liner every ${usesPerCluster.toFixed(2)} uses or 6 months, whichever comes first.`;
}

// Function to calculate average milking time for the second calculator
function calculateAverageTime() {
    const numCows = document.getElementById('numCowsTime').value;
    const numBuckets = document.getElementById('numBuckets').value;
    const numHandMilkers = document.getElementById('numHandMilkers').value || 0;
    const totalMilkingUnits = parseInt(numBuckets) + parseInt(numHandMilkers);
    const cowsPerUnit = numCows / totalMilkingUnits;
    const minMilkingTime = cowsPerUnit * 7.5;
    const maxMilkingTime = cowsPerUnit * 8.5;
    const resultElement = document.getElementById('resultAverageTime');
    resultElement.innerHTML = `The average milking time per unit is between ${minMilkingTime.toFixed(2)} and ${maxMilkingTime.toFixed(2)} minutes.`;
}
