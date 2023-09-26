const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Fresas', 'Arandanos', 'Naranjas', 'Aguacates', 'Berenjenas'],
    datasets: [{
      label: 'Cantidad Vendida',
      data: [8, 15, 6, 10, 12],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', // Rojo
        'rgba(54, 162, 235, 0.5)', // Azul
        'rgba(255, 206, 86, 0.5)', // Amarillo
        'rgba(75, 192, 192, 0.5)', // Verde
        'rgba(153, 102, 255, 0.5)' // Morado
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});