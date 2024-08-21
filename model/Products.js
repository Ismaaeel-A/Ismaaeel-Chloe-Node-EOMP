import { connection as db } from "../config/index.js"

class Products {
    getProducts(req, res) {
        try {
            const strQry = `SELECT prodID, prodName, prodDescription, prodIngredients, quantity, amount, Category, prodUrl FROM Products;`

            db.query(strQry, (err, results) => {
                if (err) throw new Error(`Could not fetch products at this time.`)
                    res.json({
                        status: res.statusCode,
                        results
                })
            })

        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    getProduct(req, res) {
        try {
            const strQry = `SELECT prodID, prodName, prodDescription, prodIngredients, quantity, amount, Category, prodUrl FROM Products WHERE prodID = ${req.params.id};`

            db.query(strQry, (err, result) => {
                if (err) throw new Error(`Unable to fetch Product`);
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    addProduct(req, res) {
        try {
            const strQry = `INSERT INTO Products SET ?;`

            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Unable to add product at this time.')
                res.json({
                    status: res.statusCode,
                    msg: 'Product added successfully.'
                })
            })

        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    editProduct(req, res) {
        try {
            let data = req.body

            const strQry = `UPDATE Products SET ? WHERE prodID = ${req.params.id};`

            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Product update failed.')
                res.json({
                    status: res.statusCode,
                    msg: 'Product successfully updated'
                })
            })

        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    deleteProduct(req, res) {
        try {
            const strQry = `DELETE FROM Products WHERE prodID = ${req.params.id};`

            db.query(strQry, (err) => {
                if (err) throw new Error('Failed to delete item.')
                res.json({
                    status: res.statusCode,
                    msg: "The product has been deleted."
                })
            })
        } catch (error) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
}

export {
    Products
}