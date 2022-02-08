const router = require('express').Router();
const { User } = require('../models');
const checkAuth = require('../utils/auth'); 