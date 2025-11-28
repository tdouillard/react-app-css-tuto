// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import MatchMediaMock from 'jest-matchmedia-mock';

// Initialize matchMedia mock
let matchMedia;

beforeAll(() => {
  matchMedia = new MatchMediaMock();
});

afterEach(() => {
  matchMedia.clear();
});

// Mock ResizeObserver for Ant Design components
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock scrollTo for Ant Design components
window.scrollTo = jest.fn();
