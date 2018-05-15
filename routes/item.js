const express = require('express');
const passport = require('passport');
const Items = require('../models/items');

const router = express.Router();

// get all tweets
router.get('/', async (req, res) => {
  try {
    const items = await Items.find({});
    return res.json({ items, error: null, success: true })
  } catch (err) {
    return res.json({ error: err, success: false })
  }
});

// accept post tweet with token
router.post('/', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
    const item = new Items({ ...req.body, owner: req.user._id });
    const doc = await item.save();
    // save the tweet id to user profile
    req.user.items.push(doc._id);
    await req.user.save();

    return res.json({ item: doc, error: null, success: true });
  } catch (err) {
    return res.json({ error: err, success: false })
  }
});

// accept post tweet with token
router.delete('/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
    const doc = await Items.findById(req.params.id);
    if(String(doc.owner) === String(req.user._id)) {
      await Items.remove({ _id: req.params.id })
      return res.json({ error: null, success: true });
    } else {
      return res.json({ error: { message: 'Can only delete your tweet' }, success: false })
    }
  } catch (err) {
    res.json({ error: err, success: false })
  }
});

module.exports = router;