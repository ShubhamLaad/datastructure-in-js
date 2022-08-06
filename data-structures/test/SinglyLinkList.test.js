import { SinglyLinkedList } from './SinglyLinkList.js'

const singlyLinkedList = new SinglyLinkedList();

test('test', () => {
  singlyLinkedList.push(20)
  expect(singlyLinkedList.print()).toBe([20])
})
