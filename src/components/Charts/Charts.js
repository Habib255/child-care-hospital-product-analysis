import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const Charts = () => {
    const data = [
        {
            month: 'mar',
            services: 10059,
            satisfaction: 9959,
            ratings: 4.5
        },
        {
            month: 'mar',
            services: 15640,
            satisfaction: 9959,
            ratings: 4.5
        },
        {
            month: 'mar',
            services: 13330,
            satisfaction: 9959,
            ratings: 4.5
        },
        {
            month: 'mar',
            services: 16557,
            satisfaction: 9959,
            ratings: 4.5

        },
        {
            month: 'mar',
            services: 10000,
            satisfaction: 9959,
            ratings: 4.5
        },

        {
            month: 'mar',
            services: 10000,
            satisfaction: 9959,
            ratings: 4.5


        }
    ]
    return (
        <div>
            <h3 className='text-3xl p-10'>chart about our service and costomers</h3>
            <LineChart width={700} height={500} data={data}>
                <Line dataKey={'services'}></Line>
                <YAxis></YAxis>
                <XAxis></XAxis>
            </LineChart>
            <h3 className='text-3xl p-10'>area chart about our service and per month</h3>
            <AreaChart width={700}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}><CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis></YAxis>
                <Area type="monotone" dataKey="services" stroke="#8884d8" fill="#8884d8" ></Area>
            </AreaChart>

        </div>
    );
};

export default Charts;