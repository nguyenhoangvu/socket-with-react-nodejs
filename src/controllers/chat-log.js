'use strict'
var express = require('express');
const { get } = require('http');
var app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const db = require('../db/db');

module.exports = {
  async create(req, res) {
    try {
      let sql = 'INSERT INTO chat (room_id, message) VALUES ($1,$2)';
      await db.query(sql, [req.body.room_id, req.body.message], (err, result) => {
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
  },
  async get(req, res) {
    try {
      let sql = 'SELECT message FROM chat WHERE room_id = $1';
      await db.query(sql, [req.params.room_id], (err, result) => {
        if (err) {
          return res.status(400).send({
            msg: err
          })
        }
        res.json(result.rows);
      })
    } catch (err) {
      res.status(500).send({
        msg: 'Server error!',
        error: err,
      })
    }
  }
}
