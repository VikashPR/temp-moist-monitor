const data = {
  labels: 'labels',
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const dataVal = data['datasets'][0]['data'];

for (let i = 0; i < dataVal.length; i++) {
  dataVal.push(i * 28);
}

dataVal.push(10);

console.log(dataVal);
