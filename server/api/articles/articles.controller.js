/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/articless              ->  index
 * POST    /api/articless              ->  create
 * GET     /api/articless/:id          ->  show
 * PUT     /api/articless/:id          ->  update
 * DELETE  /api/articless/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Articles from './articles.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Articless
export function index(req, res) {
  Articles.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Articles from the DB
export function show(req, res) {
  Articles.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Articles in the DB
export function create(req, res) {
  Articles.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Articles in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Articles.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Articles from the DB
export function destroy(req, res) {
  Articles.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
