// Function to toggle between calculators
function toggleCalculator() {
    const selectedCalculator = document.getElementById('calculatorSelect').value;
    const  calculateLinerChange = document.getElementById('liner Replacement Calculator');
    const averageMilkingTimeCalculator = document.getElementById('average Milking Time Calculator');

    if (selectedCalculator === 'liner Replacement Calculator') {
        calculateLinerChange.style.display = 'block';
        averageMilkingTimeCalculator.style.display = 'none';
    } else if (selectedCalculator === 'average Milking Time Calculator') {
        calculateLinerChange.style.display = 'none';
        averageMilkingTimeCalculator.style.display = 'block';
    }
}
// Function to calculate results for the liner replacement calculator
function calculateLinerChange() {
    const numCows = document.getElementById('numCows').value;
    const numClusters = document.getElementById('numClusters').value;
    const cowsPerCluster = numCows / numClusters;
    const usesPerCluster = Math.min(2500, (2500 * 6) / cowsPerCluster);
    const resultElement = document.getElementById('resultLinerReplacement');
    resultElement.innerHTML = `Each cluster milks ${cowsPerCluster.toFixed(2)} cows. You should change the liner every ${usesPerCluster.toFixed(2)} uses or 6 months, whichever comes first.`;
}
// Function to calculate average milking time for the average milking time calculator
function averageMilkingTimeCalculator() {
    const numCows = document.getElementById('numCowsTime').value;
    const numBuckets = document.getElementById('numBuckets').value;
    const numHandMilkers = document.getElementById('numHandMilkers').value || 0;
    const totalMilkingUnits = parseInt(numBuckets) + parseInt(numHandMilkers);
    const cowsPerUnit = numCows / totalMilkingUnits;
    const minMilkingTime = cowsPerUnit * 7.5;
    const maxMilkingTime = cowsPerUnit * 8.5;
    const resultElement = document.getElementById('resultAverageMilkingTime');
    resultElement.innerHTML = `The average milking time per unit is between ${minMilkingTime.toFixed(2)} and ${maxMilkingTime.toFixed(2)} minutes.`;
}
