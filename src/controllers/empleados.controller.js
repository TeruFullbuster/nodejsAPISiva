import {pool} from '../db.js'


export const getEmpleados  = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM usuariosiva')
            res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal'
        })
    }
}

export const getEmpleado  = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM usuariosiva WHERE id = ?', [req.params.id])
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

export const createEmpleados = async (req, res) => {
    const {nombre,apellidoP,apellidoM,celular,correo,contrasenia,rol,empresa,tienePrestamos,salario,insession} = req.body
    try {
    const [rows] = await pool.query('INSERT INTO usuariosiva (nombre,apellidoP,apellidoM,celular,correo,contrasenia,rol,empresa,tienePrestamos,salario,insession) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [nombre,apellidoP,apellidoM,celular,correo,contrasenia,rol,empresa,tienePrestamos,salario,insession])
    console.log(rows) 
    res.send({
        id: rows.insertId,
        nombre,
        apellidoP,
        apellidoM,
        celular,
        correo,
        contrasenia,
        rol,
        empresa,
        tienePrestamos,
        salario,
        insession,
    })
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal'
            
        })
    }
    
}

export const deleteEmpleados = async (req, res) => {
    try {
    const [result] = await pool.query('DELETE FROM usuariosiva WHERE id_usuario = ?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Empleado no encontrado'
    })
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal'
        })
    }
}


export const putEmpleados = async(req, res) => {
    const {id} = req.params
    const {nombre, salario} = req.body

    try {    
    const [result] = await pool.query('UPDATE usuariosiva SET nombre = ?, salario = ? WHERE id = ?', [nombre, salario, id])
    console.log(result)

    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Empleado no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM usuariosiva WHERE id_usuario = ?',[id])
    
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal'
        })
    }
}

export const inicioSession  = async (req, res) => {
    const {correo, contrasenia} = req.body
    try {
    const [rows] = await pool.query('SELECT * FROM usuariosiva WHERE correo = ?', [correo])
    if (rows.length <= 0) return res.status(401).json({
        message: 'Usuario no encontrado'
    })
    
    //console.log(rows[0]['correo'])
    //console.log(rows[0]['contrasenia']) //Si da el correo
    const mail = (rows[0]['correo'])
    const pass = (rows[0]['contrasenia'])

    if(mail === correo && pass === contrasenia){
       
        res.status(210).json(rows)
            //console.log(rows)
        
    }else{ 
        return res.status(401).json({
            message: 'Error de credenciales'
        })   
    }
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal'
        })
    } 
}