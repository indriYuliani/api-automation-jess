const request = require('supertest');
const API_CONFIG = require('../app');
const { Base_Url, Admin_Token } = API_CONFIG;

describe('Applicant Detail (Positif Case)', () => {
  it('should successfully get applicant detail', async () => {
    const response = await request(Base_Url)
      .get('applicant/list/job/1a4adbe8-ae20-4703-80b9-4fcfa5f44938')
      .set('Authorization', `Bearer ${Admin_Token}`);

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
});

describe('Applicant Detail (Negative Case)', () => {
  it('should return 401 Unauthorized for invalid access token', async () => {
    const INVALID_TOKEN = 'invalid_token_here';

    const response = await request(Base_Url)
      .get('applicant/list/job/1a4adbe8-ae20-4703-80b9-4fcfa5f44938')
      .set('Authorization', `Bearer ${Invalid_Token}`);

    console.log(response.body);
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Authentication failure');
  });
});