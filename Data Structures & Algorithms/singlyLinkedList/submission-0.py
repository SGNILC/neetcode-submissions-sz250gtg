class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    
    def __init__(self):
        self.head = Node(-1)
        self.tail = self.head
    
    def get(self, index: int) -> int:
        curr = self.head.next
        i = 0 # the index of the first node

        while curr: # while not null
            if i == index: # check if index is same as i
                return curr.val
            curr = curr.next # continue to next node
            i += 1
        return -1
        
    '''
        funcion: inserts node at the head
        @returns: Nothing
    '''
    def insertHead(self, val: int) -> None:
        newNode = Node(val)
        newNode.next = self.head.next
        self.head.next = newNode

        # makes the new_node a tail if the list was empty beforehand
        if self.tail == self.head:
            self.tail = newNode
             

    '''
        funcion: inserts node at the tail by traversing the nodes until 
        the last node is reached. Once reached, it will take the value of the node
        @returns: Nothing
    '''
    def insertTail(self, val: int) -> None:
        self.tail.next = Node(val)
        self.tail = self.tail.next

    '''
        funcion: removed a node at the ith index. Traverses nodes until the node before the 
        ith node is reached. Then, it points that current node to the node after the ith node.
        @returns: bool
            - True: if the procedure is complete
            - False: if the index is out of bounds
    '''
    def remove(self, index: int) -> bool:
        curr = self.head
        i = 0

        # traverses nodes and ensures we remain in bounds
        while i < index and curr:
            i += 1
            curr = curr.next
        
        # we reach the index after this point

        # 
        if curr and curr.next:
            if curr.next == self.tail:
                self.tail = curr
            curr.next = curr.next.next
            return True
        return False
        
        
    '''
        @return: an array of values in the LL ordered from head-to-tail
    '''
    def getValues(self) -> List[int]:
        output = []
        curr = self.head.next

        while curr:
            output.append(curr.val)
            curr = curr.next 
        
        return output
        
