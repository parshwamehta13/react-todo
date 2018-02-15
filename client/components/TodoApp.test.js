import React, { PropTypes } from "react";
import { shallow } from "enzyme";
import TodoApp from "./TodoApp.jsx";
import Title from "./todoApp/Title.jsx";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15.4";
import TodoForm from "./todoApp/TodoForm";
import TodoList from "./todoApp/TodoList";

Enzyme.configure({ adapter: new Adapter() });

describe("<TodoApp />", () => {
  it("should render one <Title>", () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper.find(Title).length).toBe(1);
  });

  it("should render one <TodoForm>", () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper.find(TodoForm).length).toBe(1);
  });
});
