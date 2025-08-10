'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/Supabase';
import styles from './quotationdashboard.module.css';
import { FaUsers, FaCalendarAlt, FaToolbox } from 'react-icons/fa';

interface QuoteRequest {
    id: string;
    created_at: string;
    name: string;
    phone: string;
    service: string;
}

interface Stats {
    total: number;
    monthly: number;
    weekly: number;
}


export default function QuoteDashboard() {
    const [requests, setRequests] = useState<QuoteRequest[]>([]);
    const [stats, setStats] = useState<Stats>({ total: 0, monthly: 0, weekly: 0 });
    // const [, setServiceStats] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data: quoteRequests, error } = await supabase
                .from('quote_requests')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            setRequests(quoteRequests || []);

            const now = new Date();
            const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
            const weekAgo = new Date(now.setDate(now.getDate() - 7));

            const monthly = quoteRequests?.filter(request =>
                new Date(request.created_at) > monthAgo
            ).length;

            const weekly = quoteRequests?.filter(request =>
                new Date(request.created_at) > weekAgo
            ).length;

            setStats({
                total: quoteRequests?.length || 0,
                monthly,
                weekly
            });



            // setServiceStats(serviceData);

        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.dashboard}>
            <h1>Quote Requests Dashboard</h1>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <FaUsers className={styles.statIcon} />
                    <div className={styles.statInfo}>
                        <h3>Total Requests</h3>
                        <p>{stats.total}</p>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <FaCalendarAlt className={styles.statIcon} />
                    <div className={styles.statInfo}>
                        <h3>Monthly Requests</h3>
                        <p>{stats.monthly}</p>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <FaToolbox className={styles.statIcon} />
                    <div className={styles.statInfo}>
                        <h3>Weekly Requests</h3>
                        <p>{stats.weekly}</p>
                    </div>
                </div>
            </div>

            <div className={styles.tableSection}>
                <h2>Recent Quote Requests</h2>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Service</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.slice(0, 10).map((request) => (
                                <tr key={request.id}>
                                    <td>{request.name}</td>
                                    <td>{request.phone}</td>
                                    <td>{request.service}</td>
                                    <td>{new Date(request.created_at).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}