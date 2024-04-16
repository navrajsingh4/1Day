import axios from "axios";
import React, { useEffect, useState } from "react";
import { Layout, Button, Card } from 'antd';
import Navbar from "./navbar";
import { Chart, Line, Tooltip, Legend, Axis } from 'bizcharts';

const { Content } = Layout;

function Graphing() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const loadUsers = () => {
        axios.get('http://localhost:3001/')
            .then(result => {
                const countsByDate = getCountsByDate(result.data);
                setUsers(countsByDate);
            })
            .catch(err => console.log(err));
    }

    const getCountsByDate = (userEntries) => {
        const countsByDate = {};

        userEntries.forEach(entry => {
            const date = formatDate(entry.date);
            countsByDate[date] = (countsByDate[date] || 0) + 1;
        });

        const sortedCountsByDate = Object.entries(countsByDate).sort(([date1], [date2]) => {            
            return new Date(date1).getTime() - new Date(date2).getTime();// Convert dates to milliseconds and subtract to get the difference
        });
        const sortedCountsByDateObj = {};
        for (const [date, count] of sortedCountsByDate) {
        sortedCountsByDateObj[date] = count;
        }

    return sortedCountsByDateObj;
    };

    return (
        <Layout>
            <Navbar />
            <Content style={{ padding: '50px' }}>
                <h2 className="text-center ">Graph</h2>
                <Card title="Number of People Entering per Day" style={{ width: '100%' }}>
                    <Chart height={400} data={Object.entries(users)} autoFit>
                        <Line position="0*1" />
                        <Tooltip shared
                        />
                        <Legend />
                        <Axis name="0" title={{ text: 'Date' }} />
                        <Axis name="1" title={{ text: 'Number of People' }} min={0} />
                    </Chart>
                </Card>
            </Content>
        </Layout>
    );
}

export default Graphing;
