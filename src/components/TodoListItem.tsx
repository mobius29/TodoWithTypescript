import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md'
import styled from 'styled-components'

const Item = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }

  & + & {
    border-top: 1px solid #dee2e6;
  }
`

const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;

  &.checked {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`

const TodoListItem: React.FC = () => {
  return (
    <Item>
      <Checkbox>
        <MdCheckBoxOutlineBlank />
        <Text>할 일</Text>
      </Checkbox>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </Item>
  )
}

export default TodoListItem
