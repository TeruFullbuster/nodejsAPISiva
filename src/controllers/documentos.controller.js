import {pool} from '../db.js'

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "pongo" as result')
     res.json(result[0])
 }

export const getDocumento  = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM ExpedienteAzul WHERE id_usuario = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
        message: 'Empleado no encontrado'
    })
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal al usar id'
        })
    } 
}