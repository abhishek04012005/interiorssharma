'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/Supabase';
import styles from './contactusdashboard.module.css';
import { FaUsers, FaCalendarAlt, FaChartLine } from 'react-icons/fa';


interface Contact {
    id: string;
    created_at: string;
    name: string;
    phone: string;
    dropdown: string;
    message: string;
}

interface Stats {
    total: number;
    monthly: number;
    weekly: number;
}

export default function ContactDashboard() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [stats, setStats] = useState<Stats>({ total: 0, monthly: 0, weekly: 0 });
    // const [, setChartData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data: allContacts, error } = await supabase
                .from('contacts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            setContacts(allContacts || []);

            const now = new Date();
            const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
            const weekAgo = new Date(now.setDate(now.getDate() - 7));

            const monthly = allContacts?.filter(contact =>
                new Date(contact.created_at) > monthAgo
            ).length;

            const weekly = allContacts?.filter(contact =>
                new Date(contact.created_at) > weekAgo
            ).length;

            setStats({
                total: allContacts?.length || 0,
                monthly,
                weekly
            });



            // setChartData(chartData);
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
            <h1>Contact Management Dashboard</h1>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <FaUsers className={styles.statIcon} />
                    <div className={styles.statInfo}>
                        <h3>Total Contacts</h3>
                        <p>{stats.total}</p>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <FaCalendarAlt className={styles.statIcon} />
                    <div className={styles.statInfo}>
                        <h3>Monthly Contacts</h3>
                        <p>{stats.monthly}</p>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <FaChartLine className={styles.statIcon} />
                    <div className={styles.statInfo}>
                        <h3>Weekly Contacts</h3>
                        <p>{stats.weekly}</p>
                    </div>
                </div>
            </div>

            <div className={styles.tableSection}>
                <h2>Recent Contacts</h2>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Service</th>
                                <th>Message</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.slice(0, 10).map((contact) => (
                                <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.dropdown}</td>
                                    <td>{contact.message}</td>
                                    <td>{new Date(contact.created_at).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}