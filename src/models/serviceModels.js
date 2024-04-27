import fs from 'fs';
import { pool } from './pool.js'

export async function getAllServices() {
    try {
        const [rows] = await pool.query("SELECT * FROM service");
        return rows; 
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw error; 
    }
}

export async function getService(id) {
    try {
        const [rows] = await pool.query(`SELECT * FROM service WHERE id = ?`, [id]);
        return rows;
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw error; 
    }
}

export async function createService(name, parentId) {
    try {
        console.log([name, parentId]);
        const [result] = await pool.query(`INSERT INTO service (name, parent_id) VALUES (?, ?)`, [name, parentId]);
        const id = result.insertId;
        return getService(id); 
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw error; 
    }
}


export async function getServicesByParentId(parentId) {
    try {
        let rows;
        if (parentId === null) {
            [rows] = await pool.query(`SELECT * FROM service WHERE parent_id IS NULL`);
        } else {
            [rows] = await pool.query(`SELECT * FROM service WHERE parent_id = ?`, [parentId]);
        }
        return rows; 
    } catch (error) {
        console.error('Erreur lors de l\'exécution de la requête :', error.message);
        throw error; 
    }
}




export async function getParentServiceById(parentId) {
    try {
        const [rows] = await pool.query(`SELECT * FROM service WHERE id = (SELECT parent_id FROM service WHERE id = ?)`, [parentId]);
        return rows[0]; 
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw error; 
    }
}



export async function getAllIndexes() {
    try {
        const [rows] = await pool.query(`SELECT * FROM index_table`);
        return rows; 
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw error; 
    }
}

export async function getIndex(id) {
    try {
        const [rows] = await pool.query(`SELECT * FROM index_table WHERE id = ?`, [id]);
        return rows;
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw error; 
    }
}

export async function getIndexesByService(serviceId) {
    try {
        const [rows] = await pool.query(`SELECT * FROM index_table WHERE service_id = ?`, [serviceId]);
        return rows;
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw error; 
    }
}

export async function createIndex(name , serviceId) {
    try {
        const [result] = await pool.query(`INSERT INTO index_table ( name , service_id ) VALUES (?, ?)`, [name , serviceId]);
        const id = result.insertId;
        return getIndex(id); 
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw error; 
    }
}

export async function getServiceByIndexId(indexId) {
    try {
        const [rows] = await pool.query(`SELECT s.* FROM service s JOIN index_table i ON s.id = i.service_id WHERE i.id = ?`, [indexId]);
        return rows[0];
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw error; 
    }
}

export async function createDirectories() {
    try {
        const entreprise = (await getServicesByParentId(null))[0];

        const entrepriseDir = `./${entreprise.name}`;
        if (!fs.existsSync(entrepriseDir)) {
            fs.mkdirSync(entrepriseDir);
        }

        const subServices = await getServicesByParentId(1) 

        subServices.forEach(async (service) => {
            const subDir = `${entrepriseDir}/${service.name}`;
            if (!fs.existsSync(subDir)) {
                fs.mkdirSync(subDir);
            }
        });
        console.log('Folders created successfully');
    } catch (error) {
        console.error('Error creating folders:', error.message);
        throw error; 
    }
}







 