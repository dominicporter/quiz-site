const pingHandler = require('./ping-handler');

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

describe('PingHandler', () => {
    it('returns the correct json', () => {
        const res = mockResponse();
        pingHandler({}, res)
        expect(res.json).toHaveBeenCalledWith({pong:true});
    });
});