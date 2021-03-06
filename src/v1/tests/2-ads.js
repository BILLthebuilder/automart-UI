/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import chai from 'chai';
import asserttype from 'chai-asserttype';
import 'chai/register-expect';
import chaihttp from 'chai-http';
import app from '../../../app';

chai.use(chaihttp);
chai.use(asserttype);

describe('Advertisements', () => {
    const ad = {
        Data: {
            id: 1,
            owner: 'John',
            email: 'email@email.com',
            createdOn: '01/01/2019',
            manufacturer: 'Toyota',
            model: '80100',
            price: 4.598,
            state: 'new/used',
            status: 'avalable/sold'
        }
    };
    it('A user Should be able to create a car sale ad', done => {
        chai.request(app)
            .post('/api/v1/car/')
            .send(ad)
            .end((err, res) => {
                expect(res.body)
                    .to.have.a.status(400)
                    .and.to.be.an('object');
                // expect(res.body.Data).to.have.a.property('id');
                // expect(res.body.Data)
                //     .to.have.a.property('owner')
                //     .and.to.be.a('string');
                // expect(res.body.Data)
                //     .to.have.a.property('email')
                //     .and.to.be.a('string');
                // expect(res.body.Data)
                //     .to.have.a.property('createdOn')
                //     .and.to.be.a('string');
                // expect(res.body.Data)
                //     .to.have.a.property('manufacturer')
                //     .and.to.be.a('string');
                // expect(res.body.Data)
                //     .to.have.a.property('model')
                //     .and.to.be.a('string');
                // expect(res.body.Data)
                //     .to.have.a.property('price')
                //     .and.to.be.a('number');
                // expect(res.body.Data)
                //     .to.have.a.property('state')
                //     .and.to.be.a('string');
                // expect(res.body.Data)
                //     .to.have.a.property('status')
                //     .and.to.be.a('string');
                done();
            });
    });
    it('A user should be able to view all posted ads', done => {
        chai.request(app)
            .get('/api/v1/cars/')
            .end((err, res) => {
                expect(res.body)
                    .to.have.a.status(200)
                    .and.to.be.an('object');
                expect(res.body.Data).to.be.an('array');
                done();
            });
    });
    it('A user should be able to view a specific car ad', done => {
        chai.request(app)
            .get('/api/v1/car/:id')
            .end((err, res) => {
                expect(res.body).to.have.a.status(200);
            });
        done();
    });
    it('A user should be able to delete a specific car ad', done => {
        chai.request(app)
            .delete('/api/v1/car/:id')
            .end((err, res) => {
                expect(res).to.have.a.status(200);
                expect(res.body).to.be.an('object');
            });
        done();
    });
});
