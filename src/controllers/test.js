'use strict'
var express = require('express');
var app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const db = require('../db/db');

module.exports = {
  async create(req, res) {
    // console.log('vu here')
    try {
      let sql = 'INSERT INTO test (test) VALUES ($1)';
      await db.query(sql, [req.body.test], (err, result) => {
        if (err) {
          return res.status(400).send({
            msg: err
          })
        }
        res.json({ message: 'Insert Successfully!' })
      })
    } catch (err) {
      res.status(500).send({
        msg: 'Server error!',
        error: err,
      })
    }
  }
}