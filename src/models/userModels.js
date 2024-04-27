import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import { pool } from './pool.js'


export async function logIn(log) {
    try {
        const [result] = await pool.query(`SELECT * FROM user WHERE username = ?`, [log.username])
        if (result.length >= 1) {
            const pwd_match = await bcrypt.compare(log.password, result[0].password_hash);
            if (pwd_match) {
                const token = jwt.sign({ userId: result[0].id }, 'bV7Bn^TmEgZ!xQ2c@L#J9W4mKpA&d3G8', { expiresIn: '24h' });
                return { success: true, token };
            }
        }
        return { success: false };
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}

export async function register(reg) {
    try {
        const [result] = await pool.query(`SELECT * FROM user WHERE username = ?`,[reg.username])
        if (result.length < 1) {
            const password = await bcrypt.hash(reg.password, await bcrypt.genSalt(10))
            const [newResult] = await pool.query(`INSERT INTO user (full_name, username, email_address, password_hash) VALUES( ?, ?, ?, ? ) `,[ reg.name, reg.username, reg.email, password ])
            const [result] = await pool.query(`SELECT * FROM user WHERE username = ?`, [reg.username])
            const token = jwt.sign({ userId: result[0].id }, 'bV7Bn^TmEgZ!xQ2c@L#J9W4mKpA&d3G8', { expiresIn: '24h' });
            return { success: true, token };
        }
        return { success : false }
    } catch(error) {
        console.log(error);
        return { success: false }
    }
}