import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Sale, useSale } from './UserContext';

type SaleDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
  [key: string]: any;
};
// Função que transforma um array de vendas em um array de vendas por dia
function transformData(data: Sale[]): SaleDay[] {
  const days: { [key: string]: SaleDay } = {};

  data.forEach((item) => {
    const day = item.data.split(' ')[0];
    if (!days[day]) {
      days[day] = {
        data: day.substring(5),
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }
    days[day][item.status] += item.preco;
  });

  return Object.values(days);
}

function GraphicResume() {
  const { data } = useSale();
  const dataGraph = data ? transformData(data) : [];

  return (
    <div className="text-projeto-primary3 bg-projeto-primary1/10 h-[600px] p-10 rounded-[6px] border-[1px] border-projeto-primary1/20">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dataGraph}>
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#82ca9d"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="falha"
            stroke="#ffc658"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphicResume;
