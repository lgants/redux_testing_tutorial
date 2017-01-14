import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group together similiar tests
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // use 'it' to test a single attribute of a target
  it('shows a comment box', () => {
    // use 'expect' to make an 'assertion' about a target
    expect(component.find('.comment-box')).to.exist;
  });

});
