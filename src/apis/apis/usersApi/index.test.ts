import UsersApi from '.';

const mockedClient = {
  request: jest.fn(),
  get: jest.fn(),
  delete: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  getHeader: jest.fn(),
  setHeader: jest.fn(),
};
const mockedSignupRequestBody = { userId: 'id', password: 'password' };
const mockedSignupResponseBody = {
  idx: 0,
  createdAt: '0000-00-00',
  updatedAt: '0000-00-00',
};

describe('UsersApi.signup() 메서드 테스트', () => {
  it('요청 성공 시 Response Body를 반환해야 합니다.', async () => {
    const usersApi = new UsersApi(mockedClient, '/api/users');

    mockedClient.post.mockResolvedValueOnce({
      data: mockedSignupResponseBody,
      status: 200,
    });

    const response = await usersApi.signup(mockedSignupRequestBody);
    expect(response).toBe(mockedSignupResponseBody);
  });
});
