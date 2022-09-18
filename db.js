import { createConnection } from 'mysql2';

export const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'kyteZone'
});

// open the MySQL connection
db.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

