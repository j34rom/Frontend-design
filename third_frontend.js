const reports = [
  { name: "Jerome", location: "Sitio Bulangan", description: "Streetlight not working", status: "pending" },
  { name: "Maria Santos", location: "Purok 2", description: "Garbage not collected", status: "processing" },
  { name: "Juan Dela Cruz", location: "Sitio Mabini", description: "Road pothole", status: "finished" },
];

function renderReports() {
  const list = document.getElementById('reportsList');
  list.innerHTML = '';
  let pending = 0, processing = 0, finished = 0;

  reports.forEach((report, index) => {
    if (report.status === "pending") pending++;
    if (report.status === "processing") processing++;
    if (report.status === "finished") finished++;

    const card = document.createElement('div');
    card.className = 'report-card';
    card.innerHTML = `
      <h4>${report.name}</h4>
      <p>Location: ${report.location}</p>
      <p>Description: ${report.description}</p>
      <span class="status-badge ${report.status}">${report.status}</span>
      <div class="status-buttons">
        <button onclick="updateStatus(${index}, 'pending')">Pending</button>
        <button onclick="updateStatus(${index}, 'processing')">Processing</button>
        <button onclick="updateStatus(${index}, 'finished')">Finished</button>
      </div>
    `;
    list.appendChild(card);
  });

  document.getElementById('pendingCount').textContent = pending;
  document.getElementById('processingCount').textContent = processing;
  document.getElementById('finishedCount').textContent = finished;
}

function updateStatus(index, newStatus) {
  reports[index].status = newStatus;
  renderReports();
}

renderReports();
