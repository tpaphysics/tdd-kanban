<div align="center">
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />

<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="vite"/>

<img src="https://img.shields.io/badge/Vitest-729B1B?style=for-the-badge&logo=vitest&logoColor=FFD62E" alt="vitest"/>

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"  alt="React" />

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
<img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" alt="Chakra-ui" />
</div>
<br/>
<br/>

## **💻 Project**

<p align="center">
<img src="./public/app1.gif" alt="desktop-app" width="800px"/>
</p>

<p align="center">
<img src="./public/app2.gif" alt="desktop2-app" width="800px"/>
</p>

<p align="center">
<img src="./public/app3.gif" alt="desktop3-app" width="800px"/>
</p>

<p align="center">
<img src="./public/app4.gif" alt="desktop4-app" width="800px"/>
</p>

This **tdd Kanban** project was developed as an exercise to develop TDD architecture skills in frontend development. The layout in figma is [here](https://www.figma.com/file/a1Bwfmkw5w2BOdsV4PIeDy/Kanban-Board?node-id=0%3A1). We created a design pattern with the following structure:

<p align="center">
<img src="./public/struct.png" alt="tree"/>
</p>

Each component that has react state has a hook folder to separate the business rules from the TSX component. That way, we were able to test hooks with [React Testing Library](https://react-hooks-testing-library.com/):

**_📝 index.tsx_**

```tsx
function EditableCard({ card, cardIndex }: EditableCardsProps) {
  const {
    column,
    list,
    preTask,
    finished,
    handleClickTag,
    handleEditTask,
    handleClickCheck,
    handleClickCloseEdit,
    handleRemoveCard,
  } = useEditableCard(card);

  return (
    <Draggable
      draggableId={`{"columnId":"${column.id}","cardId":"${card.id}"}`}
      key={`draggable-card-${card.id}`}
      index={cardIndex}
    >
      {(provided) => (
        <Box
          data-testid={`card-${card.id}`}
          display='flex'
          flexDir='column'
          justifyContent='space-between'
          padding='15px'
          borderRadius='5px'
          boxShadow='0px 2px 4px rgba(0, 0, 0, 0.25)'
          bg='WHITE'
          w='275px'
          h='90px'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Flex alignItems={'center'} justifyContent='space-between'>
            <Editable
              data-testid={`editable-${card.id}`}
              value={preTask}
              fontWeight='500'
              fontSize='16px'
              lineHeight='21px'
              variant='none'
              w='100%'
              isPreviewFocusable={false}
            >
              <Flex>
                <EditablePreview
                  cursor='pointer'
                  fontFamily='Pacifico'
                  fontSize='18px'
                  fontStyle='revert-layer'
                  fontWeight='400'
                  color='blackAlpha.700'
                  w='100%'
                />

                <Input
                  data-testid={`input-${card.id}`}
                  fontWeight='500'
                  fontSize='16px'
                  lineHeight='21px'
                  as={EditableInput}
                  borderRadius='5px'
                  focusBorderColor={list.bgList}
                  onChange={handleEditTask}
                  value={preTask}
                  px='2px'
                  h='28px'
                />
                <EditableControls
                  card={card}
                  handleRemoveCard={handleRemoveCard}
                  handleClickCheck={handleClickCheck}
                  handleClickCloseEdit={handleClickCloseEdit}
                />
              </Flex>
            </Editable>
          </Flex>
          <Flex alignItems='center' justifyContent='space-between'>
            <Text onClick={handleClickTag} cursor='pointer' data-testid={`tag-${card.id}`}>
              <Tag
                size={'sm'}
                variant='solid'
                bg={list.bgList}
                fontStyle='italic'
                _hover={{ opacity: '0.8', transitionDuration: '0.3s' }}
              >
                <TagLeftIcon as={finished ? GiSupersonicArrow : GiRapidshareArrow} />
                <TagLabel fontWeight='700' fontSize='12px' color='WHITE'>
                  {card.tag}
                </TagLabel>
              </Tag>
            </Text>
            {finished && (
              <Flex color={'green.400'} alignItems='center' fontStyle='italic'>
                <Icon as={BsCheckCircle} w='10px' h='12px' />
                <Text ml='2px' fontSize='10px'>
                  Finished
                </Text>
              </Flex>
            )}
          </Flex>
        </Box>
      )}
    </Draggable>
  );
}

export default EditableCard;
```

**_useEditableCard.ts_**

```tsx
export const useEditableCard = (initialCard: ICard) => {
  const { column } = useColumn();
  const { list, removeCard } = useList();
  const { handleUpdateTask, handleUpdateFinished } = useKanban();

  const [finished, setFinished] = useState(initialCard.finished);
  const [preTask, setPreTask] = useState(initialCard.task);
  const [task, setTask] = useState(initialCard.task);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const handleClickTag = useCallback(() => {
    setFinished(!finished);
    handleUpdateFinished(column, list, initialCard.id, !finished);
  }, [column, finished, handleUpdateFinished, initialCard.id, list]);

  const handleEditTask = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPreTask(event.target.value);
  }, []);

  const handleClickCheck = useCallback(() => {
    const format = formatTask(preTask);
    if (format == '') {
      setTask('Edit task');
      setPreTask('Edit task');
      handleUpdateTask(column, list, initialCard.id, 'EditTask');
    } else {
      setTask(format);
      setPreTask(format);
      handleUpdateTask(column, list, initialCard.id, format);
    }
  }, [column, handleUpdateTask, initialCard.id, list, preTask]);

  const handleClickCloseEdit = useCallback(() => {
    setPreTask(task);
  }, [task]);

  const handleRemoveCard = useCallback(() => {
    removeCard(initialCard.id);
  }, [initialCard.id, removeCard]);

  return {
    column,
    list,
    preTask,
    task,
    setPreTask,
    setTask,
    inputRef,
    finished,
    handleClickTag,
    handleEditTask,
    handleClickCheck,
    handleRemoveCard,
    handleClickCloseEdit,
  };
};
```

**_useEditableCard.test.tsx_**

```tsx
describe('useEditableCard hook test', () => {
  const mockedColumn = columns[0];
  const mockedList = mockedColumn.lists[0];
  const mockedCard = mockedList.cards[0];

  const wrapper = ({ children }: BoxProps) => (
    <KanbanProvider>
      <KanbanColumnProvider initialColumn={mockedColumn}>
        <KanbanListProvider initialList={mockedList}>{children}</KanbanListProvider>
      </KanbanColumnProvider>
    </KanbanProvider>
  );

  const mockedUseList = vi
    .spyOn(useList, 'useList')
    .mockImplementation(
      () => ({ list: mockedList, AddCard: vi.fn(), removedCard: vi.fn() } as any),
    );
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should be false the finished state by default', () => {
    const { result } = renderHook(() => useEditableCard(mockedCard), { wrapper });
    act(() => {
      result.current.finished;
    });
    expect(result.current.finished).toEqual(true);
  });
  it('handleClickTag, should be updateded finished state for true', () => {
    const { result } = renderHook(() => useEditableCard(mockedCard), { wrapper });

    act(() => {
      result.current.handleClickTag();
    });
    expect(result.current.finished).toEqual(false);
  });
  it('handleClickCheck, should contain (...) when click in check button and when mockerLargeTaskValue for bigger than 25', () => {
    const { result } = renderHook(() => useEditableCard(mockedCard), { wrapper });
    const mockedLargeTaskValue = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    act(() => {
      result.current.setPreTask(mockedLargeTaskValue);
    });

    act(() => {
      result.current.handleClickCheck();
    });

    expect(result.current.task.includes('...')).toEqual(true);
  });
  it('handleClickCheck, should be updateded finished value for (Edit task) when input to be empty', () => {
    const { result } = renderHook(() => useEditableCard(mockedCard), { wrapper });

    act(() => {
      result.current.setPreTask('');
    });

    act(() => {
      result.current.handleClickCheck();
    });
    expect(result.current.task).toEqual('Edit task');
  });

  it('handleRemoveCard, should be called the function removeCard', () => {
    const { result } = renderHook(() => useEditableCard(mockedCard), { wrapper });

    act(() => {
      result.current.handleRemoveCard();
    });
    expect(mockedUseList).toBeCalled();
  });
});
```

**_useEditableCard.test.tsx_**

Finally, tests that simulate user actions are performed:

```tsx
describe('EditableCard.tsx test', () => {
  const mockedColumn = columns[0];
  const mockedList = mockedColumn.lists[0];
  const mockedCard = mockedList.cards[0];

  const ContainerTest = () => (
    <KanbanProvider>
      <KanbanColumnProvider initialColumn={mockedColumn}>
        <KanbanListProvider initialList={mockedList}>
          <DragDropContext onDragEnd={console.log}>
            <Droppable droppableId='some_id'>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <EditableCard card={mockedCard} cardIndex={0} />
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </KanbanListProvider>
      </KanbanColumnProvider>
    </KanbanProvider>
  );

  it('Should finished tag not to be in component', () => {
    const { getByText, debug } = render(<ContainerTest />);
    debug();
    expect(getByText('Finished')).toBeInTheDocument();
  });

  it('Should it added finished when click in tag', () => {
    const { getByTestId, getByText } = render(<ContainerTest />);
    fireEvent.click(getByTestId(`tag-${mockedCard.id}`));
    expect(() => getByText('Finished')).toThrow();
  });

  it('Should be possible edit the task', () => {
    const { getByTestId, getByText } = render(<ContainerTest />);
    fireEvent.focus(getByTestId(`editable-${mockedCard.id}`));
    fireEvent.change(getByTestId(`input-${mockedCard.id}`), { target: { value: 'editingTask' } });
    fireEvent.blur(getByTestId(`input-${mockedCard.id}`));

    expect(getByText('editingTask')).toBeInTheDocument();
  });
  it('Should it set the task to (Edit task) when the entry is empty and the enter key is pressed', () => {
    const { getByTestId, getByText } = render(<ContainerTest />);
    fireEvent.click(getByTestId(`edit-icon-${mockedCard.id}`));
    fireEvent.change(getByTestId(`input-${mockedCard.id}`), { target: { value: '' } });
    fireEvent.click(getByTestId(`check-edit-icon-${mockedCard.id}`));

    expect(getByText('Edit task')).toBeInTheDocument();
  });
  it('Should not be edited the card when click on (x) button', () => {
    const { getByTestId, getByText, debug } = render(<ContainerTest />);
    fireEvent.click(getByTestId(`edit-icon-${mockedCard.id}`));
    fireEvent.change(getByTestId(`input-${mockedCard.id}`), { target: { value: 'Click' } });
    fireEvent.click(getByTestId(`close-edit-icon-${mockedCard.id}`));
    debug();
    expect(() => getByText('Click')).toThrow();
  });
});
```

This way we can test each component part separately.

Below is the entire kanban movement logic:

**_onDragEnd function_**

```tsx
const onDragEnd = useCallback(
  (result: DropResult) => {
    const { type, source, destination } = result;

    if (!destination) return;

    const { listId: listSourceId, columnId: columnSourceId } = JSON.parse(source.droppableId);
    const { listId: listDestinationId, columnId: columnDestinationId } = JSON.parse(
      (destination as any).droppableId,
    );

    const listSourceIndex = source.index;
    const listDestinationIndex = destination?.index;

    if (type === 'card' && columnSourceId === columnDestinationId) {
      columns.map((column) => {
        if (column.id === columnSourceId) {
          column.lists.map((list) => {
            if (list.id === listSourceId) {
              list.cards = changePosition(
                list.cards,
                listSourceIndex,
                listDestinationIndex as number,
              );
            }
          });
        }
      });
    }
    if (type === 'card' && source.droppableId != (destination.droppableId as any)) {
      let removedCard: ICard;
      columns.map((column) => {
        if (column.id === columnSourceId) {
          column.lists.map((list) => {
            if (list.id === listSourceId) {
              [removedCard] = list.cards.splice(listSourceIndex, 1);
            }
          });
        }
      });

      columns.map((column) => {
        if (column.id === columnDestinationId) {
          column.lists.map((list) => {
            if (list.id === listDestinationId) {
              list.cards.splice(listDestinationIndex as any, 0, removedCard);
            }
          });
        }
      });
    }
    if (type === 'list' && columnSourceId === columnDestinationId) {
      columns.map((column) => {
        if (column.id === columnSourceId) {
          column.lists = changePosition(column.lists, listSourceIndex, listDestinationIndex as any);
        }
      });
    }
    if (type === 'list' && columnSourceId !== columnDestinationId) {
      let removedList: IList;
      columns.map((column) => {
        if (column.id === columnSourceId) {
          [removedList] = column.lists.splice(listSourceIndex, 1);
        }
      });

      columns.map((column) => {
        if (column.id === columnDestinationId) {
          column.lists.splice(listDestinationIndex as any, 0, removedList);
        }
      });
    }
  },
  [columns],
);
```

## **💥 Considerations**

Frontend tests help to standardize and minimize errors, user experience. It facilitates group work between development teams and contributes to a scalable and quality final solution.

## Get Started

```bash
yarn && yarn vite
```

## 🛠️ Test

```bash
yarn test
```

## **👨‍🚀 Author**

<a href="https://github.com/tpaphysics">
<img alt="Thiago Pacheco" src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/46402647?v=4?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="100px"/>
  <br />
  <sub>
    <b>Thiago Pacheco de Andrade</b>
  </sub>
</a>
<br />

👋 My contacts!

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-pacheco-200a1a86/)](https://www.linkedin.com/in/thiago-pacheco-200a1a86/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:physics.posgrad.@gmail.com)](mailto:physics.posgrad.@gmail.com)
