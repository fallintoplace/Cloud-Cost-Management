import { Doughnut, Line, Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCog, faSearch } from '@fortawesome/free-solid-svg-icons';
import 'chart.js/auto';

const pieChartData = {
  labels: ['Amazon S3', 'Amazon ECR', 'Amazon Rekognition'],
  datasets: [
    {
      data: [6500, 3500, 1500],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Expenditures',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      pointBorderColor: '#36A2EB',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#36A2EB',
      pointHoverBorderColor: '#36A2EB',
      pointHoverBorderWidth: 2,
      data: [1230, 2595, 3882, 4285, 5621, 6775, 8219, 9556, 10234, 11877, 13565, 15432],
    },
  ],
};

const barChartData = {
  labels: ['AWS', 'Azure', 'GCP'],
  datasets: [
    {
      label: 'Cost',
      data: [1200, 900, 1500],
      backgroundColor: '#FFCE56',
    },
    {
      label: 'Forecast',
      data: [1500, 1200, 2000],
      backgroundColor: '#36A2EB',
    },
  ],
};

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
      {/* Dashboard */}
      <div className='flex-grow bg-gray-100 p-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold mb-4'>Expenditures by Category</h2>
            <Doughnut data={pieChartData} />
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold mb-4'>Monthly Expenditures Last Year</h2>
            <Line data={lineChartData} />
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold mb-4'>Cost vs Forecast</h2>
            <Bar data={barChartData} options={{ indexAxis: 'y', responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
