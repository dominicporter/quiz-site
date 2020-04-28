const questionsHandler = require('./questions-handler');

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

describe('QuestionsHandler', () => {
    it('returns a list of questions', () => {
        const res = mockResponse();

        questionsHandler({}, res);

        const response = res.json.mock.calls[0][0];
        expect(response.length).toBe(3);
        expect(response[0].question).toMatch(/bungie jump/)
    });
    it('doesnt send answers', () => {
        const res = mockResponse();

        questionsHandler({}, res);

        const response = res.json.mock.calls[0][0];
        expect(response.some(q=>q.answer)).toBeFalsy();
    });
});