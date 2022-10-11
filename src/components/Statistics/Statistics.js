import React, { useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { CategoryContext } from '../../Layout/Main';

const Statistics = () => {

  const totalQuiz = useContext(CategoryContext);
  return (
    <div >
      <div className=' mr-4 mt-10'>

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={totalQuiz}>
            <defs>
              <linearGradient id='color' x1='0' y1="0" x2='0' y2='1'>
                <stop offset="0%" stopColor="#065f46" stopOpacity={0.9} />
                <stop offset="75%" stopColor="#065f46" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <Area type="monotone" dataKey="total" stroke="#000"
              fill=" url(#color)" />
            <XAxis dataKey="name" />
            <YAxis dataKey="total" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>

      </div>
    </div >
  );
};





export default Statistics;