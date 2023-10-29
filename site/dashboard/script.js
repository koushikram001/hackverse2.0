// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Data is now embedded directly in the script
    const data = {
        "Monday": ["45 pushups", "2 mins plank", "2 km walking"],
        "Tuesday": ["40 pushups", "2 mins plank", "3 km walking"],
        "Wednesday": ["50 pushups", "2.5 mins plank", "2.5 km walking"],
        "Thursday": ["35 pushups", "1.5 mins plank", "4 km walking"],
        "Friday": ["55 pushups", "3 mins plank", "1.5 km walking"],
        "Saturday": ["30 pushups", "2 mins plank", "2 km walking"],
        "Sunday": ["45 pushups", "2.5 mins plank", "3 km walking"]
    };

    displayData(data);
    createPieChart(data);
});

function displayData(data) {
    // Display the data in a table (same as before)
    const dashboard = document.getElementById("dashboard");
    const daysOfWeek = Object.keys(data);

    const table = document.createElement("table");
    table.innerHTML = `
        <tr>
            <th>Day</th>
            <th>Pushups</th>
            <th>Plank</th>
            <th>Walking (km)</th>
        </tr>
    `;

    daysOfWeek.forEach(day => {
        const [pushups, plank, walking] = data[day];
        table.innerHTML += `
            <tr style = "color : white">
                <td>${day}</td>
                <td>${pushups}</td>
                <td>${plank}</td>
                <td>${walking}</td>
            </tr>
        `;
    });

    dashboard.appendChild(table);
}

function createPieChart(data) {
    // Create a pie chart (same as before)
    const daysOfWeek = Object.keys(data);
    const pushupCounts = daysOfWeek.map(day => parseInt(data[day][0].split(' ')[0]));

    const ctx = document.getElementById("pieChart").getContext("2d");
    const pieChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: daysOfWeek,
            datasets: [
                {
                    label: "Pushups",
                    data: pushupCounts,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#E7E9ED",
                        "#4BC0C0",
                        "#FF8A80",
                        "#B3E0FF",
                    ],
                },
            ],
        },
    });
}
